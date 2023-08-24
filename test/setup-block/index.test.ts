import * as fs from 'node:fs';
import path from 'node:path';
import { parse, analyzeTemplate, analyzeSetupScript } from '@/index';

import {graph as graphRes} from './TestComponent.graph';
import {nodes as nodesRes} from './TestComponent.nodes';

describe('test analyze', () => {
  const source = fs.readFileSync(path.resolve(__dirname, './TestComponent.vue'), 'utf-8');
  const sfc = parse(source);
  it('test analyze setup script', () => {
    const graph = analyzeSetupScript(sfc.descriptor.scriptSetup?.content!);
    expect(graph).toEqual(graphRes);
  });
  it('test analyze template', () => {
    const nodes = analyzeTemplate(sfc.descriptor.template!.content);
    expect(nodes).toEqual(nodesRes);
  });
});