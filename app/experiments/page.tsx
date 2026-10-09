import { getLocale } from '@/lib/request-locale';
import { translate } from '@/lib/i18n';
import { getEntries } from '@/lib/entries';
import ExperimentGrid from '@/components/experiment-grid';
export async function generateMetadata(){return {title:translate(await getLocale(),'experiments')}}
export default async function Experiments(){const locale=await getLocale();const t=(text:string)=>translate(locale,text);return <main id="main" className="lab-page">
  <div className="lab-intro shell"><h1>{t('Experiments')}</h1><p className="serif-quote">“{t('i tried some things.')}”</p></div>
  <section className="torn-band"><div className="shell"><ExperimentGrid entries={getEntries(locale)} locale={locale}/><p className="lab-note">{t('Analyses and test plans are illustrative samples. No experiment has been run yet.')}</p></div></section>
</main>}
