'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { languageCookie, localePath, stripLocale, translate, type Locale } from '@/lib/i18n';

function Flag({ locale }: { locale: Locale }) {
  return locale === 'en' ? <svg className="language-flag" viewBox="0 0 36 24" aria-hidden="true"><path fill="#18316a" d="M0 0h36v24H0z"/><path d="m0 0 36 24M36 0 0 24" stroke="#fff" strokeWidth="6"/><path d="m0 0 36 24M36 0 0 24" stroke="#cf2637" strokeWidth="2"/><path d="M18 0v24M0 12h36" stroke="#fff" strokeWidth="8"/><path d="M18 0v24M0 12h36" stroke="#cf2637" strokeWidth="4"/></svg> : <svg className="language-flag" viewBox="0 0 36 24" aria-hidden="true"><path fill="#e30a17" d="M0 0h36v24H0z"/><circle cx="13" cy="12" r="7" fill="#fff"/><circle cx="15" cy="12" r="5.7" fill="#e30a17"/><path fill="#fff" d="m23.5 7.8 1.2 3.2h3.4l-2.7 2 1 3.2-2.9-1.9-2.8 1.9 1-3.2-2.7-2h3.3z"/></svg>;
}

export default function Header({ locale = 'en' }: { locale?: Locale }) {
  const pathname = stripLocale(usePathname());
  const search = useSearchParams().toString();
  const t = (text: string) => translate(locale, text);
  return <header className="site-header shell">
    <Link href={localePath('/', locale)} className="wordmark" aria-label={t('Barış home')}>barış<span>.</span></Link>
    <nav aria-label={t('Main navigation')}>{[['/thinking','thinking'],['/experiments','experiments'],['/about','about']].map(([href,label])=><Link href={localePath(href,locale)} key={href} aria-current={pathname.startsWith(href)?'page':undefined}>{t(label)}</Link>)}</nav>
    <div className="header-tools"><span className="edition">{t('independent learning / v0.1')}</span><div className="language-switcher" role="group" aria-label={t('Language')}>
      {(['en','tr'] as const).map(language=><a key={language} href={`${localePath(pathname,language)}${search?`?${search}`:''}`} lang={language} hrefLang={language} aria-label={language==='en'?'English':'Türkçe'} aria-current={language===locale?'true':undefined} onClick={event=>{
        document.cookie=`${languageCookie}=${language}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol==='https:'?'; Secure':''}`;
        event.currentTarget.href+=window.location.hash;
      }}><Flag locale={language}/><span className="language-full">{language==='en'?'English':'Türkçe'}</span><span className="language-short">{language.toUpperCase()}</span></a>)}
    </div></div>
  </header>;
}
