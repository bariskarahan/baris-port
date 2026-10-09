import { getLocale } from '@/lib/request-locale';
import { translate } from '@/lib/i18n';
import { LocalizedLink as Link } from '@/components/localized-link';
export default async function NotFound(){const locale=await getLocale();const t=(text:string)=>translate(locale,text);return <main id="main" className="shell page-main empty-state"><p>{t("404 / a missing page")}</p><h1>{t("this path is still")}<br/>{t("unexplored.")}</h1><Link locale={locale} href="/thinking" className="button">{t("back to the notebook")}</Link></main>}
