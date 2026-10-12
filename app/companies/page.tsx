import { getLocale } from '@/lib/request-locale';
import { LocalizedLink as Link } from '@/components/localized-link';
import { companies, pick } from '@/lib/portfolio';
import { PortfolioState } from '@/components/portfolio-elements';

export default async function Companies() {
  const locale = await getLocale();
  return <main id="main" className="shell portfolio-page">
    <div className="portfolio-page-head">
      <p className="portfolio-eyebrow">01 / {locale === 'tr' ? 'şirketler → oyunlar → çalışmalar' : 'companies → games → studies'}</p>
      <h1>{locale === 'tr' ? 'şirketler.' : 'companies.'}</h1>
      <p>{locale === 'tr' ? 'Oyunları şirketlerine göre düzenliyorum. Her oyunun altında kendi gözlemlerime dayanan analizler ve geliştirme önerileri birikecek.' : 'A company-first archive of mobile games. Each game will collect first-hand observations, design proposals, and ways to test them.'}</p>
      <span className="portfolio-disclaimer">{locale === 'tr' ? 'bunlar şirket profilleri değil, benim çalışma alanlarım.' : 'not company histories — a map of my hands-on work.'}</span>
    </div>
    <div className="portfolio-company-grid">
      {companies.map((company, index) => <Link locale={locale} key={company.slug} href={'/companies/' + company.slug} className="portfolio-company-card">
        <div className="portfolio-company-cover">
          <span>0{index+1} / studio</span><strong>{company.initials}</strong><span>{company.games.length} games</span>
        </div>
        <div className="portfolio-company-bottom">
          <h2>{company.name} <span aria-hidden="true">↗</span></h2>
          <p>{pick(company.description, locale)}</p>
          <div className="portfolio-tags">{company.games.map(game => <span key={game.slug}>{game.name}</span>)}</div>
        </div>
      </Link>)}
    </div>
    <aside className="portfolio-guidance"><strong>{locale === 'tr' ? 'bu portfolyo nasıl büyüyecek?' : 'how this archive will grow'}</strong>
      <p>{locale === 'tr' ? 'Önce öğreniyorum, sonra gerçek oyun kayıtlarıyla gözlemlerimi belgeliyorum, ardından öneriler ve ölçülebilir deney planları hazırlıyorum. Henüz yapılmamış analizler sonuç olarak sunulmayacak.' : 'I learn first, capture real gameplay evidence, develop proposals, and define measurable experiments. Drafts and untested ideas are never presented as completed results.'}</p>
    </aside>
  </main>;
}
