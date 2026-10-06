import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/site';
export const metadata:Metadata={title:{default:'barış — a notebook on games & people',template:'%s — barış'},description:'Learning mobile game product thinking through observations, teardowns, and proposed experiments.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">skip to content</a><Header/>{children}<Footer/></body></html>}
