import test from 'node:test';
import assert from 'node:assert/strict';
import {compute} from './tool.mjs';
test('sample behavior',()=>{const result=compute({"text": "Build useful things with clean code."});for(const [key,value] of Object.entries({"words": 6, "characters": 36, "unique": 6, "readingMinutes": 0.03}))assert.deepStrictEqual(result[key],value,key)});
