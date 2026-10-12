// Monoline pen strokes, rather than font outlines: each letter can be written
// in the order a pen would actually travel across the page.
type Glyph = { width: number; strokes: string[] };
const glyph = (width: number, ...strokes: string[]): Glyph => ({ width, strokes });
const alphabet: Record<string, Glyph> = {
  a: glyph(13, 'M10 9C4 5 0 10 2 16C3 21 8 19 10 12', 'M10 8L10 18Q10 20 12 19'),
  b: glyph(13, 'M2 19C2 12 1 -2 4 1Q7 4 2 12', 'M2 13C5 5 12 8 11 14C10 20 4 21 2 17Q3 19 13 17'),
  c: glyph(12, 'M10 9C5 5 0 11 2 16Q4 22 11 17'),
  d: glyph(13, 'M10 9C4 5 0 11 2 16C4 22 10 19 10 12', 'M11 0L10 19'),
  e: glyph(12, 'M2 13Q13 13 10 9C6 4 0 11 2 16Q5 22 11 17'),
  f: glyph(10, 'M8 2Q3 -2 3 7L2 23', 'M0 10L9 9'),
  g: glyph(13, 'M10 9C4 5 0 10 2 16Q6 23 10 12', 'M11 8L10 23C9 30 1 28 2 24'),
  h: glyph(13, 'M2 19C2 12 1 -2 4 1Q7 4 2 12', 'M2 13Q8 3 10 11L10 17Q10 21 13 18'),
  i: glyph(6, 'M3 9L2 19', 'M3 3L3.3 3.4'),
  j: glyph(7, 'M5 9L4 24Q2 29 -1 25', 'M5 3L5.3 3.4'),
  k: glyph(13, 'M2 1L1 19', 'M11 8L3 14L11 20'),
  l: glyph(7, 'M2 13C7 7 7 -2 4 1C1 4 1 15 3 18Q4 21 7 18'),
  m: glyph(19, 'M1 9L1 19L2 12Q6 5 8 11L8 19L9 12Q15 4 16 12L17 19'),
  n: glyph(13, 'M1 9L1 19L2 12Q9 3 10 12L11 19'),
  o: glyph(13, 'M7 8C0 6 -1 18 5 20C12 21 14 7 7 8'),
  p: glyph(13, 'M2 9L1 28', 'M2 12C7 5 12 8 11 14Q9 21 2 18'),
  q: glyph(13, 'M10 9C4 5 0 11 2 16Q5 22 10 13', 'M11 9L10 28L14 25'),
  r: glyph(10, 'M0 13Q3 11 3 8L2 19M3 10Q6 6 9 10L11 11'),
  s: glyph(12, 'M10 9C5 5 -1 11 5 13C14 15 10 23 1 18'),
  t: glyph(10, 'M5 3L4 16Q4 22 9 18', 'M0 10L10 9'),
  u: glyph(13, 'M2 9L1 15Q1 24 10 16', 'M11 9L10 19'),
  v: glyph(13, 'M1 9L5 20Q9 14 12 8'),
  w: glyph(19, 'M1 9L3 20L9 10L11 20L17 8'),
  x: glyph(12, 'M1 9L11 19', 'M11 9L1 19'),
  y: glyph(13, 'M1 9L5 19L11 9', 'M11 9Q8 24 2 28'),
  z: glyph(12, 'M1 9L11 8L1 19L11 18'),
  '.': glyph(6, 'M2 19L2.5 19.4'),
  '?': glyph(13, 'M1 5C1 -1 12 -1 11 6Q10 9 6 11L5 14', 'M5 19L5.4 19.4'),
  ' ': glyph(8),
};
alphabet['ı'] = glyph(6, 'M3 9L2 19');
alphabet['ç'] = glyph(12, ...alphabet.c.strokes, 'M6 21L8 24L4 26');
alphabet['ş'] = glyph(12, ...alphabet.s.strokes, 'M6 21L8 24L4 26');
alphabet['ğ'] = glyph(13, ...alphabet.g.strokes, 'M4 3Q7 7 10 3');
alphabet['ö'] = glyph(13, ...alphabet.o.strokes, 'M4 3L4.3 3.4', 'M10 3L10.3 3.4');
alphabet['ü'] = glyph(13, ...alphabet.u.strokes, 'M4 3L4.3 3.4', 'M10 3L10.3 3.4');

