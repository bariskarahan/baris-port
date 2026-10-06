import Link from 'next/link';
import { articles, experiments } from '@/lib/content';
import { Label, Motif, SectionHeading } from '@/components/site';

export default function Home() {
  return <main id="main">
    <section className="hero shell">
      <Label>barış / games, people & product</Label>
      <h1>i play games.<br/>then i ask <em>why.</em></h1>
      <p>A public notebook on mobile games,<br/>human behavior, and ideas worth testing.</p>
      <Link href="/thinking" className="button">open the notebook <span>↗</span></Link>
      <div className="hero-aside" aria-hidden="true"><svg className="asterisk" viewBox="0 0 120 120"><g stroke="currentColor" strokeWidth="11"><path d="M60 8v104M8 60h104M23 23l74 74M23 97l74-74"/></g></svg></div>
    </section>

    <section className="paper-section"><div className="shell">
      <SectionHeading title="selected thinking" href="/thinking"/>
      <Link className="featured" href={`/thinking/${articles[0].slug}`}>
        <div className="featured-copy">
          <Label>featured teardown / sample</Label>
          <h3>{articles[0].title}</h3>
          <p>{articles[0].summary}</p>
          <span className="read-link">read the note <span>↗</span></span>
        </div>
        <Motif large/>
      </Link>
      <div className="note-list">{articles.slice(1,3).map(a=><Link href={`/thinking/${a.slug}`} key={a.slug} className="note-row"><div><Label>{a.category} / sample</Label><h3>{a.title}</h3></div><span aria-hidden="true">↗</span></Link>)}</div>
    </div></section>

    <section className="shell experiment-section">
      <SectionHeading title="questions i’d test" href="/experiments" label="all experiments"/>
      <div className="experiment-grid">{experiments.slice(0,2).map(e=><Link href={`/experiments#${e.slug}`} key={e.id} className="experiment-card"><Label>proposed experiment {e.id}</Label><h3>{e.title}</h3><p>{e.question}</p><span className="read-link">see the plan <span>↗</span></span></Link>)}</div>
    </section>

    <section className="shell home-about">
      <Label>about this notebook</Label>
      <p>I’m Barış, a business graduate learning the mobile gaming industry. This is where I document what I notice, question, and learn.</p>
      <Link className="small-link" href="/about">more about me ↗</Link>
    </section>
  </main>;
}
