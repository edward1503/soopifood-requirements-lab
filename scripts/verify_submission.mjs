import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { parse as parseYaml } from 'yaml';
import { generateMessages } from '@cucumber/gherkin';
import { IdGenerator, SourceMediaType } from '@cucumber/messages';

const root = path.resolve(import.meta.dirname, '..');
const read = relative => fs.readFileSync(path.join(root, relative), 'utf8');
const write = (relative, data) => fs.writeFileSync(path.join(root, relative), data);
const results = [];
function check(name, action) {
  try { const detail = action(); results.push({ name, status: 'PASS', detail: detail ?? '' }); }
  catch (error) { results.push({ name, status: 'FAIL', detail: error.message }); }
}
const cells = line => line.trim().slice(1, -1).split('|').map(cell => cell.trim());
const tableRows = text => text.split(/\r?\n/).filter(line => /^\|/.test(line)).map(cells);
const numbered = (prefix, count) => Array.from({ length: count }, (_, i) => `${prefix}-${String(i + 1).padStart(2, '0')}`);
function exactIds(actual, expected) {
  assert.equal(new Set(actual).size, actual.length, 'Duplicate IDs');
  assert.deepEqual([...actual].sort(), [...expected].sort());
}
function section(text, heading) {
  const start = text.indexOf(`## ${heading}\n`);
  assert.ok(start >= 0, `Missing section: ${heading}`);
  return text.slice(start + heading.length + 4).split(/^## /m)[0];
}
const hash = data => crypto.createHash('sha256').update(data).digest('hex');
const frText = read('workspace/functional_requirements.md');
const nfrText = read('workspace/non_functional_requirements.md');
const frRows = tableRows(frText).filter(row => /^FR-\d+$/.test(row[0]));
const nfrRows = tableRows(nfrText).filter(row => /^NFR-\d+$/.test(row[0]));
const frIds = numbered('FR', 24);
const nfrIds = numbered('NFR', 12);
const backlog = parseYaml(read('starter/backlog.yaml'));
const requests = parseYaml(read('starter/change_requests.yaml'));
const sourceItems = new Map([...backlog.stories, ...requests.requests].map(item => [item.id, item]));
const backlogText = read('workspace/epics_stories.md');
const stories = backlogText.split(/^#### /m).slice(1).map(chunk => {
  const body = chunk.split(/^#{2,3} /m)[0];
  const id = body.match(/^(BL-\d+)/)?.[1];
  const coverage = body.match(/^\*\*Covers:\*\* (.+)$/m)?.[1] ?? '';
  return { id, body, coverage: [...coverage.matchAll(/\b(?:NFR|FR)-\d+/g)].map(m => m[0]),
    criteria: body.split(/\r?\n/).filter(line => line.startsWith('- Given ')) };
});

check('Required output files exist', () => {
  const required = ['interview_guide_v1.md','interview_guide_v2.md','interview_guide_review.md',
    'research_notes.md','personas_v1.md','personas_review.md','personas_v2.md',
    'user_stories_v1.md','prototype_storyboard.md','walkthrough_notes.md',
    'functional_requirements_v1.md','requirements_review.md','functional_requirements.md',
    'stakeholder_clarifications.md','non_functional_requirements_v1.md',
    'non_functional_requirements_review.md','non_functional_requirements.md',
    'epics_stories_v1.md','backlog_review.md','epics_stories.md','verification_plan.md',
    'moscow_round1.md','moscow_review.md','moscow.md','scope_changes.md','scope_changes_review.md',
    'discount.feature','review.md','discount_v2.feature','acceptance_criteria_check.md',
    'dod_audit.md','dod_review.md','sample_comparison.md','activity_log.md','submission_summary.md'];
  for (const name of required) assert.ok(fs.statSync(path.join(root, 'workspace', name)).size > 0, name);
  return `${required.length} non-empty activity outputs`;
});
check('Interview guide structure', () => {
  for (const file of ['interview_guide_v1.md', 'interview_guide_v2.md']) {
    const text = read(`workspace/${file}`);
    assert.equal((text.match(/^\*\*\d+\./gm) ?? []).length, 10);
    assert.equal((text.match(/^- /gm) ?? []).length, 20);
    assert.equal((text.match(/^## /gm) ?? []).length, 6);
  }
  return '10 questions, 20 optional probes, 6 sections in each guide';
});
check('Simulated research and walkthrough source identifiers', () => {
  const notes = read('workspace/research_notes.md');
  exactIds([...notes.matchAll(/^## (I\d+) —/gm)].map(m => m[1]), Array.from({length:8}, (_,i)=>`I${i+1}`));
  exactIds([...notes.matchAll(/^## (O\d+) —/gm)].map(m => m[1]), ['O1','O2']);
  assert.equal((notes.match(/^- \*\*Q\d+ —/gm) ?? []).length, 80);
  assert.match(notes, /SIMULATED TUTORIAL DATA/);
  const walks = read('workspace/walkthrough_notes.md');
  exactIds([...walks.matchAll(/^## (W\d+) —/gm)].map(m=>m[1]), ['W1','W2','W3','W4']);
  for (let w=1;w<=4;w++) for (let n=1;n<=6;n++) assert.ok(walks.includes(`**W${w}.${n}:**`));
  return '8 interviews, 2 observations, 80 interview entries, 4 walkthroughs';
});
check('Revised persona structure and source tags', () => {
  const text = read('workspace/personas_v2.md');
  assert.match(text, /SIMULATED TUTORIAL DATA/);
  assert.equal((text.match(/^## \d+\./gm) ?? []).length, 3);
  const blocks = text.split(/^### /m).slice(1);
  assert.equal(blocks.length, 12);
  for (const block of blocks) {
    const bullets = block.split(/^## /m)[0].split(/\r?\n/).filter(line=>line.startsWith('- '));
    assert.ok(bullets.length>=3 && bullets.length<=5);
    for (const bullet of bullets) assert.match(bullet, /\[(?:[IO]\d+)(?:, [IO]\d+)*\]$/);
  }
  return '3 personas; 4 sections each; all 48 bullets source-tagged';
});
check('Functional requirements: IDs, source references and behaviour form', () => {
  exactIds(frRows.map(row=>row[0]), frIds);
  for (const row of frRows) {
    assert.equal(row.length, 4);
    assert.match(row[1], /^The system shall /);
    assert.doesNotMatch(row[1], /\band\b/i, `Joined behaviour: ${row[0]}`);
    assert.match(row[3], /US-\d+/);
    assert.match(row[3], /W[1-4]\.\d/);
    for (const match of row[3].matchAll(/W([1-4])\.(\d+)/g)) {
      assert.ok(Number(match[2])>=1 && Number(match[2])<=6);
    }
  }
  return '24 unique, source-linked atomic FR rows';
});
check('NFR IDs, categories, thresholds, procedures and FR references', () => {
  exactIds(nfrRows.map(row=>row[0]), nfrIds);
  const expected=['Performance','Reliability','Security','Scalability','Usability','Maintainability','Portability','Compliance'];
  assert.deepEqual([...new Set(nfrRows.map(row=>row[1]))].sort(), expected.sort());
  for (const row of nfrRows) {
    assert.equal(row.length, 6);
    assert.match(row[2], /\d|\[TBC/);
    assert.match(row[4], /QV-\d+/);
    for (const id of row[5].match(/FR-\d+/g) ?? []) assert.ok(frIds.includes(id), id);
  }
  const usability=nfrRows.find(row=>row[0]==='NFR-08');
  const tasks=Number(usability[3].match(/(\d+) predefined tasks/)[1]);
  const managers=Number(usability[3].match(/(\d+) representative managers/)[1]);
  const successPercent=Number(usability[2].match(/(\d+)%/)[1]);
  const trialCount=Number(usability[4].match(/all (\d+) task trials/)[1]);
  const successes=Number(usability[4].match(/≥(\d+) successful trials/)[1]);
  assert.equal(trialCount,tasks*managers);
  assert.equal(successes,Math.ceil(trialCount*successPercent/100));
  assert.match(nfrRows.find(row=>row[0]==='NFR-11')[2], /\[TBC/);
  return '12 NFRs, 8 categories; real privacy threshold remains TBC';
});
check('Stories: vertical-role text, criterion count and references', () => {
  exactIds(stories.map(story=>story.id), numbered('BL',10));
  for (const story of stories) {
    assert.match(story.body, /\*\*Story:\*\* As a restaurant manager, I want .+ so that /);
    assert.ok(story.criteria.length>=2 && story.criteria.length<=4, story.id);
    for (const criterion of story.criteria) assert.match(criterion, /^- Given .+, when .+, then .+/i);
    for (const id of story.coverage) assert.ok([...frIds,...nfrIds].includes(id), id);
    for (const id of story.coverage.filter(id=>id.startsWith('NFR'))) {
      assert.ok(story.body.includes(`QV-${id.slice(-2)}`), `${story.id} missing quality procedure for ${id}`);
    }
  }
  assert.doesNotMatch(backlogText, /(?:story points|points|estimate)\s*:\s*\d/i);
  return '10 manager-visible stories, 3–4 criteria each, no point estimates';
});
const owners = Object.fromEntries([...frIds,...nfrIds].map(id=>[id,stories.filter(story=>story.coverage.includes(id)).map(story=>story.id)]));
check('Complete planned requirement coverage', () => {
  for (const [id, storyIds] of Object.entries(owners)) assert.ok(storyIds.length>0, `Uncovered ${id}`);
  return '24/24 FRs and 12/12 NFRs have story owners; execution unclaimed';
});
write('workspace/coverage_matrix.md', '# Part E: Generated planned coverage matrix\n\nGenerated by `npm run verify` from the final requirements and story Covers lines. Coverage is planned work, not passing product evidence.\n\n| Requirement | Story owners |\n|---|---|\n' + Object.entries(owners).map(([id,ids])=>`| ${id} | ${ids.join(', ')} |`).join('\n') + '\n\nUncovered requirements: ' + Object.entries(owners).filter(([,ids])=>!ids.length).map(([id])=>id).join(', ') + (Object.values(owners).every(ids=>ids.length)?'none.':'') + '\n');

function allocation(file, finalSection=false) {
  let text=read(`workspace/${file}`);
  if (finalSection) text=section(text,'Final allocation');
  return tableRows(text).filter(row=>/^(SF|CR)-\d+$/.test(row[0])).map(row=>({id:row[0],title:row[1],points:Number(row[2]),priority:row[3],extra:row[4]}));
}
const rounds=[allocation('moscow_round1.md'),allocation('moscow.md',true),allocation('scope_changes.md',true)];
const categories=['Must','Should','Could',"Won't"];
const totals=rows=>Object.fromEntries(categories.map(category=>[category,rows.filter(row=>row.priority===category).reduce((sum,row)=>sum+row.points,0)]));
const roundTotals=rounds.map(totals);
const planned=total=>total.Must+total.Should+total.Could;
check('Supplied YAML IDs and estimates', () => {
  exactIds(backlog.stories.map(item=>item.id),numbered('SF',15));
  exactIds(requests.requests.map(item=>item.id),numbered('CR',2));
  assert.equal(backlog.capacity,50);
  assert.equal(backlog.stories.reduce((sum,item)=>sum+item.points,0),58);
  return '15 stories / 58 source points, 2 requests, capacity 50';
});
check('Planning allocations preserve titles, estimates and uniqueness', () => {
  for (let i=0;i<rounds.length;i++) {
    exactIds(rounds[i].map(row=>row.id),i===2?[...sourceItems.keys()]:numbered('SF',15));
    let previousPriority=-1;
    for (const row of rounds[i]) {
      assert.equal(row.title,sourceItems.get(row.id).title,row.id);
      assert.equal(row.points,sourceItems.get(row.id).points,row.id);
      const index=categories.indexOf(row.priority);
      assert.ok(index>=previousPriority && index>=0,'Priority order'); previousPriority=index;
    }
    assert.equal(planned(roundTotals[i]),50);
  }
  assert.deepEqual(roundTotals,[{Must:29,Should:10,Could:11,"Won't":8},{Must:32,Should:10,Could:8,"Won't":8},{Must:34,Should:10,Could:6,"Won't":18}]);
  return 'All allocations use exactly 50 points; 29/10/11 → 32/10/8 → 34/10/6';
});
check('Planning summaries match recalculated totals and percentages', () => {
  const first=tableRows(read('workspace/moscow_round1.md'));
  for (const category of categories) {
    const row=first.find(row=>row[0]===category);
    assert.equal(Number(row[1]),roundTotals[0][category]);
    assert.equal(Number(row[2].match(/^\d+/)[0]),roundTotals[0][category]*2);
  }
  for (const [file,oldIndex,newIndex] of [['moscow.md',0,1],['scope_changes.md',1,2]]) {
    const rows=tableRows(section(read(`workspace/${file}`),'New allocation'));
    for (const category of categories) {
      const row=rows.find(row=>row[0]===category);
      assert.equal(row[1],`${roundTotals[oldIndex][category]} -> ${roundTotals[newIndex][category]}`);
      assert.ok(row[2].startsWith(`${roundTotals[oldIndex][category]*2}% -> ${roundTotals[newIndex][category]*2}%`));
    }
  }
  return 'Summary arithmetic and all percentage denominators agree';
});
check('Changed markers, reasons and funded scope', () => {
  for (const row of rounds[0]) assert.ok(row.extra.split(/\s+/).length<=8,row.id);
  for (const [i,file,heading] of [[1,'moscow.md','Changes from round 1'],[2,'scope_changes.md','Changes to the plan']]) {
    const before=new Map(rounds[i-1].map(row=>[row.id,row]));
    const changed=rounds[i].filter(row=>before.get(row.id)?.priority!==row.priority).map(row=>row.id);
    const changeRows=tableRows(section(read(`workspace/${file}`),heading)).filter(row=>/^(SF|CR)-\d+$/.test(row[0]));
    exactIds(changeRows.map(row=>row[0]),changed);
    for (const row of rounds[i]) assert.equal(row.extra,changed.includes(row.id)?'Yes':'No');
    if (i===1) for (const row of changeRows) assert.ok(row[4].split(/\s+/).length<=12,row[0]);
  }
  assert.equal(rounds[2].find(row=>row.id==='CR-01').priority,'Must');
  assert.equal(rounds[2].find(row=>row.id==='CR-02').priority,"Won't");
  assert.equal(rounds[2].find(row=>row.id==='SF-09').priority,"Won't");
  assert.match(read('workspace/scope_changes.md'),/ratio exception/i);
  return 'Changed sets agree; +2 funded by −2; optional +8 deferred; ratio exception explicit';
});
check('Preserved first-round artifacts', () => {
  const manifest=JSON.parse(read('workspace/first_round_manifest.json'));
  for (const [name,expected] of Object.entries(manifest.files)) assert.equal(hash(fs.readFileSync(path.join(root,'workspace',name))),expected,name);
  return 'First-round MoSCoW and feature hashes unchanged';
});
check('Provided course files unchanged', () => {
  const manifest=JSON.parse(read('workspace/input_manifest.json'));
  for (const [name,expected] of Object.entries(manifest.files)) assert.equal(hash(read(name).replace(/\r\n/g,'\n')),expected,name);
  return `${Object.keys(manifest.files).length} supplied files match normalised hashes`;
});

function parseFeature(relative, expectedComments) {
  const text=read(relative);
  const envelopes=generateMessages(text,relative,SourceMediaType.TEXT_X_CUCUMBER_GHERKIN_PLAIN,{includeGherkinDocument:true,includePickles:true,newId:IdGenerator.incrementing()});
  assert.equal(envelopes.filter(item=>item.parseError).length,0,'Gherkin parse error');
  const document=envelopes.find(item=>item.gherkinDocument)?.gherkinDocument;
  assert.ok(document?.feature);
  const scenarios=document.feature.children.filter(child=>child.scenario).map(child=>child.scenario);
  assert.equal(scenarios.length,3);
  assert.equal(envelopes.filter(item=>item.pickle).length,3);
  exactIds(scenarios.flatMap(scenario=>scenario.tags.map(tag=>tag.name)),['@happy','@error','@edge']);
  for (const scenario of scenarios) {
    assert.equal(scenario.tags.length,1);
    assert.ok(scenario.steps.length>=3 && scenario.steps.length<=4);
  }
  const comments=text.split(/\r?\n/).filter(line=>line.trim().startsWith('#'));
  assert.equal(comments.length,expectedComments);
  assert.match(comments[0],/^# assumption:/);
  return document.feature;
}
let revisedFeature;
check('Gherkin syntax and required scenario structure', () => {
  parseFeature('workspace/discount.feature',1);
  revisedFeature=parseFeature('workspace/discount_v2.feature',4);
  for (const rule of ['R1 Minimum order','R2 Cap','R3 Validity']) assert.ok(read('workspace/discount_v2.feature').includes(`# ${rule}`));
  return 'Official Cucumber parser: 2 valid features, 3 scenarios each, one of each tag';
});
function oracle({subtotal,rate,cap,fee,date,validUntil}) {
  if (date>validUntil) return {error:'EXPIRED'};
  if (subtotal<100000n) return {error:'MIN_ORDER_NOT_MET'};
  assert.equal(subtotal*rate%100n,0n,'Unspecified fractional rounding in fixture');
  const raw=subtotal*rate/100n;
  const discount=raw>cap?cap:raw;
  return {discount,total:subtotal-discount+fee};
}
check('Rewritten feature expectations against an integer reference oracle', () => {
  assert.ok(revisedFeature,'Feature parsing must pass first');
  const background=revisedFeature.children.find(child=>child.background).background;
  let checked=0;
  for (const scenario of revisedFeature.children.filter(child=>child.scenario).map(child=>child.scenario)) {
    const fixture={}; const expectations={};
    for (const step of [...background.steps,...scenario.steps]) {
      let m;
      if ((m=step.text.match(/discount rate of (\d+) percent/))) fixture.rate=BigInt(m[1]);
      else if ((m=step.text.match(/discount cap is (\d+) VND/))) fixture.cap=BigInt(m[1]);
      else if ((m=step.text.match(/valid-until date is "([^"]+)"/))) fixture.validUntil=m[1];
      else if ((m=step.text.match(/checkout date is "([^"]+)"/))) fixture.date=m[1];
      else if ((m=step.text.match(/delivery fee is (\d+) VND/))) fixture.fee=BigInt(m[1]);
      else if ((m=step.text.match(/food subtotal is (\d+) VND/))) fixture.subtotal=BigInt(m[1]);
      else if ((m=step.text.match(/^the discount is (\d+) VND/))) expectations.discount=BigInt(m[1]);
      else if ((m=step.text.match(/^the payable total is (\d+) VND/))) expectations.total=BigInt(m[1]);
      else if ((m=step.text.match(/^the error code is "([^"]+)"/))) expectations.error=m[1];
    }
    const actual=oracle(fixture);
    assert.ok(Object.keys(expectations).length>0);
    for (const [key,value] of Object.entries(expectations)) { assert.equal(actual[key],value,scenario.name); checked++; }
  }
  return `${checked} concrete expectations checked; reference model only, no application run`;
});
check('Additional reference-model boundary cross-checks', () => {
  const base={rate:20n,cap:30000n,fee:15000n,date:'2026-11-03',validUntil:'2026-11-03'};
  assert.equal(oracle({...base,subtotal:99999n}).error,'MIN_ORDER_NOT_MET');
  assert.equal(oracle({...base,subtotal:100000n}).total,95000n);
  assert.equal(oracle({...base,subtotal:150000n}).discount,30000n);
  assert.equal(oracle({...base,subtotal:150005n}).total,135005n);
  assert.equal(oracle({...base,subtotal:100000n,date:'2026-11-04'}).error,'EXPIRED');
  return 'Five oracle boundaries; below-minimum remains absent from the mandated feature scenarios';
});
check('DoD evidence quotations and six statuses', () => {
  const audit=read('workspace/dod_audit.md'); const source=read('starter/pr_sf06.md');
  const rows=tableRows(audit).filter(row=>/^D[1-6] /.test(row[0]));
  assert.equal(rows.length,6);
  const statuses=['❌','❓','❌','✅','❌','❌'];
  for (let i=0;i<rows.length;i++) {
    assert.ok(rows[i][1].startsWith(statuses[i]));
    for (const quote of rows[i][2].matchAll(/`([^`]+)`/g)) assert.ok(source.includes(quote[1]),`Quote absent: D${i+1}`);
  }
  const next=tableRows(audit).filter(row=>/^[1-3]$/.test(row[0]));
  assert.equal(next.length,3);
  assert.match(audit,/is not Done/);
  return 'All exact quotes found; D4 met, D2 unknown, four failures, three next-step groups';
});

function filesUnder(relative) {
  return fs.readdirSync(path.join(root,relative),{withFileTypes:true}).flatMap(entry=>
    entry.isDirectory()?filesUnder(`${relative}/${entry.name}`):[`${relative}/${entry.name}`]);
}
check('Generated submission content has no credential-shaped strings', () => {
  const files=['README.md','AI_USAGE.md',...filesUnder('workspace')].filter(name=>/\.(md|json|feature)$/.test(name));
  for (const file of files) assert.doesNotMatch(read(file),/\b(?:ghp_|gho_|github_pat_)[A-Za-z0-9_]{20,}/,`Credential-like value in ${file}`);
  return 'No GitHub-token-shaped strings in submission documents';
});
check('README credits and output links', () => {
  const text=read('README.md');
  assert.match(text,/Nguyễn Đôn Đức/);
  for (const file of ['personas_v2.md','functional_requirements.md','non_functional_requirements.md','epics_stories.md','moscow.md','scope_changes.md','discount_v2.feature','dod_audit.md']) assert.ok(text.includes(`workspace/${file}`));
  return 'Author, description and A–I output links present';
});

// Reports exist before local-link checking, so links to generated artifacts are checked too.
write('workspace/verification_report.md','# Verification report\n\nGeneration in progress.\n');
write('workspace/verification_results.json','{}\n');
check('Local Markdown links resolve', () => {
  const markdown=['README.md','AI_USAGE.md',...filesUnder('workspace'),...filesUnder('starter'),'TUTORIAL.md',...filesUnder('solutions')].filter(name=>name.endsWith('.md'));
  let count=0;
  for (const relative of markdown) for (const match of read(relative).matchAll(/\[[^\]\n]+\]\(([^)]+)\)/g)) {
    const target=match[1].replace(/^<|>$/g,'').split('#')[0];
    if (!target || /^[a-z]+:/i.test(target)) continue;
    assert.ok(fs.existsSync(path.resolve(root,path.dirname(relative),decodeURIComponent(target))),`${relative}: ${target}`); count++;
  }
  return `${count} local Markdown links resolve`;
});
const failed=results.filter(result=>result.status==='FAIL');
const report={status:failed.length?'FAIL':'PASS',scope:'Document, parser, reference-arithmetic and evidence checks only',
  checks:results,summary:{checks:results.length,passed:results.length-failed.length,failed:failed.length,functionalRequirements:frRows.length,
    nonFunctionalRequirements:nfrRows.length,stories:stories.length,plannedPoints:roundTotals.map(planned)},
  productVerification:'NOT RUN — no application or real participant study',
  openDecisions:['Recovery/conflict policy','Reference normalisation and overrides','Exact access/device matrix','Actual privacy/retention approval'],
  featureCoverageGap:'Below-minimum rejection is checked by the reference oracle but not a scenario in the exactly-three-scenario feature'};
write('workspace/verification_results.json',JSON.stringify(report,null,2)+'\n');
write('workspace/verification_report.md',`# Submission verification\n\n**Status: ${report.status} — ${results.length-failed.length}/${results.length} document checks passed.**\n\nRun with \`npm ci\` followed by \`npm run verify\`. Results are reproducible from the tracked inputs and artifacts.\n\n| Check | Status | Detail |\n|---|---|---|\n`+results.map(result=>`| ${result.name} | ${result.status} | ${String(result.detail).replace(/\|/g,'/').replace(/\n/g,' ')} |`).join('\n')+'\n\n## Practical limits\n\nThese checks cover documents, syntax, references, arithmetic and fixture evidence. They do not run a SoopiFood implementation or its Gherkin steps. Product checks in `verification_plan.md` remain unexecuted. Simulated research, assistant reviews, provisional targets and unresolved policy decisions retain those labels. The reference oracle adds a below-minimum check without claiming the feature itself contains that scenario. The supplied PR remains not Done.\n');
for (const result of results) console.log(`${result.status} ${result.name}`);
console.log(`\n${report.status}: ${report.summary.passed}/${report.summary.checks} checks; application verification NOT RUN.`);
if (failed.length) process.exitCode=1;
