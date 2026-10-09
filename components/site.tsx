import { LocalizedLink as Link } from './localized-link';
import type { Article } from '@/lib/content';
import { illustrations, getIllustrationLabel, type IllustrationKey } from '@/lib/visuals';
import { translate, type Locale } from '@/lib/i18n';
import type { Entry } from '@/lib/entries';
export { default as Header } from './header';
export function Footer({locale='en'}:{locale?:Locale}){const t=(text:string)=>translate(locale,text);return <footer className="notebook-footer">
  <div className="footer-tear" aria-hidden="true"/>
  <div className="shell footer-content">
    <div className="footer-identity"><p className="footer-logo">barış.</p><span>{t('play. notice. question. test.')}</span></div>
    <p className="footer-manifesto">{t('I played some games.')}<br/>{t('I asked some questions.')}<br/>{t('Now I’m testing the answers.')}</p>
    <div className="footer-credit">© {new Date().getFullYear()} barış.<br/><span>{t('always a work in progress.')}</span></div>
  </div>
  <img className="footer-cactus cactus-left" src="/images/footer-cactus.webp" alt="" aria-hidden="true" width="150" height="200"/>
  <img className="footer-cactus cactus-right" src="/images/footer-cactus.webp" alt="" aria-hidden="true" width="150" height="200"/>
</footer>}
export function Label({children}:{children:React.ReactNode}){return <span className="eyebrow">{children}</span>}
export function NotebookArt({kind='match',className='',priority=false}:{kind?:string;className?:string;priority?:boolean}){
  const key:IllustrationKey=Object.prototype.hasOwnProperty.call(illustrations,kind)?kind as IllustrationKey:kind==='coins'?'economy':kind==='steps'?'journey':'puzzle';
  return <img className={`notebook-art art-${key} ${className}`} src={`/images/${illustrations[key].file}`} alt="" aria-hidden="true" width="400" height="400" loading={priority?'eager':'lazy'}/>;
}
export function Motif({kind='match',large=false,visual,locale='en'}:{kind?:string;large?:boolean;visual?:IllustrationKey;locale?:Locale}){
  const t=(text:string)=>translate(locale,text);
  const words=kind==='match'?['first move','small win','one more level']:kind==='coins'?['effort','reward','perceived value']:['a goal','a little progress','a reason to return'];
  return <div className={`motif ${large?'large':''}`} aria-hidden="true"><span className="diagram-caption">{t('a working model')} / {t(kind==='match'?'onboarding':kind==='coins'?'game economy':'motivation')}</span><NotebookArt kind={visual||kind}/><div className="diagram-flow">{words.map((word,i)=><div className="diagram-step" key={word}><span>0{i+1}</span><strong>{t(word)}</strong></div>)}</div><span className="diagram-foot">{t('observe → question → test')}</span></div>
}
export function ArticleCard({article,locale='en'}:{article:Article;locale?:Locale}){const t=(text:string)=>translate(locale,text);return <Link locale={locale} href={`/thinking/${article.slug}`} className="article-card"><div className="card-top"><Label>{t('note')} {article.number} / {t(article.category)}</Label><span>{article.readTime}</span></div><div className={`card-art art-frame-${article.visual}`}><NotebookArt kind={article.visual}/><span className="illustration-caption">{getIllustrationLabel(article.visual,locale)}</span></div><h3>{article.title}</h3><p>{article.summary}</p><div className="card-bottom"><span>{article.game}</span><span className="read-link">{t('read the note')}</span></div></Link>}
export function SectionHeading({title,href,label='view all',locale='en'}:{title:string;href?:string;label?:string;locale?:Locale}){return <div className="section-heading"><h2>{title}</h2>{href&&<Link locale={locale} className="small-link" href={href}>{translate(locale,label)}</Link>}</div>}
export function LabCard({entry,tone=0,locale='en'}:{entry:Entry;tone?:number;locale?:Locale}){const t=(text:string)=>translate(locale,text);return <Link locale={locale} href={entry.href} className="lab-card"><div className="lab-card-head"><h3>{entry.title}</h3><span className={`lab-kind lab-kind-${entry.kind}`}>{t(entry.kind)}</span></div><div className={`lab-card-art lab-tone-${tone%4}`}><NotebookArt kind={entry.visual}/></div></Link>}
