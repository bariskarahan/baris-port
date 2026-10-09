'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Header(){
  const pathname=usePathname();
  return <header className="site-header shell">
    <Link href="/" className="wordmark" aria-label="Barış home">barış<span>.</span></Link>
    <nav aria-label="Main navigation">{[['/thinking','thinking'],['/experiments','experiments'],['/about','about']].map(([href,label])=><Link href={href} key={href} aria-current={pathname.startsWith(href)?'page':undefined}>{label}</Link>)}</nav>
    <span className="edition">independent learning / v0.1</span>
  </header>
}
