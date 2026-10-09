'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { topics } from '@/lib/content';
import { getArticles } from '@/lib/content-tr';
import { translate, type Locale } from '@/lib/i18n';
import { ArticleCard } from './site';
export default function Archive({locale='en'}:{locale?:Locale}){
 const params=useSearchParams();const initial=params.get('topic')||'all';
 const [topic,setTopic]=useState(topics.some(t=>t===initial)?initial:'all');const [query,setQuery]=useState('');
 const t=(text:string)=>translate(locale,text);const articles=getArticles(locale);
 const lower=(text:string)=>text.toLocaleLowerCase(locale==='tr'?'tr-TR':'en');
 const filtered=articles.filter(a=>(topic==='all'||a.category===topic)&&lower(`${a.title} ${a.summary} ${a.game}`).includes(lower(query.trim())));
 return <><div className="archive-tools"><label className="search-label">{t('search the notebook')}<input type="search" placeholder={t('a game, a question, a theme…')} value={query} onChange={e=>setQuery(e.target.value)}/></label><span className="muted">{filtered.length} {t(filtered.length===1?'note':'notes')}</span></div><div className="filters" aria-label={t('Filter notes by topic')}>{topics.map(topicKey=><button aria-pressed={topic===topicKey} onClick={()=>setTopic(topicKey)} key={topicKey}>{t(topicKey)}</button>)}</div>{filtered.length?<div className="article-grid archive-grid">{filtered.map(a=><ArticleCard key={a.slug} article={a} locale={locale}/>)}</div>:<div className="empty-state"><h2>{t('a question still waiting to be explored.')}</h2><p>{t('No notes here yet. Try another topic or search.')}</p><button className="button" onClick={()=>{setTopic('all');setQuery('')}}>{t('show all notes')}</button></div>}</>;
}
