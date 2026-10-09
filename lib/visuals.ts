export const illustrations = {
  puzzle: { file: 'mobile-puzzle.webp', label: 'match-3 / goals, moves & boosters' },
  journey: { file: 'mobile-journey.webp', label: 'progression / milestones & rewards' },
  economy: { file: 'mobile-journey.webp', label: 'game economy / currency, lives & rewards' },
  team: { file: 'mobile-team.webp', label: 'social play / shared goals & events' },
} as const;
export type IllustrationKey = keyof typeof illustrations;

export const visualReferences = [
  { name: 'DeGods · illustration style', url: 'https://degods.com/', note: 'Flat comic colors, hand-inked outlines, and cactus accents. Visual style reference.' },
  { name: 'Dream Games · Royal Match', url: 'https://dreamgames.helpshift.com/hc/en/3-royal-match/faq/21-how-can-i-obtain-and-use-coins/', note: 'Coins, boosters, extra moves and lives.' },
  { name: 'King · Candy Crush Saga', url: 'https://candycrush.zendesk.com/hc/en-us/articles/360000750998-What-are-Boosters', note: 'Puzzle goals and power-ups before, during and after a level.' },
  { name: 'Scopely · MONOPOLY GO!', url: 'https://www.scopely.com/en/news/team-up-with-friends-and-conquer-the-monopoly-go-race-track-with-tycoon-racers', note: 'Four-player teams, shared milestones and event rewards.' },
  { name: 'Supercell · Brawl Stars', url: 'https://supercell.com/en/games/brawlstars/blog/news/incoming-changes-to-the-brawl-pass/', note: 'Seasonal quests and free and paid reward tracks. Historical design update, December 2023.' },
  { name: 'Sensor Tower · State of Gaming 2026', url: 'https://sensortower.com/report/state-of-gaming-2026', note: 'The wider context of engagement, retention and monetization.' },
  { name: 'Unity · Hybrid monetization', url: 'https://unity.com/blog/iap-to-hybrid-monetization', note: 'Different revenue models across free-to-play games.' },
];
