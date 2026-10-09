import { articles, experiments, type Article } from './content';
import type { Locale } from './i18n';

const translations: Pick<Article, 'title' | 'summary' | 'game' | 'readTime' | 'sections'>[] = [
  {
    title: 'royal match’in ilk 10 dakikası neden işe yarıyor?',
    summary: 'Erken gelen başarılar, fark ettirmeden öğretmek ve bir bölüm daha oynamayı doğal hissettiren ivme üzerine.',
    game: 'royal match', readTime: '6 dk okuma',
    sections: [
      { title: 'bağlam', body: 'İlk oturumun zor bir görevi var: öğrenmeyi bir iş gibi hissettirmeden kuralları öğretmek. Bu örnek inceleme, bir bulmaca oyununun yeni bir oyuncunun kendine güvenmesini nasıl sağlayabileceğini ele alıyor. Bunlar örnek yorumlar; Royal Match oyuncu verileriyle doğrulanmış bulgular değil.' },
      { title: 'gözlem', body: 'İlk bölümler, sıradaki eylemi kolay anlaşılır hâle getiriyor gibi görünüyor. Açık bir hedef, küçük bir oyun alanı ve sık geri bildirim, oyuncunun aynı anda vermesi gereken kararları azaltıyor. Oyuncu tüm mekaniklere hâkim olmadan önce ilerlediğini hissediyor.' },
      { title: 'neden önemli?', body: 'Kendini yeterli hisseden oyuncunun devam etmek için bir nedeni var. Çalışma varsayımım şu: başlangıçtaki güven, ödülün kendisi kadar önemli olabilir; kazanmak oyuncuya “Bunu anlıyorum” diyor. Asıl soru, bu güvenin hangi bölümünün ikinci oturuma dönüşü sağladığı.' },
      { title: 'hipotez', body: 'İlk üç bölüm her seferinde tek bir mekanik tanıtır ve bağımsız keşfi ödüllendirirse, daha uzun ve talimat ağırlıklı bir öğreticiye kıyasla daha fazla yeni oyuncu başlangıç sürecini tamamlayabilir.' },
      { title: 'önerilen deney', body: 'Uygun yeni oyuncuları rastgele iki gruba ayır: mevcut öğretici ve daha kısa yönlendirmelerle bölüm başına tek mekanik içeren sürüm. Ödülleri ve zorluk düzeyini karşılaştırılabilir tut. İki grubu yedi gün boyunca ölç; başlamadan önce örneklem büyüklüğünü ve durdurma kuralını belirle.' },
      { title: 'başarı ölçütü', body: 'Birincil ölçüt: ilk oturumda 10. bölümü tamamlayan yeni oyuncuların oranı. İkincil ölçüt: ertesi gün geri dönüş oranı. Koruyucu ölçütler: ilk oturumda bırakma, tekrarlanan başarısız denemeler ve yanlışlıkla yapılan satın almalar. Daha hızlı tamamlamak tek başına daha iyi bir deneyim olduğunu göstermez.' },
      { title: 'olası risk', body: 'Daha az talimat bazı oyuncuların kafasını karıştırabilir; özellikle üçlü eşleştirme oyunlarına yabancı olanların. İzin alınmış veriler varsa sonuçları önceki bulmaca deneyimine göre incele ve ilk oturumdan sonra kaybolan bir fayda olup olmadığına bak.' },
      { title: 'çıkarım', body: 'İyi bir başlangıç deneyimi, oyunun tamamını açıklamaktan çok oyuncunun bir sonraki hamleye hazır hissetmesini sağlamakla ilgili olabilir. Sonraki adım, bunu kesin bir sonuç olarak kabul etmek yerine test etmek.' },
    ],
  },
  {
    title: 'bir ilerleme sistemini bağımlılık yaratan hâle getiren ne?',
    summary: 'Görünür ilerleme, tamamlanmamış hedefler ve geri dönmek istemekle zorunda hissetmek arasındaki fark.',
    game: 'farklı oyunlardan', readTime: '4 dk okuma',
    sections: [
      { title: 'gözlem', body: 'İlerleme çubuğu soyut bir hedefi görünür kılar. Bu örnek yazı, sıradaki aşamaya olan mesafenin oyuncuların sonraki oturumlarını seçme biçimini değiştirip değiştirmediğini soruyor.' },
      { title: 'hipotez', body: 'Daha küçük ve anlamlı aşamalar, oyuncuların kendi isteğiyle geri dönme oranını artırabilir. Tek başına daha fazla aşama eklemek yalnızca karmaşa yaratabilir.' },
      { title: 'sıradaki soru', body: 'Sağlıklı motivasyonu baskıdan nasıl ayırabiliriz? Tekrarlanan oturumlarla birlikte memnuniyeti de ölç ve oyunculara anlamlı durma noktaları sun.' },
    ],
  },
  {
    title: 'bir oyun ekonomisini adil hissettiren ne?',
    summary: 'Fiyatların ötesinde; öngörülebilirlik, emek ve oyun ekonomisinin verdiği sözler üzerine.',
    game: 'farklı oyunlardan', readTime: '5 dk okuma',
    sections: [
      { title: 'gözlem', body: 'Aynı değere sahip iki ödül, kuralları farklı olduğunda farklı hissettirebilir. Öngörülebilirlik, adalet algısını cömertlik kadar etkileyebilir.' },
      { title: 'hipotez', body: 'Ödül kazanma olasılıklarını ve oyun içi para kazanmanın açık bir yolunu göstermek, ödül değerini değiştirmeden adalet algısını iyileştirebilir.' },
      { title: 'önerilen deney', body: 'İki açık açıklamayı, anlama kontrolü ve gönüllü bir adalet anketiyle karşılaştır. Harcama sonrası pişmanlığı koruyucu bir ölçüt olarak izle.' },
    ],
  },
  {
    title: 'kaybetmek bazen oyuncunun geri dönmesini neden sağlayabilir?',
    summary: 'Kıl payı kaçan başarılar, ulaşılabilir zorluklar ve engellerin ne zaman faydasını yitirdiği üzerine bir soru.',
    game: 'bulmaca oyunları', readTime: '3 dk okuma',
    sections: [
      { title: 'bağlam', body: 'Bu, örnek bir araştırma sorusu. Oyunları zorlaştırmanın oyuncuların geri dönüşünü artırdığı iddiası değil.' },
      { title: 'hipotez', body: 'Telafi edilebilir bir aksilik, sonraki başarıyı daha anlamlı kılabilir; yeter ki oyuncular sonucu anlaşılır, bir sonraki denemeyi de başarılabilir bulsun.' },
      { title: 'olası risk', body: 'Hayal kırıklığı motivasyonun önüne geçebilir. Yalnızca tekrar denemeleri artırmaya odaklanmak yerine oyunu bırakmayı ve oyuncuların duygularını izle.' },
    ],
  },
];