export type PenStroke = { d: string; transform?: string; start: number; duration: number; width: number };
export function writeWords(text: string, x: number, y: number, scale: number, start: number) {
  const strokes: PenStroke[] = [];
  let cursor = 0;
  let time = start;
  Array.from(text.toLowerCase()).forEach((character, index) => {
    const letter = alphabet[character] ?? alphabet[' '];
    // Deterministic variation keeps replay stable while repeated letters no
    // longer look stamped from the same font. Ascenders loop, baselines drift,
    // and the pen pauses briefly when it lifts for a dot or a crossbar.
    const wobble = Math.sin(index * 2.7) * 1.05 + Math.sin(index * .65) * .8;
    const stretchX = .95 + Math.sin(index * 1.37) * .07;
    const stretchY = 1 + Math.cos(index * 2.1) * .09;
    const slant = -8 + Math.sin(index * 1.9) * 4;
    letter.strokes.forEach((d, strokeIndex) => {
      const pace = .9 + Math.sin(index * 2.3 + strokeIndex) * .18;
      const duration = Math.round((d.length < 22 ? 95 : Math.min(285, 120 + d.length * 1.05)) * pace);
      strokes.push({ d, transform: `translate(${x + cursor * scale} ${y + wobble * scale}) scale(${scale * stretchX} ${scale * stretchY}) skewX(${slant}) rotate(${Math.sin(index * 1.9) * 3} 6 12)`, start: time, duration, width: 1.45 + Math.sin(index * 1.4 + strokeIndex * 2) * .16 });
      time += duration + (strokeIndex ? 62 : 28);
    });
    cursor += letter.width * stretchX + 1.45 + Math.cos(index * 1.7) * .65;
    time += character === ' ' ? 145 : 35 + (1 + Math.sin(index * 2.6)) * 18;
  });
  return { strokes, end: time };
}

export function createPenSequence(locale: 'en' | 'tr') {
  const title = writeWords(locale === 'tr' ? 'yakından bak.' : 'look closer.', 360, 120, 3.25, 650);
  const underline: PenStroke = { d: 'M359 201C396 207 452 204 491 205S600 201 670 198', start: title.end + 120, duration: 660, width: 3.7 };
  const leftStart = underline.start + underline.duration + 340;
  const left: PenStroke[] = [
    { d: 'M391 226C355 232 313 259 293 287S243 359 263 427', start: leftStart, duration: 1150, width: 4.2 },
    { d: 'M239 405Q255 421 264 432Q273 411 281 401', start: leftStart + 1150, duration: 300, width: 4.5 },
  ];
  const note = writeWords(locale === 'tr' ? 'bir hamle daha?' : 'one more move?', 113, 586, 2.05, leftStart + 1660);
  const rightStart = note.end + 360;
  const right: PenStroke[] = [
    { d: 'M735 205C775 216 807 242 825 269S865 331 824 385', start: rightStart, duration: 1150, width: 4.2 },
    { d: 'M817 356L822 390L852 375', start: rightStart + 1150, duration: 300, width: 4.8 },
  ];
  const final = writeWords(locale === 'tr' ? 'yeni bir soru.' : 'a new question.', 685, 654, 2.05, rightStart + 1660);
  const last: PenStroke = { d: 'M685 707Q815 718 980 704', start: final.end + 170, duration: 650, width: 3.8 };
  return { strokes: [...title.strokes, underline, ...left, ...note.strokes, ...right, ...final.strokes, last], duration: last.start + last.duration + 400 };
}
