import type { Metadata } from 'next';
import '@fontsource/playfair-display/900.css';
import './globals.css';
import { Header, Footer } from '@/components/site';
import { getLocale } from '@/lib/request-locale';
import { translate } from '@/lib/i18n';
export async function generateMetadata():Promise<Metadata>{const locale=await getLocale();return {title:{default:translate(locale,'barış — a notebook on games & people'),template:'%s — barış'},description:translate(locale,'Learning mobile game product thinking through observations, teardowns, and proposed experiments.')};}
export default async function RootLayout({children}:{children:React.ReactNode}){const locale=await getLocale();return <html lang={locale}><body><a className="skip-link" href="#main">{translate(locale,'skip to content')}</a><Header locale={locale}/>{children}<Footer locale={locale}/></body></html>}
