'use client';
import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { languageCookie, localePath, stripLocale, translate, type Locale } from '@/lib/i18n';

function Flag({ locale }: { locale: Locale }) {
  return locale === 'en' ? <svg className="language-flag" viewBox="0 0 36 24" aria-hidden="true"><path fill="#18316a" d="M0 0h36v24H0z"/><path d="m0 0 36 24M36 0 0 24" stroke="#fff" strokeWidth="6"/><path d="m0 0 36 24M36 0 0 24" stroke="#cf2637" strokeWidth="2"/><path d="M18 0v24M0 12h36" stroke="#fff" strokeWidth="8"/><path d="M18 0v24M0 12h36" stroke="#cf2637" strokeWidth="4"/></svg> : <svg className="language-flag" viewBox="0 0 36 24" aria-hidden="true"><path fill="#e30a17" d="M0 0h36v24H0z"/><circle cx="13" cy="12" r="7" fill="#fff"/><circle cx="15" cy="12" r="5.7" fill="#e30a17"/><path fill="#fff" d="m23.5 7.8 1.2 3.2h3.4l-2.7 2 1 3.2-2.9-1.9-2.8 1.9 1-3.2-2.7-2h3.3z"/></svg>;
}

export default function Header({ locale = 'en' }: { locale?: Locale }) {
  const pathname = stripLocale(usePathname());
  const search = useSearchParams().toString();
  const t = (text: string) => translate(locale, text);
  const [languageOpen, setLanguageOpen] = useState(false);
  const languagePanelId = useId();
  const languageControl = useRef<HTMLDivElement>(null);
  const languageButton = useRef<HTMLButtonElement>(null);

  function closeLanguage(restoreFocus = false) {
    setLanguageOpen(false);
    if (restoreFocus) languageButton.current?.focus();
  }

  useEffect(() => {
    if (!languageOpen) return;
    languageControl.current?.querySelector<HTMLAnchorElement>('.language-popover a')?.focus();
    function onOutside(event: PointerEvent | FocusEvent) {
      if (event.target instanceof Node && !languageControl.current?.contains(event.target)) {
        setLanguageOpen(false);
      }
    }
    function onEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        setLanguageOpen(false);
        languageButton.current?.focus();
      }
    }
    document.addEventListener('pointerdown', onOutside);
    document.addEventListener('focusin', onOutside);
    document.addEventListener('keydown', onEscape);
    return () => {
      document.removeEventListener('pointerdown', onOutside);
      document.removeEventListener('focusin', onOutside);
      document.removeEventListener('keydown', onEscape);
    };
  }, [languageOpen]);

  return <header className="site-header shell">
    <Link href={localePath('/', locale)} className="wordmark" aria-label={t('Barış home')}>barış<span>.</span></Link>
    <nav aria-label={t('Main navigation')}>{[['/thinking','thinking'],['/experiments','experiments'],['/about','about']].map(([href,label])=><Link href={localePath(href,locale)} key={href} aria-current={pathname.startsWith(href)?'page':undefined}>{t(label)}</Link>)}</nav>
    <div className="header-tools"><span className="edition">{t('independent learning / v0.1')}</span><div className="language-switcher" ref={languageControl}>
      <button className="language-trigger" type="button" ref={languageButton} aria-label={`${t('Change language')}: ${locale==='en'?'English':'Türkçe'}`} aria-expanded={languageOpen} aria-controls={languagePanelId} onClick={()=>setLanguageOpen(open=>!open)} onKeyDown={event=>{
        if (event.key==='ArrowDown') { event.preventDefault(); setLanguageOpen(true); }
      }}><Flag locale={locale}/><span>{locale.toUpperCase()}</span><svg className="language-chevron" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="m1 1 5 5 5-5" stroke="currentColor" strokeWidth="1.5"/></svg></button>
      <div className="language-popover" id={languagePanelId} hidden={!languageOpen} role="group" aria-label={t('Language')} onKeyDown={event=>{
        if (event.key==='ArrowDown'||event.key==='ArrowUp') {
          event.preventDefault();
          const links=Array.from(event.currentTarget.querySelectorAll<HTMLAnchorElement>('a'));
          const current=links.indexOf(document.activeElement as HTMLAnchorElement);
          const next=(current+(event.key==='ArrowDown'?1:-1)+links.length)%links.length;
          links[next]?.focus();
        }
      }}><span className="language-popover-label">{t('Language')}</span>
        {(['en','tr'] as const).map(language=><a key={language} href={`${localePath(pathname,language)}${search?`?${search}`:''}`} lang={language} hrefLang={language} aria-label={language==='en'?'English':'Türkçe'} aria-current={language===locale?'true':undefined} onClick={event=>{
          document.cookie=`${languageCookie}=${language}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol==='https:'?'; Secure':''}`;
          event.currentTarget.href+=window.location.hash;
          closeLanguage();
        }}><Flag locale={language}/><span>{language==='en'?'English':'Türkçe'}</span>{language===locale&&<svg className="language-check" viewBox="0 0 14 12" fill="none" aria-hidden="true"><path d="m1 6 4 4 8-8" stroke="currentColor" strokeWidth="1.5"/></svg>}</a>)}
      </div>
    </div></div>
  </header>;
}
