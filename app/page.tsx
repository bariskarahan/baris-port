import { getLocale } from '@/lib/request-locale';
import { LocalizedLink as Link } from '@/components/localized-link';
import { companies } from '@/lib/portfolio';
import { PortfolioState } from '@/components/portfolio-elements';
import { Label } from '@/components/site';

export default async function Home() {
  const locale = await getLocale();
  const tr = locale === 'tr';
  return <main id="main">
    <section className="shell portfolio-hero">
      <div>
        <Label>{tr ? 'oyunlar / ürün düşüncesi / özgün çalışmalar' : 'games / product thinking / first-hand work'}</Label>
        <h1>{tr ? <>play. observe.<br/><em>question.</em> improve.</> : <>play. observe.<br/><em>question.</em> improve.</>}</h1>
        <p>{tr ? 'Mobil oyunları bir product bakış açısıyla öğreniyorum. Gözlemlerimi, kanıtlarımı ve test edilebilir geliştirme önerilerimi burada biriktiriyorum.' : 'I study mobile games through a product lens — collecting evidence, questioning design decisions, and developing testable improvement ideas.'}</p>
        <Link locale={locale} href="/companies" className="button">{tr ? 'şirketleri ve oyunları keşfet' : 'explore companies & games'} <span aria-hidden="true">↗</span></Link>
      </div>
      <aside className="portfolio-hero-aside">
        <span className="portfolio-eyebrow">{tr ? 'çalışma yaklaşımım' : 'my approach'}</span>
        <div className="portfolio-hero-steps">
          <span>01 <strong>{tr ? 'öğren' : 'learn'}</strong></span>
          <span>02 <strong>{tr ? 'gözlemle' : 'observe'}</strong></span>
          <span>03 <strong>{tr ? 'alternatif öner' : 'propose'}</strong></span>
          <span>04 <strong>{tr ? 'test tasarla' : 'design a test'}</strong></span>
        </div>
        <p>{tr ? 'çalışmalar öğrendikçe gelişecek. eksik kanıtlar, taslaklar ve test edilmemiş hipotezler açıkça belirtilecek.' : 'This is an evolving body of work. Drafts, missing evidence, and untested hypotheses will always be labeled.'}</p>
      </aside>
    </section>

    <section className="portfolio-home-section shell">
      <div className="portfolio-section-title"><h2>{tr ? 'şirketler & oyunlar' : 'companies & games'}</h2><Link locale={locale} href="/companies" className="small-link">{tr ? 'hepsini gör' : 'view the archive'} ↗</Link></div>
      <p className="portfolio-section-description">{tr ? 'önce şirketi, sonra oyunu seç. oyunun altında zamanla tamamlanan analizler ve tasarım önerileri bulunacak.' : 'Start with a company, choose a game, then explore its first-hand product studies and proposed changes.'}</p>
      <div className="portfolio-company-grid">
        {companies.map((company,index)=><Link locale={locale} key={company.slug} href={'/companies/'+company.slug} className="portfolio-company-card">
          <div className="portfolio-company-cover"><span>0{index+1} / studio</span><strong>{company.initials}</strong><span>{company.games.length} games</span></div>
          <div className="portfolio-company-bottom"><h3>{company.name} <span aria-hidden="true">↗</span></h3>
            <div className="portfolio-tags">{company.games.map(game=><span key={game.slug}>{game.name}</span>)}</div>
          </div>
        </Link>)}
      </div>
    </section>

    <section className="portfolio-evidence-band">
      <div className="shell portfolio-evidence-inner">
        <div><span className="portfolio-eyebrow">how I think</span><h2>{tr ? 'sadece yeniden tasarım değil.' : 'not just a redesign.'}</h2><p>{tr ? 'görsel önerinin arkasında gerekçe, ölçüm fikri ve risk analizi olacak. beğeni ile etkiyi birbirine karıştırmayacağım.' : 'Every design proposal needs reasoning, an expected behavioral effect, and possible trade-offs. A better-looking screen is not proof of a better product.'}</p></div>
        <div className="portfolio-evidence-flow">
          {(tr ? ['gerçek ekran görüntüsü / video','gözlem & problem','hipotez & önerilen değişiklik','metrikler & trade-off','önerilen deney'] : ['real gameplay capture','observation & problem','hypothesis & proposed change','metrics & trade-offs','suggested experiment']).map((step,i)=><div key={step}><span>0{i+1}</span><strong>{step}</strong></div>)}
        </div>
      </div>
    </section>

    <section className="shell portfolio-home-writing">
      <div><span className="portfolio-eyebrow">{tr ? 'kişisel alan' : 'personal notes'}</span><h2>{tr ? 'küçük notlar, büyük sorular.' : 'small notes, bigger questions.'}</h2><p>{tr ? 'şirket ve oyun çalışmalarından ayrı, kendi yazdığım kısa yazılar için bir alan. mevcut örnek yazılar gerçek araştırma sonucu olarak sunulmuyor.' : 'A separate space for short original writing. Earlier illustrative sample posts are labeled as samples, not completed research.'}</p></div>
      <Link locale={locale} href="/thinking" className="button">{tr ? 'yazılar alanı' : 'writing archive'} ↗</Link>
    </section>
  </main>;
}
