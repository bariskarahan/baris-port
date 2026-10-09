import type { Locale } from './i18n';

export const illustrations = {
  world: { file: 'notebook-world.webp', label: 'a world of questions / an illustrated field map' },
  puzzle: { file: 'mobile-puzzle.webp', label: 'match-3 / goals, moves & boosters' },
  journey: { file: 'mobile-journey.webp', label: 'progression / milestones & rewards' },
  economy: { file: 'mobile-economy.webp', label: 'game economy / currency, lives & boosters' },
  team: { file: 'mobile-team.webp', label: 'social play / shared goals & events' },
  return: { file: 'mobile-return.webp', label: 'return goals / a manageable next step' },
  notebook: { file: 'learning-notebook.webp', label: 'the practice / play, notice, question, test' },
} as const;
export type IllustrationKey = keyof typeof illustrations;

const illustrationLabelsTr: Record<IllustrationKey, string> = {
  world: 'sorularla dolu bir dünya / çizilmiş keşif haritası',
  puzzle: 'üçlü eşleştirme / hedefler, hamleler ve güçlendiriciler',
  journey: 'ilerleme / aşamalar ve ödüller',
  economy: 'oyun ekonomisi / oyun içi para, canlar ve güçlendiriciler',
  team: 'sosyal oyun / ortak hedefler ve etkinlikler',
  return: 'geri dönüş hedefleri / ulaşılabilir bir sonraki adım',
  notebook: 'alışkanlığım / oyna, fark et, sorgula, dene',
};
export function getIllustrationLabel(key: IllustrationKey, locale: Locale) {
  return locale === 'tr' ? illustrationLabelsTr[key] : illustrations[key].label;
}

export const visualReferences = [
  { name: 'DeGods · visual direction', url: 'https://degods.com/', note: 'The supplied world-map reference: fine handmade ink lines, amber frames, turquoise water, coral details, and miniature scenes.' },
  { name: 'Dream Games · Royal Match', url: 'https://dreamgames.helpshift.com/hc/en/3-royal-match/faq/21-how-can-i-obtain-and-use-coins/', note: 'Coins, boosters, extra moves and lives.' },
  { name: 'King · Candy Crush Saga', url: 'https://candycrush.zendesk.com/hc/en-us/articles/360000750998-What-are-Boosters', note: 'Puzzle goals and power-ups before, during and after a level.' },
  { name: 'Scopely · MONOPOLY GO!', url: 'https://www.scopely.com/en/news/team-up-with-friends-and-conquer-the-monopoly-go-race-track-with-tycoon-racers', note: 'Four-player teams, shared milestones and event rewards.' },
  { name: 'Supercell · Brawl Stars', url: 'https://supercell.com/en/games/brawlstars/blog/news/incoming-changes-to-the-brawl-pass/', note: 'Seasonal quests and free and paid reward tracks. Historical design update, December 2023.' },
  { name: 'Sensor Tower · State of Gaming 2026', url: 'https://sensortower.com/report/state-of-gaming-2026', note: 'The wider context of engagement, retention and monetization.' },
  { name: 'Unity · Hybrid monetization', url: 'https://unity.com/blog/iap-to-hybrid-monetization', note: 'Different revenue models across free-to-play games.' },
];

export function getVisualReferences(locale: Locale) {
  if (locale === 'en') return visualReferences;
  const notes = [
    'Paylaşılan dünya haritası: ince el çizimi konturlar, amber çerçeveler, turkuaz su, mercan detaylar ve küçük sahneler.',
    'Oyun içi para, güçlendiriciler, ek hamleler ve canlar.',
    'Bulmaca hedefleri ve bölüm öncesinde, sırasında veya sonrasında kullanılan güçlendiriciler.',
    'Dört kişilik ekipler, ortak aşamalar ve etkinlik ödülleri.',
    'Sezonluk görevler ile ücretsiz ve ücretli ödül yolları. Aralık 2023 tarihli tasarım güncellemesi.',
    'Oyuncu etkileşimi, geri dönüşü ve gelir modellerine dair genel çerçeve.',
    'Ücretsiz oynanabilen oyunlarda farklı gelir modelleri.',
  ];
  return visualReferences.map((source, index) => ({ ...source, name: index === 0 ? 'DeGods · görsel yaklaşım' : source.name, note: notes[index] }));
}
