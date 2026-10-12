import MarkerDemo from '@/components/marker-demo';
import { getLocale } from '@/lib/request-locale';

export const metadata = { title: 'deneme — a little closer' };

export default async function Deneme() {
  const locale = await getLocale();
  const tr = locale === 'tr';
  return <main id="main" className="shell page-main marker-page">
    <div className="marker-intro">
      <div><span className="eyebrow">04 / {tr ? 'bir görsel denemesi' : 'a visual experiment'}</span><h1>{tr ? 'biraz daha' : 'a little'}<br/><span>{tr ? 'yakından.' : 'closer.'}</span></h1></div>
      <p>{tr ? 'Bir görüntü. Bir sarı kalem. Düşünceler, tam burada, çizgi çizgi beliriyor.' : 'One image. One yellow pen. Thoughts taking shape, right here, one stroke at a time.'}</p>
    </div>
    <MarkerDemo locale={locale}/>
    <div className="marker-footnote"><span>{tr ? 'gözlemle. işaretle. sor.' : 'notice. mark. question.'}</span><p>{tr ? 'Bazen bir düşünce, küçük bir notla başlar.' : 'Sometimes a thought begins with a little note.'}</p><span>deneme / 001</span></div>
  </main>;
}
