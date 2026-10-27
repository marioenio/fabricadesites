import {test} from 'node:test';
import assert from 'node:assert/strict';
import {hubEpisodes,searchHub} from './hub-data.ts';
test('episode and article routes have unique IDs and five readings each',()=>{const ids=hubEpisodes.flatMap(e=>[e.id,...e.articles.map(a=>a.id)]);assert.equal(new Set(ids).size,ids.length);assert.ok(hubEpisodes.every(e=>e.articles.length===5&&e.articles.every(a=>a.sections.length===3)))});
test('catalog searches guests and article topics and respects filters',()=>{assert.equal(searchHub('Filipe','Tudo')[0]?.id,'vendas-no-digital');assert.equal(searchHub('marketing','Marketing').length,1);assert.equal(searchHub('inexistente','Tudo').length,0);assert.equal(searchHub('','Tudo').length,2)});
