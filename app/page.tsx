import Link from 'next/link';
import { articles, experiments, topics } from '@/lib/content';
import { Label, Motif, SectionHeading, ArticleCard, NotebookArt } from '@/components/site';
export default function Home(){return <main id="main">
  <section className="hero shell">
    <div><Label>games, people & product</Label><h1>play. notice.<br/>question. test.</h1><p className="hero-signature">an independent learning notebook by barış.</p></div>
    <div className="hero-note"><span className="note-index">NO. 001 — AN OPEN NOTEBOOK</span><NotebookArt kind="match" className="hero-art" priority/><p>I play games, study the decisions behind them, and turn what I notice into questions worth testing.</p><Link href="/thinking" className="button">open the notebook</Link></div>
  </section>
  <section className="shell home-board" aria-label="Inside the notebook">
    <Link className="feature-panel" href={`/thinking/${articles[0].slug}`}><div className="panel-heading"><Label>01 / selected thinking</Label><span className="small-meta">sample note</span></div><div className="feature-copy"><h2>{articles[0].title}</h2><p>{articles[0].summary}</p></div><Motif/><div className="panel-action"><span>read the teardown</span><span>{articles[0].readTime}</span></div></Link>
    <div className="experiment-stack">{experiments.slice(0,2).map((e,i)=><Link href={`/experiments#${e.slug}`} className={`compact-experiment experiment-tone-${i}`} key={e.id}><div className="panel-heading"><Label>experiment {e.id}</Label><span className="small-meta">proposed</span></div><h2>{e.title}</h2><p>{e.question}</p><div className="compact-art"><span className="mini-button">see the test plan</span><NotebookArt kind={i===0?'coins':'steps'}/></div></Link>)}</div>
    <Link href="/about" className="about-panel"><div className="panel-heading"><Label>02 / the person behind it</Label></div><h2>curious.<br/>still growing.</h2><p>Learning the mobile gaming industry, one question at a time.</p><img src="/images/footer-cactus.png" alt="Green cacti and purple crystals" width="260" height="390"/><span className="mini-button">a little about barış</span></Link>
  </section>
  <section className="paper-section"><div className="shell"><SectionHeading title="recent notes" href="/thinking" label="all thinking"/><div className="article-grid">{articles.slice(1).map(a=><ArticleCard article={a} key={a.slug}/>)}</div><div className="topic-block"><Label>following my curiosity</Label><div className="topic-links">{topics.filter(t=>t!=='all').map(t=><Link key={t} href={`/thinking?topic=${encodeURIComponent(t)}`}>{t}</Link>)}</div></div></div></section>
  <section className="shell home-about"><Label>the practice</Label><p>Play something. Notice a pattern.<br/>Ask a better question. Find a way to test it.</p><Link href="/experiments" className="small-link">inside the experiment notebook</Link></section>
</main>}
