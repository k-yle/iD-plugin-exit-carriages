/* eslint-disable unicorn/prevent-abbreviations */
import type { MultiTags, Tags } from '@openstreetmap/id-plugin-sdk';
import { DIRECTION, type ExitType } from './const.js';
import type { Parsed } from './types.def.js';

const isNotNone = (v: string) => v && v !== 'no' && v !== 'none';

const removeNone = (v: string) => (isNotNone(v) ? v : '');

/** wrapper because `''.split()` unintuively returns `['']` */
const split = (v: string | undefined, delim: string) =>
  v ? v.split(delim) : [];

export function isAllTagsHaveSameValue(tags: MultiTags): tags is Tags {
  return Object.values(tags).every((value) => !Array.isArray(value));
}

export function generateTags({ dir, rows, otherTags }: Parsed): Tags {
  const tags: Tags = {};

  const type = rows.map((r) => r.type?.join(';') || 'no').join('|');
  if (type) tags[`exit:carriages${dir}`] = type;

  const to = rows.map((r) => r.dest?.join(';') || 'none');
  if (to.some(isNotNone)) {
    tags[`destination:carriages${dir}`] = to.join('|');
  }

  const symbol = rows.map((r) => r.destSymbol?.join(';') || 'none');
  if (symbol.some(isNotNone)) {
    tags[`destination:symbol:carriages${dir}`] = symbol.join('|');
  }

  const ref = rows.map((r) => r.destRef?.join(';') || 'none');
  if (ref.some(isNotNone)) {
    tags[`destination:ref:carriages${dir}`] = ref.join('|');
  }

  const otherDirs = DIRECTION.filter((d) => d !== dir);
  for (const otherDir of otherDirs) {
    delete otherTags[`exit:carriages${otherDir}`];
    delete otherTags[`destination:carriages${otherDir}`];
    delete otherTags[`destination:symbol:carriages${otherDir}`];
    delete otherTags[`destination:ref:carriages${otherDir}`];
  }

  return { ...otherTags, ...tags };
}

export function parseTags(tags: Tags): Parsed {
  const dir = tags['exit:carriages']
    ? ''
    : tags['exit:carriages:backward']
      ? ':backward'
      : ':forward';

  const typeKey = `exit:carriages${dir}`;
  const destKey = `destination:carriages${dir}`;
  const destRefKey = `destination:ref:carriages${dir}`;
  const destSymbolKey = `destination:symbol:carriages${dir}`;

  const type = tags[typeKey]?.split('|').map(removeNone) || [];
  const dest = tags[destKey]?.split('|').map(removeNone) || [];
  const destRef = tags[destRefKey]?.split('|').map(removeNone) || [];
  const destSymbol = tags[destSymbolKey]?.split('|').map(removeNone) || [];

  const otherTags = structuredClone(tags);
  delete otherTags[typeKey];
  delete otherTags[destKey];
  delete otherTags[destRefKey];
  delete otherTags[destSymbolKey];

  return {
    dir,
    rows: type.map((car, index) => {
      return {
        key: index,
        type: <ExitType[]>split(car, ';'),
        dest: split(dest[index], ';'),
        destRef: split(destRef[index], ';'),
        destSymbol: split(destSymbol[index], ';'),
      };
    }),
    otherTags,
  };
}
