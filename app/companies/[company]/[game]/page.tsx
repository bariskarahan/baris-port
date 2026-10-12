import { notFound } from 'next/navigation';
import { getLocale } from '@/lib/request-locale';
import { LocalizedLink as Link } from '@/components/localized-link';
import { PortfolioCrumbs, PortfolioState } from '@/components/portfolio-elements';
import { findCompany, findGame, pick } from '@/lib/portfolio';

export default async function GamePage({params}: {params: Promise<{company:string;game:string}>}) {
  const {company: companySlug, game: gameSlug} = await params;
  const company = findCompany(companySlug);
  if (!company) notFound();
  const game = findGame(company, gameSlug);
  if (!game) notFound();
  const locale = await getLocale();
  return <main id="main" className="shell portfolio-page">
    <PortfolioCrumbs locale={locale} items={[
      {label:locale === 'tr'?'şirketler':'companies',href:'/companies'},
      {label:company.name,href:'/companies/'+company.slug},
      {label:game.name}
    ]}/>
    <div className="portfolio-page-head">
      <p className="portfolio-eyebrow">{company.name} / {game.genre}</p>
      <h1>{game.name}<span className="portfolio-period">.</span></h1>
      <p>{locale === 'tr' ? 'Bu oyunla ilgili gözlemlerimi, kendi kayıtlarımı, tasarım varyasyonlarımı ve test etmeyi önereceğim hipotezleri burada toplayacağım.' : 'A home for first-hand gameplay notes, original recordings, proposed design variations, and measurable hypotheses.'}</p>
      <PortfolioState locale={locale} stage={game.stage}/>
    </div>
    <div className="portfolio-section-title"><h2>{locale === 'tr' ? 'çalışmalar' : 'case studies'}</h2><span>0{game.studies.length} / {locale === 'tr' ? 'taslak' : 'draft'}</span></div>
    {game.studies.length ? <div className="portfolio-study-grid">{game.studies.map((study,index)=>
      <Link locale={locale} key={study.slug} href={'/companies/'+company.slug+'/'+game.slug+'/'+study.slug} className="portfolio-study-card">
        <span className="portfolio-eyebrow">0{index+1} / product analysis</span>
        <h3>{pick(study.title,locale)}</h3><p>{pick(study.focus,locale)}</p>
        <PortfolioState locale={locale} stage={study.status}/>
        <span className="portfolio-study-link">{locale === 'tr' ? 'şablonu incele' : 'explore the template'} ↗</span>
      </Link>)}</div> : <div className="portfolio-empty">
      <h3>{locale === 'tr' ? 'henüz analiz yayımlanmadı.' : 'no studies published yet.'}</h3>
      <p>{locale === 'tr' ? 'Bu oyuna ait ilk özgün çalışmayı tamamladığımda burada görünecek. İçerik veya test sonucu uydurulmadı.' : 'Original work will appear here after observation and review. No findings or test outcomes have been invented.'}</p>
    </div>}
    <section className="portfolio-guidance"><strong>{locale === 'tr' ? 'nasıl çalışıyorum?' : 'how I work'}</strong>
      <p>{locale === 'tr' ? 'öğren → oyunda gözlemle → ekran görüntüsü/video ile belgele → problemi tarif et → öneri üret → riskleri değerlendir → testi tasarla.' : 'learn → observe in-game → capture screenshots/video → define the problem → propose a change → evaluate trade-offs → design a test.'}</p>
    </section>
  </main>;
}
