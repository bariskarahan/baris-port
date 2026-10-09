import Link from 'next/link';
import type { Article } from '@/lib/content';
export { default as Header } from './header';
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
export function NotebookArt({kind='match',className='',priority=false}:{kind?:string;className?:string;priority?:boolean}){
  const asset=kind==='coins'?'rewards':kind==='match'?'play':'progress';
  return <img className={`notebook-art ${className}`} src={`/images/notebook-${asset}.webp`} alt="" aria-hidden="true" width="400" height="400" loading={priority?'eager':'lazy'}/>;
}
export function Motif({kind='match',large=false}:{kind?:string;large?:boolean}){
  const words=kind==='match'?['first move','small win','one more level']:kind==='coins'?['effort','reward','perceived value']:['a goal','a little progress','a reason to return'];
  return <div className={`motif ${large?'large':''}`} aria-hidden="true"><span className="diagram-caption">a working model / {kind==='match'?'onboarding':kind==='coins'?'game economy':'motivation'}</span><NotebookArt kind={kind}/><div className="diagram-flow">{words.map((word,i)=><div className="diagram-step" key={word}><span>0{i+1}</span><strong>{word}</strong></div>)}</div><span className="diagram-foot">observe → question → test</span></div>
}
export function ArticleCard({article}:{article:Article}){return <Link href={`/thinking/${article.slug}`} className="article-card"><div className="card-top"><Label>note {article.number} / {article.category}</Label><span>{article.readTime}</span></div><div className="card-art"><NotebookArt kind={article.motif}/></div><h3>{article.title}</h3><p>{article.summary}</p><div className="card-bottom"><span>{article.game}</span><span className="read-link">read the note</span></div></Link>}
export function SectionHeading({title,href,label='view all'}:{title:string;href?:string;label?:string}){return <div className="section-heading"><h2>{title}</h2>{href&&<Link className="small-link" href={href}>{label}</Link>}</div>}
