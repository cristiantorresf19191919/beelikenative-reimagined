const assert=require('node:assert/strict');
const fs=require('node:fs');
const ts=require('typescript');
const vm=require('node:vm');
const ctx={exports:{}};
vm.runInNewContext(ts.transpileModule(fs.readFileSync('app/assessment-data.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,ctx);
const {questions,assess}=ctx.exports;
const answers=Object.fromEntries(questions.map((q,i)=>[i,q.answer]));
assert.equal(assess(answers).level,'C1');assert.equal(assess(answers).total,20);assert.equal(assess(answers).path,'private');
assert.equal(assess({}).level,'Pre-A1 / A1');
for(let band=0;band<5;band++){
 const partial=Object.fromEntries(questions.map((q,i)=>[i,i<4*(band+1)?q.answer:null]));
 assert.equal(assess(partial).level,['A1','A2','B1','B2','C1'][band]);
 assert.equal(assess(partial).path,['starter','bridge','private','private','private'][band]);
}
const gap={...answers,4:null,5:null};assert.equal(assess(gap).level,'A1');
const threshold={...answers,0:null};assert.equal(assess(threshold).level,'C1');threshold[1]=null;assert.equal(assess(threshold).level,'Pre-A1 / A1');
assert.equal(assess(answers).skills.reduce((sum,s)=>sum+s.total,0),20);
const messages=JSON.parse(fs.readFileSync('app/i18n/messages.json'));
assert.equal(Object.keys(messages).length,10);
for(const [lang,dict] of Object.entries(messages)){assert.deepEqual(Object.keys(dict),Object.keys(messages.en));for(const value of Object.values(dict))assert.ok(value.trim(),lang)}
console.log('PASS: scoring boundaries, prerequisite gaps, recommendations, skill totals, and all 10 translation catalogs.');
