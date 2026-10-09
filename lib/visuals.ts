import type { Locale } from './i18n';

export const illustrations = {
  puzzle: { file: 'game-puzzle.webp', label: 'match-3 / goals, moves & boosters' },
  journey: { file: 'game-kingdom.webp', label: 'progression / milestones & rewards' },
  economy: { file: 'game-collection.webp', label: 'game economy / currency, lives & boosters' },
  team: { file: 'game-tournament.webp', label: 'social play / shared goals & events' },
  return: { file: 'game-sorting.webp', label: 'return goals / a manageable next step' },
  notebook: { file: 'game-playbench.webp', label: 'the practice / play, notice, question, test' },
  playbench: { file: 'game-playbench.webp', label: 'the playbench / puzzles, characters & ideas' },
  blast: { file: 'game-blast.webp', label: 'tap-to-blast / combinations & power-ups' },
  sorting: { file: 'game-sorting.webp', label: 'object matching / time & space' },
  kingdom: { file: 'game-kingdom.webp', label: 'world building / puzzles & visible progress' },
  tournament: { file: 'game-tournament.webp', label: 'events / teams & milestones' },
  collection: { file: 'game-collection.webp', label: 'collections / sets & duplicates' },
} as const;
export type IllustrationKey = keyof typeof illustrations;

const illustrationLabelsTr: Record<IllustrationKey, string> = {
  puzzle: 'üçlü eşleştirme / hedefler, hamleler ve güçlendiriciler',
  journey: 'ilerleme / aşamalar ve ödüller',
  economy: 'oyun ekonomisi / oyun içi para, canlar ve güçlendiriciler',
  team: 'sosyal oyun / ortak hedefler ve etkinlikler',
  return: 'geri dönüş hedefleri / ulaşılabilir bir sonraki adım',
  notebook: 'alışkanlığım / oyna, fark et, sorgula, dene',
  playbench: 'oyun masası / bulmacalar, karakterler ve fikirler',
  blast: 'dokun ve patlat / birleşimler ve güçlendiriciler',
  sorting: 'nesne eşleştirme / süre ve alan',
  kingdom: 'dünya kurma / bulmacalar ve görünür ilerleme',
  tournament: 'etkinlikler / ekipler ve aşamalar',
  collection: 'koleksiyonlar / setler ve tekrarlar',
};
export function getIllustrationLabel(key: IllustrationKey, locale: Locale) {
  return locale === 'tr' ? illustrationLabelsTr[key] : illustrations[key].label;
}

export const visualReferences = [
  { name: 'DeGods · visual direction', url: 'https://degods.com/', note: 'The supplied illustration reference: delicate handmade pen lines, flat muted colors, quirky miniature details and informal perspective.' },
  { name: 'Dream Games · Royal Match', url: 'https://dreamgames.helpshift.com/hc/en/3-royal-match/faq/21-how-can-i-obtain-and-use-coins/', note: 'Coins, boosters, extra moves and lives.' },
  { name: 'King · Candy Crush Saga', url: 'https://candycrush.zendesk.com/hc/en-us/articles/360000750998-What-are-Boosters', note: 'Puzzle goals and power-ups before, during and after a level.' },
  { name: 'Scopely · MONOPOLY GO!', url: 'https://www.scopely.com/en/news/team-up-with-friends-and-conquer-the-monopoly-go-race-track-with-tycoon-racers', note: 'Four-player teams, shared milestones and event rewards.' },
  { name: 'Supercell · Brawl Stars', url: 'https://supercell.com/en/games/brawlstars/blog/news/incoming-changes-to-the-brawl-pass/', note: 'Seasonal quests and free and paid reward tracks. Historical design update, December 2023.' },
  { name: 'Sensor Tower · State of Gaming 2026', url: 'https://sensortower.com/report/state-of-gaming-2026', note: 'The wider context of engagement, retention and monetization.' },
  { name: 'Unity · Hybrid monetization', url: 'https://unity.com/blog/iap-to-hybrid-monetization', note: 'Different revenue models across free-to-play games.' },
  { name: 'Peak · Toon Blast', url: 'https://peakgames.helpshift.com/hc/en/4-toon-blast/faq/7-what-are-the-special-items/', note: 'Larger block groups create rockets, bombs and disco balls. The starting point for the power-up workshop sketch.' },
  { name: 'Peak · Match Factory', url: 'https://peakgames.helpshift.com/hc/en/16-match-factory/faq/412-how-do-i-play-match-factory/', note: 'Matching three identical objects in a collection bar, with limited time and space. Interpreted as a drawn toy-sorting bench.' },
  { name: 'Dream Games · Royal Match / world & events', url: 'https://www.dreamgames.com/games/royal-match', note: 'Castle-themed puzzle pieces, area renovation and events such as Balloon Rise. Inspiration for the playbench and balloon scene.' },
  { name: 'Dream Games · Royal Kingdom', url: 'https://dreamgames.helpshift.com/hc/en/6-royal-kingdom-1676903479/faq/305-royal-kingdom-basics/', note: 'Puzzle levels earn potions for district tasks. Inspiration for the original castle-building scene.' },
  { name: 'Peak · Match Factory / collections', url: 'https://peakgames.helpshift.com/hc/en/16-match-factory/faq/642-how-can-i-open-duck-chest/', note: 'Duplicate cards contribute to Duck Chests. Inspiration for the original album-and-treasure sketch.' },
];

export function getVisualReferences(locale: Locale) {
  if (locale === 'en') return visualReferences;
  const notes = [
    'Paylaşılan çizim referansı: çok ince el çizimi konturlar, düz ve yumuşak renkler, tuhaf küçük detaylar ve serbest perspektif.',
    'Oyun içi para, güçlendiriciler, ek hamleler ve canlar.',
    'Bulmaca hedefleri ve bölüm öncesinde, sırasında veya sonrasında kullanılan güçlendiriciler.',
    'Dört kişilik ekipler, ortak aşamalar ve etkinlik ödülleri.',
    'Sezonluk görevler ile ücretsiz ve ücretli ödül yolları. Aralık 2023 tarihli tasarım güncellemesi.',
    'Oyuncu etkileşimi, geri dönüşü ve gelir modellerine dair genel çerçeve.',
    'Ücretsiz oynanabilen oyunlarda farklı gelir modelleri.',
    'Büyük blok gruplarından roket, bomba ve disko topu oluşturma. Güçlendirici atölyesi çiziminin çıkış noktası.',
    'Süre ve alan sınırı içinde toplama bölmelerinde üç özdeş nesneyi eşleştirme. Çizimlerde oyuncak tezgâhı olarak yorumlandı.',
    'Kale temalı bulmaca taşları, alan yenileme ve Balloon Rise gibi etkinlikler. Oyun masası ve balon sahnesine ilham verdi.',
    'Bulmaca bölümlerinden kazanılan iksirlerle bölge görevlerini tamamlama. Özgün kale inşa sahnesine ilham verdi.',
    'Tekrar gelen kartların Duck Chest ödüllerine katkısı. Özgün albüm ve sandık çiziminin çıkış noktası.',
  ];
  return visualReferences.map((source, index) => ({ ...source, name: index === 0 ? 'DeGods · görsel yaklaşım' : source.name, note: notes[index] }));
}
