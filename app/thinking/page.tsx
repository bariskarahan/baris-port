import { getLocale } from '@/lib/request-locale';
import { translate } from '@/lib/i18n';
import { Suspense } from 'react';
import Archive from '@/components/archive';
import { Label, NotebookArt } from '@/components/site';
export async function generateMetadata(){return {title:translate(await getLocale(),'thinking')}}
export default async function Thinking(){const locale=await getLocale();const t=(text:string)=>translate(locale,text);return <main id="main" className="shell page-main"><div className="page-intro"><div><Label>{t("01 / the public notebook")}</Label><h1>{t("thinking.")}<br/>{t("in progress.")}</h1></div><div className="intro-aside"><NotebookArt kind="notebook" className="intro-art" priority/><p>{t("Teardowns, observations, and questions about the systems that make us play.")}<span className="intro-meta">{t("Current notes are illustrative samples.")}</span></p></div></div><Suspense fallback={<p>{t("opening the notebook…")}</p>}><Archive locale={locale}/></Suspense></main>}
