export type Locale = 'en' | 'tr';
export const languageCookie = 'notebook-language';

export function stripLocale(path: string) {
  return path === '/tr' ? '/' : path.startsWith('/tr/') ? path.slice(3) : path;
}
export function localePath(path: string, locale: Locale) {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  const canonical = stripLocale(path);
  return locale === 'tr' ? `/tr${canonical === '/' ? '' : canonical}` : canonical;
}

const turkish: Record<string, string> = {
  'thinking': 'düşünceler', 'experiments': 'deneyler', 'about': 'hakkımda',
  'Main navigation': 'Ana menü', 'Barış home': 'Barış ana sayfa', 'Language': 'Dil', 'Change language': 'Dili değiştir',
  'independent learning / v0.1': 'bağımsız öğrenme / v0.1', 'skip to content': 'içeriğe geç',
  'play. notice. question. test.': 'oyna. fark et. sorgula. dene.',
  'play. notice.': 'oyna. fark et.', 'question. test.': 'sorgula. dene.',
  'an independent learning notebook by barış.': 'barış’ın bağımsız öğrenme defteri.',
  'We tried some shit.': 'Bir şeyler denedik.', 'We learned some shit.': 'Bir şeyler öğrendik.',
  'Now we’re trying some new shit.': 'Şimdi yeni şeyler deniyoruz.', 'always a work in progress.': 'her zaman gelişmeye açık.',
  'games, people & product': 'oyunlar, insanlar ve ürün',
  'NO. 001 — AN OPEN NOTEBOOK': 'NO. 001 — AÇIK BİR DEFTER',
  'I play games, study the decisions behind them, and turn what I notice into questions worth testing.': 'Oyun oynuyorum, oyunların arkasındaki kararları inceliyorum ve fark ettiklerimi test etmeye değer sorulara dönüştürüyorum.',
  'open the notebook': 'defteri aç', 'the field map / mobile games': 'keşif haritası / mobil oyunlar',
  'a world of questions.': 'sorularla dolu bir dünya.', 'look closer': 'yakından bak',
  'Explore the illustrated world in full size': 'Çizilmiş dünyayı tam boyutuyla keşfet',
  'A hand-drawn island in an amber frame, connecting a puzzle garden, progression mountain, reward market and cooperative harbor.': 'Amber renkli bir çerçevede; bulmaca bahçesini, ilerleme dağını, ödül pazarını ve ortak limanı birbirine bağlayan, elde çizilmiş bir ada.',
  'Explore the field map': 'Keşif haritasını incele', '01 / the puzzle garden': '01 / bulmaca bahçesi',
  '02 / the mountain trail': '02 / dağ yolu', '03 / the reward market': '03 / ödül pazarı',
  '04 / the shared harbor': '04 / ortak liman', 'the first ten minutes': 'ilk on dakika',
  'a reason to keep going': 'devam etmek için bir neden', 'what feels fair?': 'adil hissettiren ne?', 'better together?': 'birlikte daha iyi mi?',
  'Inside the notebook': 'Defterin içinde', '01 / selected thinking': '01 / seçilmiş bir düşünce',
  'sample note': 'örnek yazı', 'read the teardown': 'incelemeyi oku', 'experiment': 'deney',
  'proposed': 'planlandı', 'see the test plan': 'deney planını gör', '02 / the person behind it': '02 / defterin arkasındaki kişi',
  'curious.': 'meraklı.', 'still growing.': 'hâlâ öğreniyor.',
  'Learning the mobile gaming industry, one question at a time.': 'Her yeni soruyla mobil oyun sektörünü biraz daha öğreniyorum.',
  'Green cacti and purple crystals': 'Yeşil kaktüsler ve mor kristaller', 'a little about barış': 'barış hakkında biraz daha',
  'recent notes': 'son yazılar', 'all thinking': 'tüm düşünceler', 'following my curiosity': 'merakımın peşinde',
  'the practice': 'alışkanlığım', 'Play something. Notice a pattern.': 'Bir oyun oyna. Bir örüntüyü fark et.',
  'Ask a better question. Find a way to test it.': 'Daha iyi bir soru sor. Onu test etmenin bir yolunu bul.',
  'inside the experiment notebook': 'deney defterine göz at',
  '01 / the public notebook': '01 / herkese açık defter', 'thinking.': 'düşünceler.', 'in progress.': 'gelişmeye açık.',
  'Teardowns, observations, and questions about the systems that make us play.': 'Bizi oyun oynamaya yönelten sistemler üzerine incelemeler, gözlemler ve sorular.',
  'Current notes are illustrative samples.': 'Mevcut yazılar açıklayıcı örneklerdir.', 'opening the notebook…': 'defter açılıyor…',
  'search the notebook': 'defterde ara', 'a game, a question, a theme…': 'bir oyun, bir soru, bir konu…',
  'note': 'yazı', 'notes': 'yazı', 'Filter notes by topic': 'Yazıları konuya göre filtrele',
  'a question still waiting to be explored.': 'keşfedilmeyi bekleyen bir soru.',
  'No notes here yet. Try another topic or search.': 'Burada henüz yazı yok. Başka bir konu veya arama dene.',
  'show all notes': 'tüm yazıları göster', 'all': 'tümü', 'teardowns': 'incelemeler', 'observations': 'gözlemler',
  'game psychology': 'oyun psikolojisi', 'growth': 'büyüme', 'monetization': 'gelir modelleri',
  'retention': 'oyuncunun geri dönmesi', 'game economy': 'oyun ekonomisi', 'live ops': 'canlı etkinlikler',
  '02 / the experiment notebook': '02 / deney defteri', 'what if?': 'ya şöyle olsa?', 'let’s find out.': 'birlikte bakalım.',
  'Questions about real human behavior, turned into testable ideas.': 'Gerçek insan davranışlarına dair sorulardan test edilebilir fikirlere.',
  'Sample plans. No experiments run yet.': 'Örnek planlar. Henüz deney yapılmadı.', 'proposed · not run': 'planlandı · uygulanmadı',
  'hypothesis': 'hipotez', 'setup': 'düzenek', 'metric': 'ölçüt', 'result': 'sonuç', 'lesson to look for': 'öğrenmek istediğim',
  'Not run. No outcome or supporting data yet.': 'Uygulanmadı. Henüz sonuç veya destekleyici veri yok.',
  'A good test leaves you with a better question.': 'İyi bir deney, geride daha iyi bir soru bırakır.',
  'incentives': 'teşvikler', 'social mechanics': 'sosyal mekanikler',
  '03 / the person behind the notebook': '03 / defterin arkasındaki kişi',
  'Learning how games and people work. Documenting the questions along the way.': 'Oyunları ve insanları anlamayı öğreniyorum. Yol boyunca sorularımı kaydediyorum.',
  'barış / a work in progress': 'barış / öğrenmeye devam ediyor', 'play. look closer.': 'oyna. yakından bak.',
  'hi, i’m barış.': 'merhaba, ben barış.', 'I play. Then I ask why.': 'Oynuyorum. Sonra neden diye soruyorum.',
  'I recently graduated in business administration. Now I’m building my understanding of the mobile gaming industry, with a focus on product, growth, marketing, and player behavior.': 'İşletme bölümünden yeni mezun oldum. Şimdi ürün, büyüme, pazarlama ve oyuncu davranışlarına odaklanarak mobil oyun sektörünü anlamaya çalışıyorum.',
  'I play games, study their systems, and ask why particular decisions might work. Then I write down what I noticed, the assumptions I’m making, and how I’d test them.': 'Oyun oynuyorum, oyunların sistemlerini inceliyorum ve belirli kararların neden işe yarayabileceğini soruyorum. Ardından gözlemlerimi, varsayımlarımı ve bunları nasıl test edebileceğimi yazıyorum.',
  'This site is a record of that process. It will grow into a body of research, proposed experiments, and lessons as I develop my thinking.': 'Bu site, o sürecin bir kaydı. Düşüncelerim geliştikçe araştırmalar, deney önerileri ve öğrendiklerimle büyüyecek.',
  'what i’m practicing': 'üzerinde çalıştıklarım', 'Observation before explanation.': 'Açıklamadan önce gözlem.',
  'Hypotheses that can be challenged.': 'Sorgulanabilir hipotezler.', 'Metrics that reflect the player experience.': 'Oyuncu deneyimini yansıtan ölçütler.',
  'Learning in public, including uncertainty.': 'Belirsizlikleri de paylaşarak öğrenmek.',
  'visual references / the systems i’m studying': 'görsel referanslar / incelediğim sistemler',
  'The illustrations interpret mobile game mechanics in an original style. They are not official game screenshots. The notebook’s analyses and experiment plans remain illustrative samples.': 'Çizimler mobil oyun mekaniklerini özgün bir tarzda yorumlar. Resmî oyun ekran görüntüleri değildir. Defterdeki analizler ve deney planları açıklayıcı örneklerdir.',
  'back to the notebook': 'deftere dön', 'by barış': 'yazan: barış',
  'sample analysis / Illustrative content for v0.1. No experiment has been run; these are hypotheses, not research findings.': 'örnek analiz / v0.1 için açıklayıcı içerik. Henüz deney yapılmadı; bunlar araştırma bulguları değil, hipotezlerdir.',
  'in this note': 'bu yazıda', 'Article contents': 'Yazının içindekiler', 'keep questioning': 'sorgulamaya devam',
  'A working thought, open to a better explanation.': 'Daha iyi bir açıklamaya açık, gelişen bir düşünce.',
  'see the experiment notebook': 'deney defterini gör', 'read the note': 'yazıyı oku', 'view all': 'tümünü gör',
  'a working model': 'bir çalışma modeli', 'onboarding': 'ilk deneyim', 'motivation': 'motivasyon',
  'first move': 'ilk hamle', 'small win': 'küçük başarı', 'one more level': 'bir bölüm daha',
  'effort': 'emek', 'reward': 'ödül', 'perceived value': 'algılanan değer',
  'a goal': 'bir hedef', 'a little progress': 'biraz ilerleme', 'a reason to return': 'dönmek için bir neden',
  'observe → question → test': 'gözlemle → sorgula → dene',
  '404 / a missing page': '404 / kayıp bir sayfa', 'this path is still': 'bu yol henüz', 'unexplored.': 'keşfedilmedi.',
  'note not found': 'yazı bulunamadı',
  'barış — a notebook on games & people': 'barış — oyunlar ve insanlar üzerine bir defter',
  'Learning mobile game product thinking through observations, teardowns, and proposed experiments.': 'Gözlemler, incelemeler ve deney önerileriyle mobil oyunlarda ürün düşüncesini öğreniyorum.',
};

export function translate(locale: Locale, text: string) {
  return locale === 'tr' ? turkish[text] ?? text : text;
}
