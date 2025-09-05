export const DIRECTION = [':forward', ':backward', ''] as const;
export type Direction = (typeof DIRECTION)[number];

export const EXIT_TYPES = [
  'escalator',
  'lift',
  'stairs',
  'flat',
  'ramp',
] as const;
export type ExitType = (typeof EXIT_TYPES)[number];
