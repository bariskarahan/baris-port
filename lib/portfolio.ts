import type { Locale } from './i18n';

export type Bilingual = { en: string; tr: string };
export const pick = (text: Bilingual, locale: Locale) => text[locale];

export type Study = {
  slug: string;
  title: Bilingual;
  focus: Bilingual;
  status: 'draft';
};

export type Game = {
  slug: string;
  name: string;
  genre: string;
  stage: 'learning' | 'research queue';
  studies: Study[];
};

export type Company = {
  slug: string;
  name: string;
  initials: string;
  description: Bilingual;
  games: Game[];
};

export const companies: Company[] = [
  {
    slug: 'dream-games',
    name: 'dream games',
    initials: 'dg',
    description: {
      en: 'Games being studied through gameplay, player experience, and product decisions.',
      tr: 'Oynanış, oyuncu deneyimi ve ürün kararları üzerinden incelenecek oyunlar.'
    },
    games: [
      {
        slug: 'royal-kingdom',
        name: 'royal kingdom',
        genre: 'match-3 / puzzle',
        stage: 'learning',
        studies: [{
          slug: 'level-design-review',
          title: { en: 'level design — first field study', tr: 'level tasarımı — ilk saha çalışması' },
          focus: { en: 'difficulty, blockers, move pressure, and player experience', tr: 'zorluk, engeller, hamle baskısı ve oyuncu deneyimi' },
          status: 'draft'
        }]
      },
      { slug: 'royal-match', name: 'royal match', genre: 'match-3 / puzzle', stage: 'research queue', studies: [] }
    ]
  },
  {
    slug: 'peak-games',
    name: 'peak games',
    initials: 'pg',
    description: {
      en: 'A research queue for hands-on studies of game systems and player journeys.',
      tr: 'Oyun sistemleri ve oyuncu yolculuklarını uygulamalı incelemek için araştırma listesi.'
    },
    games: [
      { slug: 'toon-blast', name: 'toon blast', genre: 'tap-to-blast / puzzle', stage: 'research queue', studies: [] },
      { slug: 'match-factory', name: 'match factory', genre: 'object matching / puzzle', stage: 'research queue', studies: [] }
    ]
  }
];

export const findCompany = (slug: string) => companies.find(item => item.slug === slug);
export const findGame = (company: Company, slug: string) => company.games.find(item => item.slug === slug);
export const findStudy = (game: Game, slug: string) => game.studies.find(item => item.slug === slug);
