import fs from 'node:fs';

const d=JSON.parse(fs.readFileSync(new URL('../app/data.json', import.meta.url),'utf8'));
const ids=new Set(d.nodes.map(n=>n.id));
const errors=[];
for(const n of d.nodes){if(!n.id||!n.name)errors.push(`node missing id/name: ${JSON.stringify(n)}`)}
for(const e of d.edges){if(!ids.has(e.from))errors.push(`edge source missing: ${e.from}`);if(!ids.has(e.to))errors.push(`edge target missing: ${e.to}`);if(!['requires','enables','alternative_support'].includes(e.type))errors.push(`invalid edge type: ${e.type}`);if(!['high','medium','low'].includes(e.confidence))errors.push(`invalid confidence: ${e.confidence}`);if(!e.claim)errors.push(`edge missing claim: ${e.from}->${e.to}`)}
const root='smartphone';
const incoming=new Map();for(const e of d.edges){if(!incoming.has(e.to))incoming.set(e.to,[]);incoming.get(e.to).push(e)}
const seen=new Set([root]),q=[root];while(q.length){const id=q.shift();for(const e of incoming.get(id)||[]){if(['requires','enables'].includes(e.type)&&!seen.has(e.from)){seen.add(e.from);q.push(e.from)}}}
if(!seen.has('transistor'))errors.push('smartphone dependency path does not reach transistor');
if(!seen.has('mining'))errors.push('smartphone dependency path does not reach mining');
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(`OK: ${d.nodes.length} nodes, ${d.edges.length} edges, ${seen.size} reachable dependencies from smartphone.`);
