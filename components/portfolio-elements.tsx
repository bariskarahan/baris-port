import { LocalizedLink as Link } from '@/components/localized-link';
import type { Locale } from '@/lib/i18n';
import type { Game } from '@/lib/portfolio';

export function PortfolioCrumbs({ locale, items }: {locale: Locale; items: {label: string; href?: string}[]}) {
  return <nav className="portfolio-crumbs" aria-label={locale === 'tr' ? 'sayfa yolu' : 'breadcrumb'}>
    {items.map((item, index) => <span key={index}>{index > 0 && <span aria-hidden="true">/</span>}
      {item.href ? <Link locale={locale} href={item.href}>{item.label}</Link> : <strong>{item.label}</strong>}
    </span>)}
  </nav>;
}

export function PortfolioState({locale, stage}: {locale: Locale; stage: Game['stage'] | 'draft'}) {
  const labels = {
    learning: {en: 'learning in progress', tr: 'öğrenme sürüyor'},
    'research queue': {en: 'research queue', tr: 'araştırma listesinde'},
    draft: {en: 'draft · not a tested result', tr: 'taslak · test sonucu değil'}
  };
  return <span className="portfolio-state">{labels[stage][locale]}</span>;
}
