'use client';
import { useState } from 'react';
import { LabCard } from './site';
import { translate, type Locale } from '@/lib/i18n';
import type { Entry, EntryKind } from '@/lib/entries';

export default function ExperimentGrid({ entries, locale = 'en' }: { entries: Entry[]; locale?: Locale }) {
  const [query, setQuery] = useState('');
  const [kind, setKind] = useState<'all' | EntryKind>('all');
  const [newestFirst, setNewestFirst] = useState(true);
  const t = (text: string) => translate(locale, text);
  const lower = (text: string) => text.toLocaleLowerCase(locale === 'tr' ? 'tr-TR' : 'en');
  const shown = entries
    .filter(e => (kind === 'all' || e.kind === kind) && lower(`${e.title} ${e.summary} ${t(e.tag)}`).includes(lower(query.trim())))
    .sort((a, b) => newestFirst ? b.order - a.order : a.order - b.order);
  return <>
    <div className="lab-tools">
      <input type="search" className="lab-search" placeholder={t('Search experiments...')} aria-label={t('Search experiments')} value={query} onChange={e => setQuery(e.target.value)}/>
      <div className="lab-kinds" role="group" aria-label={t('Filter by type')}>
        {(['all', 'analysis', 'test'] as const).map(k => <button key={k} type="button" aria-pressed={kind === k} onClick={() => setKind(k)}>{t(k === 'all' ? 'All' : k === 'analysis' ? 'Analyses' : 'Tests')}</button>)}
      </div>
      <label className="lab-sort"><span className="visually-hidden">{t('Sort')}</span>
        <select value={newestFirst ? 'new' : 'old'} onChange={e => setNewestFirst(e.target.value === 'new')}>
          <option value="new">{t('Date: New to Old')}</option>
          <option value="old">{t('Date: Old to New')}</option>
        </select>
      </label>
    </div>
    {shown.length ? <div className="lab-grid">{shown.map((e, i) => <LabCard entry={e} tone={i} locale={locale} key={e.id}/>)}</div> : <div className="empty-state"><h2>{t('nothing here yet.')}</h2><button type="button" className="button" onClick={() => { setQuery(''); setKind('all'); }}>{t('show everything')}</button></div>}
  </>;
}
