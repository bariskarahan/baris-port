import { getLocale } from '@/lib/request-locale';
import { translate } from '@/lib/i18n';
import { LocalizedLink as Link } from '@/components/localized-link';
import { topics } from '@/lib/content';
import { getEntries } from '@/lib/entries';
import { Label, NotebookArt, LabCard } from '@/components/site';
import WorldMap from '@/components/world-map';
export default async function Home(){const locale=await getLocale();const t=(text:string)=>translate(locale,text);const entries=getEntries(locale);return <main id="main">
  <section className="home-hero shell">
    <h1>{t("play. notice. question. test.")}</h1>
    <p className="serif-quote">“{t("an independent learning notebook by barış.")}”</p>
    <WorldMap alt={t("A hand-drawn island connecting a puzzle garden, progression mountain, reward market and cooperative harbor.")} openLabel={t("Explore the illustrated world in full size")} closeLabel={t("Close")}/>
    <div className="hero-caption"><span>BARIŞ / {t("BAH-RISH")} / <em>{t("NOUN")}</em></span><span className="serif-line">{t("a notebook on games & people, 2026")}</span></div>
    <nav className="hero-actions" aria-label={t("Inside the notebook")}>
      <Link locale={locale} href="/thinking" className="sticker-button"><span className="sticker-thumbs" aria-hidden="true"><img src="/images/mobile-puzzle.webp" alt="" width="40" height="40"/><img src="/images/mobile-economy.webp" alt="" width="40" height="40"/></span>{t("Read the notes")}</Link>
      <Link locale={locale} href="/experiments" className="sticker-button"><span className="sticker-thumbs single" aria-hidden="true"><img src="/images/mobile-team.webp" alt="" width="40" height="40"/></span>{t("Experiments")}<span className="burst" aria-hidden="true">{t("NEW")}</span></Link>
      <Link locale={locale} href="/about" className="sticker-button"><span className="sticker-thumbs single" aria-hidden="true"><img src="/images/footer-cactus.webp" alt="" width="40" height="40"/></span>{t("About barış")}<span className="logo-sticker" aria-hidden="true">b.</span></Link>
    </nav>
    <span className="scroll-line" aria-hidden="true"/>
  </section>
  <section className="torn-band" aria-labelledby="latest-title"><div className="shell">
    <div className="band-heading"><h2 id="latest-title">{t("Latest experiments")}</h2><Link locale={locale} href="/experiments" className="small-link">{t("see all")}</Link></div>
    <div className="lab-grid">{entries.slice(0,4).map((e,i)=><LabCard entry={e} tone={i} locale={locale} key={e.id}/>)}</div>
    <div className="topic-block"><Label>{t("following my curiosity")}</Label><div className="topic-links">{topics.filter(t=>t!=='all').map(t=><Link locale={locale} key={t} href={`/thinking?topic=${encodeURIComponent(t)}`}>{translate(locale,t)}</Link>)}</div></div>
  </div></section>
  <section className="shell home-about"><div className="practice-art"><Label>{t("the practice")}</Label><NotebookArt kind="notebook"/></div><div className="practice-copy"><p>{t("Play something. Notice a pattern.")}<br/>{t("Ask a better question. Find a way to test it.")}</p><Link locale={locale} href="/experiments" className="small-link">{t("inside the experiment notebook")}</Link></div></section>
</main>}
