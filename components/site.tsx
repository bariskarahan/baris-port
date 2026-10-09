import Link from 'next/link';
import type { Article } from '@/lib/content';
export function Header(){return <header className="site-header shell"><Link href="/" className="wordmark" aria-label="Barış home">b<span>k.</span></Link><nav aria-label="Main navigation"><Link href="/thinking">thinking</Link><Link href="/experiments">experiments</Link><Link href="/about">about</Link></nav><span className="edition">a work in progress <i/></span></header>}
export function Footer(){return <footer className="notebook-footer">
  <div className="footer-tear" aria-hidden="true"/>
  <div className="shell footer-content">
    <div className="footer-identity"><p>play. notice. question. test.</p><span>an independent learning notebook by barış.</span></div>
    <p className="footer-manifesto">We tried some shit.<br/>We learned some shit.<br/>Now we’re trying some new shit.</p>
    <div className="footer-credit">© {new Date().getFullYear()} barış.<br/><span>always a work in progress.</span></div>
  </div>
  <img className="footer-cactus cactus-left" src="/images/footer-cactus.png" alt="" aria-hidden="true" width="150" height="200"/>
  <img className="footer-cactus cactus-right" src="/images/footer-cactus.png" alt="" aria-hidden="true" width="150" height="200"/>
</footer>}
export function Label({children}:{children:React.ReactNode}){return <span className="eyebrow">{children}</span>}
export function Motif({kind='match',large=false}:{kind?:string;large?:boolean}){return <div className={`motif ${kind} ${large?'large':''}`} aria-hidden="true">{kind==='match'?<><div className="tile t1">✦</div><div className="tile t2">✦</div><div className="tile t3">✦</div><div className="tile t4">◆</div><div className="tile t5">✦</div><div className="tile t6">◆</div><div className="tile t7">◆</div><div className="tile t8">✦</div><div className="tile t9">◆</div><span className="motif-note">a small win.<br/>a next move.</span></>:kind==='coins'?<><span className="coin c1">?</span><span className="coin c2">=</span><span className="coin c3">+</span><span className="motif-note">value ≠ fairness</span></>:<><span className="step s1"/><span className="step s2"/><span className="step s3"/><span className="step s4"/><span className="step-dot"/><span className="motif-note">one more level?</span></>}</div>}
export function ArticleCard({article}:{article:Article}){return <Link href={`/thinking/${article.slug}`} className="article-card"><Motif kind={article.motif}/><div className="card-meta"><Label>{article.category}</Label><span>{article.readTime}</span></div><h3>{article.title}</h3><p>{article.summary}</p><span className="read-link">read the note <span>↗</span></span></Link>}
export function SectionHeading({title,href,label='view all'}:{title:string;href?:string;label?:string}){return <div className="section-heading"><h2>{title}</h2>{href&&<Link className="small-link" href={href}>{label} ↗</Link>}</div>}
