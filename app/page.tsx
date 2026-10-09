import { getLocale } from '@/lib/request-locale';
import { translate } from '@/lib/i18n';
import { LocalizedLink as Link } from '@/components/localized-link';
import { topics } from '@/lib/content';
import { getArticles, getExperiments } from '@/lib/content-tr';
import { Label, Motif, SectionHeading, ArticleCard, NotebookArt } from '@/components/site';
export default async function Home(){const locale=await getLocale();const t=(text:string)=>translate(locale,text);const articles=getArticles(locale);const experiments=getExperiments(locale);return <main id="main">
  <section className="hero shell">
    <div><Label>{t("games, people & product")}</Label><h1>{t("play. notice.")}<br/>{t("question. test.")}</h1><p className="hero-signature">{t("an independent learning notebook by barış.")}</p></div>
    <div className="hero-note"><span className="note-index">{t("NO. 001 — AN OPEN NOTEBOOK")}</span><p>{t("I play games, study the decisions behind them, and turn what I notice into questions worth testing.")}</p><Link locale={locale} href="/thinking" className="button">{t("open the notebook")}</Link></div>
  </section>
  <section className="shell world-section" aria-labelledby="world-title">
    <div className="world-heading"><div><Label>{t("the field map / mobile games")}</Label><h2 id="world-title">{t("a world of questions.")}</h2></div><a className="small-link" href="/images/notebook-world.webp" target="_blank" rel="noopener noreferrer">{t("look closer")}</a></div>
    <a className="world-image-link" href="/images/notebook-world.webp" target="_blank" rel="noopener noreferrer" aria-label={t("Explore the illustrated world in full size")}><img className="world-art" src="/images/notebook-world.webp" alt={t("A hand-drawn island in an amber frame, connecting a puzzle garden, progression mountain, reward market and cooperative harbor.")} width="1536" height="1024" fetchPriority="high"/></a>
    <nav className="world-routes" aria-label={t("Explore the field map")}>
      <Link locale={locale} href="/thinking/royal-match-first-ten-minutes"><span>{t("01 / the puzzle garden")}</span><strong>{t("the first ten minutes")}</strong></Link>
      <Link locale={locale} href="/thinking/progression-and-motivation"><span>{t("02 / the mountain trail")}</span><strong>{t("a reason to keep going")}</strong></Link>
      <Link locale={locale} href="/thinking/fair-game-economy"><span>{t("03 / the reward market")}</span><strong>{t("what feels fair?")}</strong></Link>
      <Link locale={locale} href="/experiments#small-groups"><span>{t("04 / the shared harbor")}</span><strong>{t("better together?")}</strong></Link>
    </nav>
  </section>
  <section className="shell home-board" aria-label={t("Inside the notebook")}>
    <Link locale={locale} className="feature-panel" href={`/thinking/${articles[0].slug}`}><div className="panel-heading"><Label>{t("01 / selected thinking")}</Label><span className="small-meta">{t("sample note")}</span></div><div className="feature-copy"><h2>{articles[0].title}</h2><p>{articles[0].summary}</p></div><Motif locale={locale}/><div className="panel-action"><span>{t("read the teardown")}</span><span>{articles[0].readTime}</span></div></Link>
    <div className="experiment-stack">{experiments.slice(0,2).map((e,i)=><Link locale={locale} href={`/experiments#${e.slug}`} className={`compact-experiment experiment-tone-${i}`} key={e.id}><div className="panel-heading"><Label>{t("experiment")} {e.id}</Label><span className="small-meta">{t("proposed")}</span></div><h2>{e.title}</h2><p>{e.question}</p><div className="compact-art"><span className="mini-button">{t("see the test plan")}</span><NotebookArt kind={e.visual}/></div></Link>)}</div>
    <Link locale={locale} href="/about" className="about-panel"><div className="panel-heading"><Label>{t("02 / the person behind it")}</Label></div><h2>{t("curious.")}<br/>{t("still growing.")}</h2><p>{t("Learning the mobile gaming industry, one question at a time.")}</p><img src="/images/footer-cactus.webp" alt={t("Green cacti and purple crystals")} width="260" height="390"/><span className="mini-button">{t("a little about barış")}</span></Link>
  </section>
  <section className="paper-section"><div className="shell"><SectionHeading locale={locale} title={t("recent notes")} href="/thinking" label={t("all thinking")}/><div className="article-grid">{articles.slice(1).map(a=><ArticleCard locale={locale} article={a} key={a.slug}/>)}</div><div className="topic-block"><Label>{t("following my curiosity")}</Label><div className="topic-links">{topics.filter(t=>t!=='all').map(t=><Link locale={locale} key={t} href={`/thinking?topic=${encodeURIComponent(t)}`}>{translate(locale,t)}</Link>)}</div></div></div></section>
  <section className="shell home-about"><div className="practice-art"><Label>{t("the practice")}</Label><NotebookArt kind="notebook"/></div><div className="practice-copy"><p>{t("Play something. Notice a pattern.")}<br/>{t("Ask a better question. Find a way to test it.")}</p><Link locale={locale} href="/experiments" className="small-link">{t("inside the experiment notebook")}</Link></div></section>
</main>}
