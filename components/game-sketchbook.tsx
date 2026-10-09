import { LocalizedLink as Link } from './localized-link';
import { Label } from './site';
import { gameSketches, getGameSketch, type GameSketchId } from '@/lib/game-sketches';
import { illustrations } from '@/lib/visuals';
import type { Locale } from '@/lib/i18n';

function OpenIcon() {
  return <svg className="sketch-open-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M4 12 12 4M4 4h8v8"/></svg>;
}

export function GameSketch({ id, locale, inline = false }: { id: GameSketchId; locale: Locale; inline?: boolean }) {
  const sketch = getGameSketch(id, locale);
  const tr = locale === 'tr';
  return <article className={`game-sketch sketch-tone-${sketch.tone}${inline ? ' sketch-inline' : ''}`}>
    <a className="sketch-image-link" href={`/images/${illustrations[sketch.art].file}`} target="_blank" rel="noopener noreferrer" aria-label={`${sketch.copy.title} — ${tr ? 'çizimi büyüt' : 'open illustration'}`}>
      <span className="sketch-number" aria-hidden="true">0{gameSketches.findIndex(item => item.id === id) + 1}</span>
      <img src={`/images/${illustrations[sketch.art].file}`} alt={sketch.copy.alt} width="900" height="900" loading="lazy"/>
      <span className="sketch-enlarge" aria-hidden="true"><OpenIcon/></span>
    </a>
    <div className="sketch-copy"><Label>{sketch.copy.mechanic}</Label><h3>{sketch.copy.title}</h3><p>{sketch.copy.description}</p><p className="sketch-question">{sketch.copy.question}</p>
      <div className="sketch-source"><span>{tr ? 'ilham /' : 'inspiration /'}</span> <a href={sketch.url} target="_blank" rel="noopener noreferrer">{sketch.source} <OpenIcon/></a></div>
      {!inline && <Link locale={locale} href={sketch.href} className="small-link">{tr ? 'sorunun peşinden git' : 'follow the question'} →</Link>}
    </div>
  </article>;
}

export function GameSketchbook({ locale }: { locale: Locale }) {
  const tr = locale === 'tr';
  return <section className="shell game-sketchbook" aria-labelledby="sketchbook-title">
    <div className="sketchbook-heading"><div><Label>{tr ? 'oyun eskizleri / Peak & Dream Games’den ilhamla' : 'game sketches / inspired by Peak & Dream Games'}</Label><h2 id="sketchbook-title">{tr ? 'küçük oyunlar. büyük sorular.' : 'small games. big questions.'}</h2></div><p>{tr ? 'Bloklar, oyuncaklar, kaleler, yarışlar. Mobil oyun mekaniklerini kendi çizim dünyamda keşfediyorum.' : 'Blocks, toys, castles, races. Exploring mobile game mechanics in my own illustrated world.'}</p></div>
    <div className="game-sketch-grid">{gameSketches.map(sketch => <GameSketch key={sketch.id} id={sketch.id} locale={locale}/>)}</div>
    <p className="sketchbook-note">{tr ? 'Özgün konsept çizimleri. Her sahne, üzerine düşünülecek bir oyuncu davranışı sorusu taşıyor.' : 'Original concept illustrations. Each scene holds a player-behavior question to think about.'}</p>
  </section>;
}
