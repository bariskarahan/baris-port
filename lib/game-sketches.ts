import type { Locale } from './i18n';
import type { IllustrationKey } from './visuals';

// Original concepts, informed by the official game and help-center pages below.
export const gameSketches = [
  {
    id: 'puzzle', art: 'puzzle', tone: 'aqua',
    source: 'Dream Games · Royal Match', url: 'https://www.dreamgames.com/games/royal-match',
    href: '/thinking/royal-match-first-ten-minutes',
    en: { title: 'one move. a little magic.', mechanic: 'match-3 / first moves', description: 'A tile garden, a clear goal, and a booster waiting to be discovered.', question: 'Can the first small win teach the next move?', alt: 'An original illustrated match-3 garden with colorful tiles, a booster hammer and two little explorers.' },
    tr: { title: 'bir hamle. küçük bir sihir.', mechanic: 'üçlü eşleştirme / ilk hamleler', description: 'Renkli bir taş bahçesi, net bir hedef ve keşfedilmeyi bekleyen bir güçlendirici.', question: 'İlk küçük başarı, bir sonraki hamleyi öğretebilir mi?', alt: 'Renkli taşlar, güçlendirici çekiç ve iki küçük kâşifle çizilmiş özgün bir üçlü eşleştirme bahçesi.' },
  },
  {
    id: 'blast', art: 'blast', tone: 'peach',
    source: 'Peak · Toon Blast', url: 'https://peakgames.helpshift.com/hc/en/4-toon-blast/faq/7-what-are-the-special-items/',
    href: '/thinking/royal-match-first-ten-minutes',
    en: { title: 'a bigger little blast.', mechanic: 'tap-to-blast / power-ups', description: 'Colored blocks, a rocket, a bomb, and a tiny workshop for bigger combinations.', question: 'What makes a stronger combination easy to anticipate?', alt: 'An original hand-drawn block-blasting workshop with a colorful grid, rocket, bomb, disco ball and tiny animal mechanics.' },
    tr: { title: 'küçük bloklar, büyük etki.', mechanic: 'dokun ve patlat / güçlendiriciler', description: 'Renkli bloklar, roket, bomba ve daha güçlü birleşimler için küçük bir atölye.', question: 'Daha güçlü bir birleşimin etkisi nasıl önceden anlaşılır?', alt: 'Renkli blok tablosu, roket, bomba, disko topu ve küçük hayvan ustalarıyla çizilmiş özgün bir patlatma atölyesi.' },
  },
  {
    id: 'sorting', art: 'sorting', tone: 'lilac',
    source: 'Peak · Match Factory', url: 'https://peakgames.helpshift.com/hc/en/16-match-factory/faq/412-how-do-i-play-match-factory/',
    href: '/thinking/losing-and-retention',
    en: { title: 'three of a tiny kind.', mechanic: 'object matching / time & space', description: 'A tray of toys, matching objects, a collection rack, and an hourglass.', question: 'When does a satisfying search start to feel rushed?', alt: 'An original illustrated toy-sorting tray with ducks, boats, apples, a collection rack, an hourglass and a rabbit explorer.' },
    tr: { title: 'üç küçük eş.', mechanic: 'nesne eşleştirme / süre ve alan', description: 'Oyuncaklarla dolu bir tepsi, eş nesneler, toplama bölmeleri ve bir kum saati.', question: 'Keyifli bir arayış ne zaman aceleye dönüşür?', alt: 'Ördekler, tekneler, elmalar, toplama bölmeleri, kum saati ve tavşan kâşifle çizilmiş özgün bir oyuncak eşleştirme tepsisi.' },
  },
  {
    id: 'kingdom', art: 'kingdom', tone: 'peach',
    source: 'Dream Games · Royal Kingdom', url: 'https://dreamgames.helpshift.com/hc/en/6-royal-kingdom-1676903479/faq/305-royal-kingdom-basics/',
    href: '/thinking/progression-and-motivation',
    en: { title: 'a puzzle. then a place.', mechanic: 'progression / building a world', description: 'Puzzle pieces become potions, construction plans, and a castle taking shape.', question: 'Does visible change make progress feel more meaningful?', alt: 'An original hand-drawn castle under construction, with a puzzle board, potion bottles, a little explorer and a wizard.' },
    tr: { title: 'bir bulmaca. sonra bir dünya.', mechanic: 'ilerleme / dünya kurma', description: 'Bulmacadan iksirlere, inşa planlarına ve şekillenen bir kaleye uzanan yol.', question: 'Gözle görülür değişim, ilerlemeyi daha anlamlı kılar mı?', alt: 'Bulmaca tablosu, iksir şişeleri, küçük bir kâşif ve büyücüyle çizilmiş özgün bir kale inşa sahnesi.' },
  },
  {
    id: 'tournament', art: 'tournament', tone: 'aqua',
    source: 'Dream Games · Royal Match', url: 'https://www.dreamgames.com/games/royal-match',
    href: '/experiments#small-groups',
    en: { title: 'up, up. together.', mechanic: 'events / teams & milestones', description: 'Balloon racers, shared contributions, and a treasure chest at the next milestone.', question: 'What helps a small contribution feel useful to the team?', alt: 'An original illustrated balloon tournament with three animal explorers, a shared treasure chest and a star milestone trail.' },
    tr: { title: 'yukarı. hep birlikte.', mechanic: 'etkinlikler / ekipler ve aşamalar', description: 'Balon yarışçıları, ortak katkılar ve bir sonraki aşamada bekleyen ödül sandığı.', question: 'Küçük bir katkı, ekibe nasıl faydalı hissettirilir?', alt: 'Üç hayvan kâşif, ortak ödül sandığı ve yıldızlı aşama yoluyla çizilmiş özgün bir balon turnuvası.' },
  },
  {
    id: 'collection', art: 'collection', tone: 'lilac',
    source: 'Peak · Match Factory', url: 'https://peakgames.helpshift.com/hc/en/16-match-factory/faq/642-how-can-i-open-duck-chest/',
    href: '/thinking/fair-game-economy',
    en: { title: 'the missing little card.', mechanic: 'collections / sets & duplicates', description: 'An unfinished album, a familiar duplicate, and a chest full of possibilities.', question: 'Can a duplicate still feel like progress?', alt: 'An original hand-drawn collectible-card album with animal portraits, empty pockets, duplicate cards and an open treasure chest.' },
    tr: { title: 'eksik kalan küçük kart.', mechanic: 'koleksiyonlar / setler ve tekrarlar', description: 'Tamamlanmamış bir albüm, tanıdık bir tekrar kartı ve ihtimallerle dolu bir sandık.', question: 'Tekrar gelen bir kart da ilerleme hissi verebilir mi?', alt: 'Hayvan portreleri, boş bölmeler, tekrar kartları ve açık bir ödül sandığıyla çizilmiş özgün bir koleksiyon albümü.' },
  },
] as const satisfies readonly { id: string; art: IllustrationKey; tone: string; source: string; url: string; href: string; en: { title: string; mechanic: string; description: string; question: string; alt: string }; tr: { title: string; mechanic: string; description: string; question: string; alt: string } }[];

export type GameSketchId = typeof gameSketches[number]['id'];
export function getGameSketch(id: GameSketchId, locale: Locale) {
  const sketch = gameSketches.find(item => item.id === id)!;
  return { ...sketch, copy: sketch[locale] };
}
