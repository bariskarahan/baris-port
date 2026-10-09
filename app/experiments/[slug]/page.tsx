import { getLocale } from '@/lib/request-locale';
import { translate } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import { LocalizedLink as Link } from '@/components/localized-link';
import { experiments } from '@/lib/content';
import { getExperiments } from '@/lib/content-tr';
import { Label, NotebookArt } from '@/components/site';
export function generateStaticParams(){return experiments.map(e=>({slug:e.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const locale=await getLocale();return {title:getExperiments(locale).find(e=>e.slug===slug)?.title||translate(locale,'experiments')}}
export default async function Experiment({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const locale=await getLocale();const t=(text:string)=>translate(locale,text);const e=getExperiments(locale).find(e=>e.slug===slug);if(!e)notFound();return <main id="main" className="shell page-main"><Link locale={locale} className="small-link" href="/experiments">{t('back to experiments')}</Link><article className="experiment-detail experiment-single"><div className="experiment-overview"><div className="experiment-detail-head"><Label>{t("experiment")} {e.id} / {t(e.tag)}</Label><span className="status">{t("proposed · not run")}</span></div><h1>{e.title}</h1><p className="experiment-question">{e.question}</p><NotebookArt kind={e.visual} className="experiment-art" priority/></div><dl>{[['hypothesis',e.hypothesis],['setup',e.setup],['metric',e.metric],['result',t('Not run. No outcome or supporting data yet.')],['lesson to look for',e.lesson]].map(([term,value])=><div key={term}><dt>{t(term)}</dt><dd>{value}</dd></div>)}</dl></article><p className="closing-note serif-quote">{t("A good test leaves you with a better question.")}</p></main>}
