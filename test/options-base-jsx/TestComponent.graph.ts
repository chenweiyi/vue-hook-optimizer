import type { TypedNode } from '@/analyze/utils';
import { NodeType } from '@/analyze/utils';

const edges = new Map<TypedNode, Set<TypedNode>>();

const number: TypedNode = { label: 'number', type: NodeType.var, info: { line: 11, column: 8 } };
const count: TypedNode = { label: 'count', type: NodeType.var, info: { line: 15, column: 6, used: new Set(['provide']) } };
const plus: TypedNode = { label: 'plus', type: NodeType.fun, info: { line: 20, column: 6 } };
const add: TypedNode = { label: 'add', type: NodeType.fun, info: { line: 24, column: 6 } };

edges.set(number, new Set([]));
edges.set(count, new Set([]));
edges.set(plus, new Set([plus]));
edges.set(add, new Set([number, add]));

export const graph = {
  nodes: new Set([number, count, plus, add]),
  edges,
};
