import { notFound } from 'next/navigation';
import { getLocale } from '@/lib/request-locale';
import { PortfolioCrumbs, PortfolioState } from '@/components/portfolio-elements';
import { findCompany, findGame, findStudy, pick } from '@/lib/portfolio';

export default async function StudyPage({params}: {params:Promise<{company:string;game:string;study:string}>}) {
  const {company:companySlug,game:gameSlug,study:studySlug} = await params;
  const company=findCompany(companySlug);
  if (!company) notFound();
  const game=findGame(company,gameSlug);
  if (!game) notFound();
  const study=findStudy(game,studySlug);
  if (!study) notFound();
  const locale=await getLocale();
  const tr=locale==='tr';
  const fields=[
    {id:'observation',number:'01',title:tr?'gözlem':'observation',description:tr?'yalnızca oyunda gerçekten gördüğüm, kayıtla gösterebildiğim şeyler.':'only what I directly observed and can support with captures.'},
    {id:'problem',number:'02',title:tr?'problem ve bağlam':'problem & context',description:tr?'oyuncu açısından neden önemli olabilir? hangi kanıt eksik?':'why might this matter to players, and what evidence is missing?'},
    {id:'hypothesis',number:'03',title:tr?'hipotez':'hypothesis',description:tr?'hangi davranışın değişebileceğine dair test edilebilir tahminim.':'a falsifiable prediction about a player behavior change.'},
    {id:'proposal',number:'04',title:tr?'önerilen değişiklik':'proposed change',description:tr?'tasarım varyasyonu, kapsam ve alternatifler; henüz doğrulanmış iyileştirme değil.':'a specific variation, its scope and alternatives; not a proven improvement.'},
    {id:'impact',number:'05',title:tr?'metrikler ve olası riskler':'metrics & trade-offs',description:tr?'başarı metriği, koruma metrikleri ve olumsuz etkiler.':'primary success measure, guardrails, and possible downsides.'},
    {id:'experiment',number:'06',title:tr?'nasıl test ederdim?':'experiment plan',description:tr?'kontrol/test varyasyonları, hedef oyuncu grubu ve karar ölçütü.':'control/treatment variants, audience, and decision rule.'},
    {id:'takeaway',number:'07',title:tr?'öğrendiğim şey':'takeaway',description:tr?'bu çalışmadan öğrendiğim ürün düşüncesi; yalnızca gerçek çalışmadan sonra.':'what the work taught me, written after completing the actual study.'}
  ];
  return <main id="main" className="shell portfolio-page">
    <PortfolioCrumbs locale={locale} items={[
      {label:tr?'şirketler':'companies',href:'/companies'},
      {label:company.name,href:'/companies/'+company.slug},
      {label:game.name,href:'/companies/'+company.slug+'/'+game.slug},
      {label:pick(study.title,locale)}
    ]}/>
    <div className="portfolio-page-head">
      <p className="portfolio-eyebrow">product case / template 001</p>
      <h1>{pick(study.title,locale)}<span className="portfolio-period">.</span></h1>
      <p>{pick(study.focus,locale)}</p>
      <PortfolioState locale={locale} stage="draft"/>
      <p className="portfolio-disclaimer">{tr?'bu sayfa yayımlanmamış bir çalışma şablonudur. gözlem, kullanıcı verisi, test ya da başarı sonucu iddia edilmemektedir.':'an unfilled working template, not a published study. no observations, user data, tests or results are claimed.'}</p>
    </div>
    <section aria-label={tr?'önce ve sonra tasarım alanı':'before and after layout'} className="portfolio-comparison">
      <div className="portfolio-compare-panel"><span>01 / original</span><div className="portfolio-media-placeholder"><strong>{tr?'gerçek oyun kaydı':'original game capture'}</strong><p>{tr?'oyundan benim aldığım ekran görüntüsü veya video buraya gelecek.':'my own screenshot or gameplay video will go here.'}</p></div></div>
      <div className="portfolio-compare-panel"><span>02 / proposed</span><div className="portfolio-media-placeholder"><strong>{tr?'önerdiğim varyasyon':'proposed variation'}</strong><p>{tr?'benim hazırladığım alternatif tasarım buraya gelecek.':'my own alternative design will go here.'}</p></div></div>
    </section>
    <p className="portfolio-comparison-note">{tr?'orijinal kayıt ve konsept tasarım açıkça ayrılacak; gerçek a/b testinin sonucu gibi gösterilmeyecek.':'source gameplay and concept redesign will be clearly separated; neither will be misrepresented as an A/B test result.'}</p>
    <div className="portfolio-section-title"><h2>{tr?'product reasoning':'product reasoning'}</h2><span>07 / sections</span></div>
    <div className="portfolio-reasoning-grid">{fields.map(field=><section className="portfolio-reasoning-block" id={field.id} key={field.id}>
      <span>{field.number} / {field.title}</span><p>{field.description}</p><small>{tr?'çalışma hazırlanırken doldurulacak':'to be completed after hands-on analysis'}</small>
    </section>)}</div>
    <section className="portfolio-guidance"><strong>{tr?'yayınlama standardım':'publication standard'}</strong><p>{tr?'her iddia kaydımla veya açıkça belirtilen bir kaynakla desteklenmeli. varsayımlar varsayım, simüle veriler simüle veri, test edilmemiş öneriler öneri olarak gösterilir.':'claims need direct observations or identified sources. assumptions remain assumptions, synthetic data is labeled synthetic, and untested proposals remain proposals.'}</p></section>
  </main>;
}
