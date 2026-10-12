import { notFound } from 'next/navigation';
import { getLocale } from '@/lib/request-locale';
import { LocalizedLink as Link } from '@/components/localized-link';
import { PortfolioCrumbs, PortfolioState } from '@/components/portfolio-elements';
import { findCompany, pick } from '@/lib/portfolio';

export default async function CompanyPage({ params }: {params: Promise<{company: string}>}) {
  const { company: slug } = await params;
  const company = findCompany(slug);
  if (!company) notFound();
  const locale = await getLocale();
  return <main id="main" className="shell portfolio-page">
    <PortfolioCrumbs locale={locale} items={[{label: locale === 'tr' ? 'şirketler' : 'companies',href:'/companies'},{label:company.name}]} />
    <div className="portfolio-page-head"><p className="portfolio-eyebrow">{locale === 'tr' ? 'şirket / oyun kütüphanesi' : 'studio / game library'}</p><h1>{company.name}<span className="portfolio-period">.</span></h1>
      <p>{pick(company.description,locale)}</p>
      <span className="portfolio-disclaimer">{locale === 'tr' ? 'burada kuruluş tarihi veya ansiklopedik bilgi yerine kendi oyun analizlerim yer alacak.' : 'focused on my own game studies, not encyclopedic company profiles.'}</span>
    </div>
    <div className="portfolio-games-grid">{company.games.map((game,index)=><Link locale={locale} href={'/companies/'+company.slug+'/'+game.slug} key={game.slug} className="portfolio-game-card">
      <div className="portfolio-game-art"><span>0{index+1} / {game.genre}</span><strong>{game.name}</strong><span aria-hidden="true" className="portfolio-game-arrow">↗</span></div>
      <div className="portfolio-game-meta"><h2>{game.name}</h2><PortfolioState locale={locale} stage={game.stage}/><p>{game.studies.length > 0 ? (locale === 'tr' ? 'ilk çalışma taslağı hazır' : 'first study template available') : (locale === 'tr' ? 'henüz çalışma yayımlanmadı' : 'no published case studies yet')}</p></div>
    </Link>)}</div>
  </main>;
}