const experimentTranslations = [
  {
    title: 'statü mü, ödül mü?', question: 'Oyuncular toplulukta takdir edilmeye, ek oyun içi paradan daha mı çok değer verir?',
    hypothesis: 'Görünür bir katkı rozeti, aynı maliyetteki oyun içi para ödülüne göre tekrar katılımı daha fazla teşvik edebilir.',
    setup: 'Gönüllü katılıma açık bir topluluk etkinliğinde, rastgele gruplar ve eşit katılım koşullarıyla takdir ve oyun içi para ödüllerini karşılaştır.',
    metric: '7 gün içinde tekrar katılım; koruyucu ölçüt olarak memnuniyet.',
    lesson: 'Kalıcı motivasyonu kısa süreli yenilik etkisinden ayır.',
  },
  {
    title: 'daha küçük bir çevre, geri dönmek için daha güçlü bir neden mi?', question: 'Küçük gruplar oyuncuların geri dönmesini büyük topluluklardan daha mı fazla destekler?',
    hypothesis: 'Tanıdık bir grup tarafından fark edilmek, geri dönmeyi daha anlamlı hissettirebilir.',
    setup: 'Aynı etkinlik ve ödüllerle küçük ekipleri, daha büyük bir ortak grupla karşılaştır.',
    metric: 'İkinci haftada geri dönüş oranı; aidiyet ve moderasyon yükü.',
    lesson: 'Grup büyüklüğü, etkileşimin niteliğinden daha az önemli olabilir.',
  },
  {
    title: 'geri dönmenin daha iyi bir yolu', question: 'Daha yumuşak bir geri dönüş mekaniği, ara veren oyunculara yardımcı olabilir mi?',
    hypothesis: 'Kısa bir yeniden alışma hedefi, aradan sonra dönmenin yarattığı bunalmayı azaltabilir.',
    setup: 'Geri dönen oyunculara odaklı bir hedef veya standart ana ekran sun; ödülleri eşdeğer tut.',
    metric: '72 saat içinde ikinci oturum; görevi bırakma oranı.',
    lesson: 'Geri dönmek, ödüllendirici olmadan önce mümkün hissettirmeli.',
  },
];

export function getArticles(locale: Locale): Article[] {
  return locale === 'tr' ? articles.map((article, index) => ({ ...article, ...translations[index] })) : articles;
}
export function getExperiments(locale: Locale) {
  return locale === 'tr' ? experiments.map((experiment, index) => ({ ...experiment, ...experimentTranslations[index] })) : experiments;
}
