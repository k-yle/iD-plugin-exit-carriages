import type { Tags } from '@openstreetmap/id-plugin-sdk';
import type { Direction, ExitType } from './const.js';

export type Row = {
  key: string | number;
  type?: ExitType[];
  dest?: string[];
  destSymbol?: string[];
  destRef?: string[];
};

export interface Parsed {
  dir: Direction;
  rows: Row[];
  otherTags: Tags;
}
