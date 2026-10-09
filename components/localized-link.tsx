import Link from 'next/link';
import { localePath, type Locale } from '@/lib/i18n';

export function LocalizedLink({ locale = 'en', href, ...props }: Omit<React.ComponentProps<typeof Link>, 'href'> & { href: string; locale?: Locale }) {
  return <Link href={localePath(href, locale)} {...props}/>;
}
