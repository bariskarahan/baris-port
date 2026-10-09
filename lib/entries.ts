import type { Locale } from './i18n';
import type { IllustrationKey } from './visuals';
import { getArticles, getExperiments } from './content-tr';

export type EntryKind = 'analysis' | 'test';
export type Entry = { id: string; kind: EntryKind; title: string; summary: string; href: string; visual: IllustrationKey; tag: string; order: number };

// One list for the experiments hub: analyses and tests share the same grid.
// `order` is publication order; a higher number is newer.
export function getEntries(locale: Locale): Entry[] {
  const analyses: Entry[] = getArticles(locale).map(a => ({ id: `analysis-${a.slug}`, kind: 'analysis', title: a.title, summary: a.summary, href: `/thinking/${a.slug}`, visual: a.visual, tag: a.category, order: 0 }));
  const tests: Entry[] = getExperiments(locale).map(e => ({ id: `test-${e.slug}`, kind: 'test', title: e.title, summary: e.question, href: `/experiments/${e.slug}`, visual: e.visual as IllustrationKey, tag: e.tag, order: 0 }));
  const merged: Entry[] = [];
  for (let i = 0; i < Math.max(analyses.length, tests.length); i++) {
    if (analyses[i]) merged.push(analyses[i]);
    if (tests[i]) merged.push(tests[i]);
  }
  return merged.map((entry, index) => ({ ...entry, order: index + 1 })).reverse();
}
