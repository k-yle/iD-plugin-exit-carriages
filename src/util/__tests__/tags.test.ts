import { describe, expect, it } from 'vitest';
import { generateTags, parseTags } from '../tags.js';

describe('parseTags', () => {
  it('can create the initial state', () => {
    expect(parseTags({})).toStrictEqual({
      dir: ':forward',
      otherTags: {},
      rows: [],
    });
  });

  it('creates the state from tags', () => {
    expect(
      parseTags({
        'exit:carriages': 'stairs|no|no|none|lift',
        'destination:ref:carriages': 'none|none|no||a;b',
      }),
    ).toStrictEqual({
      dir: '',
      otherTags: {},
      rows: [
        { dest: [], destRef: [], destSymbol: [], key: 0, type: ['stairs'] },
        { dest: [], destRef: [], destSymbol: [], key: 1, type: [] },
        { dest: [], destRef: [], destSymbol: [], key: 2, type: [] },
        { dest: [], destRef: [], destSymbol: [], key: 3, type: [] },
        {
          dest: [],
          destRef: ['a', 'b'],
          destSymbol: [],
          key: 4,
          type: ['lift'],
        },
      ],
    });
  });
});

describe('generateTags', () => {
  it('generate tags from state', () => {
    expect(
      generateTags({
        dir: ':forward',
        otherTags: {},
        rows: [
          {
            dest: [],
            destRef: [],
            destSymbol: ['airport'],
            key: 5,
            type: ['stairs'],
          },
          { dest: [], destRef: [], destSymbol: [], key: 1, type: [] },
          { dest: [], destRef: [], destSymbol: [], key: 4, type: ['lift'] },
        ],
      }),
    ).toStrictEqual({
      'exit:carriages:forward': 'stairs|no|lift',
      'destination:symbol:carriages:forward': 'airport|none|none',
    });
  });
});

describe('both', () => {
  it('returns no tags, given no tags', () => {
    expect(generateTags(parseTags({}))).toStrictEqual({});
  });
});
