import type { Metadata } from 'next';
import './globals.css';
import './portfolio.css';
import { Header, Footer } from '@/components/site';
import { getLocale } from '@/lib/request-locale';
import { translate } from '@/lib/i18n';
export async function generateMetadata():Promise<Metadata>{const locale=await getLocale();return {title:{default:translate(locale,'barış — mobile gaming product portfolio'),template:'%s — barış'},description:translate(locale,'First-hand mobile game studies, product analysis and testable design proposals.')};}
export default async function RootLayout({children}:{children:React.ReactNode}){const locale=await getLocale();return <html lang={locale}><body><a className="skip-link" href="#main">{translate(locale,'skip to content')}</a><Header locale={locale}/>{children}<Footer locale={locale}/></body></html>}
