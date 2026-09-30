import { VocabularyItem } from '../types/vocabulary';

export const INITIAL_VOCABULARY: VocabularyItem[] = [
  // =========================================================================
  // KAPITEL 1: Leute heute (مردم امروز)
  // =========================================================================
  // --- Nomen (اسامی با آرتیکل، جمع و جنسیت) ---
  {
    id: 'k1-n1',
    german: 'die Freundschaft',
    persian: 'دوستی، پیوند رفاقت',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 10', context: 'Über Freundschaft und Beziehungen sprechen' },
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2 Aufgabe 2a', pageOrTrack: 'Track 1.2', context: 'Was bedeutet echte Freundschaft heute?' }
    ],
    pronunciation: '[ˈfʁɔɪ̯ntʃaft]',
    article: 'die',
    plural: 'die Freundschaften',
    genderPersian: 'مونث (die)',
    example: 'Eine tiefe Freundschaft hält oft ein ganzes Leben lang.',
    exampleTranslation: 'یک دوستی عمیق اغلب در تمام طول زندگی پایدار می‌ماند.',
    level: 'B1+',
    tags: ['دوستی', 'روابط']
  },
  {
    id: 'k1-n2',
    german: 'der Freundeskreis',
    persian: 'حلقه و جمع دوستان صمیمی',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 10', context: 'einen festen Freundeskreis aufbauen' }
    ],
    pronunciation: '[ˈfʁɔɪ̯ndəsˌkʁaɪ̯s]',
    article: 'der',
    plural: 'die Freundeskreise',
    genderPersian: 'مذکر (der)',
    example: 'Mein Freundeskreis besteht aus Menschen, die ich seit vielen Jahren kenne.',
    exampleTranslation: 'حلقه دوستان من متشکل از افرادی است که سال‌هاست آن‌ها را می‌شناسم.',
    level: 'B1+',
    tags: ['دوستی', 'اجتماع']
  },
  {
    id: 'k1-n3',
    german: 'der Bekanntenkreis',
    persian: 'دایره آشنایان و اطرافیان',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2', pageOrTrack: 'Track 1.2', context: 'Ich habe einen großen Bekanntenkreis, aber nur zwei enge Freunde.' }
    ],
    pronunciation: '[bəˈkantn̩ˌkʁaɪ̯s]',
    article: 'der',
    plural: 'die Bekanntenkreise',
    genderPersian: 'مذکر (der)',
    example: 'In meinem Bekanntenkreis gibt es viele interessante Leute aus aller Welt.',
    exampleTranslation: 'در دایره آشنایان من افراد جالب بسیاری از سراسر جهان وجود دارند.',
    level: 'B1+',
    tags: ['جامعه', 'روابط']
  },
  {
    id: 'k1-n4',
    german: 'die Bekanntschaft',
    persian: 'آشنایی، رابطه غیرصمیمی',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 11', context: 'eine flüchtige Bekanntschaft machen' }
    ],
    pronunciation: '[bəˈkantʃaft]',
    article: 'die',
    plural: 'die Bekanntschaften',
    genderPersian: 'مونث (die)',
    example: 'Aus einer zufälligen Bekanntschaft im Urlaub wurde eine langjährige Freundschaft.',
    exampleTranslation: 'از یک آشنایی اتفاقی در تعطیلات، یک دوستی چندین‌ساله شکل گرفت.',
    level: 'B1+',
    tags: ['روابط', 'ارتباط']
  },
  {
    id: 'k1-n5',
    german: 'der Sandkastenfreund',
    persian: 'دوست دوران کودکی / بچگی',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 10', context: 'mit dem Sandkastenfreund aufwachsen' }
    ],
    pronunciation: '[ˈzantˌkastn̩ˌfʁɔɪ̯nt]',
    article: 'der',
    plural: 'die Sandkastenfreunde',
    genderPersian: 'مذکر (der)',
    example: 'Mit meinem Sandkastenfreund habe ich schon als Dreijähriger im Park gespielt.',
    exampleTranslation: 'من از سه سالگی با دوست دوران بچگی‌ام در پارک بازی می‌کردم.',
    level: 'B1+',
    tags: ['خاطرات', 'دوستی']
  },
  {
    id: 'k1-n6',
    german: 'der Lebensabschnittsgefährte',
    persian: 'همراه و رفیق یک برهه از زندگی',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 10', context: 'Freunde als Lebensabschnittsgefährten' }
    ],
    pronunciation: '[ˈleːbn̩sˌʔapʃnɪtsɡəˌfɛːɐ̯tə]',
    article: 'der',
    plural: 'die Lebensabschnittsgefährten',
    genderPersian: 'مذکر (der)',
    example: 'Manche Freunde begleiten uns nur für eine bestimmte Zeit als Lebensabschnittsgefährten.',
    exampleTranslation: 'برخی از دوستان فقط برای دوره‌ای مشخص به عنوان همراه یک برهه از زندگی کنار ما هستند.',
    level: 'B1+',
    tags: ['جامعه‌شناسی', 'روابط']
  },
  {
    id: 'k1-n7',
    german: 'die Seelenverwandtschaft',
    persian: 'قرابت روحی، هم‌دلی و تفاهم عمیق باطنی',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 10', context: 'eine Seelenverwandtschaft zwischen zwei Menschen spüren' }
    ],
    pronunciation: '[ˈzeːlənfɛɐ̯ˌvantʃaft]',
    article: 'die',
    plural: 'die Seelenverwandtschaften',
    genderPersian: 'مونث (die)',
    example: 'Zwischen den beiden besten Freundinnen herrscht eine echte Seelenverwandtschaft.',
    exampleTranslation: 'میان آن دو دوست صمیمی یک قرابت و هم‌دلی روحی واقعی برقرار است.',
    level: 'B1+',
    tags: ['احساسات', 'دوستی']
  },
  {
    id: 'k1-n8',
    german: 'das Vertrauen',
    persian: 'اعتماد، اطمینان قلبی',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 10', context: 'gegenseitiges Vertrauen aufbauen' },
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2', pageOrTrack: 'Track 1.4', context: 'Ohne Vertrauen funktioniert keine Beziehung.' }
    ],
    pronunciation: '[fɛɐ̯ˈtʁaʊ̯ən]',
    article: 'das',
    plural: 'das Vertrauen (بدون جمع)',
    genderPersian: 'خنثی (das)',
    example: 'Gegenseitiges Vertrauen ist das wichtigste Fundament jeder engen Partnerschaft.',
    exampleTranslation: 'اعتماد متقابل مهم‌ترین شالوده و پایه هر رابطه نزدیک است.',
    level: 'B1+',
    tags: ['اخلاق', 'اعتماد']
  },
  {
    id: 'k1-n9',
    german: 'das Geheimnis',
    persian: 'راز، سر نهان',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 10', context: 'Geheimnisse für sich behalten' }
    ],
    pronunciation: '[ɡəˈhaɪ̯mnɪs]',
    article: 'das',
    plural: 'die Geheimnisse',
    genderPersian: 'خنثی (das)',
    example: 'Ich kann ihr jedes Geheimnis anvertrauen, denn sie behält alles für sich.',
    exampleTranslation: 'من می‌توانم هر رازی را به او بگویم، چون او همه چیز را پیش خودش نگه می‌دارد.',
    level: 'B1+',
    tags: ['رازداری', 'ارتباط']
  },
  {
    id: 'k1-n10',
    german: 'die Zuverlässigkeit',
    persian: 'قابلیت اطمینان، خوش‌قولی و تعهد',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 12', context: 'Zuverlässigkeit als Kernwert' }
    ],
    pronunciation: '[ˈtsuːfɛɐ̯ˌlɛsɪçkaɪ̯t]',
    article: 'die',
    plural: 'die Zuverlässigkeit (بدون جمع)',
    genderPersian: 'مونث (die)',
    example: 'In schwierigen Lebenslagen erkennt man die Zuverlässigkeit eines wahren Freundes.',
    exampleTranslation: 'در شرایط سخت زندگی، قابلیت اعتماد و خوش‌قولی یک دوست واقعی شناخته می‌شود.',
    level: 'B1+',
    tags: ['شخصیت', 'اخلاق']
  },
  {
    id: 'k1-n11',
    german: 'die Ehrlichkeit',
    persian: 'صداقت، راستگویی',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 12', context: 'Ehrlichkeit in guten wie in schlechten Zeiten' }
    ],
    pronunciation: '[ˈeːɐ̯lɪçkaɪ̯t]',
    article: 'die',
    plural: 'die Ehrlichkeit (بدون جمع)',
    genderPersian: 'مونث (die)',
    example: 'Ehrlichkeit bedeutet auch, unangenehme Wahrheiten offen auszusprechen.',
    exampleTranslation: 'صداقت همچنین به این معناست که حقیقت‌های ناخوشایند را بی‌پرده بیان کنیم.',
    level: 'B1+',
    tags: ['اخلاق', 'شخصیت']
  },
  {
    id: 'k1-n12',
    german: 'die Verschwiegenheit',
    persian: 'رازداری، توداری',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 12', context: 'absolute Verschwiegenheit garantieren' }
    ],
    pronunciation: '[fɛɐ̯ˈʃviːɡn̩haɪ̯t]',
    article: 'die',
    plural: 'die Verschwiegenheit (بدون جمع)',
    genderPersian: 'مونث (die)',
    example: 'Ihre Verschwiegenheit macht sie zu einer unschätzbaren Vertrauensperson.',
    exampleTranslation: 'رازداری او باعث شده تا به یک فرد معتمد و بی‌نهایت ارزشمند تبدیل شود.',
    level: 'B1+',
    tags: ['اخلاق', 'رازداری']
  },
  {
    id: 'k1-n13',
    german: 'das Verständnis',
    persian: 'درک متقابل، تفاهم',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2', pageOrTrack: 'Track 1.3', context: 'Verständnis für die Situation des anderen aufbringen' }
    ],
    pronunciation: '[fɛɐ̯ˈʃtɛntnɪs]',
    article: 'das',
    plural: 'das Verständnis (بدون جمع)',
    genderPersian: 'خنثی (das)',
    example: 'Er zeigte großes Verständnis für meine schwierige berufliche Lage.',
    exampleTranslation: 'او درک بالایی نسبت به وضعیت کاری دشوار من نشان داد.',
    level: 'B1+',
    tags: ['همدلی', 'روابط']
  },
  {
    id: 'k1-n14',
    german: 'die Zuneigung',
    persian: 'مهر و محبت، علاقه و گرایش قلبی',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 10', context: 'Zuneigung und Sympathie empfinden' }
    ],
    pronunciation: '[ˈtsuːˌnaɪ̯ɡʊŋ]',
    article: 'die',
    plural: 'die Zuneigungen',
    genderPersian: 'مونث (die)',
    example: 'Eine herzliche Zuneigung verband die beiden Freunde seit ihrer Jugendzeit.',
    exampleTranslation: 'علاقه‌ای صمیمانه و قلبی آن دو دوست را از دوران جوانی به هم پیوند داده بود.',
    level: 'B1+',
    tags: ['عاطفه', 'احساسات']
  },
  {
    id: 'k1-n15',
    german: 'der Zusammenhalt',
    persian: 'همبستگی، انسجام گروهی',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 11', context: 'der enge Zusammenhalt in der Gruppe' }
    ],
    pronunciation: '[tsuˈzamənˌhalt]',
    article: 'der',
    plural: 'der Zusammenhalt (بدون جمع)',
    genderPersian: 'مذکر (der)',
    example: 'Der starke Zusammenhalt im Team half uns, alle Herausforderungen zu meistern.',
    exampleTranslation: 'همبستگی قوی در تیم به ما کمک کرد تا از پس تمام چالش‌ها برآییم.',
    level: 'B1+',
    tags: ['گروه', 'همبستگی']
  },
  {
    id: 'k1-n16',
    german: 'die Hilfsbereitschaft',
    persian: 'آمادگی برای کمک، یاری‌رسانی',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 3', pageOrTrack: 'S. 14', context: 'die Hilfsbereitschaft der Alltagshelden' }
    ],
    pronunciation: '[ˈhɪlfsbəˌʁaɪ̯tʃaft]',
    article: 'die',
    plural: 'die Hilfsbereitschaft (بدون جمع)',
    genderPersian: 'مونث (die)',
    example: 'Seine Hilfsbereitschaft gegenüber Fremden ist wirklich vorbildlich.',
    exampleTranslation: 'آمادگی او برای کمک به غریبه‌ها واقعاً نمونه و آموزنده است.',
    level: 'B1+',
    tags: ['اخلاق', 'فداکاری']
  },
  {
    id: 'k1-n17',
    german: 'der Lebensabschnitt',
    persian: 'مقطع زندگی، برهه و دوره زمانی',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 4', pageOrTrack: 'S. 16', context: 'einen neuen Lebensabschnitt beginnen' }
    ],
    pronunciation: '[ˈleːbn̩sˌʔapʃnɪt]',
    article: 'der',
    plural: 'die Lebensabschnitte',
    genderPersian: 'مذکر (der)',
    example: 'Der Beginn des Studiums markiert für viele junge Menschen einen neuen Lebensabschnitt.',
    exampleTranslation: 'آغاز دوران دانشگاه برای بسیاری از جوانان نماد یک مقطع جدید در زندگی است.',
    level: 'B1+',
    tags: ['زندگی', 'رشد']
  },
  {
    id: 'k1-n18',
    german: 'der Wendepunkt',
    persian: 'نقطه عطف (در زندگی یا سرنوشت)',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 4', pageOrTrack: 'S. 16', context: 'ein entscheidender Wendepunkt im Leben' }
    ],
    pronunciation: '[ˈvɛndəˌpʊŋkt]',
    article: 'der',
    plural: 'die Wendepunkte',
    genderPersian: 'مذکر (der)',
    example: 'Der Umzug nach Berlin war der wichtigste Wendepunkt in ihrer künstlerischen Laufbahn.',
    exampleTranslation: 'مهاجرت به برلین مهم‌ترین نقطه عطف در مسیر حرفه‌ای هنری او بود.',
    level: 'B1+',
    tags: ['سرنوشت', 'تغییر']
  },
  {
    id: 'k1-n19',
    german: 'das Schicksal',
    persian: 'سرنوشت، تقدیر',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 4', pageOrTrack: 'S. 17', context: 'sein Schicksal selbst in die Hand nehmen' }
    ],
    pronunciation: '[ˈʃɪkzaːl]',
    article: 'das',
    plural: 'die Schicksale',
    genderPersian: 'خنثی (das)',
    example: 'Sie ließ sich vom schweren Schicksal nicht entmutigen und kämpfte weiter.',
    exampleTranslation: 'او اجازه نداد سرنوشت سخت دلسردش کند و به مبارزه ادامه داد.',
    level: 'B1+',
    tags: ['سرنوشت', 'زندگی']
  },
  {
    id: 'k1-n20',
    german: 'die Herausforderung',
    persian: 'چالش، وظیفه و آزمون دشوار',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 4', pageOrTrack: 'S. 16', context: 'neue Herausforderungen annehmen' },
      { source: 'Hörtexte', lesson: 1, module: 'Modul 4', pageOrTrack: 'Track 1.8', context: 'Das Leben im Ausland ist eine große Herausforderung.' }
    ],
    pronunciation: '[hɛˈʁaʊ̯sˌfɔʁdəʁʊŋ]',
    article: 'die',
    plural: 'die Herausforderungen',
    genderPersian: 'مونث (die)',
    example: 'Das Erlernen einer neuen Sprache ist eine spannende Herausforderung.',
    exampleTranslation: 'یادگیری یک زبان جدید یک چالش هیجان‌انگیز است.',
    level: 'B1+',
    tags: ['موفقیت', 'چالش']
  },
  {
    id: 'k1-n21',
    german: 'der Werdegang',
    persian: 'سیر تکامل، پیشینه و روند رشد شخصی/کاری',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 4', pageOrTrack: 'S. 16', context: 'über den beruflichen Werdegang berichten' }
    ],
    pronunciation: '[ˈveːɐ̯dəˌɡaŋ]',
    article: 'der',
    plural: 'die Werdegänge',
    genderPersian: 'مذکر (der)',
    example: 'Ihr beeindruckender Werdegang zeigt, dass sich Fleiß und Ausdauer auszahlen.',
    exampleTranslation: 'سیر پیشرفت چشمگیر او نشان می‌دهد که پشتکار و تلاش نتیجه‌بخش است.',
    level: 'B1+',
    tags: ['شغل', 'زندگی‌نامه']
  },
  {
    id: 'k1-n22',
    german: 'die Zivilcourage',
    persian: 'شجاعت اخلاقی و مدنی (دفاع از دیگران در جامعه)',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 3', pageOrTrack: 'S. 14', context: 'Zivilcourage im öffentlichen Raum beweisen' },
      { source: 'Hörtexte', lesson: 1, module: 'Modul 3', pageOrTrack: 'Track 1.6', context: 'Zivilcourage heißt nicht, sich selbst in Gefahr zu bringen.' }
    ],
    pronunciation: '[tsiˈviːlkuˌʁaːʒə]',
    article: 'die',
    plural: 'die Zivilcourage (بدون جمع)',
    genderPersian: 'مونث (die)',
    example: 'Der junge Mann bewies Zivilcourage, als er die Passantin vor dem Angreifer schützte.',
    exampleTranslation: 'مرد جوان شجاعت مدنی نشان داد هنگامی که از عابر پیاده در برابر مهاجم محافظت کرد.',
    level: 'B1+',
    tags: ['شجاعت', 'جامعه']
  },
  {
    id: 'k1-n23',
    german: 'der Alltagsheld',
    persian: 'قهرمان روزمره، فرد فداکار گمنام در جامعه',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 3', pageOrTrack: 'S. 14', context: 'Helden des Alltags ehren' }
    ],
    pronunciation: '[ˈalˌtaːksˌhɛlt]',
    article: 'der',
    plural: 'die Alltagshelden',
    genderPersian: 'مذکر (der)',
    example: 'Menschen, die ehrenamtlich älteren Nachbarn helfen, sind echte Alltagshelden.',
    exampleTranslation: 'افرادی که داوطلبانه به همسایگان سالمند کمک می‌کنند، قهرمانان واقعی روزمره هستند.',
    level: 'B1+',
    tags: ['قهرمانی', 'جامعه']
  },
  {
    id: 'k1-n24',
    german: 'die Heldentat',
    persian: 'اقدام قهرمانانه، کار شجاعانه',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 3', pageOrTrack: 'S. 14', context: 'für eine mutige Heldentat geehrt werden' }
    ],
    pronunciation: '[ˈhɛldn̩ˌtaːt]',
    article: 'die',
    plural: 'die Heldentaten',
    genderPersian: 'مونث (die)',
    example: 'Für seine mutige Heldentat bei dem Brand erhielt der Feuerwehrmann eine Medaille.',
    exampleTranslation: 'برای اقدام شجاعانه‌اش در آتش‌سوزی، آتش‌نشان مدال افتخار دریافت کرد.',
    level: 'B1+',
    tags: ['قهرمانی', 'شجاعت']
  },
  {
    id: 'k1-n25',
    german: 'der Retter',
    persian: 'نجات‌دهنده، منجی',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Modul 3', pageOrTrack: 'Track 1.6', context: 'Der mutige Retter zog das Kind aus dem Wasser.' }
    ],
    pronunciation: '[ˈʁɛtɐ]',
    article: 'der',
    plural: 'die Retter',
    genderPersian: 'مذکر (der)',
    example: 'Die Retter trafen glücklicherweise wenige Minuten nach dem Notruf am Unfallort ein.',
    exampleTranslation: 'خوشبختانه نجات‌دهندگان چند دقیقه پس از تماس اضطراری در محل حادثه حاضر شدند.',
    level: 'B1+',
    tags: ['امداد', 'نجات']
  },
  {
    id: 'k1-n26',
    german: 'die Lebensgefahr',
    persian: 'خطر مرگ، خطر جانی',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 3', pageOrTrack: 'S. 14', context: 'sich in Lebensgefahr begeben' }
    ],
    pronunciation: '[ˈleːbn̩sɡəˌfaːɐ̯]',
    article: 'die',
    plural: 'die Lebensgefahren',
    genderPersian: 'مونث (die)',
    example: 'Der Ersthelfer rettete den Verletzten unter Einsatz des eigenen Lebens aus höchster Lebensgefahr.',
    exampleTranslation: 'امدادگر اولیه فرد مجروح را با به خطر انداختن جان خود از بالاترین خطر جانی نجات داد.',
    level: 'B1+',
    tags: ['خطر', 'حادثه']
  },
  {
    id: 'k1-n27',
    german: 'der Notruf',
    persian: 'تماس اضطراری، شماره امداد (۱۱۲)',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 3', pageOrTrack: 'S. 15', context: 'sofort den Notruf wählen' }
    ],
    pronunciation: '[ˈnoːtˌʁuːf]',
    article: 'der',
    plural: 'die Notrufe',
    genderPersian: 'مذکر (der)',
    example: 'Bei einem schweren Verkehrsunfall muss man unverzüglich den Notruf wählen.',
    exampleTranslation: 'در یک تصادف شدید رانندگی باید بلافاصله با شماره اضطراری تماس گرفت.',
    level: 'B1+',
    tags: ['امداد', 'تماس']
  },
  {
    id: 'k1-n28',
    german: 'das Vorbild',
    persian: 'الگو، سرمشق اخلاقی یا رفتاری',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 3', pageOrTrack: 'S. 14', context: 'Vorbilder in Sport, Kultur und Familie' }
    ],
    pronunciation: '[ˈfoːɐ̯ˌbɪlt]',
    article: 'das',
    plural: 'die Vorbilder',
    genderPersian: 'خنثی (das)',
    example: 'Eltern sind für ihre heranwachsenden Kinder das unmittelbarste Vorbild.',
    exampleTranslation: 'والدین برای فرزندان در حال رشد خود مستقیم‌ترین الگو هستند.',
    level: 'B1+',
    tags: ['الگو', 'شخصیت']
  },
  {
    id: 'k1-n29',
    german: 'die Anerkennung',
    persian: 'قدردانی، به رسمیت شناختن، تمجید',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 3', pageOrTrack: 'S. 15', context: 'gesellschaftliche Anerkennung für Freiwilligenarbeit' }
    ],
    pronunciation: '[ˈanʔɛɐ̯ˌkɛnʊŋ]',
    article: 'die',
    plural: 'die Anerkennungen',
    genderPersian: 'مونث (die)',
    example: 'Freiwillige Helfer verdienen für ihren täglichen Einsatz höchste Anerkennung.',
    exampleTranslation: 'امدادگران داوطلب برای تلاش روزمره‌شان شایسته بالاترین قدردانی هستند.',
    level: 'B1+',
    tags: ['احترام', 'جامعه']
  },
  {
    id: 'k1-n30',
    german: 'der Einfluss',
    persian: 'تأثیر، نفوذ',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 3', pageOrTrack: 'S. 14', context: 'einen großen Einfluss auf jemanden ausüben' }
    ],
    pronunciation: '[ˈaɪ̯nˌflʊs]',
    article: 'der',
    plural: 'die Einflüsse',
    genderPersian: 'مذکر (der)',
    example: 'Gute Freunde haben oft einen positiven Einfluss auf unsere Entscheidungen.',
    exampleTranslation: 'دوستان خوب اغلب تأثیر مثبتی بر تصمیم‌گیری‌های ما دارند.',
    level: 'B1+',
    tags: ['تأثیر', 'روانشناسی']
  },
  {
    id: 'k1-n31',
    german: 'die Eigenschaft',
    persian: 'ویژگی، خصلت اخلاقی یا فردی',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 12', context: 'positive Charaktereigenschaften beschreiben' }
    ],
    pronunciation: '[ˈaɪ̯ɡn̩ʃaft]',
    article: 'die',
    plural: 'die Eigenschaften',
    genderPersian: 'مونث (die)',
    example: 'Hilfsbereitschaft und Ehrlichkeit sind unverzichtbare Eigenschaften eines Freundes.',
    exampleTranslation: 'آمادگی برای کمک و صداقت ویژگی‌های جدانشدنی یک دوست هستند.',
    level: 'B1+',
    tags: ['شخصیت', 'ویژگی']
  },
  {
    id: 'k1-n32',
    german: 'der Konflikt',
    persian: 'تعارض، درگیری و اختلاف نظر',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 11', context: 'Konflikte konstruktiv lösen' }
    ],
    pronunciation: '[kɔnˈflɪkt]',
    article: 'der',
    plural: 'die Konflikte',
    genderPersian: 'مذکر (der)',
    example: 'In einer gesunden Freundschaft spricht man offen über Konflikte und findet Lösungen.',
    exampleTranslation: 'در یک دوستی سالم، افراد بی‌پرده درباره اختلافات صحبت کرده و راه‌حل می‌یابند.',
    level: 'B1+',
    tags: ['روابط', 'ارتباط']
  },

  // --- Verben (افعال با صرف کامل Präsens, Präteritum, Perfekt و حروف اضافه) ---
  {
    id: 'k1-v1',
    german: 'teilnehmen',
    persian: 'شرکت کردن، حضور یافتن',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 10', context: 'an einem Workshop über Freundschaft teilnehmen' },
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2', pageOrTrack: 'Track 1.3', context: 'an der Umfrage aktiv teilnehmen' }
    ],
    pronunciation: '[ˈtaɪ̯lˌneːmən]',
    infinitive: 'teilnehmen an (+ Dat.)',
    present: 'nimmt teil',
    preterite: 'nahm teil',
    perfect: 'hat teilgenommen',
    auxiliary: 'haben',
    separable: true,
    prepositionCase: 'an + Dativ',
    example: 'Viele Menschen nehmen aktiv an sozialen Projekten und Vereinen teil.',
    exampleTranslation: 'بسیاری از مردم به طور فعال در پروژه‌ها و انجمن‌های اجتماعی شرکت می‌کنند.',
    level: 'B1+',
    tags: ['جامعه', 'فعالیت']
  },
  {
    id: 'k1-v2',
    german: 'sich verabreden',
    persian: 'قرار ملاقات گذاشتن، وعده دیدار تنظیم کردن',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2 Aufgabe 2a', pageOrTrack: 'Track 1.2', context: 'Eventuell verabredet man sich auch mal auf einen Kaffee.' },
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 12', context: 'sich mit Freunden verabreden' }
    ],
    pronunciation: '[zɪç fɛɐ̯ˈʔapˌʁeːdn̩]',
    infinitive: 'sich verabreden mit (+ Dat.) / auf (+ Akk.)',
    present: 'verabredet sich',
    preterite: 'verabredete sich',
    perfect: 'hat sich verabredet',
    auxiliary: 'haben',
    reflexive: true,
    prepositionCase: 'mit + Dativ',
    example: 'Eventuell verabredet man sich auch mal auf einen Kaffee und spricht über dies und das.',
    exampleTranslation: 'احتمالاً آدم گاهی برای یک قهوه قرار می‌گذارد و درباره این و آن صحبت می‌کند.',
    level: 'B1+',
    tags: ['دوستی', 'قرار']
  },
  {
    id: 'k1-v3',
    german: 'anvertrauen',
    persian: 'راز دل گفتن، در میان گذاشتن (راز یا مسئله خصوصی)',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 10', context: 'einem guten Freund Geheimnisse anvertrauen' },
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2', pageOrTrack: 'Track 1.4', context: 'Einem echten Freund kann man alles anvertrauen.' }
    ],
    pronunciation: '[ˈanfɛɐ̯ˌtʁaʊ̯ən]',
    infinitive: 'anvertrauen (+ Dat. + Akk.)',
    present: 'vertraut an',
    preterite: 'vertraute an',
    perfect: 'hat anvertraut',
    auxiliary: 'haben',
    separable: true,
    example: 'Einem wahren Freund kann man seine tiefsten Sorgen anvertrauen.',
    exampleTranslation: 'به یک دوست واقعی می‌توان عمیق‌ترین نگرانی‌های خود را در میان گذاشت.',
    level: 'B1+',
    tags: ['اعتماد', 'روابط']
  },
  {
    id: 'k1-v4',
    german: 'beistehen',
    persian: 'یاری رساندن، در شرایط بحرانی کنار کسی بودن',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 11', context: 'Freunde stehen einem in Krisen bei.' }
    ],
    pronunciation: '[ˈbaɪ̯ˌʃteːən]',
    infinitive: 'beistehen (+ Dat.)',
    present: 'steht bei',
    preterite: 'stand bei',
    perfect: 'hat beigestanden',
    auxiliary: 'haben',
    separable: true,
    example: 'In schwierigen Lebensphasen stehen echte Freunde einem verlässlich bei.',
    exampleTranslation: 'در مراحل سخت زندگی، دوستان واقعی با قابلیت اتکا به آدم یاری می‌رسانند.',
    level: 'B1+',
    tags: ['حمایت', 'دوستی']
  },
  {
    id: 'k1-v5',
    german: 'zusammenhalten',
    persian: 'همبستگی داشتن، پشت هم بودن و پیوند را حفظ کردن',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 11', context: 'in der Not fest zusammenhalten' }
    ],
    pronunciation: '[tsuˈzamənˌhaltn̩]',
    infinitive: 'zusammenhalten',
    present: 'hält zusammen',
    preterite: 'hielt zusammen',
    perfect: 'hat zusammengehalten',
    auxiliary: 'haben',
    separable: true,
    example: 'Egal was passiert, unsere Clique hält immer fest zusammen.',
    exampleTranslation: 'مهم نیست چه اتفاقی بیفتد، اکیپ ما همیشه محکم پشت هم می‌ایستد.',
    level: 'B1+',
    tags: ['همبستگی', 'دوستی']
  },
  {
    id: 'k1-v6',
    german: 'sich verlassen auf',
    persian: 'اتکا کردن به، حساب باز کردن روی کسی',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 12', context: 'sich hundertprozentig auf jemanden verlassen können' }
    ],
    pronunciation: '[zɪç fɛɐ̯ˈlasn̩ ʔaʊ̯f]',
    infinitive: 'sich verlassen auf (+ Akk.)',
    present: 'verlässt sich',
    preterite: 'verließ sich',
    perfect: 'hat sich verlassen',
    auxiliary: 'haben',
    reflexive: true,
    prepositionCase: 'auf + Akkusativ',
    example: 'Auf meine beste Freundin kann ich mich zu jeder Tages- und Nachtzeit verlassen.',
    exampleTranslation: 'روی بهترین دوستم در هر ساعت از شبانه‌روز می‌توانم حساب کنم.',
    level: 'B1+',
    tags: ['اعتماد', 'روابط']
  },
  {
    id: 'k1-v7',
    german: 'sich einsetzen für',
    persian: 'تلاش و فداکاری کردن برای، دفاع کردن از',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Modul 3', pageOrTrack: 'Track 1.6', context: 'Helden des Alltags setzen sich mutig für andere ein.' }
    ],
    pronunciation: '[zɪç ˈaɪ̯nˌzɛtsn̩ fyːɐ̯]',
    infinitive: 'sich einsetzen für (+ Akk.)',
    present: 'setzt sich ein',
    preterite: 'setzte sich ein',
    perfect: 'hat sich eingesetzt',
    auxiliary: 'haben',
    reflexive: true,
    separable: true,
    prepositionCase: 'für + Akkusativ',
    example: 'Alltagshelden setzen sich selbstlos für schwächere Menschen in der Gesellschaft ein.',
    exampleTranslation: 'قهرمانان روزمره فداکارانه برای افراد ضعیف‌تر در جامعه تلاش می‌کنند.',
    level: 'B1+',
    tags: ['اخلاق', 'فداکاری']
  },
  {
    id: 'k1-v8',
    german: 'sich auseinandersetzen mit',
    persian: 'دست و پنجه نرم کردن با، عمیقاً به بررسی پرداختن',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 13', context: 'sich mit verschiedenen Standpunkten auseinandersetzen' }
    ],
    pronunciation: '[zɪç ʔaʊ̯sʔaɪ̯ˈnandɐˌzɛtsn̩]',
    infinitive: 'sich auseinandersetzen mit (+ Dat.)',
    present: 'setzt sich auseinander',
    preterite: 'setzte sich auseinander',
    perfect: 'hat sich auseinandergesetzt',
    auxiliary: 'haben',
    reflexive: true,
    separable: true,
    prepositionCase: 'mit + Dativ',
    example: 'In der Diskussion müssen wir uns intensiv mit den Ursachen des Problems auseinandersetzen.',
    exampleTranslation: 'در بحث باید به صورت فشرده با علل و ریشه‌های مسئله دست و پنجه نرم کنیم و به آن بپردازیم.',
    level: 'B1+',
    tags: ['تفکر', 'تحلیل']
  },
  {
    id: 'k1-v9',
    german: 'aus den Augen verlieren',
    persian: 'از دید هم خارج شدن، ارتباط و تماس را گم کردن',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 10', context: 'Schulfreunde mit der Zeit aus den Augen verlieren' }
    ],
    pronunciation: '[ʔaʊ̯s deːn ˈʔaʊ̯ɡŋ̍ fɛɐ̯ˈliːʁən]',
    infinitive: 'aus den Augen verlieren (+ Akk.)',
    present: 'verliert aus den Augen',
    preterite: 'verlor aus den Augen',
    perfect: 'hat aus den Augen verloren',
    auxiliary: 'haben',
    example: 'Nach dem Schulabschluss haben sich viele Klassenkameraden leider aus den Augen verloren.',
    exampleTranslation: 'پس از فارغ‌التحصیلی، متأسفانه بسیاری از همکلاسی‌ها ارتباطشان با یکدیگر قطع شد.',
    level: 'B1+',
    tags: ['روابط', 'فاصله']
  },
  {
    id: 'k1-v10',
    german: 'retten',
    persian: 'نجات دادن، رهایی بخشیدن',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 3', pageOrTrack: 'S. 14', context: 'Menschen vor dem Ertrinken retten' },
      { source: 'Hörtexte', lesson: 1, module: 'Modul 3', pageOrTrack: 'Track 1.6', context: 'Der Zeuge rettete das Unfallopfer.' }
    ],
    pronunciation: '[ˈʁɛtn̩]',
    infinitive: 'retten vor (+ Dat.)',
    present: 'rettet',
    preterite: 'rettete',
    perfect: 'hat gerettet',
    auxiliary: 'haben',
    prepositionCase: 'vor + Dativ',
    example: 'Die Feuerwehrleute retteten die Bewohner rechtzeitig vor den Flammen.',
    exampleTranslation: 'آتش‌نشانان ساکنان را به موقع از شعله‌های آتش نجات دادند.',
    level: 'B1+',
    tags: ['امداد', 'نجات']
  },
  {
    id: 'k1-v11',
    german: 'eingreifen',
    persian: 'مداخله کردن (برای پیشگیری یا کمک)',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 3', pageOrTrack: 'S. 15', context: 'beherzt in eine brenzlige Situation eingreifen' }
    ],
    pronunciation: '[ˈaɪ̯nˌɡʁaɪ̯fn̩]',
    infinitive: 'eingreifen in (+ Akk.)',
    present: 'greift ein',
    preterite: 'griff ein',
    perfect: 'hat eingegriffen',
    auxiliary: 'haben',
    separable: true,
    prepositionCase: 'in + Akkusativ',
    example: 'Ein couragierter Passant griff sofort ein und beendete den Streit.',
    exampleTranslation: 'یک عابر شجاع بلافاصله مداخله کرد و به درگیری خاتمه داد.',
    level: 'B1+',
    tags: ['شجاعت', 'جامعه']
  },
  {
    id: 'k1-v12',
    german: 'überwinden',
    persian: 'غلبه کردن بر، پشت سر گذاشتن موانع/ترس',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 3', pageOrTrack: 'S. 14', context: 'die eigene Angst überwinden' }
    ],
    pronunciation: '[yːbɐˈvɪndn̩]',
    infinitive: 'überwinden (+ Akk.)',
    present: 'überwindet',
    preterite: 'überwand',
    perfect: 'hat überwunden',
    auxiliary: 'haben',
    example: 'Um anderen zu helfen, musste er seine eigene Furcht überwinden.',
    exampleTranslation: 'برای کمک به دیگران، او مجبور بود بر ترس درونی‌اش غلبه کند.',
    level: 'B1+',
    tags: ['موفقیت', 'شجاعت']
  },
  {
    id: 'k1-v13',
    german: 'beeinflussen',
    persian: 'تحت تأثیر قرار دادن، هدایت کردن',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 3', pageOrTrack: 'S. 14', context: 'andere Menschen nachhaltig beeinflussen' }
    ],
    pronunciation: '[bəˈʔaɪ̯nflʊsn̩]',
    infinitive: 'beeinflussen (+ Akk.)',
    present: 'beeinflusst',
    preterite: 'beeinflusste',
    perfect: 'hat beeinflusst',
    auxiliary: 'haben',
    example: 'Vorbilder beeinflussen unsere Werte und unser Handeln im Alltag.',
    exampleTranslation: 'الگوها ارزش‌ها و رفتار ما در زندگی روزمره را تحت تأثیر قرار می‌دهند.',
    level: 'B1+',
    tags: ['تأثیر', 'روانشناسی']
  },
  {
    id: 'k1-v14',
    german: 'aufwachsen',
    persian: 'بزرگ شدن، رشد و نمو یافتن',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 4', pageOrTrack: 'S. 16', context: 'in einer Großstadt behütet aufwachsen' }
    ],
    pronunciation: '[ˈaʊ̯fˌvaksn̩]',
    infinitive: 'aufwachsen in (+ Dat.)',
    present: 'wächst auf',
    preterite: 'wuchs auf',
    perfect: 'ist aufgewachsen',
    auxiliary: 'sein',
    separable: true,
    example: 'Sie ist zweisprachig in Hamburg und Wien aufgewachsen.',
    exampleTranslation: 'او به صورت دو زبانه در هامبورگ و وین بزرگ شده است.',
    level: 'B1+',
    tags: ['زندگی', 'رشد']
  },
  {
    id: 'k1-v15',
    german: 'auswandern',
    persian: 'مهاجرت کردن به خارج از کشور',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 4', pageOrTrack: 'S. 16', context: 'nach Kanada auswandern' }
    ],
    pronunciation: '[ˈaʊ̯sˌvandɐn]',
    infinitive: 'auswandern nach (+ Dat.) / in (+ Akk.)',
    present: 'wandert aus',
    preterite: 'wanderte aus',
    perfect: 'ist ausgewandert',
    auxiliary: 'sein',
    separable: true,
    example: 'Vor zehn Jahren ist die Familie nach Südamerika ausgewandert.',
    exampleTranslation: 'ده سال پیش این خانواده به آمریکای جنوبی مهاجرت کردند.',
    level: 'B1+',
    tags: ['مهاجرت', 'زندگی']
  },
  {
    id: 'k1-v16',
    german: 'sich einleben',
    persian: 'خو گرفتن، جا افتادن در محیط یا شهر جدید',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 4', pageOrTrack: 'S. 17', context: 'sich schnell in der neuen Heimat einleben' }
    ],
    pronunciation: '[zɪç ˈaɪ̯nˌleːbn̩]',
    infinitive: 'sich einleben in (+ Dat. / Akk.)',
    present: 'lebt sich ein',
    preterite: 'lebte sich ein',
    perfect: 'hat sich eingelebt',
    auxiliary: 'haben',
    reflexive: true,
    separable: true,
    example: 'Trotz Sprachbarrieren hat er sich sehr schnell in Deutschland eingelebt.',
    exampleTranslation: 'با وجود موانع زبانی، او خیلی سریع در آلمان جا افتاد و خو گرفت.',
    level: 'B1+',
    tags: ['مهاجرت', 'جامعه']
  },
  {
    id: 'k1-v17',
    german: 'zurückblicken auf',
    persian: 'نگاه به گذشته انداختن، مرور رویدادهای پیشین',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 4', pageOrTrack: 'S. 17', context: 'auf ein erfülltes Leben zurückblicken' }
    ],
    pronunciation: '[tsuˈʁʏkˌblɪkn̩]',
    infinitive: 'zurückblicken auf (+ Akk.)',
    present: 'blickt zurück',
    preterite: 'blickte zurück',
    perfect: 'hat zurückgeblickt',
    auxiliary: 'haben',
    separable: true,
    prepositionCase: 'auf + Akkusativ',
    example: 'Im Alter blickt die Künstlerin mit Stolz auf ihr Lebenswerk zurück.',
    exampleTranslation: 'در سنین کهنسالی، این هنرمند با افتخار به کارنامه زندگی‌اش نگاه می‌کند.',
    level: 'B1+',
    tags: ['خاطرات', 'زندگی']
  },
  {
    id: 'k1-v18',
    german: 'meistern',
    persian: 'با موفقیت از پس کاری برآمدن، مدیریت کردن چالش‌ها',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 4', pageOrTrack: 'S. 16', context: 'schwere Lebenskrisen meistern' }
    ],
    pronunciation: '[ˈmaɪ̯stɐn]',
    infinitive: 'meistern (+ Akk.)',
    present: 'meistert',
    preterite: 'meisterte',
    perfect: 'hat gemeistert',
    auxiliary: 'haben',
    example: 'Mit gegenseitiger Unterstützung meisterten sie jede schwierige Hürde.',
    exampleTranslation: 'با حمایت متقابل، آن‌ها از پس هر مانع دشواری برآمدند.',
    level: 'B1+',
    tags: ['موفقیت', 'اراده']
  },
  {
    id: 'k1-v19',
    german: 'schätzen',
    persian: 'ارزش قائل شدن، قدر دانستن',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 12', context: 'die Ehrlichkeit eines Freundes schätzen' }
    ],
    pronunciation: '[ˈʃɛtsn̩]',
    infinitive: 'schätzen an (+ Dat.)',
    present: 'schätzt',
    preterite: 'schätzte',
    perfect: 'hat geschätzt',
    auxiliary: 'haben',
    example: 'Ich schätze an ihm besonders seine absolute Verlässlichkeit.',
    exampleTranslation: 'من در او به ویژه قابلیت اعتماد و تعهد مطلقش را ارج می‌نهم.',
    level: 'B1+',
    tags: ['روابط', 'احترام']
  },
  {
    id: 'k1-v20',
    german: 'plaudern',
    persian: 'گپ زدن، صحبت دوستانه و خودمانی کردن',
    category: 'Verben',
    lesson: 1,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2', pageOrTrack: 'Track 1.2', context: 'über alltägliche Dinge gemütlich plaudern' }
    ],
    pronunciation: '[ˈplaʊ̯dɐn]',
    infinitive: 'plaudern über (+ Akk.) / mit (+ Dat.)',
    present: 'plaudert',
    preterite: 'plauderte',
    perfect: 'hat geplaudert',
    auxiliary: 'haben',
    prepositionCase: 'über + Akkusativ',
    example: 'Wir saßen im Café und plauderten stundenlang über alte Zeiten.',
    exampleTranslation: 'ما در کافه نشستیم و ساعت‌ها درباره دوران گذشته گپ زدیم.',
    level: 'B1+',
    tags: ['مکالمه', 'دوستی']
  },

  // --- Adjektive & Adverbien (صفات و قیدها با فرم تفضیلی و متضاد) ---
  {
    id: 'k1-adj1',
    german: 'zuverlässig',
    persian: 'قابل اعتماد، خوش‌قول و متعهد',
    category: 'Adjektive',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 12', context: 'ein zuverlässiger Partner in allen Lebenslagen' }
    ],
    pronunciation: '[ˈtsuːfɛɐ̯ˌlɛsɪç]',
    comparative: 'zuverlässiger',
    superlative: 'am zuverlässigsten',
    opposite: 'unzuverlässig',
    example: 'Auf zuverlässige Freunde kann man in jeder Situation zählen.',
    exampleTranslation: 'روی دوستان قابل اعتماد می‌توان در هر موقعیتی حساب کرد.',
    level: 'B1+',
    tags: ['شخصیت', 'اخلاق']
  },
  {
    id: 'k1-adj2',
    german: 'oberflächlich',
    persian: 'سطحی، کم‌عمق (در روابط یا تفکر)',
    category: 'Adjektive',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2', pageOrTrack: 'Track 1.3', context: 'Manche Online-Kontakte bleiben sehr oberflächlich.' }
    ],
    pronunciation: '[ˈoːbɐˌflɛçlɪç]',
    comparative: 'oberflächlicher',
    superlative: 'am oberflächlichsten',
    opposite: 'tiefgründig / gründlich',
    example: 'Viele Kontakte in den sozialen Netzwerken sind leider sehr oberflächlich.',
    exampleTranslation: 'بسیاری از ارتباطات در شبکه‌های اجتماعی متأسفانه بسیار سطحی هستند.',
    level: 'B1+',
    tags: ['روابط', 'ارزیابی']
  },
  {
    id: 'k1-adj3',
    german: 'tiefgründig',
    persian: 'عمیق، پرمعنا، متفکرانه',
    category: 'Adjektive',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 11', context: 'tiefgründige Gespräche führen' }
    ],
    pronunciation: '[ˈtiːfˌɡʁʏndɪç]',
    comparative: 'tiefgründiger',
    superlative: 'am tiefgründigsten',
    opposite: 'oberflächlich',
    example: 'Sie schätzt tiefgründige Gespräche mehr als oberflächlichen Smalltalk.',
    exampleTranslation: 'او گفتگوهای عمیق و پرمحتوا را بیشتر از صحبت‌های سطحی روزمره ارج می‌نهد.',
    level: 'B1+',
    tags: ['شخصیت', 'تفکر']
  },
  {
    id: 'k1-adj4',
    german: 'ehrlich',
    persian: 'صادق، راستگو، روراست',
    category: 'Adjektive',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 12', context: 'eine ehrliche Meinung sagen' }
    ],
    pronunciation: '[ˈeːɐ̯lɪç]',
    comparative: 'ehrlicher',
    superlative: 'am ehrlichsten',
    opposite: 'unehrlich / verlogen',
    example: 'Ein echter Freund ist immer ehrlich zu dir, auch wenn es weh tut.',
    exampleTranslation: 'یک دوست واقعی همیشه با تو روراست است، حتی اگر دردناک باشد.',
    level: 'B1+',
    tags: ['اخلاق', 'صداقت']
  },
  {
    id: 'k1-adj5',
    german: 'loyal',
    persian: 'وفادار، پایبند به رفاقت و عهد',
    category: 'Adjektive',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 12', context: 'ein loyaler Begleiter sein' }
    ],
    pronunciation: '[loˈjaːl]',
    comparative: 'loyaler',
    superlative: 'am loyalsten',
    opposite: 'illoyal / untreu',
    example: 'Loyale Freunde verteidigen einen auch dann, wenn man nicht im Raum ist.',
    exampleTranslation: 'دوستان باوفا حتی زمانی که در جمع حضور نداری از تو دفاع می‌کنند.',
    level: 'B1+',
    tags: ['وفاداری', 'دوستی']
  },
  {
    id: 'k1-adj6',
    german: 'hilfsbereit',
    persian: 'یاری‌رسان، اهل کمک به دیگران',
    category: 'Adjektive',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 3', pageOrTrack: 'S. 14', context: 'hilfsbereite Menschen im Alltag' }
    ],
    pronunciation: '[ˈhɪlfsbəˌʁaɪ̯t]',
    comparative: 'hilfsbereiter',
    superlative: 'am hilfsbereitesten',
    opposite: 'egoistisch / unkooperativ',
    example: 'Unsere Nachbarn sind ausgesprochen hilfsbereit und freundlich.',
    exampleTranslation: 'همسایگان ما فوق‌العاده اهل کمک و مهربان هستند.',
    level: 'B1+',
    tags: ['اخلاق', 'جامعه']
  },
  {
    id: 'k1-adj7',
    german: 'selbstlos',
    persian: 'فداکارانه، بدون چشم‌داشت شخصی',
    category: 'Adjektive',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 3', pageOrTrack: 'S. 15', context: 'selbstloses Engagement für Notleidende' }
    ],
    pronunciation: '[ˈzɛlpstˌloːs]',
    comparative: 'selbstloser',
    superlative: 'am selbstlosesten',
    opposite: 'egoistisch / eigennützig',
    example: 'Er half den Betroffenen mit vollem, selbstlosem Einsatz.',
    exampleTranslation: 'او با تلاشی تمام‌عیار و فداکارانه به آسیب‌دیدگان یاری رساند.',
    level: 'B1+',
    tags: ['اخلاق', 'فداکاری']
  },
  {
    id: 'k1-adj8',
    german: 'verschwiegen',
    persian: 'رازدار، کم‌گو و امین',
    category: 'Adjektive',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 12', context: 'ein absolut verschwiegener Mensch' }
    ],
    pronunciation: '[fɛɐ̯ˈʃviːɡn̩]',
    comparative: 'verschwiegener',
    superlative: 'am verschwiegensten',
    opposite: 'geschwätzig',
    example: 'Wenn du ihr ein Geheimnis verrätst, ist sie absolut verschwiegen.',
    exampleTranslation: 'اگر رازی را به او بگویی، او کاملاً رازدار و امین است.',
    level: 'B1+',
    tags: ['شخصیت', 'رازداری']
  },
  {
    id: 'k1-adj9',
    german: 'kontaktfreudig',
    persian: 'معاشرتی، خونگرم و خوش‌مشرب',
    category: 'Adjektive',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2', pageOrTrack: 'Track 1.2', context: 'Kontaktfreudige Menschen knüpfen schneller Freundschaften.' }
    ],
    pronunciation: '[kɔnˈtaktˌfʁɔɪ̯dɪç]',
    comparative: 'kontaktfreudiger',
    superlative: 'am kontaktfreudigsten',
    opposite: 'zurückhaltend / schüchtern',
    example: 'Aufgrund seiner kontaktfreudigen Art fand er in der neuen Stadt sofort Anschluss.',
    exampleTranslation: 'به دلیل روحیه خونگرم و معاشرتی‌اش، او در شهر جدید فوراً دوست پیدا کرد.',
    level: 'B1+',
    tags: ['شخصیت', 'ارتباط']
  },
  {
    id: 'k1-adj10',
    german: 'aufgeschlossen',
    persian: 'گشاده‌رو، باز و پذیرای تجربیات و افراد نو',
    category: 'Adjektive',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 12', context: 'aufgeschlossen gegenüber neuen Kulturen sein' }
    ],
    pronunciation: '[ˈaʊ̯fɡəˌʃlɔsn̩]',
    comparative: 'aufgeschlossener',
    superlative: 'am aufgeschlossensten',
    opposite: 'verschlossen / engstirnig',
    example: 'Sie begegnet allen Mitmenschen mit einer offenen und aufgeschlossenen Haltung.',
    exampleTranslation: 'او با رویکردی باز و گشاده‌رو با تمام همنوعان روبرو می‌شود.',
    level: 'B1+',
    tags: ['دیدگاه', 'جامعه']
  },
  {
    id: 'k1-adj11',
    german: 'couragiert',
    persian: 'با دل و جرأت، شجاع از نظر اخلاقی',
    category: 'Adjektive',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 3', pageOrTrack: 'S. 14', context: 'couragiertes Handeln in Notsituationen' }
    ],
    pronunciation: '[kuʁaˈʒiːɐ̯t]',
    comparative: 'couragierter',
    superlative: 'am couragiertesten',
    opposite: 'feige / ängstlich',
    example: 'Durch ihr couragiertes Eingreifen verhinderte sie Schlimmeres.',
    exampleTranslation: 'او با اقدام شجاعانه‌اش از وقوع حوادث ناگوارتر جلوگیری کرد.',
    level: 'B1+',
    tags: ['شجاعت', 'اخلاق']
  },
  {
    id: 'k1-adj12',
    german: 'vorbildlich',
    persian: 'نمونه، الگو، شایسته ستایش',
    category: 'Adjektive',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 3', pageOrTrack: 'S. 14', context: 'ein vorbildliches Verhalten an den Tag legen' }
    ],
    pronunciation: '[ˈfoːɐ̯ˌbɪltlɪç]',
    comparative: 'vorbildlicher',
    superlative: 'am vorbildlichsten',
    opposite: 'tadelnswert',
    example: 'Sein ehrenamtlicher Einsatz für Obdachlose ist in jeder Hinsicht vorbildlich.',
    exampleTranslation: 'تلاش داوطلبانه او برای بی‌خانمان‌ها از هر نظر نمونه و شایسته ستایش است.',
    level: 'B1+',
    tags: ['الگو', 'فضیلت']
  },

  // --- Redewendungen (اصطلاحات و عبارات کنایی) ---
  {
    id: 'k1-red1',
    german: 'durch dick und dünn gehen',
    persian: 'در تمام خوشی‌ها و سختی‌ها همراه و وفادار ماندن',
    category: 'Redewendungen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 11', context: 'Mit besten Freunden geht man durch dick und dünn.' }
    ],
    pronunciation: '[dʊʁç dɪk ʊnt dʏn ˈɡeːən]',
    explanation: 'توصیف دوستی‌های استوار که در برابر هر نوع سختی و بحران زندگی دوام می‌آورند.',
    literalMeaning: 'از میان ضخیم و باریک گذشتن',
    example: 'Wir kennen uns seit der Schulzeit und gehen gemeinsam durch dick und dünn.',
    exampleTranslation: 'ما از دوران مدرسه همدیگر را می‌شناسیم و در تمام سختی‌ها و خوشی‌ها پشت هم هستیم.',
    level: 'B1+',
    tags: ['اصطلاح', 'دوستی']
  },
  {
    id: 'k1-red2',
    german: 'wie Pech und Schwefel zusammenhalten',
    persian: 'مثل کوه پشت هم بودن، جدانشدنی و بی‌نهایت وفادار بودن',
    category: 'Redewendungen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 11', context: 'Die beiden Schwestern halten wie Pech und Schwefel zusammen.' }
    ],
    pronunciation: '[viː pɛç ʊnt ˈʃveːfl̩ tsuˈzamənˌhaltn̩]',
    explanation: 'کنایه از اتحاد و پیوند ناگسستنی بین دو یا چند نفر در هر شرایطی.',
    literalMeaning: 'مانند قیر و گوگرد به هم چسبیدن',
    example: 'Seit ihrer Kindheit halten die beiden Brüder wie Pech und Schwefel zusammen.',
    exampleTranslation: 'از دوران کودکی، این دو برادر مثل کوه پشت هم هستند و جدایی‌ناپذیرند.',
    level: 'B1+',
    tags: ['اصطلاح', 'همبستگی']
  },
  {
    id: 'k1-red3',
    german: 'jemanden im Stich lassen',
    persian: 'کسی را در سختی تنها گذاشتن و رها کردن',
    category: 'Redewendungen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 11', context: 'einen Freund niemals im Stich lassen' }
    ],
    pronunciation: '[ˈjeːmandn̩ ʔɪm ʃtɪç ˈlasn̩]',
    explanation: 'تنها گذاشتن فرد نیازمند به کمک در لحظات بحرانی و عمل نکردن به تعهد دوستی.',
    literalMeaning: 'کسی را در زخم/نیش رها کردن',
    example: 'Ein wahrer Freund würde dich in einer Notlage niemals im Stich lassen.',
    exampleTranslation: 'یک دوست واقعی هرگز تو را در وضعیت اضطراری تنها نخواهد گذاشت.',
    level: 'B1+',
    tags: ['اصطلاح', 'دوستی']
  },
  {
    id: 'k1-red4',
    german: 'ein offenes Ohr für jemanden haben',
    persian: 'با جان و دل به درد دل و سخنان کسی گوش دادن',
    category: 'Redewendungen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 11', context: 'immer ein offenes Ohr für die Sorgen anderer haben' }
    ],
    explanation: 'همدلی و آمادگی کامل برای شنیدن مشکلات و حرف‌های اطرافیان با صبوری.',
    literalMeaning: 'گوشی باز برای کسی داشتن',
    example: 'Meine beste Freundin hat in jeder Lebenslage ein offenes Ohr für mich.',
    exampleTranslation: 'بهترین دوستم در هر شرایطی از زندگی با جان و دل به حرف‌هایم گوش می‌دهد.',
    level: 'B1+',
    tags: ['اصطلاح', 'همدلی']
  },
  {
    id: 'k1-red5',
    german: 'die Hand ins Feuer legen für jemanden',
    persian: 'به کسی اطمینان صددرصد داشتن و برایش ضمانت دادن',
    category: 'Redewendungen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 11', context: 'für seine Ehrlichkeit die Hand ins Feuer legen' }
    ],
    explanation: 'تأکید بر اعتماد کامل و بی قید و شرط به صداقت و درستی یک فرد.',
    literalMeaning: 'دست را در آتش گذاشتن برای کسی',
    example: 'Für seine Ehrlichkeit würde ich jederzeit meine Hand ins Feuer legen.',
    exampleTranslation: 'برای صداقت او من در هر لحظه حاضرم دستم را در آتش بگذارم (ضمانت قطعی بدهم).',
    level: 'B1+',
    tags: ['اصطلاح', 'اعتماد']
  },
  {
    id: 'k1-red6',
    german: 'Pferde stehlen können mit jemandem',
    persian: 'به کسی آنقدر اعتماد داشتن که بشود هر کار جسورانه یا غیرمنتظره‌ای با او انجام داد',
    category: 'Redewendungen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 11', context: 'mit wahren Freunden kann man Pferde stehlen' }
    ],
    explanation: 'نشان‌دهنده رابطه بسیار صمیمی، سرگرم‌کننده و قابل اعتمادی که در آن هر ماجراجویی ممکن است.',
    literalMeaning: 'با کسی اسب دزدیدن',
    example: 'Mit Sarah kann man wirklich Pferde stehlen; sie macht jeden Spaß mit.',
    exampleTranslation: 'با سارا واقعاً می‌شود هر ماجراجویی دیوانه‌واری را تجربه کرد؛ او پایه همه چیز است.',
    level: 'B1+',
    tags: ['اصطلاح', 'دوستی']
  },
  {
    id: 'k1-red7',
    german: 'auf derselben Wellenlänge sein',
    persian: 'روی یک طول موج بودن، طرز فکر و احساس کاملاً مشترک داشتن',
    category: 'Redewendungen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2', pageOrTrack: 'Track 1.4', context: 'Wir haben sofort gemerkt, dass wir auf derselben Wellenlänge sind.' }
    ],
    explanation: 'درک متقابل فوری و توافق نظر عمیق در نگاه به زندگی و موضوعات مختلف.',
    literalMeaning: 'روی همان طول موج قرار داشتن',
    example: 'Schon beim ersten Treffen spürten wir, dass wir auf derselben Wellenlänge liegen.',
    exampleTranslation: 'از همان اولین دیدار متوجه شدیم که روی یک طول موج فکری مشترک قرار داریم.',
    level: 'B1+',
    tags: ['اصطلاح', 'تفاهم']
  },
  {
    id: 'k1-red8',
    german: 'sein Leben aufs Spiel setzen',
    persian: 'جان خود را به خطر انداختن، ریسک مرگبار کردن برای نجات دیگران',
    category: 'Redewendungen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 3', pageOrTrack: 'S. 14', context: 'sein eigenes Leben aufs Spiel setzen' }
    ],
    explanation: 'پذیرفتن خطر جانی بزرگ برای انجام یک کار شجاعانه یا نجات دیگران.',
    literalMeaning: 'زندگی خود را در بازی گذاشتن',
    example: 'Der Ersthelfer setzte sein Leben aufs Spiel, um die Ertrinkenden zu retten.',
    exampleTranslation: 'امدادگر برای نجات افراد در حال غرق‌شدن، جان خود را به خطر انداخت.',
    level: 'B1+',
    tags: ['اصطلاح', 'شجاعت']
  },
  {
    id: 'k1-red9',
    german: 'über Gott und die Welt reden',
    persian: 'درباره زمین و زمان و همه چیز گپ زدن',
    category: 'Redewendungen',
    lesson: 1,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2', pageOrTrack: 'Track 1.2', context: 'stundenlang über Gott und die Welt plaudern' }
    ],
    explanation: 'گفتگوی طولانی، آزاد و لذت‌بخش درباره تمام موضوعات روزمره و زندگی.',
    literalMeaning: 'درباره خدا و جهان صحبت کردن',
    example: 'Wir trafen uns im Park und redeten stundenlang über Gott und die Welt.',
    exampleTranslation: 'ما در پارک همدیگر را دیدیم و ساعت‌ها درباره زمین و زمان با هم حرف زدیم.',
    level: 'B1+',
    tags: ['اصطلاح', 'مکالمه']
  },

    // =========================================================================
  // KAPITEL 2: Wohnwelten (جهان‌های مسکونی و فرهنگ سکونت)
  // =========================================================================
  // --- Nomen (اسامی با آرتیکل، جمع، جنسیت و ترجمه) ---
  {
    id: 'k2-n1',
    german: 'die Wohngemeinschaft',
    persian: 'خانه اشتراکی، زندگی چندنفره در یک واحد مسکونی (WG)',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 22', context: 'Wohnformen: Leben in einer Wohngemeinschaft' },
      { source: 'Hörtexte', lesson: 2, module: 'Modul 2 Aufgabe 3', pageOrTrack: 'Track 1.14', context: 'Wie funktioniert das WG-Casting?' }
    ],
    pronunciation: '[ˈvoːnɡəˌmaɪ̯nʃaft]',
    article: 'die',
    plural: 'die Wohngemeinschaften (die WGs)',
    genderPersian: 'مونث (die)',
    example: 'In einer Wohngemeinschaft teilen sich die Mitbewohner die Miete und die Küche.',
    exampleTranslation: 'در یک خانه اشتراکی، هم‌خانه‌ها اجاره و آشپزخانه را با هم شریک می‌شوند.',
    level: 'B1+',
    tags: ['مسکن', 'زندگی اشتراکی']
  },
  {
    id: 'k2-n2',
    german: 'der Mitbewohner',
    persian: 'هم‌خانه، هم‌اتاقی در خانه اشتراکی',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 22', context: 'Konflikte zwischen Mitbewohnern vermeiden' },
      { source: 'Hörtexte', lesson: 2, module: 'Modul 2', pageOrTrack: 'Track 1.15', context: 'Neue Mitbewohner für die WG auswählen' }
    ],
    pronunciation: '[ˈmɪtbəˌvoːnɐ]',
    article: 'der',
    plural: 'die Mitbewohner (مونث: die Mitbewohnerin)',
    genderPersian: 'مذکر (der)',
    example: 'Mein neuer Mitbewohner studiert Architektur und kocht sehr gerne.',
    exampleTranslation: 'هم‌خانه جدید من معماری می‌خواند و به آشپزی علاقه زیادی دارد.',
    level: 'B1+',
    tags: ['روابط', 'هم‌خانه']
  },
  {
    id: 'k2-n3',
    german: 'die Kaltmiete',
    persian: 'کرایه پایه / کرایه خالص (بدون احتساب هزینه‌های گرمایش و جانبی)',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 24', context: 'Wohnungsanzeigen verstehen: Kaltmiete vs. Warmmiete' }
    ],
    pronunciation: '[ˈkaltˌmiːtə]',
    article: 'die',
    plural: 'die Kaltmieten',
    genderPersian: 'مونث (die)',
    example: 'Die Kaltmiete beträgt 650 Euro, dazu kommen noch die Nebenkosten.',
    exampleTranslation: 'کرایه خالص ۶۵۰ یورو است که هزینه‌های جانبی نیز به آن اضافه می‌شود.',
    level: 'B1+',
    tags: ['مالی', 'قرارداد']
  },
  {
    id: 'k2-n4',
    german: 'die Warmmiete',
    persian: 'کرایه ناخالص / کرایه کل (شامل کرایه پایه به همراه هزینه‌های جانبی و گرمایش)',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 24', context: 'Die Warmmiete im monatlichen Budget einplanen' }
    ],
    pronunciation: '[ˈvaʁmˌmiːtə]',
    article: 'die',
    plural: 'die Warmmieten',
    genderPersian: 'مونث (die)',
    example: 'Die Warmmiete der zentralen Zweizimmerwohnung beläuft sich auf 890 Euro.',
    exampleTranslation: 'کرایه کل این آپارتمان دوخوابه مرکز شهر بالغ بر ۸۹۰ یورو است.',
    level: 'B1+',
    tags: ['مسکن', 'هزینه‌ها']
  },
  {
    id: 'k2-n5',
    german: 'die Nebenkosten',
    persian: 'هزینه‌های جانبی ساختمان (آب، گرمایش، دفع زباله، نظافت راهرو و...)',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 25', context: 'Aufschlüsselung der Nebenkosten in der Abrechnung' }
    ],
    pronunciation: '[ˈneːbn̩ˌkɔstn̩]',
    article: 'die',
    plural: 'die Nebenkosten (همیشه به صورت جمع)',
    genderPersian: 'مونث (die)',
    example: 'Einmal im Jahr erhält jeder Mieter die genaue Abrechnung über die Nebenkosten.',
    exampleTranslation: 'سالی یک بار هر مستأجر صورت‌حساب دقیق هزینه‌های جانبی را دریافت می‌کند.',
    level: 'B1+',
    tags: ['امور مالی', 'قبوض']
  },
  {
    id: 'k2-n6',
    german: 'die Kaution',
    persian: 'مبلغ ودیعه، پول پیش ضمانت اجاره',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 24', context: 'Bis zu drei Monatskaltmieten als Kaution hinterlegen' },
      { source: 'Hörtexte', lesson: 2, module: 'Modul 2', pageOrTrack: 'Track 1.16', context: 'Wann bekommt man die Kaution nach dem Auszug zurück?' }
    ],
    pronunciation: '[kaʊ̯ˈtsi̯oːn]',
    article: 'die',
    plural: 'die Kautionen',
    genderPersian: 'مونث (die)',
    example: 'Der Vermieter zahlt die Kaution zurück, wenn die Wohnung ohne Schäden übergeben wird.',
    exampleTranslation: 'صاحبخانه در صورتی که آپارتمان بدون خسارت تحویل داده شود، ودیعه را بازمی‌گرداند.',
    level: 'B1+',
    tags: ['قرارداد', 'امور بانکی']
  },
  {
    id: 'k2-n7',
    german: 'der Mietvertrag',
    persian: 'قرارداد رسمی اجاره ملک',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 25', context: 'Rechte und Pflichten im Mietvertrag festlegen' }
    ],
    pronunciation: '[ˈmiːtfɛɐ̯ˌtʁaːk]',
    article: 'der',
    plural: 'die Mietverträge',
    genderPersian: 'مذکر (der)',
    example: 'Lesen Sie alle Klauseln im Mietvertrag aufmerksam durch, bevor Sie unterschreiben.',
    exampleTranslation: 'قبل از امضا کردن، تمام بندهای قرارداد اجاره را با دقت مطالعه کنید.',
    level: 'B1+',
    tags: ['حقوقی', 'قرارداد']
  },
  {
    id: 'k2-n8',
    german: 'die Kündigungsfrist',
    persian: 'مهلت قانونی اعلام فسخ قرارداد',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 25', context: 'Die gesetzliche Kündigungsfrist beträgt in der Regel drei Monate.' }
    ],
    pronunciation: '[ˈkʏndɪɡʊŋsˌfʁɪst]',
    article: 'die',
    plural: 'die Kündigungsfristen',
    genderPersian: 'مونث (die)',
    example: 'Wer umziehen möchte, muss sich unbedingt an die dreimonatige Kündigungsfrist halten.',
    exampleTranslation: 'کسی که قصد اسباب‌کشی دارد باید حتماً به مهلت فسخ ۳ ماهه پایبند باشد.',
    level: 'B1+',
    tags: ['حقوق', 'قانون اجاره']
  },
  {
    id: 'k2-n9',
    german: 'das Übergabeprotokoll',
    persian: 'صورت‌جلسه تحویل مسکن (ثبت وضعیت و خسارات)',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 25', context: 'Mängel beim Einzug im Übergabeprotokoll festhalten' },
      { source: 'Hörtexte', lesson: 2, module: 'Modul 2', pageOrTrack: 'Track 1.16', context: 'Gemeinsame Wohnungsbesichtigung und Protokollierung' }
    ],
    pronunciation: '[ˈyːbɐɡaːbəpʁotoˌkɔl]',
    article: 'das',
    plural: 'die Übergabeprotokolle',
    genderPersian: 'خنثی (das)',
    example: 'Im Übergabeprotokoll wurden alle vorhandenen Kratzer im Parkettboden schriftlich notiert.',
    exampleTranslation: 'در صورت‌جلسه تحویل، تمام خط‌وخش‌های موجود روی کف پارکت کتباً ثبت شد.',
    level: 'B1+',
    tags: ['تحویل خانه', 'مستندات']
  },
  {
    id: 'k2-n10',
    german: 'der Vermieter',
    persian: 'موجر، صاحبخانه، اجاره‌دهنده',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 24', context: 'Pflichten des Vermieters bei Reparaturen' }
    ],
    pronunciation: '[fɛɐ̯ˈmiːtɐ]',
    article: 'der',
    plural: 'die Vermieter (مونث: die Vermieterin)',
    genderPersian: 'مذکر (der)',
    example: 'Der Vermieter ist verpflichtet, die defekte Heizung im Winter umgehend zu reparieren.',
    exampleTranslation: 'صاحبخانه موظف است سیستم گرمایشی خراب را در زمستان فوراً تعمیر کند.',
    level: 'B1+',
    tags: ['نقش‌ها', 'مسکن']
  },
  {
    id: 'k2-n11',
    german: 'der Mieter',
    persian: 'مستأجر، کرایه‌نشین',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 24', context: 'Rechte des Mieters bei Mängeln' }
    ],
    pronunciation: '[ˈmiːtɐ]',
    article: 'der',
    plural: 'die Mieter (مونث: die Mieterin)',
    genderPersian: 'مذکر (der)',
    example: 'Als Mieter hat man das Recht auf eine funktionierende Warmwasserversorgung.',
    exampleTranslation: 'به عنوان مستأجر، فرد حق برخورداری از سیستم آب گرم سالم را دارد.',
    level: 'B1+',
    tags: ['حقوقی', 'مسکن']
  },
  {
    id: 'k2-n12',
    german: 'der Altbau',
    persian: 'ساختمان قدیمی و کلاسیک (دارای سقف‌های بلند و گچ‌بری)',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 22', context: 'Wohnen im Altbau: Charme und hohe Heizkosten' },
      { source: 'Hörtexte', lesson: 2, module: 'Modul 1', pageOrTrack: 'Track 1.13', context: 'Mein Traum: Eine Altbauwohnung mit hohen Decken' }
    ],
    pronunciation: '[ˈaltˌbaʊ̯]',
    article: 'der',
    plural: 'die Altbauten',
    genderPersian: 'مذکر (der)',
    example: 'Wohnungen im Altbau besitzen durch die hohen Decken und Holzböden besonderen Charme.',
    exampleTranslation: 'آپارتمان‌های ساخت قدیمی به خاطر سقف‌های بلند و کف چوبی جذابیت ویژه‌ای دارند.',
    level: 'B1+',
    tags: ['معماری', 'انواع مسکن']
  },
  {
    id: 'k2-n13',
    german: 'der Neubau',
    persian: 'ساختمان نوساز و مدرن (با عایق‌بندی و امکانات جدید)',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 22', context: 'Energieeffizienz im Neubau' }
    ],
    pronunciation: '[ˈnɔɪ̯ˌbaʊ̯]',
    article: 'der',
    plural: 'die Neubauten',
    genderPersian: 'مذکر (der)',
    example: 'Der moderne Neubau ist mit einer energieeffizienten Fußbodenheizung ausgestattet.',
    exampleTranslation: 'ساختمان نوساز مدرن مجهز به سیستم گرمایش از کف کم‌مصرف است.',
    level: 'B1+',
    tags: ['معماری', 'مسکن']
  },
  {
    id: 'k2-n14',
    german: 'das Mehrgenerationenhaus',
    persian: 'خانه چندنسلی (زندگی مشترک سالمندان، جوانان و کودکان در یک مجتمع)',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 23', context: 'Zusammenleben von Jung und Alt im Mehrgenerationenhaus' },
      { source: 'Hörtexte', lesson: 2, module: 'Modul 1 Aufgabe 4', pageOrTrack: 'Track 1.15', context: 'Erfahrungsberichte aus dem Mehrgenerationenhaus' }
    ],
    pronunciation: '[meːɐ̯ɡenəʁaˈtsi̯oːnənˌhaʊ̯s]',
    article: 'das',
    plural: 'die Mehrgenerationenhäuser',
    genderPersian: 'خنثی (das)',
    example: 'In einem Mehrgenerationenhaus unterstützen sich Senioren und junge Familien gegenseitig.',
    exampleTranslation: 'در یک خانه چندنسلی، سالمندان و خانواده‌های جوان متقابلاً به یکدیگر کمک می‌کنند.',
    level: 'B1+',
    tags: ['جامعه', 'سبک زندگی']
  },
  {
    id: 'k2-n15',
    german: 'das Hausboot',
    persian: 'خانه قایقی، خانه شناور روی آب',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 23', context: 'Ungewöhnliche Wohnformen: Leben auf dem Hausboot' }
    ],
    pronunciation: '[ˈhaʊ̯sˌboːt]',
    article: 'das',
    plural: 'die Hausboote',
    genderPersian: 'خنثی (das)',
    example: 'Das Leben auf einem Hausboot vermittelt ein Gefühl von Freiheit und Nähe zur Natur.',
    exampleTranslation: 'زندگی در یک خانه قایقی حس آزادی و نزدیکی به طبیعت را القا می‌کند.',
    level: 'B1+',
    tags: ['سبک زندگی', 'انواع خانه']
  },
  {
    id: 'k2-n16',
    german: 'das Studentenwohnheim',
    persian: 'خوابگاه دانشجویی',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 22', context: 'Günstige Zimmer im Studentenwohnheim beantragen' }
    ],
    pronunciation: '[ʃtuˈdɛntn̩ˌvoːnhaɪ̯m]',
    article: 'das',
    plural: 'die Studentenwohnheime',
    genderPersian: 'خنثی (das)',
    example: 'Wegen der günstigen Miete bewerben sich viele Erstsemester um einen Platz im Wohnheim.',
    exampleTranslation: 'به دلیل کرایه مناسب، بسیاری از دانشجویان ترم اول برای گرفتن جا در خوابگاه درخواست می‌دهند.',
    level: 'B1+',
    tags: ['دانشگاه', 'مسکن']
  },
  {
    id: 'k2-n17',
    german: 'der Nesthocker',
    persian: 'فرزند جوانی که تا سن بالا حاضر به ترک خانه پدری نیست',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 3', pageOrTrack: 'S. 26', context: 'Phänomen Nesthocker: Warum bleiben junge Leute so lange zu Hause?' },
      { source: 'Hörtexte', lesson: 2, module: 'Modul 3 Aufgabe 1b', pageOrTrack: 'Track 1.17', context: 'Hotel Mama oder eigene Bude? Diskussion über Nesthocker' }
    ],
    pronunciation: '[ˈnɛstˌhɔkɐ]',
    article: 'der',
    plural: 'die Nesthocker (مونث: die Nesthockerin)',
    genderPersian: 'مذکر (der)',
    example: 'Viele Nesthocker schätzen den Komfort bei den Eltern und sparen sich die eigene Miete.',
    exampleTranslation: 'بسیاری از جوانان وابسته، راحتی خانه والدین را ترجیح داده و از پرداخت کرایه مستقل صرفه‌جویی می‌کنند.',
    level: 'B1+',
    tags: ['جامعه‌شناسی', 'خانواده']
  },
  {
    id: 'k2-n18',
    german: 'das Hotel Mama',
    persian: 'اصطلاح کنایی: زندگی راحت در خانه پدری با برخورداری از خدمات مادر',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 3', pageOrTrack: 'S. 26', context: 'Das bequeme Leben im Hotel Mama genießen' },
      { source: 'Hörtexte', lesson: 2, module: 'Modul 3', pageOrTrack: 'Track 1.17', context: 'Wann verlässt man endgültig das Hotel Mama?' }
    ],
    pronunciation: '[hoˈtɛl ˈmama]',
    article: 'das',
    plural: 'das Hotel Mama (بدون جمع)',
    genderPersian: 'خنثی (das)',
    example: 'Im Hotel Mama muss man sich weder um Wäschewaschen noch um Einkäufe kümmern.',
    exampleTranslation: 'در خانه پدری (هتل مامان) نیازی نیست نگران شستن لباس‌ها یا خرید مایحتاج باشید.',
    level: 'B1+',
    tags: ['فرهنگ', 'استقلال']
  },
  {
    id: 'k2-n19',
    german: 'die Hausordnung',
    persian: 'قوانین و مقررات داخلی ساختمان',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 25', context: 'Ruhezeiten laut Hausordnung beachten' }
    ],
    pronunciation: '[ˈhaʊ̯sˌʔɔʁdnʊŋ]',
    article: 'die',
    plural: 'die Hausordnungen',
    genderPersian: 'مونث (die)',
    example: 'Gemäß der Hausordnung gilt ab 22 Uhr im gesamten Gebäude die Nachtruhe.',
    exampleTranslation: 'طبق مقررات داخلی ساختمان، از ساعت ۲۲ در تمام ساختمان سکوت شبانه برقرار است.',
    level: 'B1+',
    tags: ['قوانین', 'همسایگی']
  },
  {
    id: 'k2-n20',
    german: 'die Ruhestörung',
    persian: 'سلب آسایش، ایجاد سر و صدا و برهم زدن آرامش همسایگان',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 25', context: 'Konflikte wegen Ruhestörung in der Nachbarschaft' },
      { source: 'Hörtexte', lesson: 2, module: 'Modul 2', pageOrTrack: 'Track 1.16', context: 'Beschwerden über nächtliche Ruhestörung' }
    ],
    pronunciation: '[ˈʁuːəˌʃtøːʁʊŋ]',
    article: 'die',
    plural: 'die Ruhestörungen',
    genderPersian: 'مونث (die)',
    example: 'Wiederholte Ruhestörung zur Nachtzeit kann zur Abmahnung durch den Vermieter führen.',
    exampleTranslation: 'سر و صدای مکرر در ساعات شب می‌تواند منجر به اخطار کتبی از سوی صاحبخانه شود.',
    level: 'B1+',
    tags: ['همسایگی', 'قانون']
  },
  {
    id: 'k2-n21',
    german: 'der Mangel',
    persian: 'عیب، نقص، خرابی و کمبود در منزل',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 24', context: 'Mängel in der Wohnung unverzüglich melden' }
    ],
    pronunciation: '[ˈmaŋl̩]',
    article: 'der',
    plural: 'die Mängel',
    genderPersian: 'مذکر (der)',
    example: 'Der Mieter listete alle Mängel wie undichte Fenster und feuchte Wände schriftlich auf.',
    exampleTranslation: 'مستأجر تمام نقص‌ها مانند پنجره‌های غیرعایق و دیوارهای مرطوب را کتباً فهرست کرد.',
    level: 'B1+',
    tags: ['تعمیرات', 'حقوق مستأجر']
  },
  {
    id: 'k2-n22',
    german: 'die Mietminderung',
    persian: 'کاهش قانونی مبلغ اجاره‌بها (به دلیل خرابی یا نقص رفع‌نشده)',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 24', context: 'Recht auf Mietminderung bei Heizungsausfall im Winter' }
    ],
    pronunciation: '[ˈmiːtˌmɪndəʁʊŋ]',
    article: 'die',
    plural: 'die Mietminderungen',
    genderPersian: 'مونث (die)',
    example: 'Wegen des defekten Aufzugs verlangten die Bewohner im fünften Stock eine Mietminderung.',
    exampleTranslation: 'ساکنان طبقه پنجم به دلیل خرابی آسانسور تقاضای کاهش قانونی اجاره‌بها را داشتند.',
    level: 'B1+',
    tags: ['حقوقی', 'امور مالی']
  },
  {
    id: 'k2-n23',
    german: 'die Wohnfläche',
    persian: 'مساحت و متراژ قابل سکونت واحد مسکونی',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 22', context: 'Die Wohnfläche in Quadratmetern berechnen' }
    ],
    pronunciation: '[ˈvoːnˌflɛçə]',
    article: 'die',
    plural: 'die Wohnflächen',
    genderPersian: 'مونث (die)',
    example: 'Die Dreizimmerwohnung bietet eine großzügige Wohnfläche von 85 Quadratmetern.',
    exampleTranslation: 'این آپارتمان سه‌خوابه دارای متراژ سکونت دلباز ۸۵ متر مربع است.',
    level: 'B1+',
    tags: ['مشخصات ملک', 'متراژ']
  },
  {
    id: 'k2-n24',
    german: 'die Privatsphäre',
    persian: 'حریم خصوصی، فضای شخصی زندگی',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 23', context: 'Eigene Privatsphäre in der Wohngemeinschaft wahren' },
      { source: 'Hörtexte', lesson: 2, module: 'Modul 3', pageOrTrack: 'Track 1.18', context: 'Bedürfnis nach mehr Privatsphäre als junger Erwachsener' }
    ],
    pronunciation: '[pʁiˈvaːtsfɛːʁə]',
    article: 'die',
    plural: 'die Privatsphäre (بدون جمع)',
    genderPersian: 'مونث (die)',
    example: 'Auch in einer Wohngemeinschaft braucht jeder Mitbewohner seine eigene Privatsphäre.',
    exampleTranslation: 'حتی در یک خانه اشتراکی هم هر هم‌خانه‌ای به حریم خصوصی خودش نیاز دارد.',
    level: 'B1+',
    tags: ['روانشناسی', 'سبک زندگی']
  },
  {
    id: 'k2-n25',
    german: 'die Selbstständigkeit',
    persian: 'استقلال، خوداتکایی در زندگی',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 2, module: 'Modul 3', pageOrTrack: 'Track 1.18', context: 'Der Schritt in die Selbstständigkeit durch den eigenen Haushalt' }
    ],
    pronunciation: '[ˈzɛlpstˌʃtɛndɪçkaɪ̯t]',
    article: 'die',
    plural: 'die Selbstständigkeit (بدون جمع)',
    genderPersian: 'مونث (die)',
    example: 'Der Auszug aus dem Elternhaus ist ein entscheidender Schritt zur Selbstständigkeit.',
    exampleTranslation: 'اسباب‌کشی از خانه پدری یک گام تعیین‌کننده به سوی استقلال فردی است.',
    level: 'B1+',
    tags: ['رشد فردی', 'استقلال']
  },
  {
    id: 'k2-n26',
    german: 'die Einbauküche',
    persian: 'آشپزخانه مجهز و کابینت‌دار توکار (EBK)',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 24', context: 'Wohnungsanzeige: 3-Zimmer-Wohnung mit moderner Einbauküche' }
    ],
    pronunciation: '[ˈaɪ̯nbaʊ̯ˌkʏçə]',
    article: 'die',
    plural: 'die Einbauküchen',
    genderPersian: 'مونث (die)',
    example: 'Die Wohnung wird mit einer modernen Einbauküche inklusive Geschirrspüler vermietet.',
    exampleTranslation: 'آپارتمان همراه با یک آشپزخانه مجهز توکار شامل ماشین ظرفشویی اجاره داده می‌شود.',
    level: 'B1+',
    tags: ['امکانات', 'آشپزخانه']
  },
  {
    id: 'k2-n27',
    german: 'der Makler',
    persian: 'بنگاه‌دار املاک، مشاور املاک',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 24', context: 'Wohnungsvermittlung durch einen professionellen Makler' }
    ],
    pronunciation: '[ˈmaːklɐ]',
    article: 'der',
    plural: 'die Makler (مونث: die Maklerin)',
    genderPersian: 'مذکر (der)',
    example: 'Der Makler führte die Interessenten durch das frisch sanierte Einfamilienhaus.',
    exampleTranslation: 'مشاور املاک متقاضیان را در این خانه ویلایی تازه بازسازی‌شده راهنمایی کرد.',
    level: 'B1+',
    tags: ['شغل', 'املاک']
  },
  {
    id: 'k2-n28',
    german: 'die Maklerprovision',
    persian: 'کمیسیون و حق‌الزحمه مشاور املاک',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 24', context: 'Provisionsfreie Wohnungen bevorzugen' }
    ],
    pronunciation: '[ˈmaːklɐpʁoviˌzi̯oːn]',
    article: 'die',
    plural: 'die Maklerprovisionen',
    genderPersian: 'مونث (die)',
    example: 'Nach dem Bestellerprinzip zahlt derjenige die Maklerprovision, der den Makler beauftragt hat.',
    exampleTranslation: 'طبق قانون سفارش‌دهنده، حق کمیسیون را کسی پرداخت می‌کند که به بنگاه سفارش داده است.',
    level: 'B1+',
    tags: ['مالی', 'املاک']
  },
  {
    id: 'k2-n29',
    german: 'der Lebensunterhalt',
    persian: 'مخارج و هزینه معیشت و زندگی روزمره',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 2, module: 'Modul 3', pageOrTrack: 'Track 1.18', context: 'den Lebensunterhalt selbst finanzieren' }
    ],
    pronunciation: '[ˈleːbn̩sˌʔʊntɐhalt]',
    article: 'der',
    plural: 'der Lebensunterhalt (بدون جمع)',
    genderPersian: 'مذکر (der)',
    example: 'Neben den Studiengebühren muss er auch seinen gesamten Lebensunterhalt selbst verdienen.',
    exampleTranslation: 'علاوه بر شهریه دانشگاه، او باید تمام هزینه‌های زندگی‌اش را نیز خودش درآورد.',
    level: 'B1+',
    tags: ['اقتصاد', 'معیشت']
  },
  {
    id: 'k2-n30',
    german: 'die Haushaltsführung',
    persian: 'مدیریت و اداره کارهای خانه و دخل و خرج منزل',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 2, module: 'Modul 3', pageOrTrack: 'Track 1.17', context: 'Aufgaben der Haushaltsführung gerecht aufteilen' }
    ],
    pronunciation: '[ˈhaʊ̯shalt͡sˌfyːʁʊŋ]',
    article: 'die',
    plural: 'die Haushaltsführungen',
    genderPersian: 'مونث (die)',
    example: 'Zur Haushaltsführung gehören Kochen, Putzen, Waschen und die monatliche Budgetplanung.',
    exampleTranslation: 'مدیریت خانه شامل آشپزی، نظافت، شستشو و برنامه‌ریزی بودجه ماهانه است.',
    level: 'B1+',
    tags: ['امور منزل', 'زندگی']
  },

  // --- Verben (افعال با تمام زمان‌های Präsens / Präteritum / Perfekt و حروف اضافه) ---
  {
    id: 'k2-v1',
    german: 'einziehen',
    persian: 'اسباب‌کشی کردن به منزل جدید، مستقر و ساکن شدن',
    category: 'Verben',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 22', context: 'in eine neue Wohnung einziehen' },
      { source: 'Hörtexte', lesson: 2, module: 'Modul 2', pageOrTrack: 'Track 1.14', context: 'Nächste Woche zieht der neue Mitbewohner ein.' }
    ],
    pronunciation: '[ˈaɪ̯nˌtsiːən]',
    infinitive: 'einziehen in (+ Akk.)',
    present: 'zieht ein',
    preterite: 'zog ein',
    perfect: 'ist eingezogen',
    auxiliary: 'sein',
    separable: true,
    prepositionCase: 'in + Akkusativ',
    example: 'Nächsten Monat ziehen die beiden Studentinnen in ihre neue Wohnung ein.',
    exampleTranslation: 'ماه آینده آن دو دانشجو به آپارتمان جدیدشان اسباب‌کشی می‌کنند.',
    level: 'B1+',
    tags: ['اسباب‌کشی', 'مسکن']
  },
  {
    id: 'k2-v2',
    german: 'ausziehen',
    persian: 'تخلیه کردن منزل، ترک خانه پدری یا قبلی',
    category: 'Verben',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 2, module: 'Modul 3', pageOrTrack: 'Track 1.17', context: 'Wann bist du bei deinen Eltern ausgezogen?' }
    ],
    pronunciation: '[ˈaʊ̯sˌtsiːən]',
    infinitive: 'ausziehen aus (+ Dat.)',
    present: 'zieht aus',
    preterite: 'zog aus',
    perfect: 'ist ausgezogen',
    auxiliary: 'sein',
    separable: true,
    prepositionCase: 'aus + Dativ',
    example: 'Mit einundzwanzig Jahren ist sie von zu Hause ausgezogen, um in Berlin zu studieren.',
    exampleTranslation: 'در بیست و یک سالگی او از خانه پدری بیرون آمد تا در برلین تحصیل کند.',
    level: 'B1+',
    tags: ['استقلال', 'مسکن']
  },
  {
    id: 'k2-v3',
    german: 'umziehen',
    persian: 'اسباب‌کشی و نقل مکان کردن از شهری به شهر دیگر یا محلی به محل دیگر',
    category: 'Verben',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 23', context: 'aus beruflichen Gründen in eine andere Stadt umziehen' }
    ],
    pronunciation: '[ˈʊmˌtsiːən]',
    infinitive: 'umziehen nach / in (+ Akk.)',
    present: 'zieht um',
    preterite: 'zog um',
    perfect: 'ist umgezogen',
    auxiliary: 'sein',
    separable: true,
    example: 'Wegen seiner neuen Arbeitsstelle musste die ganze Familie nach München umziehen.',
    exampleTranslation: 'به خاطر شغل جدیدش، تمام خانواده مجبور شدند به مونیخ نقل مکان کنند.',
    level: 'B1+',
    tags: ['نقل مکان', 'جابجایی']
  },
  {
    id: 'k2-v4',
    german: 'kündigen',
    persian: 'فسخ کردن (قرارداد اجاره یا اشتراک کاری)',
    category: 'Verben',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 24', context: 'den Mietvertrag fristgerecht kündigen' }
    ],
    pronunciation: '[ˈkʏndɪɡn̩]',
    infinitive: 'kündigen (+ Akk.)',
    present: 'kündigt',
    preterite: 'kündigte',
    perfect: 'hat gekündigt',
    auxiliary: 'haben',
    example: 'Der Mieter muss das Mietverhältnis drei Monate im Voraus schriftlich kündigen.',
    exampleTranslation: 'مستأجر باید قرارداد اجاره را سه ماه قبل به صورت کتبی فسخ کند.',
    level: 'B1+',
    tags: ['حقوقی', 'قرارداد']
  },
  {
    id: 'k2-v5',
    german: 'vermieten',
    persian: 'اجاره دادن ملک یا اتاق به دیگری',
    category: 'Verben',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 23', context: 'ein möbliertes Zimmer an Studenten vermieten' }
    ],
    pronunciation: '[fɛɐ̯ˈmiːtn̩]',
    infinitive: 'vermieten an (+ Akk.)',
    present: 'vermietet',
    preterite: 'vermietete',
    perfect: 'hat vermietet',
    auxiliary: 'haben',
    prepositionCase: 'an + Akkusativ',
    example: 'Die Eigentümerin vermietet das Dachgeschoss an ein junges Paar.',
    exampleTranslation: 'مالک خانم، طبقه آخر زیرشیروانی را به یک زوج جوان اجاره می‌دهد.',
    level: 'B1+',
    tags: ['مسکن', 'اجاره']
  },
  {
    id: 'k2-v6',
    german: 'untervermieten',
    persian: 'اجاره دادن به نفر دوم / ساب‌لت کردن (اجاره دادن اتاق توسط مستأجر اصلی)',
    category: 'Verben',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 25', context: 'eine Wohnung während eines Auslandssemesters untervermieten' }
    ],
    pronunciation: '[ˈʊntɐfɛɐ̯ˌmiːtn̩]',
    infinitive: 'untervermieten (+ Akk. / an + Akk.)',
    present: 'vermietet unter',
    preterite: 'vermietete unter',
    perfect: 'hat untervermietet',
    auxiliary: 'haben',
    separable: true,
    prepositionCase: 'an + Akkusativ',
    example: 'Während ihres Auslandsaufenthalts darf sie das WG-Zimmer mit Erlaubnis des Vermieters untervermieten.',
    exampleTranslation: 'در طول اقامتش در خارج از کشور، او با اجازه صاحبخانه مجاز است اتاق خانه اشتراکی را ساب‌لت کند.',
    level: 'B1+',
    tags: ['قرارداد', 'دانشجویی']
  },
  {
    id: 'k2-v7',
    german: 'besichtigen',
    persian: 'بازدید کردن از ملک یا آپارتمان قبل از اجاره/خرید',
    category: 'Verben',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 24', context: 'die Wohnung vor der Unterschrift gründlich besichtigen' },
      { source: 'Hörtexte', lesson: 2, module: 'Modul 2', pageOrTrack: 'Track 1.15', context: 'Massenbesichtigung in einer begehrten Wohngegend' }
    ],
    pronunciation: '[bəˈzɪçtɪɡn̩]',
    infinitive: 'besichtigen (+ Akk.)',
    present: 'besichtigt',
    preterite: 'besichtigte',
    perfect: 'hat besichtigt',
    auxiliary: 'haben',
    example: 'Gestern haben wir zusammen mit zwanzig anderen Interessenten die Wohnung besichtigt.',
    exampleTranslation: 'دیروز ما به همراه بیست متقاضی دیگر از آن آپارتمان بازدید کردیم.',
    level: 'B1+',
    tags: ['جستجوی مسکن', 'بازدید']
  },
  {
    id: 'k2-v8',
    german: 'renovieren',
    persian: 'بازسازی کردن، رنگ‌آمیزی و نوسازی فضای خانه',
    category: 'Verben',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 25', context: 'die Wohnung beim Auszug frisch renovieren' }
    ],
    pronunciation: '[ʁenoˈviːʁən]',
    infinitive: 'renovieren (+ Akk.)',
    present: 'renoviert',
    preterite: 'renovierte',
    perfect: 'hat renoviert',
    auxiliary: 'haben',
    example: 'Vor dem Einzug haben die neuen Mieter die Wände gestrichen und das Bad renoviert.',
    exampleTranslation: 'قبل از اسباب‌کشی، مستأجران جدید دیوارها را رنگ زده و حمام را بازسازی کردند.',
    level: 'B1+',
    tags: ['تعمیرات', 'ساختمان']
  },
  {
    id: 'k2-v9',
    german: 'einhalten',
    persian: 'رعایت و رعایت کامل کردن (مهلت زمانی، قرارداد یا قوانین)',
    category: 'Verben',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 25', context: 'die gesetzlichen Ruhezeiten und Fristen einhalten' }
    ],
    pronunciation: '[ˈaɪ̯nˌhaltn̩]',
    infinitive: 'einhalten (+ Akk.)',
    present: 'hält ein',
    preterite: 'hielt ein',
    perfect: 'hat eingehalten',
    auxiliary: 'haben',
    separable: true,
    example: 'Alle Hausbewohner müssen die vereinbarten Ruhezeiten strikt einhalten.',
    exampleTranslation: 'تمام ساکنان ساختمان باید ساعات سکوت توافق‌شده را دقیقاً رعایت کنند.',
    level: 'B1+',
    tags: ['قانون', 'نظم']
  },
  {
    id: 'k2-v10',
    german: 'beanstanden',
    persian: 'اعتراض کردن به، عیب‌جویی و ایراد گرفتن قانونی از نقص چیزی',
    category: 'Verben',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 25', context: 'Mängel beim Vermieter schriftlich beanstanden' }
    ],
    pronunciation: '[bəˈʔanʃtandn̩]',
    infinitive: 'beanstanden (+ Akk.)',
    present: 'beanstandet',
    preterite: 'beanstandete',
    perfect: 'hat beanstandet',
    auxiliary: 'haben',
    example: 'Der Mieter beanstandete den Schimmel an der Schlafzimmerwand sofort beim Vermieter.',
    exampleTranslation: 'مستأجر فوراً به کپک روی دیوار اتاق خواب نزد صاحبخانه اعتراض کرد.',
    level: 'B1+',
    tags: ['شکایت', 'حقوقی']
  },
  {
    id: 'k2-v11',
    german: 'hinterlegen',
    persian: 'به امانت گذاشتن، تودیع کردن (ودیعه یا مدرک)',
    category: 'Verben',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 24', context: 'eine Kaution auf einem Sperrkonto hinterlegen' }
    ],
    pronunciation: '[hɪntɐˈleːɡn̩]',
    infinitive: 'hinterlegen (+ Akk.)',
    present: 'hinterlegt',
    preterite: 'hinterlegte',
    perfect: 'hat hinterlegt',
    auxiliary: 'haben',
    example: 'Vor Übergabe der Schlüssel musste der Mieter drei Monatskaltmieten als Kaution hinterlegen.',
    exampleTranslation: 'قبل از تحویل کلیدها، مستأجر باید سه ماه کرایه خالص را به عنوان ودیعه تودیع می‌کرد.',
    level: 'B1+',
    tags: ['امور مالی', 'ضمانت']
  },
  {
    id: 'k2-v12',
    german: 'sich einigen auf',
    persian: 'به توافق و تفاهم رسیدن بر سر موضوعی',
    category: 'Verben',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 23', context: 'sich in der WG auf einen Putzplan einigen' },
      { source: 'Hörtexte', lesson: 2, module: 'Modul 2', pageOrTrack: 'Track 1.15', context: 'Wir konnten uns schnell auf einen fairen Mietpreis einigen.' }
    ],
    pronunciation: '[zɪç ˈaɪ̯nɪɡn̩]',
    infinitive: 'sich einigen auf (+ Akk.)',
    present: 'einigt sich',
    preterite: 'einigte sich',
    perfect: 'hat sich geeinigt',
    auxiliary: 'haben',
    reflexive: true,
    prepositionCase: 'auf + Akkusativ',
    example: 'Die Mitbewohner einigten sich auf einen wöchentlichen Putzplan für die Gemeinschaftsräume.',
    exampleTranslation: 'هم‌خانه‌ها بر سر یک برنامه نظافت هفتگی برای فضاهای مشترک به توافق رسیدند.',
    level: 'B1+',
    tags: ['مذاکره', 'همزیستی']
  },
  {
    id: 'k2-v13',
    german: 'bestreiten',
    persian: 'تأمین و پرداخت کردن مخارج زندگی، تقبل هزینه',
    category: 'Verben',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 2, module: 'Modul 3', pageOrTrack: 'Track 1.18', context: 'den eigenen Lebensunterhalt durch einen Nebenjob bestreiten' }
    ],
    pronunciation: '[bəˈʃtʁaɪ̯tn̩]',
    infinitive: 'bestreiten (+ Akk. z.B. Lebensunterhalt)',
    present: 'bestreitet',
    preterite: 'bestritt',
    perfect: 'hat bestritten',
    auxiliary: 'haben',
    example: 'Mit ihrem Nebenjob konnte sie die Miete und ihren gesamten Lebensunterhalt bestreiten.',
    exampleTranslation: 'با شغل پاره‌وقتش او توانست کرایه خانه و تمام مخارج زندگی‌اش را تأمین کند.',
    level: 'B1+',
    tags: ['استقلال مالی', 'مخارج']
  },
  {
    id: 'k2-v14',
    german: 'sich leisten können',
    persian: 'توان مالی و استطاعت خرید/اجاره چیزی را داشتن',
    category: 'Verben',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 22', context: 'sich eine eigene Wohnung in der Innenstadt leisten können' }
    ],
    pronunciation: '[zɪç ˈlaɪ̯stn̩]',
    infinitive: 'sich (+ Dat.) leisten können (+ Akk.)',
    present: 'kann sich leisten',
    preterite: 'konnte sich leisten',
    perfect: 'hat sich leisten können',
    auxiliary: 'haben',
    reflexive: true,
    example: 'Als Berufseinsteiger kann er sich noch keine teure Eigentumswohnung leisten.',
    exampleTranslation: 'به عنوان تازه‌کار در بازار کار، او هنوز توان مالی خرید یک آپارتمان گران‌قیمت را ندارد.',
    level: 'B1+',
    tags: ['اقتصاد', 'استطاعت']
  },
  {
    id: 'k2-v15',
    german: 'haushalten mit',
    persian: 'صرفه‌جویی و مدیریت دخل و خرج با یک بودجه مشخص',
    category: 'Verben',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 2, module: 'Modul 3', pageOrTrack: 'Track 1.18', context: 'mit dem knappen Monatsbudget haushalten lernen' }
    ],
    pronunciation: '[ˈhaʊ̯sˌhaltn̩]',
    infinitive: 'haushalten mit (+ Dat.)',
    present: 'haushaltet',
    preterite: 'haushaltete',
    perfect: 'hat gehaushaltet',
    auxiliary: 'haben',
    prepositionCase: 'mit + Dativ',
    example: 'Wer alleine wohnt, muss lernen, sparsam mit seinem Geld zu haushalten.',
    exampleTranslation: 'کسی که تنها زندگی می‌کند باید یاد بگیرد که صرفه‌جویانه با پولش دخل و خرج کند.',
    level: 'B1+',
    tags: ['مدیریت مالی', 'صرفه‌جویی']
  },
  {
    id: 'k2-v16',
    german: 'flügge werden',
    persian: 'آماده پرواز از لانه پدری شدن، بالغ و مستقل شدن فرزندان',
    category: 'Verben',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 3', pageOrTrack: 'S. 26', context: 'Wenn die Kinder flügge werden und das Haus verlassen' },
      { source: 'Hörtexte', lesson: 2, module: 'Modul 3', pageOrTrack: 'Track 1.17', context: 'Eltern müssen akzeptieren, dass ihre Kinder flügge werden.' }
    ],
    pronunciation: '[ˈflʏɡə ˈveːɐ̯dn̩]',
    infinitive: 'flügge werden',
    present: 'wird flügge',
    preterite: 'wurde flügge',
    perfect: 'ist flügge geworden',
    auxiliary: 'sein',
    example: 'Sobald junge Erwachsene flügge werden, suchen sie eine eigene Bleibe.',
    exampleTranslation: 'به محض این که جوانان مستقل و آماده پرواز از لانه می‌شوند، به دنبال مسکن مستقل می‌گردند.',
    level: 'B1+',
    tags: ['استقلال', 'رشد']
  },
  {
    id: 'k2-v17',
    german: 'stören',
    persian: 'مزاحم شدن، مخل آرامش شدن',
    category: 'Verben',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 25', context: 'die Nachbarn durch laute Musik nicht stören' }
    ],
    pronunciation: '[ˈʃtøːʁən]',
    infinitive: 'stören (+ Akk.)',
    present: 'stört',
    preterite: 'störte',
    perfect: 'hat gestört',
    auxiliary: 'haben',
    example: 'Der Lärm der Baustelle störte die Mieter bei ihrer Arbeit im Homeoffice.',
    exampleTranslation: 'سر و صدای کارگاه ساختمانی، کار مستأجران را در دورکاری مختل کرد.',
    level: 'B1+',
    tags: ['همسایگی', 'آرامش']
  },
  {
    id: 'k2-v18',
    german: 'pendeln',
    persian: 'رفت و آمد روزانه داشتن بین دو شهر یا محل کار و سکونت',
    category: 'Verben',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 23', context: 'täglich zwischen Wohnort und Arbeitsplatz pendeln' }
    ],
    pronunciation: '[ˈpɛndl̩n]',
    infinitive: 'pendeln zwischen (+ Dat.)',
    present: 'pendelt',
    preterite: 'pendelte',
    perfect: 'ist gependelt',
    auxiliary: 'sein',
    prepositionCase: 'zwischen + Dativ',
    example: 'Wegen der hohen Mieten in der Großstadt pendelt er jeden Tag mit dem Zug aus dem Umland.',
    exampleTranslation: 'به خاطر کرایه‌های سنگین کلان‌شهر، او هر روز با قطار از حومه رفت و آمد می‌کند.',
    level: 'B1+',
    tags: ['حمل و نقل', 'رفت و آمد']
  },

  // --- Adjektive & Adverbien (صفات و قیدها با مقایسه‌ها و متضادها) ---
  {
    id: 'k2-adj1',
    german: 'geräumig',
    persian: 'جادار، وسیع، دلباز با فضای زیاد',
    category: 'Adjektive',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 22', context: 'eine geräumige Vierzimmerwohnung' },
      { source: 'Hörtexte', lesson: 2, module: 'Modul 1', pageOrTrack: 'Track 1.14', context: 'Die Küche ist besonders geräumig und hell.' }
    ],
    pronunciation: '[ɡəˈʁɔɪ̯mɪç]',
    comparative: 'geräumiger',
    superlative: 'am geräumigsten',
    opposite: 'beengt / winzig / klein',
    example: 'Das Wohnzimmer ist sehr geräumig und bietet reichlich Platz für alle Freunde.',
    exampleTranslation: 'اتاق پذیرایی بسیار جادار است و فضای کافی برای همه دوستان فراهم می‌کند.',
    level: 'B1+',
    tags: ['توصیف فضا', 'مسکن']
  },
  {
    id: 'k2-adj2',
    german: 'bezahlbar',
    persian: 'قابل پرداخت، دارای قیمت مناسب و دست‌یافتنی',
    category: 'Adjektive',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 22', context: 'Mangel an bezahlbarem Wohnraum in Ballungsgebieten' }
    ],
    pronunciation: '[bəˈtsaːlbaːɐ̯]',
    comparative: 'bezahlbarer',
    superlative: 'am bezahlbarsten',
    opposite: 'unbezahlbar / überteuert',
    example: 'Für Studenten ist es eine enorme Herausforderung, eine bezahlbare Bleibe zu finden.',
    exampleTranslation: 'برای دانشجویان پیدا کردن یک سرپناه با قیمت مناسب یک چالش بزرگ است.',
    level: 'B1+',
    tags: ['اقتصادی', 'قیمت']
  },
  {
    id: 'k2-adj3',
    german: 'hellhörig',
    persian: 'دارای انتقال شدید صدا، نازک بودن دیوارها (که صدای همسایه شنیده می‌شود)',
    category: 'Adjektive',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 2, module: 'Modul 2', pageOrTrack: 'Track 1.16', context: 'Das Haus ist leider extrem hellhörig.' }
    ],
    pronunciation: '[ˈhɛlˌhøːʁɪç]',
    comparative: 'hellhöriger',
    superlative: 'am hellhörigsten',
    opposite: 'schalldicht / gut isoliert',
    example: 'Das alte Gebäude ist so hellhörig, dass man jedes Gespräch der Nachbarn hört.',
    exampleTranslation: 'این ساختمان قدیمی آن‌قدر صدا را عبور می‌دهد که تمام مکالمات همسایگان شنیده می‌شود.',
    level: 'B1+',
    tags: ['کیفیت ساخت', 'عایق صدا']
  },
  {
    id: 'k2-adj4',
    german: 'möbliert',
    persian: 'مبله، دارای اثاثیه و لوازم کامل منزل',
    category: 'Adjektive',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 23', context: 'ein möbliertes Apartment auf Zeit mieten' }
    ],
    pronunciation: '[møˈbliːɐ̯t]',
    comparative: '—',
    superlative: '—',
    opposite: 'unmöbliert',
    example: 'Für ihren sechsmonatigen Aufenthalt suchte sie ein vollständig möbliertes Zimmer.',
    exampleTranslation: 'برای اقامت شش‌ماهه‌اش، او به دنبال یک اتاق کاملاً مبله بود.',
    level: 'B1+',
    tags: ['تجهیزات', 'اثاثیه']
  },
  {
    id: 'k2-adj5',
    german: 'lichtdurchflutet',
    persian: 'غرق در نور، بسیار روشن با پنجره‌های قدی و نورگیر عالی',
    category: 'Adjektive',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 22', context: 'lichtdurchflutete Räume durch bodentiefe Fenster' }
    ],
    pronunciation: '[ˈlɪçtdʊʁçˌfluːtət]',
    comparative: 'lichtdurchfluteter',
    superlative: 'am lichtdurchflutetsten',
    opposite: 'düster / dunkel',
    example: 'Dank der großen Südfenster ist das gesamte Wohnzimmer den ganzen Tag lichtdurchflutet.',
    exampleTranslation: 'به لطف پنجره‌های بزرگ رو به جنوب، کل اتاق نشیمن در تمام طول روز غرق در نور است.',
    level: 'B1+',
    tags: ['نور', 'معماری']
  },
  {
    id: 'k2-adj6',
    german: 'selbstständig',
    persian: 'مستقل، خودکفا، متکی به خود',
    category: 'Adjektive',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 2, module: 'Modul 3', pageOrTrack: 'Track 1.18', context: 'durch die eigene Haushaltsführung selbstständig werden' }
    ],
    pronunciation: '[ˈzɛlpstˌʃtɛndɪç]',
    comparative: 'selbstständiger',
    superlative: 'am selbstständigsten',
    opposite: 'unselbstständig / abhängig',
    example: 'Wer alleine wohnt, lernt schnell, ein selbstständiges und organisiertes Leben zu führen.',
    exampleTranslation: 'کسی که تنها زندگی می‌کند، سریع یاد می‌گیرد که زندگی مستقل و منظمی داشته باشد.',
    level: 'B1+',
    tags: ['شخصیت', 'استقلال']
  },
  {
    id: 'k2-adj7',
    german: 'barrierefrei',
    persian: 'بدون مانع (مناسب برای عبور ویلچر، معلولان و سالمندان بدون پله)',
    category: 'Adjektive',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 23', context: 'barrierefreies Wohnen im Alter' }
    ],
    pronunciation: '[baˈʁi̯eːʁəˌfʁaɪ̯]',
    comparative: 'barrierefreier',
    superlative: 'am barrierefreiesten',
    opposite: 'barrierebehaftet / mit Stufen',
    example: 'Das neue Mehrgenerationenhaus ist komplett barrierefrei mit Aufzug und breiten Türen gebaut.',
    exampleTranslation: 'خانه چندنسلی جدید با آسانسور و درهای عریض کاملاً بدون مانع ساخته شده است.',
    level: 'B1+',
    tags: ['معماری', 'سالمندان']
  },
  {
    id: 'k2-adj8',
    german: 'zentral gelegen',
    persian: 'دارای موقعیت مکانی مرکزی، در قلب شهر',
    category: 'Adjektive',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 22', context: 'eine zentral gelegene Wohnung mit guter Anbindung' }
    ],
    pronunciation: '[tsɛnˈtʁaːl ɡəˈleːɡn̩]',
    comparative: 'zentraler gelegen',
    superlative: 'am zentralsten gelegen',
    opposite: 'abgelegen / am Stadtrand',
    example: 'Die Wohnung ist sehr zentral gelegen; U-Bahn und Geschäfte sind in wenigen Minuten erreichbar.',
    exampleTranslation: 'آپارتمان در موقعیت بسیار مرکزی واقع شده است؛ مترو و فروشگاه‌ها در چند دقیقه در دسترسند.',
    level: 'B1+',
    tags: ['موقعیت', 'دسترسی']
  },

  // --- Redewendungen & Ausdrücke (اصطلاحات با معانی لغوی و کاربرد) ---
  {
    id: 'k2-red1',
    german: 'die eigenen vier Wände',
    persian: 'خانه مستقل و شخصی خود فرد، حریم امن زندگی',
    category: 'Redewendungen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 22', context: 'endlich in den eigenen vier Wänden wohnen' }
    ],
    pronunciation: '[diː ˈʔaɪ̯ɡnən fiːɐ̯ ˈvɛndə]',
    explanation: 'اشاره به استقلال مسکونی و داشتن خانه‌ای مستقل و جدا از خانواده.',
    literalMeaning: 'چهار دیوار خود فرد',
    example: 'Nach dem langen Studium freute er sich riesig auf die Ruhe in den eigenen vier Wänden.',
    exampleTranslation: 'پس از پایان تحصیلات طولانی، او بی‌اندازه از آرامش خانه مستقل خودش خوشحال بود.',
    level: 'B1+',
    tags: ['اصطلاح', 'مسکن']
  },
  {
    id: 'k2-red2',
    german: 'auf eigenen Beinen stehen',
    persian: 'روی پای خود ایستادن، از نظر مالی و تصمیم‌گیری کاملاً مستقل بودن',
    category: 'Redewendungen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 2, module: 'Modul 3', pageOrTrack: 'Track 1.18', context: 'Junge Erwachsene wollen früh auf eigenen Beinen stehen.' }
    ],
    pronunciation: '[ʔaʊ̯f ˈʔaɪ̯ɡnən ˈbaɪ̯nən ˈʃteːən]',
    explanation: 'کسب استقلال کامل فردی و مالی بدون نیاز به حمایت مداوم والدین.',
    literalMeaning: 'روی پاهای خود ایستادن',
    example: 'Sobald man eine feste Arbeit hat, möchte man auf eigenen Beinen stehen und selbst entscheiden.',
    exampleTranslation: 'به محض داشتن شغل ثابت، فرد می‌خواهد روی پای خود بایستد و خودش تصمیم بگیرد.',
    level: 'B1+',
    tags: ['اصطلاح', 'استقلال']
  },
  {
    id: 'k2-red3',
    german: 'die Decke fällt einem auf den Kopf',
    persian: 'حوصله آدم سر رفتن و کلافه شدن از ماندن طولانی در خانه',
    category: 'Redewendungen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 22', context: 'Wenn einem in der kleinen Wohnung die Decke auf den Kopf fällt' }
    ],
    pronunciation: '[diː ˈdɛkə fɛlt ˈʔaɪ̯nəm ʔaʊ̯f deːn kɔp͡f]',
    explanation: 'احساس خفگی، کسالت شدید و بی‌حوصلگی ناشی از محبوس ماندن طولانی‌مدت در چهاردیواری خانه.',
    literalMeaning: 'سقف روی سر آدم خراب شدن',
    example: 'Nach drei Tagen ununterbrochener Arbeit im Homeoffice fiel ihr buchstäblich die Decke auf den Kopf.',
    exampleTranslation: 'پس از سه روز کار مداوم در خانه، واقعاً حوصله‌اش سر رفت و در خانه کلافه شد.',
    level: 'B1+',
    tags: ['اصطلاح', 'احساسات']
  },
  {
    id: 'k2-red4',
    german: 'jemandem auf die Nerven gehen',
    persian: 'روی اعصاب کسی راه رفتن، کلافه و عصبی کردن کسی',
    category: 'Redewendungen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 2, module: 'Modul 3', pageOrTrack: 'Track 1.17', context: 'Ständige Fragen der Eltern gehen einem irgendwann auf die Nerven.' }
    ],
    pronunciation: '[ˈjeːmandn̩ ʔaʊ̯f diː ˈnɛʁfn̩ ˈɡeːən]',
    explanation: 'ایجاد مزاحمت مکرر و برهم زدن آرامش روحی دیگران با رفتارهای آزاردهنده.',
    literalMeaning: 'روی اعصاب کسی راه رفتن',
    example: 'Wenn der Mitbewohner nachts laut Musik hört, geht das allen gewaltig auf die Nerven.',
    exampleTranslation: 'وقتی هم‌خانه شب‌ها با صدای بلند موسیقی گوش می‌دهد، شدیداً روی اعصاب همه راه می‌رود.',
    level: 'B1+',
    tags: ['اصطلاح', 'همزیستی']
  },
  {
    id: 'k2-red5',
    german: 'Kompromisse eingehen',
    persian: 'سازش کردن، توافق و مصالحه دوجانبه برای رسیدن به راه‌حل مشترک',
    category: 'Redewendungen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 23', context: 'In einer Wohngemeinschaft muss man ständig Kompromisse eingehen.' }
    ],
    pronunciation: '[kɔmpʁoˈmɪsə ˈaɪ̯nˌɡeːən]',
    explanation: 'کوتاه آمدن از بخشی از خواسته‌های فردی برای رسیدن به توافق و زندگی مسالمت‌آمیز گروهی.',
    literalMeaning: 'وارد سازش‌ها شدن',
    example: 'Beim Zusammenleben in einer WG müssen alle bereit sein, faire Kompromisse einzugehen.',
    exampleTranslation: 'در زندگی مشترک در یک خانه اشتراکی، همه باید آماده سازش و توافق‌های عادلانه باشند.',
    level: 'B1+',
    tags: ['اصطلاح', 'همزیستی']
  },

  // =========================================================================
  // KAPITEL 3: Wie geht’s denn so? (سلامت، تغذیه و سبک زندگی)
  // =========================================================================
  // --- Verben (افعال با تمام زمان‌های Präsens / Präteritum / Perfekt و حروف اضافه) ---
  {
    id: 'k3-v1',
    german: 'sich ernähren von',
    persian: 'تغذیه کردن از، رژیم غذایی خاصی داشتن',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 34', context: 'sich gesund und ausgewogen ernähren' },
      { source: 'Hörtexte', lesson: 3, module: 'Modul 1', pageOrTrack: 'Track 1.19', context: 'Viele junge Menschen ernähren sich rein pflanzlich.' }
    ],
    pronunciation: '[zɪç ɛɐ̯ˈnɛːʁən]',
    infinitive: 'sich ernähren von (+ Dat.)',
    present: 'ernährt sich',
    preterite: 'ernährte sich',
    perfect: 'hat sich ernährt',
    auxiliary: 'haben',
    reflexive: true,
    prepositionCase: 'von + Dativ',
    example: 'Immer mehr Menschen ernähren sich bewusst von regionalen und biologischen Produkten.',
    exampleTranslation: 'افراد بیشتری آگاهانه از محصولات ارگانیک و منطقه‌ای تغذیه می‌کنند.',
    level: 'B1+',
    tags: ['تغذیه', 'سلامت']
  },
  {
    id: 'k3-v2',
    german: 'verzichten auf',
    persian: 'صرف‌نظر کردن از، چشم‌پوشی کردن و پرهیز نمودن از',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 35', context: 'auf Zucker, Alkohol und Fast Food verzichten' }
    ],
    pronunciation: '[fɛɐ̯ˈtsɪçtn̩]',
    infinitive: 'verzichten auf (+ Akk.)',
    present: 'verzichtet',
    preterite: 'verzichtete',
    perfect: 'hat verzichtet',
    auxiliary: 'haben',
    prepositionCase: 'auf + Akkusativ',
    example: 'Wer dauerhaft fit bleiben möchte, sollte auf übermäßigen Konsum von Süßigkeiten verzichten.',
    exampleTranslation: 'کسی که می‌خواهد برای طولانی‌مدت تندرست بماند، باید از مصرف بیش از حد شیرینی‌جات صرف‌نظر کند.',
    level: 'B1+',
    tags: ['سلامت', 'رژیم']
  },
  {
    id: 'k3-v3',
    german: 'zubereiten',
    persian: 'آماده کردن و طبخ نمودن (غذا)',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 36', context: 'eine frische und schmackhafte Mahlzeit zubereiten' }
    ],
    pronunciation: '[ˈtsuːbəˌʁaɪ̯tn̩]',
    infinitive: 'zubereiten (+ Akk.)',
    present: 'bereitet zu',
    preterite: 'bereitete zu',
    perfect: 'hat zubereitet',
    auxiliary: 'haben',
    separable: true,
    example: 'Am Wochenende nimmt sie sich viel Zeit, um ein gesundes Dreigänge-Menü frisch zuzubereiten.',
    exampleTranslation: 'آخر هفته او زمان زیادی می‌گذارد تا یک منوی سه بخشی سالم را تازه طبخ کند.',
    level: 'B1+',
    tags: ['آشپزی', 'غذا']
  },
  {
    id: 'k3-v4',
    german: 'verzehren',
    persian: 'میل کردن، مصرف نمودن (غذا و خوراکی)',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 34', context: 'täglich genügend Obst und Gemüse verzehren' }
    ],
    pronunciation: '[fɛɐ̯ˈtseːʁən]',
    infinitive: 'verzehren (+ Akk.)',
    present: 'verzehrt',
    preterite: 'verzehrte',
    perfect: 'hat verzehrt',
    auxiliary: 'haben',
    example: 'In Kantinen werden täglich Tausende von warmen Mahlzeiten verzehrt.',
    exampleTranslation: 'در غذاخوری‌ها روزانه هزاران وعده غذای گرم میل می‌شود.',
    level: 'B1+',
    tags: ['تغذیه', 'مصرف']
  },
  {
    id: 'k3-v5',
    german: 'wegwerfen',
    persian: 'دور انداختن، هدر دادن و زباله کردن (غذا یا وسایل)',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 2', pageOrTrack: 'S. 37', context: 'Tonnen von genießbaren Lebensmitteln wegwerfen' },
      { source: 'Hörtexte', lesson: 3, module: 'Modul 2', pageOrTrack: 'Track 1.21', context: 'Warum werfen wir so viele Lebensmittel weg?' }
    ],
    pronunciation: '[ˈvɛkˌvɛʁfn̩]',
    infinitive: 'wegwerfen (+ Akk.)',
    present: 'wirft weg',
    preterite: 'warf weg',
    perfect: 'hat weggeworfen',
    auxiliary: 'haben',
    separable: true,
    example: 'Viele genießbare Lebensmittel werden völlig unnötig weggeworfen, nur weil das Verfallsdatum nah ist.',
    exampleTranslation: 'بسیاری از مواد غذایی قابل خوردن کاملاً بی‌دلیل دور انداخته می‌شوند فقط چون تاریخ انقضایشان نزدیک است.',
    level: 'B1+',
    tags: ['ضایعات', 'محیط زیست']
  },
  {
    id: 'k3-v6',
    german: 'entsorgen',
    persian: 'دور ریختن و دفن/بازیافت کردن زباله و پسماندها',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 2', pageOrTrack: 'S. 38', context: 'Küchenabfälle fachgerecht im Biomüll entsorgen' }
    ],
    pronunciation: '[ɛntˈzɔʁɡn̩]',
    infinitive: 'entsorgen (+ Akk.)',
    present: 'entsorgt',
    preterite: 'entsorgte',
    perfect: 'hat entsorgt',
    auxiliary: 'haben',
    example: 'Verdorbene Nahrungsmittel sollte man sofort in der Biomülltonne entsorgen.',
    exampleTranslation: 'مواد غذایی فاسدشده را باید بلافاصله در سطل زباله ارگانیک دور ریخت.',
    level: 'B1+',
    tags: ['پسماند', 'محیط زیست']
  },
  {
    id: 'k3-v7',
    german: 'haltbarmachen',
    persian: 'ماندگار کردن، کنسرو یا منجمد کردن جهت جلوگیری از فساد غذا',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 2', pageOrTrack: 'S. 38', context: 'Lebensmittel durch Einfrieren oder Einkochen haltbarmachen' }
    ],
    pronunciation: '[ˈhaltbaːɐ̯ˌmaxn̩]',
    infinitive: 'haltbarmachen (+ Akk.)',
    present: 'macht haltbar',
    preterite: 'machte haltbar',
    perfect: 'hat haltbar gemacht',
    auxiliary: 'haben',
    separable: true,
    example: 'Durch Trocknen oder Einfrieren kann man Gemüse für den Winter haltbarmachen.',
    exampleTranslation: 'با خشک کردن یا انجماد می‌توان سبزیجات را برای زمستان ماندگار کرد.',
    level: 'B1+',
    tags: ['نگهداری غذا', 'آشپزی']
  },
  {
    id: 'k3-v8',
    german: 'vorbeugen',
    persian: 'پیشگیری کردن، مانع بروز بیماری یا آسیب شدن',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 4', pageOrTrack: 'S. 42', context: 'Krankheiten durch gesunde Lebensweise vorbeugen' },
      { source: 'Hörtexte', lesson: 3, module: 'Modul 4', pageOrTrack: 'Track 1.22', context: 'Tipps, um Rückenschmerzen vorzubeugen' }
    ],
    pronunciation: '[ˈfoːɐ̯ˌbɔɪ̯ɡn̩]',
    infinitive: 'vorbeugen (+ Dat.)',
    present: 'beugt vor',
    preterite: 'beugte vor',
    perfect: 'hat vorgebeugt',
    auxiliary: 'haben',
    separable: true,
    prepositionCase: 'Dativ (ohne Präposition)',
    example: 'Regelmäßige Bewegung und ausgewogene Ernährung beugen vielen Krankheiten effektiv vor.',
    exampleTranslation: 'ورزش منظم و تغذیه متوازن موثراً از بروز بسیاری از بیماری‌ها پیشگیری می‌کنند.',
    level: 'B1+',
    tags: ['پیشگیری', 'سلامت']
  },
  {
    id: 'k3-v9',
    german: 'regenerieren',
    persian: 'بازسازی شدن، تجدید نیرو و احیای سلول‌ها/انرژی بدن',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 3', pageOrTrack: 'S. 40', context: 'Im Schlaf regeneriert sich der gesamte Körper.' }
    ],
    pronunciation: '[ʁeɡenəˈʁiːʁən]',
    infinitive: 'regenerieren / sich regenerieren',
    present: 'regeneriert sich',
    preterite: 'regenerierte sich',
    perfect: 'hat sich regeneriert',
    auxiliary: 'haben',
    reflexive: true,
    example: 'Während des Tiefschlafs regeneriert sich das Immunsystem und die Muskeln erholen sich.',
    exampleTranslation: 'در طول خواب عمیق، سیستم ایمنی بدن خود را بازسازی کرده و عضلات استراحت می‌کنند.',
    level: 'B1+',
    tags: ['بازسازی', 'خواب']
  },
  {
    id: 'k3-v10',
    german: 'schonen',
    persian: 'مراعات کردن، پرهیز دادن و فشار نیاوردن به (عضو آسیب‌دیده یا بدن)',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 4', pageOrTrack: 'S. 42', context: 'das verletzte Knie einige Tage schonen' }
    ],
    pronunciation: '[ˈʃoːnən]',
    infinitive: 'schonen (+ Akk.)',
    present: 'schont',
    preterite: 'schonte',
    perfect: 'hat geschont',
    auxiliary: 'haben',
    example: 'Nach dem Bänderriss muss der Sportler seinen Fuß mindestens zwei Wochen lang schonen.',
    exampleTranslation: 'پس از پارگی رباط، ورزشکار باید حداقل دو هفته به پای خود فشار نیاورد و آن را استراحت دهد.',
    level: 'B1+',
    tags: ['پزشکی', 'بهبودی']
  },
  {
    id: 'k3-v11',
    german: 'stärken',
    persian: 'تقویت کردن (سیستم ایمنی، عضلات یا روحیه)',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 4', pageOrTrack: 'S. 42', context: 'die körpereigenen Abwehrkräfte stärken' }
    ],
    pronunciation: '[ˈʃtɛʁkn̩]',
    infinitive: 'stärken (+ Akk.)',
    present: 'stärkt',
    preterite: 'stärkte',
    perfect: 'hat gestärkt',
    auxiliary: 'haben',
    example: 'Wechselduschen und Saunagänge stärken die Abwehrkräfte in der kalten Jahreszeit.',
    exampleTranslation: 'دوش آب گرم و سرد متناوب و رفتن به سونا سیستم ایمنی بدن را در فصل سرما تقویت می‌کنند.',
    level: 'B1+',
    tags: ['ایمنی', 'تندرستی']
  },
  {
    id: 'k3-v12',
    german: 'verbrennen',
    persian: 'سوزاندن (کالری یا چربی در اثر فعالیت بدنی)',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 35', context: 'beim Joggen viele Kalorien verbrennen' }
    ],
    pronunciation: '[fɛɐ̯ˈbʁɛnən]',
    infinitive: 'verbrennen (+ Akk. z.B. Kalorien)',
    present: 'verbrennt',
    preterite: 'verbrannte',
    perfect: 'hat verbrannt',
    auxiliary: 'haben',
    example: 'Beim Ausdauersport verbrennt der Körper mehr Fett als bei leichten Spaziergängen.',
    exampleTranslation: 'در ورزش‌های هوازی، بدن چربی بیشتری نسبت به پیاده‌روی سبک می‌سوزاند.',
    level: 'B1+',
    tags: ['ورزش', 'سوخت‌وساز']
  },
  {
    id: 'k3-v13',
    german: 'bewältigen',
    persian: 'فائق آمدن، غلبه کردن و از پسِ (استرس، مشکلات) برآمدن',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 3', pageOrTrack: 'S. 40', context: 'Stress im Berufsalltag erfolgreich bewältigen' },
      { source: 'Hörtexte', lesson: 3, module: 'Modul 3', pageOrTrack: 'Track 1.22', context: 'Strategien zur Bewältigung von Zeitdruck' }
    ],
    pronunciation: '[bəˈvɛltɪɡn̩]',
    infinitive: 'bewältigen (+ Akk.)',
    present: 'bewältigt',
    preterite: 'bewältigte',
    perfect: 'hat bewältigt',
    auxiliary: 'haben',
    example: 'Mit Entspannungsübungen lässt sich der tägliche Prüfungsstress besser bewältigen.',
    exampleTranslation: 'با تمرینات ریلکسیشن، استرس روزمره امتحانات را بهتر می‌توان مهار کرد.',
    level: 'B1+',
    tags: ['روانشناسی', 'مدیریت استرس']
  },
  {
    id: 'k3-v14',
    german: 'sich erholen von',
    persian: 'تجدید قوا کردن، بهبود یافتن و خستگی درکردن از',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 3', pageOrTrack: 'S. 40', context: 'sich von einer anstrengenden Arbeitswoche erholen' }
    ],
    pronunciation: '[zɪç ɛɐ̯ˈhoːlən]',
    infinitive: 'sich erholen von (+ Dat.)',
    present: 'erholt sich',
    preterite: 'erholte sich',
    perfect: 'hat sich erholt',
    auxiliary: 'haben',
    reflexive: true,
    prepositionCase: 'von + Dativ',
    example: 'Nach der Grippe brauchte er zwei Wochen, um sich wieder vollständig zu erholen.',
    exampleTranslation: 'پس از آنفولانزا، او دو هفته زمان نیاز داشت تا دوباره کاملاً تجدید قوا کرده و بهبود یابد.',
    level: 'B1+',
    tags: ['سلامت', 'استراحت']
  },
  {
    id: 'k3-v15',
    german: 'klagen über',
    persian: 'شکایت و ابراز ناراحتی کردن از (درد، سردرد، مشکلات جسمی)',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 4', pageOrTrack: 'S. 42', context: 'viele Patienten klagen über chronische Rückenschmerzen' }
    ],
    pronunciation: '[ˈklaːɡn̩]',
    infinitive: 'klagen über (+ Akk.)',
    present: 'klagt',
    preterite: 'klagte',
    perfect: 'hat geklagt',
    auxiliary: 'haben',
    prepositionCase: 'über + Akkusativ',
    example: 'Immer mehr Büroangestellte klagen über chronische Verspannungen im Nackenbereich.',
    exampleTranslation: 'کارمندان اداری بیشتری از گرفتگی‌های مزمن در ناحیه گردن ابراز ناراحتی می‌کنند.',
    level: 'B1+',
    tags: ['پزشکی', 'علائم']
  },
  {
    id: 'k3-v16',
    german: 'leiden an / unter',
    persian: 'رنج بردن از (an برای بیماری مشخص / unter برای شرایط ناگواری مانند استرس)',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 3', pageOrTrack: 'S. 41', context: 'unter Schlaflosigkeit und Dauerstress leiden' }
    ],
    pronunciation: '[ˈlaɪ̯dn̩]',
    infinitive: 'leiden an (+ Dat.) / unter (+ Dat.)',
    present: 'leidet',
    preterite: 'litt',
    perfect: 'hat gelitten',
    auxiliary: 'haben',
    prepositionCase: 'an/unter + Dativ',
    example: 'Er leidet seit Jahren unter Schlafstörungen und findet nachts kaum Ruhe.',
    exampleTranslation: 'او سال‌هاست که از اختلالات خواب رنج می‌برد و شب‌ها تقریباً آرامش ندارد.',
    level: 'B1+',
    tags: ['پزشکی', 'رنج']
  },
  {
    id: 'k3-v17',
    german: 'vermeiden',
    persian: 'اجتناب کردن، پرهیز نمودن و دوری گزیدن از',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 35', context: 'Hektik beim Essen vermeiden' }
    ],
    pronunciation: '[fɛɐ̯ˈmaɪ̯dn̩]',
    infinitive: 'vermeiden (+ Akk.)',
    present: 'vermeidet',
    preterite: 'vermied',
    perfect: 'hat vermieden',
    auxiliary: 'haben',
    example: 'Um Magenprobleme zu vermeiden, sollte man die Nahrung gründlich kauen.',
    exampleTranslation: 'برای اجتناب از مشکلات معده، فرد باید غذا را کاملاً بجود.',
    level: 'B1+',
    tags: ['پیشگیری', 'سلامت']
  },
  {
    id: 'k3-v18',
    german: 'durchatmen',
    persian: 'نفس عمیق کشیدن، لحظه‌ای دست از کار کشیدن و آرام شدن',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 3', pageOrTrack: 'S. 40', context: 'in Stresssituationen tief durchatmen' }
    ],
    pronunciation: '[ˈdʊʁçˌʔaːtmən]',
    infinitive: 'durchatmen',
    present: 'atmet durch',
    preterite: 'atmete durch',
    perfect: 'hat durchgeatmet',
    auxiliary: 'haben',
    separable: true,
    example: 'Gehen Sie kurz an die frische Luft, um einmal tief durchzuatmen.',
    exampleTranslation: 'لحظه‌ای به هوای آزاد بروید تا یک نفس عمیق بکشید.',
    level: 'B1+',
    tags: ['آرامش', 'تنفس']
  },

  // --- Nomen (اسامی با جنسیت دقیق، جمع و تلفظ) ---
  {
    id: 'k3-n1',
    german: 'die Ernährung',
    persian: 'تغذیه، رژیم و شیوه خوراک',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 34', context: 'Grundlagen einer ausgewogenen Ernährung' },
      { source: 'Hörtexte', lesson: 3, module: 'Modul 1', pageOrTrack: 'Track 1.19', context: 'Vortrag über gesunde Ernährung im Alltag' }
    ],
    pronunciation: '[ɛɐ̯ˈnɛːʁʊŋ]',
    article: 'die',
    plural: 'die Ernährungen',
    genderPersian: 'مونث (die)',
    example: 'Eine gesunde Ernährung ist die wichtigste Voraussetzung für körperliches Wohlbefinden.',
    exampleTranslation: 'تغذیه سالم مهم‌ترین پیش‌شرط برای تندرستی جسمی است.',
    level: 'B1+',
    tags: ['تغذیه', 'سلامت']
  },
  {
    id: 'k3-n2',
    german: 'die Mahlzeit',
    persian: 'وعده غذایی (صبحانه، ناهار، شام)',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 34', context: 'drei Hauptmahlzeiten am Tag einnehmen' }
    ],
    pronunciation: '[ˈmaːlˌtsaɪ̯t]',
    article: 'die',
    plural: 'die Mahlzeiten',
    genderPersian: 'مونث (die)',
    example: 'Anstatt oft zu snacken, sollte man lieber drei ausgewogene Mahlzeiten zu sich nehmen.',
    exampleTranslation: 'به جای ریزه‌خواری مکرر، بهتر است فرد سه وعده غذایی متعادل میل کند.',
    level: 'B1+',
    tags: ['غذا', 'وعده']
  },
  {
    id: 'k3-n3',
    german: 'das Nahrungsmittel',
    persian: 'ماده غذایی، خواربار و خوراکی',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 35', context: 'hochwertige Nahrungsmittel einkaufen' }
    ],
    pronunciation: '[ˈnaːʁʊŋsmɪtl̩]',
    article: 'das',
    plural: 'die Nahrungsmittel',
    genderPersian: 'خنثی (das)',
    example: 'Regionale Nahrungsmittel sind oft frischer und haben kürzere Transportwege.',
    exampleTranslation: 'مواد غذایی محلی اغلب تازه‌تر بوده و مسیرهای حمل‌ونقل کوتاه‌تری دارند.',
    level: 'B1+',
    tags: ['خوراکی', 'خرید']
  },
  {
    id: 'k3-n4',
    german: 'das Fertiggericht',
    persian: 'غذای آماده و نیمه‌آماده صنعتی',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 35', context: 'Hoher Salz- und Fettgehalt in Fertiggerichten' }
    ],
    pronunciation: '[ˈfɛʁtɪçɡəˌʁɪçt]',
    article: 'das',
    plural: 'die Fertiggerichte',
    genderPersian: 'خنثی (das)',
    example: 'Industrielle Fertiggerichte enthalten oft zu viele Konservierungsstoffe und Zusatzstoffe.',
    exampleTranslation: 'غذاهای آماده صنعتی اغلب حاوی مواد نگهدارنده و افزودنی‌های فراوانی هستند.',
    level: 'B1+',
    tags: ['صنعت غذا', 'سلامت']
  },
  {
    id: 'k3-n5',
    german: 'die Kalorie',
    persian: 'کالری، واحد سنجش انرژی خوراکی‌ها',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 34', context: 'den täglichen Kalorienbedarf berechnen' }
    ],
    pronunciation: '[kaˈloːʁiː]',
    article: 'die',
    plural: 'die Kalorien',
    genderPersian: 'مونث (die)',
    example: 'Wer abnehmen möchte, muss weniger Kalorien aufnehmen, als der Körper verbrennt.',
    exampleTranslation: 'کسی که می‌خواهد وزن کم کند، باید کالری کمتری نسبت به آنچه بدن می‌سوزاند دریافت کند.',
    level: 'B1+',
    tags: ['انرژی', 'رژیم']
  },
  {
    id: 'k3-n6',
    german: 'das Eiweiß',
    persian: 'پروتئین / سفیده تخم‌مرغ',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 34', context: 'Eiweiß für den Muskelaufbau benötigen' }
    ],
    pronunciation: '[ˈaɪ̯vaɪ̯s]',
    article: 'das',
    plural: 'die Eiweiße',
    genderPersian: 'خنثی (das)',
    example: 'Hülsenfrüchte und Nüsse sind hervorragende pflanzliche Quellen für Eiweiß.',
    exampleTranslation: 'حبوبات و مغزها منابع گیاهی فوق‌العاده‌ای برای پروتئین هستند.',
    level: 'B1+',
    tags: ['ارزش غذایی', 'پروتئین']
  },
  {
    id: 'k3-n7',
    german: 'das Kohlenhydrat',
    persian: 'کربوهیدرات، مواد قندی و نشاسته‌ای',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 34', context: 'komplexe Kohlenhydrate aus Vollkorn' }
    ],
    pronunciation: '[ˈkoːlənhyˌdʁaːt]',
    article: 'das',
    plural: 'die Kohlenhydrate',
    genderPersian: 'خنثی (das)',
    example: 'Vollkornbrot liefert komplexe Kohlenhydrate, die lange satt machen.',
    exampleTranslation: 'نان سبوس‌دار کربوهیدرات‌های پیچیده‌ای تأمین می‌کند که فرد را برای مدت طولانی سیر نگه می‌دارد.',
    level: 'B1+',
    tags: ['ارزش غذایی', 'انرژی']
  },
  {
    id: 'k3-n8',
    german: 'der Ballaststoff',
    persian: 'فیبر خوراکی و مواد مغذی غیرقابل هضم گیاهی',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 34', context: 'Ballaststoffe fördern eine gesunde Verdauung' }
    ],
    pronunciation: '[ˈbalastˌʃtɔf]',
    article: 'der',
    plural: 'die Ballaststoffe',
    genderPersian: 'مذکر (der)',
    example: 'Eine ballaststoffreiche Ernährung ist essenziell für eine funktionierende Verdauung.',
    exampleTranslation: 'تغذیه سرشار از فیبر برای یک گوارش سالم حیاتی است.',
    level: 'B1+',
    tags: ['گوارش', 'سلامت']
  },
  {
    id: 'k3-n9',
    german: 'die Unverträglichkeit',
    persian: 'حساسیت و عدم تحمل غذایی (مانند عدم تحمل لاکتوز یا گلوتن)',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 35', context: 'Laktose-Unverträglichkeit feststellen' },
      { source: 'Hörtexte', lesson: 3, module: 'Modul 1', pageOrTrack: 'Track 1.20', context: 'Allergien und Unverträglichkeiten beim Essen' }
    ],
    pronunciation: '[ˈʊnfɛɐ̯ˌtʁɛːɡlɪçkaɪ̯t]',
    article: 'die',
    plural: 'die Unverträglichkeiten',
    genderPersian: 'مونث (die)',
    example: 'Immer mehr Menschen leiden an einer Unverträglichkeit gegen Laktose oder Gluten.',
    exampleTranslation: 'افراد بیشتری از عدم تحمل لاکتوز یا گلوتن رنج می‌برند.',
    level: 'B1+',
    tags: ['پزشکی', 'آلرژی']
  },
  {
    id: 'k3-n10',
    german: 'die Nahrungsmittelverschwendung',
    persian: 'اسراف و هدررفت مواد غذایی در زنجیره تولید تا مصرف',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 2', pageOrTrack: 'S. 37', context: 'Maßnahmen gegen die globale Nahrungsmittelverschwendung' },
      { source: 'Hörtexte', lesson: 3, module: 'Modul 2', pageOrTrack: 'Track 1.21', context: 'Kampf gegen Lebensmittelverschwendung' }
    ],
    pronunciation: '[ˈnaːʁʊŋsmɪtl̩fɛɐ̯ˌʃvɛndʊŋ]',
    article: 'die',
    plural: 'die Nahrungsmittelverschwendung (بدون جمع)',
    genderPersian: 'مونث (die)',
    example: 'Weltweit wird durch Nahrungsmittelverschwendung wertvolle Ressourcen wie Wasser und Energie vergeudet.',
    exampleTranslation: 'در سراسر جهان به دلیل اسراف مواد غذایی، منابع ارزشمندی چون آب و انرژی به هدر می‌رود.',
    level: 'B1+',
    tags: ['محیط زیست', 'ضایعات']
  },
  {
    id: 'k3-n11',
    german: 'das Mindesthaltbarkeitsdatum',
    persian: 'حداقل تاریخ انقضا و بهترین زمان مصرف (MHD)',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 2', pageOrTrack: 'S. 37', context: 'Das Mindesthaltbarkeitsdatum bedeutet nicht Verfallsdatum.' }
    ],
    pronunciation: '[ˈmɪndəsthaltbaːɐ̯kaɪ̯tsˌdaːtʊm]',
    article: 'das',
    plural: 'die Mindesthaltbarkeitsdaten',
    genderPersian: 'خنثی (das)',
    example: 'Das Mindesthaltbarkeitsdatum garantiert die Qualität, aber nach Ablauf ist das Produkt oft noch gut.',
    exampleTranslation: 'حداقل تاریخ انقضا کیفیت را تضمین می‌کند، اما پس از گذشت آن نیز محصول اغلب همچنان سالم است.',
    level: 'B1+',
    tags: ['مصرف‌کننده', 'کیفیت']
  },
  {
    id: 'k3-n12',
    german: 'das Verbrauchsdatum',
    persian: 'تاریخ مصرف قطعی (برای مواد سریع‌الفساد مانند گوشت چرخ‌کرده)',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 2', pageOrTrack: 'S. 37', context: 'Unterscheid zwischen Verbrauchsdatum und MHD' }
    ],
    pronunciation: '[fɛɐ̯ˈbʁaʊ̯xsˌdaːtʊm]',
    article: 'das',
    plural: 'die Verbrauchsdaten',
    genderPersian: 'خنثی (das)',
    example: 'Nach Ablauf des Verbrauchsdatums sollte man Hackfleisch aus Sicherheitsgründen nicht mehr essen.',
    exampleTranslation: 'پس از انقضای تاریخ مصرف قطعی، فرد به دلایل ایمنی نباید دیگر گوشت چرخ‌کرده را مصرف کند.',
    level: 'B1+',
    tags: ['ایمنی غذا', 'سلامت']
  },
  {
    id: 'k3-n13',
    german: 'der Biorhythmus',
    persian: 'ریتم بیولوژیکی و ساعت طبیعی بدن انسان',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 3', pageOrTrack: 'S. 40', context: 'Den eigenen Biorhythmus verstehen und nutzen' },
      { source: 'Hörtexte', lesson: 3, module: 'Modul 3', pageOrTrack: 'Track 1.22', context: 'Experteninterview über Biorhythmus und Schlaf' }
    ],
    pronunciation: '[ˈbiːoˌʁʏtmʊs]',
    article: 'der',
    plural: 'die Biorhythmen',
    genderPersian: 'مذکر (der)',
    example: 'Wer entgegen seinem Biorhythmus arbeitet, fühlt sich häufig müde und unkonzentriert.',
    exampleTranslation: 'کسی که برخلاف ریتم بیولوژیکی بدن خود کار کند، اغلب احساس خستگی و عدم تمرکز می‌کند.',
    level: 'B1+',
    tags: ['زیست‌شناسی', 'ارگونومی']
  },
  {
    id: 'k3-n14',
    german: 'die Leistungskurve',
    persian: 'منحنی بازدهی و توان کاری و فکری در طول شبانه‌روز',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 3', pageOrTrack: 'S. 40', context: 'Verlauf der täglichen Leistungskurve beachten' }
    ],
    pronunciation: '[ˈlaɪ̯stʊŋsˌkʊʁvə]',
    article: 'die',
    plural: 'die Leistungskurven',
    genderPersian: 'مونث (die)',
    example: 'Bei den meisten Menschen erreicht die Leistungskurve am späten Vormittag ihren Höhepunkt.',
    exampleTranslation: 'در اکثر افراد، منحنی بازدهی کاری در اواخر صبح به اوج خود می‌رسد.',
    level: 'B1+',
    tags: ['تمرکز', 'کارایی']
  },
  {
    id: 'k3-n15',
    german: 'das Leistungstief',
    persian: 'افت موقت بازدهی و انرژی (به‌ویژه بعد از ظهر)',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 3', pageOrTrack: 'S. 40', context: 'Das klassische Leistungstief nach dem Mittagessen' }
    ],
    pronunciation: '[ˈlaɪ̯stʊŋsˌtiːf]',
    article: 'das',
    plural: 'die Leistungstiefs',
    genderPersian: 'خنثی (das)',
    example: 'Gegen das nachmittägliche Leistungstief hilft ein kurzer Spaziergang an der frischen Luft.',
    exampleTranslation: 'برای مقابله با افت بازدهی بعد از ظهر، یک پیاده‌روی کوتاه در هوای آزاد موثر است.',
    level: 'B1+',
    tags: ['انرژی', 'استراحت']
  },
  {
    id: 'k3-n16',
    german: 'der Schlafmangel',
    persian: 'کمبود و کسر خواب مداوم',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 3', pageOrTrack: 'S. 41', context: 'Folgen von chronischem Schlafmangel auf die Gesundheit' },
      { source: 'Hörtexte', lesson: 3, module: 'Modul 3', pageOrTrack: 'Track 1.22', context: 'Schlafmangel beeinträchtigt das Immunsystem.' }
    ],
    pronunciation: '[ˈʃlaːfˌmaŋl̩]',
    article: 'der',
    plural: 'der Schlafmangel (بدون جمع)',
    genderPersian: 'مذکر (der)',
    example: 'Dauerhafter Schlafmangel schwächt das Immunsystem und erhöht das Stressrisiko.',
    exampleTranslation: 'کمبود خواب مداوم سیستم ایمنی را ضعیف کرده و ریسک استرس را افزایش می‌دهد.',
    level: 'B1+',
    tags: ['خواب', 'سلامت']
  },
  {
    id: 'k3-n17',
    german: 'die Schlaflosigkeit',
    persian: 'بی‌خوابی شبانه، اختلال در به خواب رفتن',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 3', pageOrTrack: 'S. 41', context: 'Hausmittel gegen nächtliche Schlaflosigkeit' }
    ],
    pronunciation: '[ˈʃlaːfloːzɪçkaɪ̯t]',
    article: 'die',
    plural: 'die Schlaflosigkeit (بدون جمع)',
    genderPersian: 'مونث (die)',
    example: 'Sorgen und mentale Belastungen sind die häufigsten Ursachen für Schlaflosigkeit.',
    exampleTranslation: 'نگرانی‌ها و فشارهای روحی شایع‌ترین دلایل بی‌خوابی هستند.',
    level: 'B1+',
    tags: ['اختلال خواب', 'روانشناسی']
  },
  {
    id: 'k3-n18',
    german: 'das Immunsystem',
    persian: 'سیستم ایمنی و دفاعی بدن',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 4', pageOrTrack: 'S. 42', context: 'Das Immunsystem durch Vitamine stärken' }
    ],
    pronunciation: '[ɪˈmuːnzʏsˌteːm]',
    article: 'das',
    plural: 'die Immunsysteme',
    genderPersian: 'خنثی (das)',
    example: 'Ein starkes Immunsystem schützt den Organismus vor Infekten und Viren.',
    exampleTranslation: 'یک سیستم ایمنی قوی بدن را در برابر عفونت‌ها و ویروس‌ها محافظت می‌کند.',
    level: 'B1+',
    tags: ['ایمنی', 'پزشکی']
  },
  {
    id: 'k3-n19',
    german: 'die Abwehrkräfte',
    persian: 'مکانیزم‌های دفاعی بدن در برابر بیماری‌ها',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 4', pageOrTrack: 'S. 42', context: 'körpereigene Abwehrkräfte mobilisieren' }
    ],
    pronunciation: '[ˈapveːɐ̯ˌkʁɛftə]',
    article: 'die',
    plural: 'die Abwehrkräfte (جمع)',
    genderPersian: 'مونث (die)',
    example: 'Gesunder Schlaf und Sport mobilisieren die Abwehrkräfte des Körpers im Winter.',
    exampleTranslation: 'خواب سالم و ورزش نیروهای دفاعی بدن را در زمستان فعال می‌سازند.',
    level: 'B1+',
    tags: ['ایمنی', 'سلامت']
  },
  {
    id: 'k3-n20',
    german: 'die Vorsorge',
    persian: 'مراقبت و پیشگیری پزشکی پیش از بروز بیماری',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 4', pageOrTrack: 'S. 42', context: 'Regelmäßige Vorsorgeuntersuchungen beim Arzt' }
    ],
    pronunciation: '[ˈfoːɐ̯ˌzɔʁɡə]',
    article: 'die',
    plural: 'die Vorsorgen',
    genderPersian: 'مونث (die)',
    example: 'Regelmäßige Vorsorge hilft dabei, Krankheiten frühzeitig zu erkennen und zu heilen.',
    exampleTranslation: 'پیشگیری و چکاپ منظم کمک می‌کند بیماری‌ها در مراحل اولیه تشخیص داده شده و درمان شوند.',
    level: 'B1+',
    tags: ['پزشکی', 'پیشگیری']
  },
  {
    id: 'k3-n21',
    german: 'die Beschwerde',
    persian: 'علائم درد، عارضه و ناراحتی جسمی',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 4', pageOrTrack: 'S. 42', context: 'körperliche Beschwerden gründlich untersuchen lassen' },
      { source: 'Hörtexte', lesson: 3, module: 'Modul 4', pageOrTrack: 'Track 1.23', context: 'Patient beschreibt seine Beschwerden dem Arzt.' }
    ],
    pronunciation: '[bəˈʃveːʁdə]',
    article: 'die',
    plural: 'die Beschwerden',
    genderPersian: 'مونث (die)',
    example: 'Sollten die Beschwerden länger als drei Tage anhalten, gehen Sie bitte zum Arzt.',
    exampleTranslation: 'اگر علائم ناراحتی بیش از سه روز ادامه داشت، لطفاً به پزشک مراجعه کنید.',
    level: 'B1+',
    tags: ['پزشکی', 'علائم']
  },
  {
    id: 'k3-n22',
    german: 'der Muskelkater',
    persian: 'گرفتگی و درد عضلانی پس از ورزش سنگین',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 4', pageOrTrack: 'S. 43', context: 'Muskelkater nach neuem Training vermeiden' }
    ],
    pronunciation: '[ˈmʊskl̩ˌkaːtɐ]',
    article: 'der',
    plural: 'die Muskelkater',
    genderPersian: 'مذکر (der)',
    example: 'Nach dem intensiven Krafttraining hatte er zwei Tage lang starken Muskelkater.',
    exampleTranslation: 'پس از تمرین بدنسازی شدید، او تا دو روز دچار گرفتگی عضلانی شدیدی بود.',
    level: 'B1+',
    tags: ['ورزش', 'عضلات']
  },
  {
    id: 'k3-n23',
    german: 'das Wohlbefinden',
    persian: 'حس تندرستی، شادابی و سلامت کامل جسم و روح',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 3', pageOrTrack: 'S. 40', context: 'Einfluss von Schlaf auf das allgemeine Wohlbefinden' }
    ],
    pronunciation: '[ˈvoːlbaˌfɪndn̩]',
    article: 'das',
    plural: 'das Wohlbefinden (بدون جمع)',
    genderPersian: 'خنثی (das)',
    example: 'Yoga und Meditation steigern das geistige und körperliche Wohlbefinden spürbar.',
    exampleTranslation: 'یوگا و مدیتیشن احساس شادابی و تندرستی روحی و جسمی را به طور ملموسی افزایش می‌دهند.',
    level: 'B1+',
    tags: ['تندرستی', 'کیفیت زندگی']
  },
  {
    id: 'k3-n24',
    german: 'die Tafel',
    persian: 'مؤسسه خیریه توزیع غذاهای اضافی و مازاد بین نیازمندان',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 2', pageOrTrack: 'S. 38', context: 'Lebensmittelspenden an die örtliche Tafel abgeben' }
    ],
    pronunciation: '[ˈtaːfl̩]',
    article: 'die',
    plural: 'die Tafeln',
    genderPersian: 'مونث (die)',
    example: 'Supermärkte spenden einwandfreie Waren kurz vor dem Ablauf an die lokale Tafel.',
    exampleTranslation: 'سوپرمارکت‌ها کالاهای کاملاً سالم را اندکی پیش از انقضا به خیریه توزیع غذای محلی اهدا می‌کنند.',
    level: 'B1+',
    tags: ['خیریه', 'جامعه']
  },

  // --- Adjektive & Adverbien (صفات و قیدها با مقایسه‌ها و متضادها) ---
  {
    id: 'k3-adj1',
    german: 'ausgewogen',
    persian: 'متعادل، همه‌جانبه و متناسب (رژیم غذایی، سبک زندگی)',
    category: 'Adjektive',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 34', context: 'eine ausgewogene Ernährung für mehr Energie' }
    ],
    pronunciation: '[ˈaʊ̯sɡəˌvoːɡn̩]',
    comparative: 'ausgewogener',
    superlative: 'am ausgewogensten',
    opposite: 'einseitig / unausgewogen',
    example: 'Eine ausgewogene Ernährungsweise schützt vor Mangelerscheinungen.',
    exampleTranslation: 'یک شیوه تغذیه متعادل از بروز کمبودهای غذایی جلوگیری می‌کند.',
    level: 'B1+',
    tags: ['تغذیه', 'سلامت']
  },
  {
    id: 'k3-adj2',
    german: 'nährstoffreich',
    persian: 'سرشار از مواد مغذی، ویتامین‌ها و املاح معدنی',
    category: 'Adjektive',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 34', context: 'nährstoffreiche Nahrungsmittel wie Brokkoli und Nüsse' }
    ],
    pronunciation: '[ˈnɛːɐ̯ʃtɔfˌʁaɪ̯ç]',
    comparative: 'nährstoffreicher',
    superlative: 'am nährstoffreichsten',
    opposite: 'nährstoffarm',
    example: 'Gemüse und Hülsenfrüchte sind extrem nährstoffreich und gesund.',
    exampleTranslation: 'سبزیجات و حبوبات فوق‌العاده سرشار از مواد مغذی و سالم هستند.',
    level: 'B1+',
    tags: ['ارزش غذایی']
  },
  {
    id: 'k3-adj3',
    german: 'bekömmlich',
    persian: 'سبک، گوارا و زودهضم برای گوارش و معده',
    category: 'Adjektive',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 35', context: 'gekochtes Gemüse ist bekömmlicher als Rohkost' }
    ],
    pronunciation: '[bəˈkœmlɪç]',
    comparative: 'bekömmlicher',
    superlative: 'am bekömmlichsten',
    opposite: 'schwer liegend / schwer verdaulich',
    example: 'Gedünstetes Gemüse ist für den Magen am Abend besonders bekömmlich.',
    exampleTranslation: 'سبزیجات بخارپز شده برای معده در هنگام شب بسیار گوارا و زودهضم است.',
    level: 'B1+',
    tags: ['گوارش', 'کیفیت غذا']
  },
  {
    id: 'k3-adj4',
    german: 'genießbar',
    persian: 'قابل خوردن و مصرف، سالم و فاسدنشده',
    category: 'Adjektive',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 2', pageOrTrack: 'S. 37', context: 'Lebensmittel sind auch nach dem Datum genießbar.' }
    ],
    pronunciation: '[ɡəˈniːsbaːɐ̯]',
    comparative: 'genießbarer',
    superlative: 'am genießbarsten',
    opposite: 'ungenießbar / verdorben',
    example: 'Riechen Sie am Joghurt: Meist ist er auch Tage nach dem Ablaufdatum vollkommen genießbar.',
    exampleTranslation: 'ماست را بو کنید: معمولاً حتی روزها پس از تاریخ انقضا کاملاً قابل خوردن است.',
    level: 'B1+',
    tags: ['کیفیت غذا']
  },
  {
    id: 'k3-adj5',
    german: 'verdorben',
    persian: 'فاسدشده، ترشیده و غیرقابل مصرف',
    category: 'Adjektive',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 2', pageOrTrack: 'S. 37', context: 'verdorbene Lebensmittel entsorgen' }
    ],
    pronunciation: '[fɛɐ̯ˈdɔʁbn̩]',
    comparative: 'verdorbener',
    superlative: 'am verdorbensten',
    opposite: 'frisch / genießbar',
    example: 'Verdorbener Fisch riecht unangenehm und kann Magenvergiftungen verursachen.',
    exampleTranslation: 'ماهی فاسدشده بوی ناخوشایندی دارد و می‌تواند باعث مسمومیت معده شود.',
    level: 'B1+',
    tags: ['ایمنی غذا']
  },
  {
    id: 'k3-adj6',
    german: 'nachhaltig',
    persian: 'پایدار، سازگار با محیط زیست و آینده‌نگرانه',
    category: 'Adjektive',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 2', pageOrTrack: 'S. 38', context: 'nachhaltiger Konsum von Lebensmitteln' }
    ],
    pronunciation: '[ˈnaːxˌhaltɪç]',
    comparative: 'nachhaltiger',
    superlative: 'am nachhaltigsten',
    opposite: 'verschwenderisch / kurzsichtig',
    example: 'Ein nachhaltiger Lebensstil schont die natürlichen Ressourcen unseres Planeten.',
    exampleTranslation: 'یک سبک زندگی پایدار از منابع طبیعی سیاره ما محافظت می‌کند.',
    level: 'B1+',
    tags: ['محیط زیست', 'سبک زندگی']
  },
  {
    id: 'k3-adj7',
    german: 'ausgeruht',
    persian: 'تازه‌نفس، سرحال و پرانرژی به دلیل خواب کافی',
    category: 'Adjektive',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 3', pageOrTrack: 'S. 40', context: 'ausgeruht in den neuen Arbeitstag starten' }
    ],
    pronunciation: '[ˈaʊ̯sɡəˌʁuːt]',
    comparative: 'ausgeruhter',
    superlative: 'am ausgeruhtesten',
    opposite: 'erschöpft / übermüdet',
    example: 'Wer ausgeruht zur Prüfung erscheint, kann seine beste Leistung abrufen.',
    exampleTranslation: 'کسی که تازه‌نفس و سرحال در امتحان حاضر شود، می‌تواند بهترین عملکرد خود را نشان دهد.',
    level: 'B1+',
    tags: ['انرژی', 'خواب']
  },
  {
    id: 'k3-adj8',
    german: 'erschöpft',
    persian: 'رمق‌بافته، خسته و فرسوده از نظر جسمی یا روحی',
    category: 'Adjektive',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 3', pageOrTrack: 'S. 40', context: 'sich nach Überstunden völlig erschöpft fühlen' }
    ],
    pronunciation: '[ɛɐ̯ˈʃœpft]',
    comparative: 'erschöpfter',
    superlative: 'am erschöpftesten',
    opposite: 'vital / munter / erholt',
    example: 'Nach dem Marathonlauf war der Athlet völlig erschöpft und brauchte sofort Wasser.',
    exampleTranslation: 'پس از دو ماراتن، دونده کاملاً فرسوده و رمق‌بافته بود و فوراً به آب نیاز داشت.',
    level: 'B1+',
    tags: ['خستگی', 'حالت']
  },
  {
    id: 'k3-adj9',
    german: 'krankheitsanfällig',
    persian: 'مستعد بیماری، دارای بدن ضعیف و زود به زود بیمار شونده',
    category: 'Adjektive',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 4', pageOrTrack: 'S. 42', context: 'Durch Dauerstress wird der Körper krankheitsanfällig.' }
    ],
    pronunciation: '[ˈkʁaŋkhaɪ̯tsˌʔanfɛlɪç]',
    comparative: 'krankheitsanfälliger',
    superlative: 'am krankheitsanfälligsten',
    opposite: 'widerstandsfähig / robust',
    example: 'Ohne ausreichend Vitamine wird der Körper im Winter deutlich krankheitsanfälliger.',
    exampleTranslation: 'بدون ویتامین کافی، بدن در زمستان به مراتب مستعدتر برای بیماری می‌شود.',
    level: 'B1+',
    tags: ['پزشکی', 'ایمنی']
  },

  // --- Redewendungen & Ausdrücke (اصطلاحات کاربردی با معنی لغوی و کاربرد) ---
  {
    id: 'k3-red1',
    german: 'Liebe geht durch den Magen',
    persian: 'مهر و محبت از سفره و دست‌پخت خوشمزه آغاز می‌شود',
    category: 'Redewendungen',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 36', context: 'Sprichwörter über Essen und Liebe' }
    ],
    pronunciation: '[ˈliːbə ɡeːt dʊʁç deːn ˈmaːɡn̩]',
    explanation: 'تأثیر پذیرایی گرم و طبخ غذای لذیذ در جلب مهر، علاقه و پیوند عاطفی.',
    literalMeaning: 'عشق از معده می‌گذرد',
    example: 'Er verzaubert seine Gäste jedes Mal mit fantastischen Gerichten, denn Liebe geht durch den Magen.',
    exampleTranslation: 'او هر بار مهمانانش را با غذاهای فوق‌العاده مجذوب می‌کند، زیرا محبت از سفره و غذای خوشمزه آغاز می‌شود.',
    level: 'B1+',
    tags: ['اصطلاح', 'تغذیه']
  },
  {
    id: 'k3-red2',
    german: 'einen Bärenhunger haben',
    persian: 'اشتهای فوق‌العاده شدید داشتن، مثل خرس گرسنه بودن',
    category: 'Redewendungen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 3, module: 'Modul 1', pageOrTrack: 'Track 1.20', context: 'Nach dem langen Spaziergang einen Bärenhunger haben' }
    ],
    pronunciation: '[ˈaɪ̯nən ˈbɛːʁənˌhʊŋɐ ˈhaːbn̩]',
    explanation: 'احساس گرسنگی بسیار شدید پس از فعالیت بدنی یا ناهار نخوردن.',
    literalMeaning: 'گرسنگی خرس داشتن',
    example: 'Nach der fünfstündigen Bergwanderung hatten alle Beteiligten einen echten Bärenhunger.',
    exampleTranslation: 'پس از ۵ ساعت کوهنوردی، همه افراد واقعاً اشتهای فوق‌العاده شدیدی داشتند.',
    level: 'B1+',
    tags: ['اصطلاح', 'اشتها']
  },
  {
    id: 'k3-red3',
    german: 'sich in seiner Haut wohlfühlen',
    persian: 'احساس راحتی، تندرستی و رضایت کامل از بدن و شرایط زندگی خود داشتن',
    category: 'Redewendungen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 3', pageOrTrack: 'S. 40', context: 'Wer ausgewogen lebt, fühlt sich in seiner Haut wohl.' }
    ],
    pronunciation: '[zɪç ɪn ˈzaɪ̯nɐ haʊ̯t ˈvoːlˌfyːlən]',
    explanation: 'داغ نبودن استرس و داشتن اعتماد به نفس و سلامت کامل جسم و روان.',
    literalMeaning: 'در پوست خود احساس خوبی داشتن',
    example: 'Seit sie regelmäßig Sport treibt und gesünder isst, fühlt sie sich wieder rundum in ihrer Haut wohl.',
    exampleTranslation: 'از زمانی که او مرتب ورزش می‌کند و سالم‌تر غذا می‌خورد، دوباره احساس تندرستی و رضایت کامل از بدن خود دارد.',
    level: 'B1+',
    tags: ['اصطلاح', 'تندرستی']
  },
  {
    id: 'k3-red4',
    german: 'die Batterie aufladen',
    persian: 'باتری شارژ کردن، تجدید قوا و استراحت کامل برای کسب انرژی دوباره',
    category: 'Redewendungen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 3', pageOrTrack: 'S. 41', context: 'Im Kurzurlaub die leeren Batterien wieder aufladen' }
    ],
    pronunciation: '[diː baˈtəʁiː ˈaʊ̯fˌlaːdn̩]',
    explanation: 'استراحت کاملی که باعث بازگشت نشاط و انگیزه کاری پس از خستگی شدید می‌شود.',
    literalMeaning: 'باتری را شارژ کردن',
    example: 'Am Wochenende fahre ich in die Natur, um meine leeren Batterien für die nächste Arbeitswoche aufzuladen.',
    exampleTranslation: 'آخر هفته به طبیعت می‌روم تا باتری‌های خالی‌ام را برای هفته کاری آینده شارژ کنم.',
    level: 'B1+',
    tags: ['اصطلاح', 'استراحت']
  },
  {
    id: 'k3-red5',
    german: 'auf die leichte Schulter nehmen',
    persian: 'چیزی (مانند علائم بیماری یا استرس) را سرسری گرفتن و دست‌کم انگاشتن',
    category: 'Redewendungen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 4', pageOrTrack: 'S. 42', context: 'Man sollte dauerhafte Rückenschmerzen nicht auf die leichte Schulter nehmen.' }
    ],
    pronunciation: '[ʔaʊ̯f diː ˈlaɪ̯çtə ˈʃʊltɐ ˈneːmən]',
    explanation: 'بی‌توجهی به عواقب یک مشکل جسمی یا کاری و جدی نگرفتن آن.',
    literalMeaning: 'روی شانه سبک قرار دادن',
    example: 'Eine Grippe sollte man keinesfalls auf die leichte Schulter nehmen, sondern im Bett auskurieren.',
    exampleTranslation: 'آنفولانزا را به هیچ وجه نباید سرسری گرفت، بلکه باید در رختخواب آن را کاملاً درمان کرد.',
    level: 'B1+',
    tags: ['اصطلاح', 'هشدار']
  },
  {
    id: 'k3-red6',
    german: 'sich etwas zu Herzen nehmen',
    persian: 'پند یا توصیه‌ای را کاملاً جدی گرفتن و به دل سپردن',
    category: 'Redewendungen',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 4', pageOrTrack: 'S. 43', context: 'Ratschläge des Arztes bezüglich Ernährung zu Herzen nehmen' }
    ],
    pronunciation: '[zɪç ˈɛtvas tsuː ˈhɛʁt͡sn̩ ˈneːmən]',
    explanation: 'عمل کردن عمیق به یک توصیه و تغییر رفتار بر اساس آن.',
    literalMeaning: 'چیزی را به قلب خود بردن',
    example: 'Er hat sich den Rat des Arztes zu Herzen genommen und treibt nun dreimal die Woche Sport.',
    exampleTranslation: 'او توصیه پزشک را کاملاً به دل سپرد و جدی گرفت و حالا سه بار در هفته ورزش می‌کند.',
    level: 'B1+',
    tags: ['اصطلاح', 'توصیه']
  },

  // =========================================================================
  // KAPITEL 4: Viel Spaß! (اوقات فراغت، فرهنگ، ورزش و هیجان)
  // =========================================================================
  // --- Verben (افعال با تمام زمان‌های Präsens / Präteritum / Perfekt و حروف اضافه) ---
  {
    id: 'k4-v1',
    german: 'sich entspannen',
    persian: 'استراحت کردن، ریلکس و آرام شدن',
    category: 'Verben',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 1', pageOrTrack: 'S. 46', context: 'sich am Wochenende bei Musik oder Sport entspannen' },
      { source: 'Hörtexte', lesson: 4, module: 'Modul 1', pageOrTrack: 'Track 1.23', context: 'Wie entspannen Sie sich am besten nach der Arbeit?' }
    ],
    pronunciation: '[zɪç ɛntˈʃpanən]',
    infinitive: 'sich entspannen bei (+ Dat.)',
    present: 'entspannt sich',
    preterite: 'entspannte sich',
    perfect: 'hat sich entspannt',
    auxiliary: 'haben',
    reflexive: true,
    prepositionCase: 'bei + Dativ',
    example: 'Nach einer anstrengenden Arbeitswoche entspannt sie sich am liebsten in der Sauna.',
    exampleTranslation: 'پس از یک هفته کاری خسته‌کننده، او ترجیح می‌دهد در سونا آرامش یابد.',
    level: 'B1+',
    tags: ['آرامش', 'فراغت']
  },
  {
    id: 'k4-v2',
    german: 'unternehmen',
    persian: 'دست به کاری زدن، انجام دادن یک گردش، برنامه یا فعالیت تفریحی',
    category: 'Verben',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 1', pageOrTrack: 'S. 46', context: 'etwas Spannendes mit Freunden unternehmen' },
      { source: 'Hörtexte', lesson: 4, module: 'Modul 1', pageOrTrack: 'Track 1.23', context: 'Was unternehmen Sie gewöhnlich am Wochenende?' }
    ],
    pronunciation: '[ˌʊntɐˈneːmən]',
    infinitive: 'unternehmen (+ Akk.)',
    present: 'unternimmt',
    preterite: 'unternahm',
    perfect: 'hat unternommen',
    auxiliary: 'haben',
    example: 'Am kommenden Samstag wollen wir gemeinsam eine Fahrradtour an den See unternehmen.',
    exampleTranslation: 'شنبه آینده می‌خواهیم با هم یک دوچرخه‌سواری گروهی به سمت دریاچه ترتیب دهیم.',
    level: 'B1+',
    tags: ['گردش', 'فعالیت']
  },
  {
    id: 'k4-v3',
    german: 'abschalten',
    persian: 'فکر کار را کنار گذاشتن، ذهن را آزاد و استراحت دادن',
    category: 'Verben',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 1', pageOrTrack: 'S. 47', context: 'beim Sport oder Gartenarbeit völlig abschalten' }
    ],
    pronunciation: '[ˈapˌʃaltn̩]',
    infinitive: 'abschalten',
    present: 'schaltet ab',
    preterite: 'schaltete ab',
    perfect: 'hat abgeschaltet',
    auxiliary: 'haben',
    separable: true,
    example: 'Beim Wandern in den Bergen kann ich von den alltäglichen Sorgen komplett abschalten.',
    exampleTranslation: 'هنگام کوهنوردی در کوهستان می‌توانم از دغدغه‌های روزمره کاملاً ذهن خود را سبک کنم.',
    level: 'B1+',
    tags: ['سلامت روان', 'استراحت']
  },
  {
    id: 'k4-v4',
    german: 'nachgehen',
    persian: 'دنبال کردن، پرداختن به (یک سرگرمی، علاقه یا شغل)',
    category: 'Verben',
    lesson: 4,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 1', pageOrTrack: 'S. 46', context: 'einem kreativen Hobby regelmäßig nachgehen' }
    ],
    pronunciation: '[ˈnaːxˌɡeːən]',
    infinitive: 'nachgehen (+ Dat. z.B. einem Hobby)',
    present: 'geht nach',
    preterite: 'ging nach',
    perfect: 'ist nachgegangen',
    auxiliary: 'sein',
    separable: true,
    prepositionCase: 'Dativ (ohne Präposition)',
    example: 'In seiner Freizeit geht er leidenschaftlich gerne der Fotografie nach.',
    exampleTranslation: 'در اوقات فراغت، او با اشتیاق فراوان به عکاسی می‌پردازد.',
    level: 'B1+',
    tags: ['سرگرمی', 'علاقه']
  },
  {
    id: 'k4-v5',
    german: 'faulenzen',
    persian: 'تنبلی کردن، لم دادن و هیچ کاری نکردن برای استراحت',
    category: 'Verben',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 1', pageOrTrack: 'S. 46', context: 'einfach mal den ganzen Sonntag lang faulenzen' }
    ],
    pronunciation: '[ˈfaʊ̯lɛnt͡sn̩]',
    infinitive: 'faulenzen',
    present: 'faulenzt',
    preterite: 'faulenzte',
    perfect: 'hat gefaulenzte',
    auxiliary: 'haben',
    example: 'Manchmal tut es gut, am Wochenende ohne schlechtes Gewissen auf der Couch zu faulenzen.',
    exampleTranslation: 'گاه لم دادن روی مبل در آخر هفته بدون احساس گناه بسیار دلچسب است.',
    level: 'B1+',
    tags: ['استراحت', 'فراغت']
  },
  {
    id: 'k4-v6',
    german: 'aufführen',
    persian: 'به روی صحنه بردن، اجرا کردن (تئاتر، نمایش یا کنسرت)',
    category: 'Verben',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 2', pageOrTrack: 'S. 48', context: 'ein bekanntes Theaterstück im Stadttheater aufführen' },
      { source: 'Hörtexte', lesson: 4, module: 'Modul 2', pageOrTrack: 'Track 1.25', context: 'Das Ensemble führt heute Abend eine Oper auf.' }
    ],
    pronunciation: '[ˈaʊ̯fˌfyːʁən]',
    infinitive: 'aufführen (+ Akk.)',
    present: 'führt auf',
    preterite: 'führte auf',
    perfect: 'hat aufgeführt',
    auxiliary: 'haben',
    separable: true,
    example: 'Das Schülertheater führt zum Semesterende eine moderne Komödie auf.',
    exampleTranslation: 'تئاتر دانش‌آموزی در پایان ترم یک کمدی مدرن را به روی صحنه می‌برد.',
    level: 'B1+',
    tags: ['تئاتر', 'هنر']
  },
  {
    id: 'k4-v7',
    german: 'inszenieren',
    persian: 'کارگردانی کردن، صحنه‌پردازی و تنظیم اجرای هنری',
    category: 'Verben',
    lesson: 4,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 2', pageOrTrack: 'S. 48', context: 'ein klassisches Stück neu inszenieren' }
    ],
    pronunciation: '[ɪnst͡səˈniːʁən]',
    infinitive: 'inszenieren (+ Akk.)',
    present: 'inszeniert',
    preterite: 'inszenierte',
    perfect: 'hat inszeniert',
    auxiliary: 'haben',
    example: 'Der Regisseur hat die Oper mit spektakulären Lichteffekten vollkommen neu inszeniert.',
    exampleTranslation: 'کارگردان اپرا را با جلوه‌های نوری خارق‌العاده کاملاً نوسازی و صحنه‌پردازی کرده است.',
    level: 'B1+',
    tags: ['کارگردانی', 'هنر']
  },
  {
    id: 'k4-v8',
    german: 'mitreißen',
    persian: 'به هیجان آوردن، مجذوب و شورزده کردن تماشاگران',
    category: 'Verben',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 4, module: 'Modul 2', pageOrTrack: 'Track 1.26', context: 'Die energetische Musik riss das gesamte Publikum mit.' }
    ],
    pronunciation: '[ˈmɪtˌʁaɪ̯sn̩]',
    infinitive: 'mitreißen (+ Akk.)',
    present: 'reißt mit',
    preterite: 'riss mit',
    perfect: 'hat mitgerissen',
    auxiliary: 'haben',
    separable: true,
    example: 'Die mitreißende Musik der Band riss alle Zuschauer von den Stühlen.',
    exampleTranslation: 'موسیقی شورانگیز گروه، همه تماشاگران را از صندلی‌ها کند و به هیجان آورد.',
    level: 'B1+',
    tags: ['موسیقی', 'هیجان']
  },
  {
    id: 'k4-v9',
    german: 'überwinden',
    persian: 'غلبه کردن بر (ترس، مانع یا خود غلبه کردن)',
    category: 'Verben',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 3', pageOrTrack: 'S. 50', context: 'seine Höhenangst beim Klettern überwinden' },
      { source: 'Hörtexte', lesson: 4, module: 'Modul 3', pageOrTrack: 'Track 1.27', context: 'Extremsportler müssen große Ängste überwinden.' }
    ],
    pronunciation: '[yːbɐˈvɪndn̩]',
    infinitive: 'überwinden (+ Akk.)',
    present: 'überwindet',
    preterite: 'überwand',
    perfect: 'hat überwunden',
    auxiliary: 'haben',
    example: 'Um aus zehn Metern Höhe ins Wasser zu springen, musste er seine Angst überwinden.',
    exampleTranslation: 'برای پریدن در آب از ارتفاع ۱۰ متری، او مجبور بود بر ترس خود غلبه کند.',
    level: 'B1+',
    tags: ['شجاعت', 'روانشناسی']
  },
  {
    id: 'k4-v10',
    german: 'wagen',
    persian: 'جرأت کردن، جسارت به خرج دادن و ریسک چیزی را پذیرفتن',
    category: 'Verben',
    lesson: 4,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 3', pageOrTrack: 'S. 50', context: 'einen Fallschirmsprung aus 4000 Metern Höhe wagen' }
    ],
    pronunciation: '[ˈvaːɡn̩]',
    infinitive: 'wagen (+ Akk.)',
    present: 'wagt',
    preterite: 'wagte',
    perfect: 'hat gewagt',
    auxiliary: 'haben',
    example: 'Trotz des schlechten Wetters wagten die Bergsteiger den Aufstieg zum Gipfel.',
    exampleTranslation: 'با وجود هوای بد، کوهنوردان جسارت به خرج داده و صعود به قله را آغاز کردند.',
    level: 'B1+',
    tags: ['ریسک', 'شهامت']
  },
  {
    id: 'k4-v11',
    german: 'erkunden',
    persian: 'کشف کردن، گشت‌وزن و شناسایی جاذبه‌های یک شهر یا منطقه',
    category: 'Verben',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 4', pageOrTrack: 'S. 52', context: 'die historische Altstadt zu Fuß erkunden' },
      { source: 'Hörtexte', lesson: 4, module: 'Modul 4', pageOrTrack: 'Track 1.29', context: 'Touristen erkunden versteckte Ecken der Stadt.' }
    ],
    pronunciation: '[ɛɐ̯ˈkʊndn̩]',
    infinitive: 'erkunden (+ Akk.)',
    present: 'erkundet',
    preterite: 'erkundete',
    perfect: 'hat erkundet',
    auxiliary: 'haben',
    example: 'Mit einem Mietfahrrad lässt sich die Küstenregion wunderbar erkunden.',
    exampleTranslation: 'با یک دوچرخه کرایه‌ای می‌توان منطقه ساحلی را به زیبایی کشف و گردش کرد.',
    level: 'B1+',
    tags: ['گردشگری', 'سفر']
  },
  {
    id: 'k4-v12',
    german: 'schlendern',
    persian: 'قدم زدن، پرسه زدن آرامی و بی‌شتاب در خیابان یا بازار',
    category: 'Verben',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 4', pageOrTrack: 'S. 52', context: 'gemütlich durch die Fußgängerzone schlendern' }
    ],
    pronunciation: '[ˈʃlɛndɐn]',
    infinitive: 'schlendern durch (+ Akk.)',
    present: 'schlendert',
    preterite: 'schlenderte',
    perfect: 'ist geschlendert',
    auxiliary: 'sein',
    prepositionCase: 'durch + Akkusativ',
    example: 'Am Sonntagnachmittag schlenderte die Familie entspannt durch den Stadtpark.',
    exampleTranslation: 'بعد از ظهر یکشنبه، خانواده آرام و بی‌شتاب در پارک شهر قدم زدند.',
    level: 'B1+',
    tags: ['پیاده‌روی', 'فراغت']
  },
  {
    id: 'k4-v13',
    german: 'staunen über',
    persian: 'حیرت کردن، شگفت‌زده شدن از',
    category: 'Verben',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 4', pageOrTrack: 'S. 53', context: 'über die Architektur des Doms staunen' }
    ],
    pronunciation: '[ˈʃtaʊ̯nən]',
    infinitive: 'staunen über (+ Akk.)',
    present: 'staunt',
    preterite: 'staunte',
    perfect: 'hat gestaunt',
    auxiliary: 'haben',
    prepositionCase: 'über + Akkusativ',
    example: 'Die Touristen staunten über die beeindruckenden Meisterwerke im Museum.',
    exampleTranslation: 'گردشگران از شاهکارهای چشمگیر موجود در موزه شگفت‌زده شدند.',
    level: 'B1+',
    tags: ['حیرت', 'فرهنگ']
  },
  {
    id: 'k4-v14',
    german: 'genießen',
    persian: 'لذت بردن از، کیف کردن با (یک لحظه، منظر، غذا یا اثر هنری)',
    category: 'Verben',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 1', pageOrTrack: 'S. 46', context: 'die freie Zeit in vollen Zügen genießen' }
    ],
    pronunciation: '[ɡəˈniːsn̩]',
    infinitive: 'genießen (+ Akk.)',
    present: 'genießt',
    preterite: 'genoss',
    perfect: 'hat genossen',
    auxiliary: 'haben',
    example: 'Von der Terrasse aus genießt man einen fantastischen Panoramablick über die Alpen.',
    exampleTranslation: 'از ایوان، فرد از دید پانورامای فوق‌العاده بر فراز کوه‌های آلپ لذت می‌برد.',
    level: 'B1+',
    tags: ['لذت', 'طبیعت']
  },

  // --- Nomen (اسامی همراه آرتیکل، جمع، تلفظ و جنسیت) ---
  {
    id: 'k4-n1',
    german: 'der Nervenkitzel',
    persian: 'هیجان و آدرنالین شدید، حس ماجراجویی خالص',
    category: 'Nomen',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 3', pageOrTrack: 'S. 50', context: 'Extremsportler suchen den Nervenkitzel beim Paragliding.' },
      { source: 'Hörtexte', lesson: 4, module: 'Modul 3', pageOrTrack: 'Track 1.27', context: 'Warum suchen Menschen den gefährlichen Nervenkitzel?' }
    ],
    pronunciation: '[ˈnɛʁfn̩ˌkɪtsl̩]',
    article: 'der',
    plural: 'der Nervenkitzel (بدون جمع)',
    genderPersian: 'مذکر (der)',
    example: 'Beim Bungee-Jumping sucht man den absoluten Nervenkitzel und den freien Fall.',
    exampleTranslation: 'در ورزش بانجی‌جامپینگ فرد به دنبال هیجان شدید و سقوط آزاد است.',
    level: 'B1+',
    tags: ['ورزش', 'هیجان']
  },
  {
    id: 'k4-n2',
    german: 'die Sehenswürdigkeit',
    persian: 'جاذبه دیدنی، مکان تاریخی و توریستی دیدنی',
    category: 'Nomen',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 4', pageOrTrack: 'S. 52', context: 'Die wichtigsten Sehenswürdigkeiten der Stadt besuchen' },
      { source: 'Hörtexte', lesson: 4, module: 'Modul 4', pageOrTrack: 'Track 1.29', context: 'Stadtführer erklärt historische Sehenswürdigkeiten.' }
    ],
    pronunciation: '[ˈzeːənsˌvʏʁdɪçkaɪ̯t]',
    article: 'die',
    plural: 'die Sehenswürdigkeiten',
    genderPersian: 'مونث (die)',
    example: 'Die historische Altstadt zählt zu den bekanntesten Sehenswürdigkeiten Europas.',
    exampleTranslation: 'بافت قدیمی تاریخی شهر در زمره معروف‌ترین جاذبه‌های دیدنی اروپا قرار دارد.',
    level: 'B1+',
    tags: ['گردشگری', 'تاریخ']
  },
  {
    id: 'k4-n3',
    german: 'die Freizeitgestaltung',
    persian: 'برنامه‌ریزی و گذران اوقات فراغت',
    category: 'Nomen',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 1', pageOrTrack: 'S. 46', context: 'Möglichkeiten der sinnerfüllten Freizeitgestaltung' }
    ],
    pronunciation: '[ˈfʁaɪ̯t͡saɪ̯tɡəˌʃtaltʊŋ]',
    article: 'die',
    plural: 'die Freizeitgestaltungen',
    genderPersian: 'مونث (die)',
    example: 'Für eine ausgewogene Freizeitgestaltung kombinieren viele Menschen Sport und Kultur.',
    exampleTranslation: 'برای گذران متوازن اوقات فراغت، بسیاری از مردم ورزش و فرهنگ را تلفیق می‌کنند.',
    level: 'B1+',
    tags: ['فراغت', 'سبک زندگی']
  },
  {
    id: 'k4-n4',
    german: 'der Zeitvertreib',
    persian: 'سرگرمی، وسیله تفریح و وقت‌گذرانی',
    category: 'Nomen',
    lesson: 4,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 1', pageOrTrack: 'S. 47', context: 'Gesellschaftsspiele als beliebter Zeitvertreib' }
    ],
    pronunciation: '[ˈtsaɪ̯tfɛɐ̯ˌtʁaɪ̯p]',
    article: 'der',
    plural: 'die Zeitvertreibe',
    genderPersian: 'مذکر (der)',
    example: 'Lesen und Rätsellösen sind angenehme Zeitvertreibe bei langen Zugfahrten.',
    exampleTranslation: 'مطالعه و حل جدول سرگرمی‌های دلپذیری در سفر‌های طولانی با قطار هستند.',
    level: 'B1+',
    tags: ['سرگرمی', 'فراغت']
  },
  {
    id: 'k4-n5',
    german: 'die Inszenierung',
    persian: 'صحنه‌پردازی و کارگردانی تئاتر/کنسرت',
    category: 'Nomen',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 2', pageOrTrack: 'S. 48', context: 'Kritik über die gelungene Inszenierung des Stücks' }
    ],
    pronunciation: '[ɪnst͡səˈniːʁʊŋ]',
    article: 'die',
    plural: 'die Inszenierungen',
    genderPersian: 'مونث (die)',
    example: 'Die moderne Inszenierung des Shakespeares-Klassikers begeisterte das Publikum.',
    exampleTranslation: 'صحنه‌پردازی مدرن اثر کلاسیک شکسپیر، تماشاگران را به وجد آورد.',
    level: 'B1+',
    tags: ['تئاتر', 'هنر']
  },
  {
    id: 'k4-n6',
    german: 'die Aufführung',
    persian: 'اجرای زنده (تئاتر، موسیقی یا رقص)',
    category: 'Nomen',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 2', pageOrTrack: 'S. 48', context: 'Karten für die morgige Aufführung reservieren' }
    ],
    pronunciation: '[ˈaʊ̯fˌfyːʁʊŋ]',
    article: 'die',
    plural: 'die Aufführungen',
    genderPersian: 'مونث (die)',
    example: 'Nach der dreistündigen Aufführung gab es langanhaltenden Applaus für die Schauspieler.',
    exampleTranslation: 'پس از اجرای سه ساعته، تشویق ممتدی برای بازیگران صورت گرفت.',
    level: 'B1+',
    tags: ['نمایش', 'هنر']
  },
  {
    id: 'k4-n7',
    german: 'das Kunstwerk',
    persian: 'اثر هنری، شاهکار هنری',
    category: 'Nomen',
    lesson: 4,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 2', pageOrTrack: 'S. 49', context: 'Wertvolle Kunstwerke im Museum bewundern' }
    ],
    pronunciation: '[ˈkʊnstˌvɛʁk]',
    article: 'das',
    plural: 'die Kunstwerke',
    genderPersian: 'خنثی (das)',
    example: 'Das Museum stellt moderne Kunstwerke berühmter internationaler Künstler aus.',
    exampleTranslation: 'موزه آثار هنری مدرن هنرمندان مشهور بین‌المللی را به نمایش می‌گذارد.',
    level: 'B1+',
    tags: ['هنر', 'موزه']
  },
  {
    id: 'k4-n8',
    german: 'der Extremsport',
    persian: 'ورزش مخاطره‌آمیز و پرهیجان (مانند صخره‌نوردی، بانجی)',
    category: 'Nomen',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 3', pageOrTrack: 'S. 50', context: 'Faszination Extremsport: Warum suchen Menschen die Gefahr?' }
    ],
    pronunciation: '[ɛksˈtʁeːmˌʃpɔʁt]',
    article: 'der',
    plural: 'die Extremsportarten',
    genderPersian: 'مذکر (der)',
    example: 'Extremsport erfordert eine hohe körperliche Fitness und professionelle Ausrüstung.',
    exampleTranslation: 'ورزش هیجانی نیازمند آمادگی جسمانی بالا و تجهیزات حرفه‌ای است.',
    level: 'B1+',
    tags: ['ورزش', 'هیجان']
  },
  {
    id: 'k4-n9',
    german: 'die Herausforderung',
    persian: 'چالش، کار دشوار و امتحان‌کننده توانایی‌ها',
    category: 'Nomen',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 3', pageOrTrack: 'S. 50', context: 'neue sportliche Herausforderungen suchen' }
    ],
    pronunciation: '[hɛˈʁaʊ̯sfɔʁdəʁʊŋ]',
    article: 'die',
    plural: 'die Herausforderungen',
    genderPersian: 'مونث (die)',
    example: 'Die Besteigung des Achttausenders war die größte sportliche Herausforderung seines Lebens.',
    exampleTranslation: 'صعود به قله هشت هزار متری، بزرگ‌ترین چالش ورزشی زندگی او بود.',
    level: 'B1+',
    tags: ['چالش', 'موفقیت']
  },
  {
    id: 'k4-n10',
    german: 'die Stadtführung',
    persian: 'تور و راهنمایی گشت‌وزن شهری',
    category: 'Nomen',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 4, module: 'Modul 4', pageOrTrack: 'Track 1.29', context: 'Eine Nachtwächter-Stadtführung durch die alte Festung' }
    ],
    pronunciation: '[ˈʃtatˌfyːʁʊŋ]',
    article: 'die',
    plural: 'die Stadtführungen',
    genderPersian: 'مونث (die)',
    example: 'Bei der geführten Stadtführung erfährt man spannende Anekdoten über die Stadtgeschichte.',
    exampleTranslation: 'در تور راهنمایی شهر، فرد حکایات جذابی درباره تاریخ شهر می‌شنود.',
    level: 'B1+',
    tags: ['گردشگری', 'راهنما']
  },
  {
    id: 'k4-n11',
    german: 'das Wahrzeichen',
    persian: 'نماد و نشانه شناخته‌شده شهر یا کشور (مانند برج ایفل یا برج میلاد)',
    category: 'Nomen',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 4', pageOrTrack: 'S. 53', context: 'Das Kölner Dom ist das berühmte Wahrzeichen der Stadt.' }
    ],
    pronunciation: '[ˈvaːɐ̯ˌt͡saɪ̯xn̩]',
    article: 'das',
    plural: 'die Wahrzeichen',
    genderPersian: 'خنثی (das)',
    example: 'Das Brandenburger Tor ist das weltbekannte Wahrzeichen von Berlin.',
    exampleTranslation: 'دروازه براندنبورگ نماد پرآوازه جهانی شهر برلین است.',
    level: 'B1+',
    tags: ['معماری', 'نماد']
  },
  {
    id: 'k4-n12',
    german: 'der Touristenmagnet',
    persian: 'جاذبه توریستی بسیار محبوب و پربازدید',
    category: 'Nomen',
    lesson: 4,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 4', pageOrTrack: 'S. 52', context: 'Schloss Neuschwanstein als weltweiter Touristenmagnet' }
    ],
    pronunciation: '[tuˈʁɪstn̩maɡˌneːt]',
    article: 'der',
    plural: 'die Touristenmagnete',
    genderPersian: 'مذکر (der)',
    example: 'Das historische Schloss zieht als echter Touristenmagnet Millionen Besucher an.',
    exampleTranslation: 'قلعه تاریخی به عنوان یک جاذبه توریستی واقعی میلیون‌ها بازدیدکننده را جلب می‌کند.',
    level: 'B1+',
    tags: ['گردشگری', 'محبوبیت']
  },

  // --- Adjektive & Adverbien (صفات همراه درجه مقایسه‌ای و متضاد) ---
  {
    id: 'k4-adj1',
    german: 'atemberaubend',
    persian: 'نفس‌گیر، خارق‌العاده و شگفت‌انگیز',
    category: 'Adjektive',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 3', pageOrTrack: 'S. 51', context: 'eine atemberaubende Aussicht über die Berglandschaft' }
    ],
    pronunciation: '[ˈaːtəmˌbəʁaʊ̯bn̩t]',
    comparative: 'atemberaubender',
    superlative: 'am atemberaubendsten',
    opposite: 'unspektakulär / langweilig',
    example: 'Der Blick vom Berggipfel bei Sonnenaufgang war schlicht atemberaubend.',
    exampleTranslation: 'چشم‌انداز قله کوه هنگام طلوع آفتاب ساده و در عین حال نفس‌گیر بود.',
    level: 'B1+',
    tags: ['طبیعت', 'توصیف']
  },
  {
    id: 'k4-adj2',
    german: 'unterhaltsam',
    persian: 'سرگرم‌کننده، مایه نشاط و غیرخسته‌کننده',
    category: 'Adjektive',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 1', pageOrTrack: 'S. 47', context: 'ein unterhaltsamer Abend mit Gesellschaftsspielen' }
    ],
    pronunciation: '[ˈʊntɐˌhaltzaːm]',
    comparative: 'unterhaltsamer',
    superlative: 'am unterhaltsamsten',
    opposite: 'stinklangweilig / trocken',
    example: 'Der Kabarettist gestaltete den Abend ausgesprochen unterhaltsam und humorvoll.',
    exampleTranslation: 'کمدین شب را فوق‌العاده سرگرم‌کننده و طنزآمیز رقم زد.',
    level: 'B1+',
    tags: ['سرگرمی', 'توصیف']
  },
  {
    id: 'k4-adj3',
    german: 'abwechslungsreich',
    persian: 'پر از تنوع، متنوع و غیریکنواخت',
    category: 'Adjektive',
    lesson: 4,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 1', pageOrTrack: 'S. 46', context: 'ein abwechslungsreiches Programm für das Wochenende' }
    ],
    pronunciation: '[ˈapvɛkslʊŋsˌʁaɪ̯ç]',
    comparative: 'abwechslungsreicher',
    superlative: 'am abwechslungsreichsten',
    opposite: 'eintönig / monoton',
    example: 'Das Kulturfestival bot ein extrem abwechslungsreiches Programm für Groß und Klein.',
    exampleTranslation: 'جشنواره فرهنگی برنامه‌ای فوق‌العاده متنوع برای بزرگ و کوچک ارائه داد.',
    level: 'B1+',
    tags: ['تنوع', 'برنامه‌ریزی']
  },
  {
    id: 'k4-adj4',
    german: 'mitreißend',
    persian: 'شورانگیز، به هیجان‌آورنده و جذّاب',
    category: 'Adjektive',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 4, module: 'Modul 2', pageOrTrack: 'Track 1.26', context: 'eine mitreißende Tanzvorführung der Künstler' }
    ],
    pronunciation: '[ˈmɪtˌʁaɪ̯sn̩t]',
    comparative: 'mitreißender',
    superlative: 'am mitreißendsten',
    opposite: 'langweilig / einschläfernd',
    example: 'Das Orchester spielte mit einer so mitreißenden Dynamik, dass alle begeistert waren.',
    exampleTranslation: 'ارکستر با چنان پویایی شورانگیزی نواخت که همه به وجد آمدند.',
    level: 'B1+',
    tags: ['موسیقی', 'احساس']
  },
  {
    id: 'k4-adj5',
    german: 'malerisch',
    persian: 'چشم‌نواز، تماشایی مثل تابلوی نقاشی (منظره یا روستا)',
    category: 'Adjektive',
    lesson: 4,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 4', pageOrTrack: 'S. 52', context: 'ein malerisches Dorf in den Alpen besuchen' }
    ],
    pronunciation: '[ˈmaːləʁɪʃ]',
    comparative: 'malerischer',
    superlative: 'am malerischsten',
    opposite: 'hässlich / trostlos',
    example: 'Das kleine Küstenstädtchen mit seinen bunten Häusern liegt malerisch am Meer.',
    exampleTranslation: 'شهرک ساحلی کوچک با خانه‌های رنگارنگش به زیبایی تابلوی نقاشی کنار دریا واقع شده است.',
    level: 'B1+',
    tags: ['زیبایی', 'طبیعت']
  },
  {
    id: 'k4-adj6',
    german: 'risikoreich',
    persian: 'پرخطر، همراه با ریسک زیاد',
    category: 'Adjektive',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 3', pageOrTrack: 'S. 50', context: 'risikoreiche Sportarten erfordern gute Vorbereitung' }
    ],
    pronunciation: '[ˈʁiːzikoːˌʁaɪ̯ç]',
    comparative: 'risikoreicher',
    superlative: 'am risikoreichsten',
    opposite: 'gefahrlos / sicher',
    example: 'Klettern ohne Seil ist eine extrem risikoreiche Sportart.',
    exampleTranslation: 'صخره‌نوردی بدون طناب یک رشته ورزشی فوق‌العاده پرخطر است.',
    level: 'B1+',
    tags: ['خطر', 'ورزش']
  },

  // --- Redewendungen & Ausdrücke (اصطلاحات کاربردی) ---
  {
    id: 'k4-red1',
    german: 'die Seele baumeln lassen',
    persian: 'استراحت مطلق کردن و به آرامش روح و روان پرداختن',
    category: 'Redewendungen',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 1', pageOrTrack: 'S. 46', context: 'Im Urlaub einfach mal die Seele baumeln lassen.' }
    ],
    pronunciation: '[diː ˈzeːlə ˈbaʊ̯ml̩n ˈlasn̩]',
    explanation: 'تسکین ذهن و رها شدن از هرگونه استرس، دغدغه و مسئولیت کاری.',
    literalMeaning: 'روح را آویزان و آویخته رها کردن',
    example: 'Am Strand am See kann man herrlich liegen und einfach die Seele baumeln lassen.',
    exampleTranslation: 'کنار ساحل دریاچه می‌توان به زیبایی دراز کشید و به روح و روان آرامش داد.',
    level: 'B1+',
    tags: ['اصطلاح', 'آرامش']
  },
  {
    id: 'k4-red2',
    german: 'an seine Grenzen gehen',
    persian: 'به انتهای مرز توانایی‌های خود رسیدن، چالش‌طلبی حداکثری جسمی یا روحی',
    category: 'Redewendungen',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 3', pageOrTrack: 'S. 50', context: 'Beim Extremsport muss man oft an seine Grenzen gehen.' }
    ],
    pronunciation: '[ʔan ˈzaɪ̯nə ˈɡʁɛnt͡sn̩ ˈɡeːən]',
    explanation: 'تلاش حداکثری برای تست کردن نهایت ظرفیت بدنی یا ذهنی خود در شرایط سخت.',
    literalMeaning: 'به سمت مرزهای خود رفتن',
    example: 'Beim Marathonlauf musste jeder Läufer an seine persönlichen Grenzen gehen.',
    exampleTranslation: 'در مسابقه ماراتن، هر دوینده‌ای مجبور بود به انتهای مرز توانایی‌های شخصی خود برسد.',
    level: 'B1+',
    tags: ['اصطلاح', 'استقامت']
  },
  {
    id: 'k4-red3',
    german: 'dem Alltag entfliehen',
    persian: 'از روزمرگی فرار کردن و پناه بردن به تفریح یا سفر',
    category: 'Redewendungen',
    lesson: 4,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 1', pageOrTrack: 'S. 46', context: 'Für ein Wochenende dem grauen Alltag entfliehen' }
    ],
    pronunciation: '[deːm ˈʔaltaːk ɛntˈfliːən]',
    explanation: 'سفر یا تفریحی کوتاه‌مدت برای رهایی از یکنواختی و خستگی کارهای روزمره.',
    literalMeaning: 'از روزمره گریختن',
    example: 'Ein spontaner Kurztrip übers Wochenende hilft dabei, dem stressigen Alltag zu entfliehen.',
    exampleTranslation: 'یک سفر کوتاه ناگهانی در آخر هفته کمک می‌کند تا فرد از روزمرگی پر استرس فرار کند.',
    level: 'B1+',
    tags: ['اصطلاح', 'سفر']
  },
  {
    id: 'k4-red4',
    german: 'seinen inneren Schweinehund überwinden',
    persian: 'بر تنبلی و سستی درونی خود غلبه کردن (مثلاً برای ورزش کردن یا سحرخیزی)',
    category: 'Redewendungen',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 1', pageOrTrack: 'S. 47', context: 'Morgens den inneren Schweinehund überwinden und joggen' }
    ],
    pronunciation: '[ˈzaɪ̯nən ˈʔɪnəʁən ˈʃvaɪ̯nəˌhʊnt yːbɐˈvɪndn̩]',
    explanation: 'شکست دادن وسوسه تنبلی و انجام دادن کاری مفید که سخت به نظر می‌رسد.',
    literalMeaning: 'بر سگ-خوک درونی خود غلبه کردن',
    example: 'Um morgens um sechs Uhr joggen zu gehen, muss man erst seinen inneren Schweinehund überwinden.',
    exampleTranslation: 'برای اینکه صبح ساعت شش به دویدن بروی، اول باید بر تنبلی درونی‌ات غلبه کنی.',
    level: 'B1+',
    tags: ['اصطلاح', 'اراده']
  },
  {
    id: 'k4-red5',
    german: 'sich die Zeit vertreiben',
    persian: 'وقت‌گذرانی کردن، سرگرم شدن برای طی شدن زمان',
    category: 'Redewendungen',
    lesson: 4,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 1', pageOrTrack: 'S. 47', context: 'sich das Warten mit einem Buch vertreiben' }
    ],
    pronunciation: '[zɪç diː t͡saɪ̯t fɛɐ̯ˈtʁaɪ̯bn̩]',
    explanation: 'انجام دادن کاری لذت‌بخش جهت حس نکردن طولانی بودن زمان انتظار.',
    literalMeaning: 'زمان را فراری دادن',
    example: 'Während der Flugverpätung vertrieb er sich die Zeit mit dem Anschauen von Filmen.',
    exampleTranslation: 'در طول تاخیر پرواز، او وقت خود را با تماشای فیلم می‌گذراند و سرگرم بود.',
    level: 'B1+',
    tags: ['اصطلاح', 'سرگرمی']
  },
  {
    id: 'k4-red6',
    german: 'den Kopf frei bekommen',
    persian: 'فکر و ذهن خود را آزاد و سبک کردن',
    category: 'Redewendungen',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 4, module: 'Modul 1', pageOrTrack: 'Track 1.23', context: 'Nach dem Büro durch Fahrradfahren den Kopf frei bekommen' }
    ],
    pronunciation: '[deːn kɔp͡f fʁaɪ̯ bəˈkɔmən]',
    explanation: 'تخلیه ذهن از افکار کاری و استرس‌زا با انجام فعالیت‌های ورزشی یا تفریحی.',
    literalMeaning: 'سر را آزاد به دست آوردن',
    example: 'Ein langer Spaziergang am Abend hilft mir immer, den Kopf nach der Arbeit frei zu bekommen.',
    exampleTranslation: 'یک پیاده‌روی طولانی عصرگاهی همیشه به من کمک می‌کند تا ذهنم را بعد از کار سبک و آزاد کنم.',
    level: 'B1+',
    tags: ['اصطلاح', 'آرامش']
  },

  // =========================================================================
  // KAPITEL 5: Alles will gelernt sein (آموزش، یادگیری، حافظه و مهارت‌ها)
  // =========================================================================
  // --- Verben (افعال با تمام زمان‌های Präsens / Präteritum / Perfekt و حروف اضافه) ---
  {
    id: 'k5-v1',
    german: 'sich einprägen',
    persian: 'به خاطر سپردن، ملکه ذهن کردن و صریح در حافظه ضبط نمودن',
    category: 'Verben',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 3', pageOrTrack: 'S. 62', context: 'Vokabeln durch Visualisierung schneller einprägen' },
      { source: 'Hörtexte', lesson: 5, module: 'Modul 3', pageOrTrack: 'Track 1.35', context: 'Wie prägt man sich komplexe Zusammenhänge am besten ein?' }
    ],
    pronunciation: '[zɪç ˈaɪ̯nˌpʁɛːɡn̩]',
    infinitive: 'sich (+ Dat.) einprägen (+ Akk.)',
    present: 'prägt sich ein',
    preterite: 'prägte sich ein',
    perfect: 'hat sich eingeprägt',
    auxiliary: 'haben',
    reflexive: true,
    separable: true,
    example: 'Mit Mnemonic-Techniken und Bildern kann man sich schwierige Begriffe dauerhaft einprägen.',
    exampleTranslation: 'با ترفندهای تصویرسازی و یادسپاری می‌توان مفاهیم سخت را برای همیشه به خاطر سپرد.',
    level: 'B1+',
    tags: ['حافظه', 'یادگیری']
  },
  {
    id: 'k5-v2',
    german: 'fördern',
    persian: 'پرورش دادن، تقویت، رشد دادن و حمایت کردن از استعداد/مهارت',
    category: 'Verben',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 2', pageOrTrack: 'S. 60', context: 'die kognitiven Fähigkeiten von Kindern gezielt fördern' },
      { source: 'Hörtexte', lesson: 5, module: 'Modul 2', pageOrTrack: 'Track 1.33', context: 'Schulen sollten individuelle Talente stärker fördern.' }
    ],
    pronunciation: '[ˈfœʁdɐn]',
    infinitive: 'fördern (+ Akk.)',
    present: 'fördert',
    preterite: 'förderte',
    perfect: 'hat gefördert',
    auxiliary: 'haben',
    example: 'Gute Pädagogen fördern die individuellen Stärken und Talente jedes einzelnen Schülers.',
    exampleTranslation: 'مربیان خوب توانمندی‌ها و استعدادهای فردی تک‌تک دانش‌آموزان را پرورش می‌دهند.',
    level: 'B1+',
    tags: ['آموزش', 'رشد']
  },
  {
    id: 'k5-v3',
    german: 'erwerben',
    persian: 'کسب کردن، به دست آوردن (دانش، مهارت، مدارک یا تخصص)',
    category: 'Verben',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 1', pageOrTrack: 'S. 58', context: 'neue Qualifikationen durch Weiterbildung erwerben' }
    ],
    pronunciation: '[ɛɐ̯ˈvɛʁbn̩]',
    infinitive: 'erwerben (+ Akk.)',
    present: 'erwirbt',
    preterite: 'erwarb',
    perfect: 'hat erworben',
    auxiliary: 'haben',
    example: 'Im Laufe des Studiums erwerben die Studenten fundierte Fachkenntnisse in der Informatik.',
    exampleTranslation: 'در طول مدت تحصیل، دانشجویان دانش تخصصی عمیقی در علوم کامپیوتر کسب می‌کنند.',
    level: 'B1+',
    tags: ['دانش', 'مهارت']
  },
  {
    id: 'k5-v4',
    german: 'sich aneignen',
    persian: 'فراگرفتن، برای خود ملکه کردن و خودآموزی نمودن (زبان یا مهارت)',
    category: 'Verben',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 1', pageOrTrack: 'S. 58', context: 'sich eine Fremdsprache im Selbststudium aneignen' }
    ],
    pronunciation: '[zɪç ˈanˌʔaɪ̯ɡnən]',
    infinitive: 'sich (+ Dat.) aneignen (+ Akk.)',
    present: 'eignet sich an',
    preterite: 'eignete sich an',
    perfect: 'hat sich angeeignet',
    auxiliary: 'haben',
    reflexive: true,
    separable: true,
    example: 'Er hat sich die Grundlagen der Programmierung ganz ohne Lehrer selbst angeeignet.',
    exampleTranslation: 'او اساس و مبانی برنامه‌نویسی را کاملاً بدون معلم به صورت خودآموز فراگرفت.',
    level: 'B1+',
    tags: ['یادگیری', 'خودآموزی']
  },
  {
    id: 'k5-v5',
    german: 'auffrischen',
    persian: 'بازخوانی و تازه‌سازی کردن (دانش یا زبان فراموش‌شده)',
    category: 'Verben',
    lesson: 5,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 1', pageOrTrack: 'S. 59', context: 'seine Sprachkenntnisse vor der Reise wieder auffrischen' }
    ],
    pronunciation: '[ˈaʊ̯fˌfʁɪʃn̩]',
    infinitive: 'auffrischen (+ Akk.)',
    present: 'frischt auf',
    preterite: 'frischte auf',
    perfect: 'hat aufgefrischt',
    auxiliary: 'haben',
    separable: true,
    example: 'Vor ihrer Reise nach Spanien frischte sie ihre Spanischkenntnisse in einem Intensivkurs auf.',
    exampleTranslation: 'پیش از سفر به اسپانیا، او دانش زبان اسپانیایی خود را در یک دوره فشرده تازه‌سازی کرد.',
    level: 'B1+',
    tags: ['بازخوانی', 'زبان']
  },
  {
    id: 'k5-v6',
    german: 'büffeln',
    persian: 'حرص زدن و فشرده درس خواندن (اصطلاح عامیانه برای حفظ کردن برای امتحان)',
    category: 'Verben',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 4', pageOrTrack: 'S. 64', context: 'Tag und Nacht für die Abschlussprüfung büffeln' },
      { source: 'Hörtexte', lesson: 5, module: 'Modul 4', pageOrTrack: 'Track 1.36', context: 'Studenten büffeln in der Universitätsbibliothek.' }
    ],
    pronunciation: '[ˈbʏfl̩n]',
    infinitive: 'büffeln für (+ Akk.)',
    present: 'büffelt',
    preterite: 'büffelte',
    perfect: 'hat gebüffelt',
    auxiliary: 'haben',
    prepositionCase: 'für + Akkusativ',
    example: 'Vor den Klausuren büffeln die Studenten tagelang bis spät in die Nacht in der Bibliothek.',
    exampleTranslation: 'پیش از امتحانات، دانشجویان روزها تا پاسی از شب در کتابخانه فشرده درس می‌خوانند.',
    level: 'B1+',
    tags: ['امتحان', 'درس']
  },
  {
    id: 'k5-v7',
    german: 'ablegen',
    persian: 'شرکت کردن و سپری نمودن (امتحان یا آزمون رسمی)',
    category: 'Verben',
    lesson: 5,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 4', pageOrTrack: 'S. 64', context: 'eine mündliche oder schriftliche Prüfung ablegen' }
    ],
    pronunciation: '[ˈapˌleːɡn̩]',
    infinitive: 'ablegen (+ Akk. z.B. eine Prüfung)',
    present: 'legt ab',
    preterite: 'legte ab',
    perfect: 'hat abgelegt',
    auxiliary: 'haben',
    separable: true,
    example: 'Nächste Woche legt sie die B1-Sprachprüfung beim Goethe-Institut ab.',
    exampleTranslation: 'هفته آینده او آزمون زبان B1 را در موسسه گوته سپری می‌کند.',
    level: 'B1+',
    tags: ['آزمون', 'مدرک']
  },
  {
    id: 'k5-v8',
    german: 'durchfallen',
    persian: 'رد شدن و قبول نشدن در آزمون یا امتحان',
    category: 'Verben',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 4', pageOrTrack: 'S. 64', context: 'bei der Fahrprüfung leider durchfallen' }
    ],
    pronunciation: '[ˈdʊʁçˌfalən]',
    infinitive: 'durchfallen bei / in (+ Dat.)',
    present: 'fällt durch',
    preterite: 'fiel durch',
    perfect: 'ist durchgefallen',
    auxiliary: 'sein',
    separable: true,
    prepositionCase: 'bei / in + Dativ',
    example: 'Wer nicht ausreichend lernt, riskiert, bei der schweren Mathematikprüfung durchzufallen.',
    exampleTranslation: 'کسی که به قدر کافی درس نخواند، ریسک رد شدن در امتحان سخت ریاضی را به جان می‌خرد.',
    level: 'B1+',
    tags: ['امتحان', 'شکست']
  },
  {
    id: 'k5-v9',
    german: 'vermitteln',
    persian: 'انتقال دادن و آموزش دادن (دانش، تجربه یا مفهوم)',
    category: 'Verben',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 4', pageOrTrack: 'S. 65', context: 'Wissen verständlich und praxisnah vermitteln' }
    ],
    pronunciation: '[fɛɐ̯ˈmɪtl̩n]',
    infinitive: 'vermitteln (+ Akk.)',
    present: 'vermittelt',
    preterite: 'vermittelte',
    perfect: 'hat vermittelt',
    auxiliary: 'haben',
    example: 'Der Dozent versteht es hervorragend, komplexe Theorien anschaulich zu vermitteln.',
    exampleTranslation: 'استاد دانشگاه به زیبایی بلد است تئوری‌های پیچیده را ملموس و قابل‌فهم انتقال دهد.',
    level: 'B1+',
    tags: ['تدریس', 'آموزش']
  },
  {
    id: 'k5-v10',
    german: 'sich verknüpfen mit',
    persian: 'ارتباط دادن و ربط دادن اطلاعات جدید به داده‌های قبلی ذهن',
    category: 'Verben',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 3', pageOrTrack: 'S. 62', context: 'Neue Informationen mit genanntem Wissen verknüpfen' }
    ],
    pronunciation: '[fɛɐ̯ˈknʏp͡fn̩]',
    infinitive: 'sich verknüpfen mit (+ Dat.)',
    present: 'verknüpft sich',
    preterite: 'verknüpfte sich',
    perfect: 'hat sich verknüpft',
    auxiliary: 'haben',
    reflexive: true,
    prepositionCase: 'mit + Dativ',
    example: 'Das Gehirn lernt am effektivsten, wenn sich neue Fakten mit bekannten Erfahrungen verknüpfen.',
    exampleTranslation: 'مغز زمانی به موثرترین شکل می‌آموزد که واقعیت‌های جدید با تجربه‌های قبلی مرتبط شوند.',
    level: 'B1+',
    tags: ['مغز', 'یادگیری']
  },
  {
    id: 'k5-v11',
    german: 'behalten',
    persian: 'در یاد نگه داشتن، فراموش نکردن',
    category: 'Verben',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 3', pageOrTrack: 'S. 63', context: 'Wie kann man sich Namen und Zahlen besser behalten?' }
    ],
    pronunciation: '[bəˈhaltn̩]',
    infinitive: 'behalten (+ Akk.)',
    present: 'behält',
    preterite: 'behielt',
    perfect: 'hat behalten',
    auxiliary: 'haben',
    example: 'Manche Menschen besitzen ein fotografisches Gedächtnis und behalten jedes Detail.',
    exampleTranslation: 'برخی افراد دارای حافظه تصویری بوده و هر جزئیاتی را در یاد نگه می‌دارند.',
    level: 'B1+',
    tags: ['حافظه', 'یادآوری']
  },
  {
    id: 'k5-v12',
    german: 'abrufen',
    persian: 'فراخواندن و بازیابی اطلاعات/دانش ذخیره‌شده از حافظه',
    category: 'Verben',
    lesson: 5,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 3', pageOrTrack: 'S. 62', context: 'Gelerntes Wissen in Stresssituationen abrufen' }
    ],
    pronunciation: '[ˈapˌʁuːfn̩]',
    infinitive: 'abrufen (+ Akk.)',
    present: 'ruft ab',
    preterite: 'rief ab',
    perfect: 'hat abgefragt / abgerufen',
    auxiliary: 'haben',
    separable: true,
    example: 'Bei Prüfungsangst fällt es vielen schwer, ihr gelerntes Wissen ruhig abzurufen.',
    exampleTranslation: 'هنگام استرس امتحان، بازیابی و فراخواندن دانش آموخته‌شده برای خیلی‌ها دشوار می‌شود.',
    level: 'B1+',
    tags: ['حافظه', 'امتحان']
  },

  // --- Nomen (اسامی همراه آرتیکل، جمع، تلفظ و جنسیت) ---
  {
    id: 'k5-n1',
    german: 'das Gedächtnis',
    persian: 'حافظه، توانایی به خاطر سپردن و یادآوری ذهن',
    category: 'Nomen',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 3', pageOrTrack: 'S. 62', context: 'Das menschliche Gedächtnis trainieren' },
      { source: 'Hörtexte', lesson: 5, module: 'Modul 3', pageOrTrack: 'Track 1.35', context: 'Wie funktioniert das Kurz- und Langzeitgedächtnis?' }
    ],
    pronunciation: '[ɡəˈdɛçtnɪs]',
    article: 'das',
    plural: 'die Gedächtnisse',
    genderPersian: 'خنثی (das)',
    example: 'Durch Gehirnjogging und Rätsel lässt sich das Gedächtnis bis ins hohe Alter fit halten.',
    exampleTranslation: 'با ورزش فکری و معما، می‌توان حافظه را تا سنین بالا پرقدرت نگه داشت.',
    level: 'B1+',
    tags: ['روانشناسی', 'حافظه']
  },
  {
    id: 'k5-n2',
    german: 'die Weiterbildung',
    persian: 'آموزش تکمیلی، دوره ارتقای مهارت شغلی و تخصصی',
    category: 'Nomen',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 1', pageOrTrack: 'S. 58', context: 'An einer beruflichen Weiterbildung teilnehmen' }
    ],
    pronunciation: '[ˈvaɪ̯tɐˌbɪldʊŋ]',
    article: 'die',
    plural: 'die Weiterbildungen',
    genderPersian: 'مونث (die)',
    example: 'In vielen Berufen ist die regelmäßige Weiterbildung eine Pflicht für den Aufstieg.',
    exampleTranslation: 'در بسیاری از مشاغل، شرکت در دوره‌های ارتقای مهارت شرط لازم برای پیشرفت است.',
    level: 'B1+',
    tags: ['آموزش', 'شغل']
  },
  {
    id: 'k5-n3',
    german: 'die Begabung',
    persian: 'استعداد، موهبت خدادادی و توانمندی ذاتی',
    category: 'Nomen',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 2', pageOrTrack: 'S. 60', context: 'Musikalische oder mathematische Begabung früh erkennen' }
    ],
    pronunciation: '[bəˈɡaːpʊŋ]',
    article: 'die',
    plural: 'die Begabungen',
    genderPersian: 'مونث (die)',
    example: 'Schon im Kindesalter zeigte sich seine besondere Begabung für Sprachen.',
    exampleTranslation: 'حتی در سنین کودکی استعداد ویژه او برای زبان‌آموزی نمایان شد.',
    level: 'B1+',
    tags: ['استعداد', 'هوش']
  },
  {
    id: 'k5-n4',
    german: 'die Eselsbrücke',
    persian: 'رمز گردانی و ترفند یادسپاری (وسیله کمکی برای یادآوری کلمات یا فرمول‌ها)',
    category: 'Nomen',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 3', pageOrTrack: 'S. 63', context: 'Sich Regeln mithilfe von Eselsbrücken merken' }
    ],
    pronunciation: '[ˈeːzl̩sˌbʁʏkə]',
    article: 'die',
    plural: 'die Eselsbrücken',
    genderPersian: 'مونث (die)',
    example: 'Lustige Eselsbrücken helfen dabei, Grammatikregeln nie wieder zu vergessen.',
    exampleTranslation: 'رمزگردانی‌های خنده‌دار کمک می‌کنند که قواعد گرامری هرگز فراموش نشوند.',
    level: 'B1+',
    tags: ['یادگیری', 'ترفند']
  },
  {
    id: 'k5-n5',
    german: 'die Prüfungsangst',
    persian: 'استرس و ترس شدید از امتحان',
    category: 'Nomen',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 4', pageOrTrack: 'S. 64', context: 'Tipps zur Überwindung von lähmender Prüfungsangst' },
      { source: 'Hörtexte', lesson: 5, module: 'Modul 4', pageOrTrack: 'Track 1.36', context: 'Beratungsstelle für Schüler mit Prüfungsangst' }
    ],
    pronunciation: '[ˈpʁyːfʊŋsˌʔaŋst]',
    article: 'die',
    plural: 'die Prüfungsängste',
    genderPersian: 'مونث (die)',
    example: 'Gegen starke Prüfungsangst helfen Atemübungen und gute Vorbereitung.',
    exampleTranslation: 'در برابر استرس شدید امتحان، تمرینات تنفسی و آمادگی خوب کارساز هستند.',
    level: 'B1+',
    tags: ['استرس', 'امتحان']
  },
  {
    id: 'k5-n6',
    german: 'das Zeugnis',
    persian: 'کارنامه، مدرک تحصیلی یا گواهی علمی',
    category: 'Nomen',
    lesson: 5,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 4', pageOrTrack: 'S. 65', context: 'Gute Noten im Schulzeugnis vorweisen' }
    ],
    pronunciation: '[ˈtsɔɪ̯knɪs]',
    article: 'das',
    plural: 'die Zeugnisse',
    genderPersian: 'خنثی (das)',
    example: 'Mit dem hervorragenden Zeugnis bewarb er sich um einen Studienplatz.',
    exampleTranslation: 'با آن کارنامه فوق‌العاده، او برای صندلی دانشگاه درخواست داد.',
    level: 'B1+',
    tags: ['مدرک', 'تحصیل']
  },
  {
    id: 'k5-n7',
    german: 'die Qualifikation',
    persian: 'شایستگی، شایستگی تخصص شغلی و مدرک کسب‌شده',
    category: 'Nomen',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 1', pageOrTrack: 'S. 58', context: 'Zusätzliche Qualifikationen im Lebenslauf angeben' }
    ],
    pronunciation: '[kvaliﬁkaˈt͡si̯oːn]',
    article: 'die',
    plural: 'die Qualifikationen',
    genderPersian: 'مونث (die)',
    example: 'Zusatzqualifikationen wie Sprachzertifikate erhöhen die Chancen auf dem Arbeitsmarkt.',
    exampleTranslation: 'شایستگی‌های تکمیلی مانند مدرک زبان، شانس حضور در بازار کار را افزایش می‌دهند.',
    level: 'B1+',
    tags: ['رزومه', 'مهارت']
  },
  {
    id: 'k5-n8',
    german: 'der Notendurchschnitt',
    persian: 'معدل و میانگین نمرات تحصیلی',
    category: 'Nomen',
    lesson: 5,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 4', pageOrTrack: 'S. 64', context: 'Einen Notendurchschnitt von 1,5 im Abitur erreichen' }
    ],
    pronunciation: '[ˈnoːtn̩ˌdʊʁçʃnɪt]',
    article: 'der',
    plural: 'die Notendurchschnitte',
    genderPersian: 'مذکر (der)',
    example: 'Für das Medizinstudium benötigt man einen exzellenten Notendurchschnitt im Abitur.',
    exampleTranslation: 'برای تحصیل در رشته پزشکی، فرد نیازمند یک معدل دیپلم عالی است.',
    level: 'B1+',
    tags: ['نمره', 'تحصیل']
  },
  {
    id: 'k5-n9',
    german: 'die Allgemeinbildung',
    persian: 'اطلاعات عمومی و دانش پایه فرهنگ و جامعه',
    category: 'Nomen',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 1', pageOrTrack: 'S. 59', context: 'Eine breite Allgemeinbildung ist der Schlüssel zum Erfolg.' }
    ],
    pronunciation: '[ˈalɡəmaɪ̯nˌbɪldʊŋ]',
    article: 'die',
    plural: 'die Allgemeinbildung (بدون جمع)',
    genderPersian: 'مونث (die)',
    example: 'Wer regelmäßig Nachrichten liest und Bücher liest, erweitert seine Allgemeinbildung.',
    exampleTranslation: 'کسی که مرتب اخبار و کتاب می‌خواند، اطلاعات عمومی خود را گسترش می‌دهد.',
    level: 'B1+',
    tags: ['اطلاعات عمومی', 'فرهنگ']
  },
  {
    id: 'k5-n10',
    german: 'der Lerntyp',
    persian: 'تیپ و سبک یادگیری (دیداری، شنیداری، لمسی یا تحلیلی)',
    category: 'Nomen',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 3', pageOrTrack: 'S. 62', context: 'Den eigenen Lerntyp analysieren und nutzen' }
    ],
    pronunciation: '[ˈlɛʁnˌtyːp]',
    article: 'der',
    plural: 'die Lerntypen',
    genderPersian: 'مذکر (der)',
    example: 'Visuelle Lerntypen lernen am besten durch Diagramme, Farben und Grafiken.',
    exampleTranslation: 'تیپ‌های یادگیری دیداری از طریق نمودارها، رنگ‌ها و گرافیک‌ها به بهترین شکل می‌آموزند.',
    level: 'B1+',
    tags: ['سبک یادگیری', 'آموزش']
  },

  // --- Adjektive & Adverbien (صفات همراه حالات مقایسه‌ای و متضاد) ---
  {
    id: 'k5-adj1',
    german: 'hochbegabt',
    persian: 'تیزهوش، دارای نبوغ و استعداد و هوش فوق‌العاده',
    category: 'Adjektive',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 2', pageOrTrack: 'S. 60', context: 'Hochbegabte Kinder individuell im Unterricht fördern' },
      { source: 'Hörtexte', lesson: 5, module: 'DVD Kapitel 5', pageOrTrack: 'DVD (S. 201)', context: 'Porträt eines hochbegabten Mathematikers' }
    ],
    pronunciation: '[ˈhoːxbəˌɡaːpt]',
    comparative: 'hochbegabter',
    superlative: 'am hochbegabtesten',
    opposite: 'durchschnittlich / leistungsschwach',
    example: 'Hochbegabte Kinder langweilen sich im normalen Schulunterricht oft rasch.',
    exampleTranslation: 'کودکان تیزهوش در کلاس درس معمولی مدرسه اغلب به سرعت کلافه می‌شوند.',
    level: 'B1+',
    tags: ['هوش', 'استعداد']
  },
  {
    id: 'k5-adj2',
    german: 'anspruchsvoll',
    persian: 'پرچالش، نیازمند دقت و سطح بالا، سخت و استاندارد بالا',
    category: 'Adjektive',
    lesson: 5,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 1', pageOrTrack: 'S. 58', context: 'Ein anspruchsvoller Weiterbildungskurs für Führungskräfte' }
    ],
    pronunciation: '[ˈanʃpʁʊksˌfɔl]',
    comparative: 'anspruchsvoller',
    superlative: 'am anspruchsvollsten',
    opposite: 'anspruchslos / einfach',
    example: 'Das Studium an der Elite-Universität ist extrem anspruchsvoll und zeitintensiv.',
    exampleTranslation: 'تحصیل در دانشگاه ممتاز فوق‌العاده پرچالش و نیازمند وقت فراوان است.',
    level: 'B1+',
    tags: ['چالش', 'کیفیت']
  },
  {
    id: 'k5-adj3',
    german: 'praxisnah',
    persian: 'کاربردی، ملموس و نزدیک به واقعیت عملی (نه فقط تئوری)',
    category: 'Adjektive',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 1', pageOrTrack: 'S. 59', context: 'Praxisnaher Unterricht bereitet gut auf den Beruf vor.' }
    ],
    pronunciation: '[ˈpʁaksɪsˌnaː]',
    comparative: 'praxisnäher',
    superlative: 'am praxisnächsten',
    opposite: 'theoretisch / praxisfern',
    example: 'Die Fachhochschule bietet eine sehr praxisnahe Ausbildung mit vielen Projekten.',
    exampleTranslation: 'دانشگاه کاربردی آموزشي بسیار ملموس و عملی همراه با پروژه‌های متعدد ارائه می‌دهد.',
    level: 'B1+',
    tags: ['عملکرد', 'آموزش']
  },
  {
    id: 'k5-adj4',
    german: 'einprägsam',
    persian: 'به‌یادماندنی، روشن و به‌راحتی قابل به خاطر سپردن',
    category: 'Adjektive',
    lesson: 5,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 3', pageOrTrack: 'S. 62', context: 'Einprägsame Beispiele erleichtern das Lernen.' }
    ],
    pronunciation: '[ˈaɪ̯nˌpʁɛːksaːm]',
    comparative: 'einprägsamer',
    superlative: 'am einprägsamsten',
    opposite: 'kompliziert / unübersichtlich',
    example: 'Der Lehrer benutzte eine sehr einprägsame Formel, die allen im Gedächtnis blieb.',
    exampleTranslation: 'معلم از یک فرمول بسیار به‌یادماندنی استفاده کرد که در یاد همه ماند.',
    level: 'B1+',
    tags: ['یادگیری', 'وضوح']
  },
  {
    id: 'k5-adj5',
    german: 'zielstrebig',
    persian: 'مصمم، دارای هدف مشخص و بااراده برای رسیدن به موفقیت',
    category: 'Adjektive',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 5, module: 'Modul 1', pageOrTrack: 'Track 1.32', context: 'Zielstrebige Studenten erreichen ihre Karriereziele schneller.' }
    ],
    pronunciation: '[ˈtsiːlˌʃtʁeːbɪç]',
    comparative: 'zielstrerebiger',
    superlative: 'am zielstrebigsten',
    opposite: 'planlos / unentschlossen',
    example: 'Sie verfolgt zielstrebig ihren Plan, in vier Jahren ihren Doktorabschluss zu machen.',
    exampleTranslation: 'او با عزم راسخ هدفش را برای گرفتن مدرک دکترا در چهار سال دنبال می‌کند.',
    level: 'B1+',
    tags: ['اراده', 'موفقیت']
  },

  // --- Redewendungen & Ausdrücke (اصطلاحات کاربردی) ---
  {
    id: 'k5-red1',
    german: 'man lernt nie aus',
    persian: 'انسان هیچ‌وقت از آموختن بی‌نیاز نمی‌شود (ز گهواره تا گور دانش بجوی)',
    category: 'Redewendungen',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 1', pageOrTrack: 'S. 58', context: 'Lebenslanges Lernen im Alter: Man lernt eben nie aus.' }
    ],
    pronunciation: '[man lɛʁnt niː ˈaʊ̯s]',
    explanation: 'تأکید بر اهمیت یادگیری مستمر و مداوم در تمام مراحل زندگی انسان.',
    literalMeaning: 'آدم هرگز درسش تمام نمی‌شود',
    example: 'Selbst der erfahrene Professor gab zu: Bei dieser neuen Entdeckung lernt man eben nie aus.',
    exampleTranslation: 'حتی استاد باسابقه هم اعتراف کرد: با این کشف جدید، آدم واقعاً هیچ‌وقت از یادگیری بی‌نیاز نمی‌شود.',
    level: 'B1+',
    tags: ['اصطلاح', 'دانش']
  },
  {
    id: 'k5-red2',
    german: 'auf dem Schlauch stehen',
    persian: 'چیزی را متوجه نشدن، گیج و هنگ شدن موقت در فهم مطلب',
    category: 'Redewendungen',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 5, module: 'Modul 3', pageOrTrack: 'Track 1.35', context: 'Entschuldigung, ich stehe gerade völlig auf dem Schlauch.' }
    ],
    pronunciation: '[ʔaʊ̯f deːm ʃlaʊ̯x ˈʃteːən]',
    explanation: 'سردرگمی و عدم درک لحظه‌ای یک موضوع ساده گرامری یا ریاضی.',
    literalMeaning: 'روی شیلنگ ایستادن',
    example: 'Erklär mir das Matheproblem bitte nochmal, ich stand eben völlig auf dem Schlauch.',
    exampleTranslation: 'لطفاً مسئله ریاضی را دوباره برایم توضیح بده، همین الان کاملاً گیج و هنگ شده بودم.',
    level: 'B1+',
    tags: ['اصطلاح', 'فهم']
  },
  {
    id: 'k5-red3',
    german: 'die Schulbank drücken',
    persian: 'روی نیمکت مدرسه نشستن، تحصیل کردن و درس خواندن',
    category: 'Redewendungen',
    lesson: 5,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 1', pageOrTrack: 'S. 58', context: 'Mit dreißig Jahren noch einmal die Schulbank drücken' }
    ],
    pronunciation: '[diː ˈʃuːlbaŋk ˈdʁʏkn̩]',
    explanation: 'بازگشت به تحصیل یا حضور در کلاس درس در سنین بزرگسالی.',
    literalMeaning: 'نیمکت مدرسه را فشار دادن',
    example: 'Nach fünf Jahren im Beruf entschied er sich, nochmal die Schulbank zu drücken und zu studieren.',
    exampleTranslation: 'پس از پنج سال کار، او تصمیم گرفت دوباره روی نیمکت درس بنشیند و در دانشگاه تحصیل کند.',
    level: 'B1+',
    tags: ['اصطلاح', 'تحصیل']
  },
  {
    id: 'k5-red4',
    german: 'etwas wie seine Westentasche kennen',
    persian: 'مثل کف دست چیزی یا جایی را شناختن و تسلط کامل داشتن',
    category: 'Redewendungen',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 5, module: 'Modul 3', pageOrTrack: 'Track 1.35', context: 'Der Experte kennt das Fachgebiet wie seine Westentasche.' }
    ],
    pronunciation: '[ˈɛtvas viː ˈzaɪ̯nə ˈvɛstn̩taʃə ˈkɛnən]',
    explanation: 'آگاهی و تسلط بی‌چون‌وچرا نسبت به یک حوزه علمی یا نقشه جغرافیایی.',
    literalMeaning: 'چیزی را مثل جیب جلیقه خود شناختن',
    example: 'Frage ihn ruhig zur Grammatik: Er kennt die deutschen Regeln wie seine Westentasche.',
    exampleTranslation: 'راحت درباره گرامر از او بپرس: او قواعد آلمانی را مثل کف دستش می‌شناسد.',
    level: 'B1+',
    tags: ['اصطلاح', 'تسلط']
  },
  {
    id: 'k5-red5',
    german: 'etwas auswendig lernen',
    persian: 'چیزی را کلمه‌به‌کلمه حفظ کردن',
    category: 'Redewendungen',
    lesson: 5,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 3', pageOrTrack: 'S. 62', context: 'Gedichte oder Formeln auswendig lernen' }
    ],
    pronunciation: '[ˈɛtvas ˈaʊ̯svɛndɪç ˈlɛʁnən]',
    explanation: 'حفظ کردن مطالب بدون نگاه کردن به متن.',
    literalMeaning: 'چیزی را از بر یاد گرفتن',
    example: 'Für den Theaterauftritt musste jeder Schauspieler seinen kompletten Text auswendig lernen.',
    exampleTranslation: 'برای اجرای تئاتر، هر بازیگری باید کل متن خود را حفظ می‌کرد.',
    level: 'B1+',
    tags: ['اصطلاح', 'حفظ']
  },
  {
    id: 'k5-red6',
    german: 'jemandem ein Licht aufgehen',
    persian: 'موضوعی ناگهان برای کسی روشن و شفاف شدن (یافتم! یافتم!)',
    category: 'Redewendungen',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 5, module: 'Modul 3', pageOrTrack: 'Track 1.35', context: 'Nach der Erklärung ging ihm endlich ein Licht auf.' }
    ],
    pronunciation: '[ˈjeːmandn̩ aɪ̯n lɪçt ˈaʊ̯fˌɡeːən]',
    explanation: 'فهمیدن ناگهانی یک مسئله پیچیده پس از توضیحات ساده.',
    literalMeaning: 'چراغی برای کسی روشن شدن',
    example: 'Als der Lehrer das Beispiel an der Tafel zeichnete, ging allen Schülern ein Licht auf.',
    exampleTranslation: 'وقتی معلم مثال را روی تخته کشید، ناگهان موضوع برای همه دانش‌آموزان روشن شد.',
    level: 'B1+',
    tags: ['اصطلاح', 'فهم']
  },

  // =========================================================================
  // KAPITEL 6: Berufsbilder (مشاغل، بازار کار، رزومه و آینده شغلی)
  // =========================================================================
  // --- Verben (افعال با تمام زمان‌های Präsens / Präteritum / Perfekt و حروف اضافه) ---
  {
    id: 'k6-v1',
    german: 'sich bewerben um',
    persian: 'درخواست دادن برای، اپلای کردن برای (موقعیت شغلی یا بورس تحصیلی)',
    category: 'Verben',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 1', pageOrTrack: 'S. 70', context: 'sich um eine ausgeschriebene Stelle im Marketing bewerben' },
      { source: 'Hörtexte', lesson: 6, module: 'Modul 1', pageOrTrack: 'Track 2.1', context: 'Wie bewirbt man sich erfolgreich auf dem Arbeitsmarkt?' }
    ],
    pronunciation: '[zɪç bəˈvɛʁbn̩ ʊm]',
    infinitive: 'sich bewerben um (+ Akk.)',
    present: 'bewirbt sich',
    preterite: 'bewarb sich',
    perfect: 'hat sich beworben',
    auxiliary: 'haben',
    reflexive: true,
    prepositionCase: 'um + Akkusativ',
    example: 'Er hat sich erfolgreich um die Stelle als leitender Ingenieur bei Siemens beworben.',
    exampleTranslation: 'او با موفقیت برای موقعیت شغلی ارشد مهندسی در شرکت زیمنس درخواست داد.',
    level: 'B1+',
    tags: ['استخدام', 'شغل']
  },
  {
    id: 'k6-v2',
    german: 'einstellen',
    persian: 'استخدام کردن، به خدمت گرفتن نیرو در شرکت',
    category: 'Verben',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 2', pageOrTrack: 'S. 72', context: 'neue qualifizierte Mitarbeiter im Betrieb einstellen' }
    ],
    pronunciation: '[ˈaɪ̯nˌʃtɛlən]',
    infinitive: 'einstellen (+ Akk.)',
    present: 'stellt ein',
    preterite: 'stellte ein',
    perfect: 'hat eingestellt',
    auxiliary: 'haben',
    separable: true,
    example: 'Das IT-Unternehmen stellt trotz Wirtschaftskrise fünf neue Softwareentwickler ein.',
    exampleTranslation: 'شرکت فناوری اطلاعات با وجود بحران اقتصادی پنج توسعه‌دهنده نرم‌افزار جدید استخدام می‌کند.',
    level: 'B1+',
    tags: ['استخدام', 'شرکت']
  },
  {
    id: 'k6-v3',
    german: 'verhandeln über',
    persian: 'مذاکره کردن بر سر (حقوق، شرایط کاری یا قرارداد)',
    category: 'Verben',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 1', pageOrTrack: 'S. 71', context: 'im Vorstellungsgespräch über das Einstiegsgehalt verhandeln' }
    ],
    pronunciation: '[fɛɐ̯ˈhandl̩n]',
    infinitive: 'verhandeln über (+ Akk.)',
    present: 'verhandelt',
    preterite: 'verhandelte',
    perfect: 'hat verhandelt',
    auxiliary: 'haben',
    prepositionCase: 'über + Akkusativ',
    example: 'Sie verhandelte im Vorstellungsgespräch geschickt über flexible Arbeitszeiten und Zusatzleistungen.',
    exampleTranslation: 'او در مصاحبه شغلی با مهارت درباره ساعات کاری شناور و مزایای تکمیلی مذاکره کرد.',
    level: 'B1+',
    tags: ['مذاکره', 'حقوق']
  },
  {
    id: 'k6-v4',
    german: 'ausüben',
    persian: 'مشغول بودن به، انجام دادن و اشتغال داشتن به (یک حرفه یا شغل)',
    category: 'Verben',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 2', pageOrTrack: 'S. 72', context: 'einen anstrengenden Handwerksberuf mit Leidenschaft ausüben' }
    ],
    pronunciation: '[ˈaʊ̯sˌʔyːbn̩]',
    infinitive: 'ausüben (+ Akk. z.B. einen Beruf)',
    present: 'übt aus',
    preterite: 'übte aus',
    perfect: 'hat ausgeübt',
    auxiliary: 'haben',
    separable: true,
    example: 'Er übt seinen Beruf als Tischler nun schon seit über zwanzig Jahren mit großer Freude aus.',
    exampleTranslation: 'او شغل خود به عنوان نجّار را اکنون بیش از بیست سال است که با شادمانی فراوان انجام می‌دهد.',
    level: 'B1+',
    tags: ['شغل', 'اشتغال']
  },
  {
    id: 'k6-v5',
    german: 'entlassen',
    persian: 'اخراج کردن، تعدیل نیرو نمودن از شرکت',
    category: 'Verben',
    lesson: 6,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 2', pageOrTrack: 'S. 73', context: 'Mitarbeiter wegen der schlechten Wirtschaftslage entlassen' }
    ],
    pronunciation: '[ɛntˈlasn̩]',
    infinitive: 'entlassen (+ Akk.)',
    present: 'entlässt',
    preterite: 'entließ',
    perfect: 'hat entlassen',
    auxiliary: 'haben',
    example: 'Wegen Umsatzrückgangs musste die Firma leider zwanzig Angestellte entlassen.',
    exampleTranslation: 'به دلیل کاهش فروش، شرکت متأسفانه مجبور شد بیست کارمند را تعدیل نیرو کند.',
    level: 'B1+',
    tags: ['اخراج', 'بازار کار']
  },
  {
    id: 'k6-v6',
    german: 'kündigen',
    persian: 'استعفا دادن / فسخ نمودن قرارداد کاری',
    category: 'Verben',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 2', pageOrTrack: 'S. 73', context: 'seinen alten Job kündigen und etwas Neues wagen' },
      { source: 'Hörtexte', lesson: 6, module: 'Modul 2', pageOrTrack: 'Track 2.5', context: 'Warum hat die Mitarbeiterin ihren Vertrag gekündigt?' }
    ],
    pronunciation: '[ˈkʏndɪɡn̩]',
    infinitive: 'kündigen (+ Dat. / + Akk.)',
    present: 'kündigt',
    preterite: 'kündigte',
    perfect: 'hat gekündigt',
    auxiliary: 'haben',
    example: 'Weil ihr das Arbeitsklima nicht gefiel, hat sie nach wenigen Monaten selbst gekündigt.',
    exampleTranslation: 'چون محیط کاری را دوست نداشت، خودش پس از چند ماه استعفا داد.',
    level: 'B1+',
    tags: ['استعفا', 'قرارداد']
  },
  {
    id: 'k6-v7',
    german: 'überzeugen von',
    persian: 'متقاعد و قانع ساختن بر سر (توانمندی، طرح یا رزومه)',
    category: 'Verben',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 1', pageOrTrack: 'S. 71', context: 'den Personalleiter im Interview von seinen Qualifikationen überzeugen' }
    ],
    pronunciation: '[yːbɐˈtsɔɪ̯ɡn̩]',
    infinitive: 'überzeugen von (+ Dat.)',
    present: 'überzeugt',
    preterite: 'überzeugte',
    perfect: 'hat überzeugt',
    auxiliary: 'haben',
    prepositionCase: 'von + Dativ',
    example: 'Der Bewerber konnte den Chef von seinen fachlichen Stärken und Erfahrungen überzeugen.',
    exampleTranslation: 'متقاضی توانست مدیر را از توانمندی‌های تخصصی و تجارب خود متقاعد سازد.',
    level: 'B1+',
    tags: ['مصاحبه', 'اقناع']
  },
  {
    id: 'k6-v8',
    german: 'einreichen',
    persian: 'تحویل دادن و ارسال رسمی (مدارک، رزومه یا درخواست)',
    category: 'Verben',
    lesson: 6,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 1', pageOrTrack: 'S. 70', context: 'die vollen Bewerbungsunterlagen fristgerecht einreichen' }
    ],
    pronunciation: '[ˈaɪ̯nˌʁaɪ̯çn̩]',
    infinitive: 'einreichen (+ Akk.)',
    present: 'reicht ein',
    preterite: 'reichte ein',
    perfect: 'hat eingereicht',
    auxiliary: 'haben',
    separable: true,
    example: 'Reichen Sie bitte Ihr Zeugnis und das Anschreiben vor Ende des Monats ein.',
    exampleTranslation: 'لطفاً کارنامه و انگیزه‌نامه خود را پیش از پایان ماه تحویل دهید.',
    level: 'B1+',
    tags: ['مدارک', 'استخدام']
  },
  {
    id: 'k6-v9',
    german: 'vereinbaren mit',
    persian: 'هماهنگ و هماهنگ‌سازی کردن (توازن بین کار و زندگی / قرار ملاقات)',
    category: 'Verben',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 3', pageOrTrack: 'S. 74', context: 'Familie und Beruf dank Homeoffice besser vereinbaren' }
    ],
    pronunciation: '[fɛɐ̯ˈʔaɪ̯nbaːʁən]',
    infinitive: 'vereinbaren mit (+ Dat.)',
    present: 'vereinbart',
    preterite: 'vereinbarte',
    perfect: 'hat vereinbart',
    auxiliary: 'haben',
    prepositionCase: 'mit + Dativ',
    example: 'Teilzeitarbeit ermöglicht es Eltern, Familie und Beruf optimal miteinander zu vereinbaren.',
    exampleTranslation: 'کار پاره‌وقت به والدین این امکان را می‌دهد تا توازن عالی میان خانواده و شغل ایجاد کنند.',
    level: 'B1+',
    tags: ['تعادل', 'خانواده']
  },
  {
    id: 'k6-v10',
    german: 'leiten',
    persian: 'مدیریت و سرپرستی کردن (یک دپارتمان، پروژه یا تیم)',
    category: 'Verben',
    lesson: 6,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 2', pageOrTrack: 'S. 72', context: 'ein internationales Team von Experten leiten' }
    ],
    pronunciation: '[ˈlaɪ̯tn̩]',
    infinitive: 'leiten (+ Akk.)',
    present: 'leitet',
    preterite: 'leitete',
    perfect: 'hat geleitet',
    auxiliary: 'haben',
    example: 'Seit drei Jahren leitet sie die Forschungsabteilung eines Pharmaunternehmens.',
    exampleTranslation: 'از سه سال پیش او دپارتمان تحقیقاتی یک شرکت داروسازی را مدیریت می‌کند.',
    level: 'B1+',
    tags: ['مدیریت', 'رهبری']
  },
  {
    id: 'k6-v11',
    german: 'anpacken',
    persian: 'دست به کار شدن، همت کردن و کار را با انرژی تحویل گرفتن',
    category: 'Verben',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 1', pageOrTrack: 'S. 70', context: 'Mitarbeiter gesucht, die kräftig anpacken können' }
    ],
    pronunciation: '[ˈanˌpakn̩]',
    infinitive: 'anpacken',
    present: 'packt an',
    preterite: 'packte an',
    perfect: 'hat angepackt',
    auxiliary: 'haben',
    separable: true,
    example: 'Wir suchen engagierte Kollegen, die im Betrieb praktisch anpacken wollen.',
    exampleTranslation: 'ما جویای همکاران باانگیزه‌ای هستیم که بخواهند در شرکت با انرژی دست به کار شوند.',
    level: 'B1+',
    tags: ['پشتکار', 'عمل']
  },

  // --- Nomen (اسامی همراه آرتیکل، جمع، تلفظ و جنسیت) ---
  {
    id: 'k6-n1',
    german: 'das Vorstellungsgespräch',
    persian: 'مصاحبه شغلی و استخدامی حضوری یا آنلاین',
    category: 'Nomen',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 1', pageOrTrack: 'S. 71', context: 'Gute Vorbereitung auf das Vorstellungsgespräch' },
      { source: 'Hörtexte', lesson: 6, module: 'Modul 1', pageOrTrack: 'Track 2.2', context: 'Simulation eines Vorstellungsgesprächs beim Personalchef' }
    ],
    pronunciation: '[ˈfoːɐ̯ˌʃtɛlʊŋsɡəˈʃpʁɛːç]',
    article: 'das',
    plural: 'die Vorstellungsgespräche',
    genderPersian: 'خنثی (das)',
    example: 'Beim Vorstellungsgespräch ist pünktliches Erscheinen und angemessene Kleidung entscheidend.',
    exampleTranslation: 'در مصاحبه شغلی، حضور به‌موقع و لباس مناسب تعیین‌کننده است.',
    level: 'B1+',
    tags: ['مصاحبه', 'استخدام']
  },
  {
    id: 'k6-n2',
    german: 'die Stellenausschreibung',
    persian: 'آگهی فراخوان استخدام و اعلام نیاز شغلی',
    category: 'Nomen',
    lesson: 6,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 1', pageOrTrack: 'S. 70', context: 'Stellenausschreibungen auf Online-Jobbörsen lesen' }
    ],
    pronunciation: '[ˈʃtɛlənʔaʊ̯sˌʃʁaɪ̯bʊŋ]',
    article: 'die',
    plural: 'die Stellenausschreibungen',
    genderPersian: 'مونث (die)',
    example: 'In der Stellenausschreibung werden alle geforderten Qualifikationen aufgelistet.',
    exampleTranslation: 'در آگهی استخدام، تمامی شایستگی‌های مورد نیاز فهرست شده‌اند.',
    level: 'B1+',
    tags: ['آگهی', 'شغل']
  },
  {
    id: 'k6-n3',
    german: 'der Lebenslauf',
    persian: 'رزومه، سوابق تحصیلی و کاری (CV)',
    category: 'Nomen',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 1', pageOrTrack: 'S. 70', context: 'Einen tabellarischen Lebenslauf verfassen' }
    ],
    pronunciation: '[ˈleːbn̩sˌlaʊ̯f]',
    article: 'der',
    plural: 'die Lebensläufe',
    genderPersian: 'مذکر (der)',
    example: 'Ein übersichtlicher und lückenloser Lebenslauf hinterlässt einen guten ersten Eindruck.',
    exampleTranslation: 'یک رزومه منظم و بدون فاصله زمانی ناخواسته، اولین انطباق مثبت را ایجاد می‌کند.',
    level: 'B1+',
    tags: ['رزومه', 'مدارک']
  },
  {
    id: 'k6-n4',
    german: 'das Anschreiben',
    persian: 'انگیزه‌نامه و نامه درخواست شغل (Cover Letter)',
    category: 'Nomen',
    lesson: 6,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 1', pageOrTrack: 'S. 70', context: 'Das persönliche Anschreiben individuell formulieren' }
    ],
    pronunciation: '[ˈanˌʃʁaɪ̯bn̩]',
    article: 'das',
    plural: 'die Anschreiben',
    genderPersian: 'خنثی (das)',
    example: 'Im Anschreiben erklärt der Bewerber, warum er genau zu dieser Firma passt.',
    exampleTranslation: 'در انگیزه‌نامه، متقاضی توضیح می‌دهد که چرا دقیقاً مناسب این شرکت است.',
    level: 'B1+',
    tags: ['انگیزه‌نامه', 'رزومه']
  },
  {
    id: 'k6-n5',
    german: 'das Einstiegsgehalt',
    persian: 'حقوق و دستمزد پایه در بدو ورود به شغل',
    category: 'Nomen',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 1', pageOrTrack: 'S. 71', context: 'Das durchschnittliche Einstiegsgehalt für Absolventen' }
    ],
    pronunciation: '[ˈaɪ̯nʃtiːksɡəˌhalt]',
    article: 'das',
    plural: 'die Einstiegsgehälter',
    genderPersian: 'خنثی (das)',
    example: 'Das Einstiegsgehalt hängt stark von der Branche und dem akademischen Abschluss ab.',
    exampleTranslation: 'حقوق پایه اولیه وابستگی شدیدی به صنعت و مدرک آکادمیک فرد دارد.',
    level: 'B1+',
    tags: ['حقوق', 'مالی']
  },
  {
    id: 'k6-n6',
    german: 'das Arbeitsklima',
    persian: 'جوّ و فضای حاکم بر محیط کار',
    category: 'Nomen',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 2', pageOrTrack: 'S. 73', context: 'Ein gesundes Arbeitsklima steigert die Produktivität.' },
      { source: 'Hörtexte', lesson: 6, module: 'Modul 2', pageOrTrack: 'Track 2.6', context: 'Mitarbeiter loben das gute Arbeitsklima im Team.' }
    ],
    pronunciation: '[ˈaʁbaɪ̯tsˌkliːma]',
    article: 'das',
    plural: 'das Arbeitsklima (بدون جمع)',
    genderPersian: 'خنثی (das)',
    example: 'Ein freundliches Arbeitsklima ist für viele Arbeitnehmer wichtiger als ein hohes Gehalt.',
    exampleTranslation: 'یک جوّ کاری صمیمانه برای بسیاری از کارمندان مهم‌تر از حقوق بالا است.',
    level: 'B1+',
    tags: ['محیط کار', 'رضایت']
  },
  {
    id: 'k6-n7',
    german: 'die Gleitzeit',
    persian: 'ساعت کاری شناور (شناور بودن زمان شروع و پایان کار)',
    category: 'Nomen',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 3', pageOrTrack: 'S. 74', context: 'Vorteile von Gleitzeit gegenüber starrer Schichtarbeit' }
    ],
    pronunciation: '[ˈɡlaɪ̯tˌt͡saɪ̯t]',
    article: 'die',
    plural: 'die Gleitzeit (بدون جمع)',
    genderPersian: 'مونث (die)',
    example: 'Dank Gleitzeit kann er seine Arbeitsstunden flexibel an sein Familienleben anpassen.',
    exampleTranslation: 'به لطف ساعت کاری شناور، او می‌تواند ساعات کارش را به صورت شناور با زندگی خانوادگی تنظیم کند.',
    level: 'B1+',
    tags: ['ساعت کار', 'انعطاف']
  },
  {
    id: 'k6-n8',
    german: 'die Überstunde',
    persian: 'اضافه‌کاری، ساعت کاری مازاد بر قرارداد',
    category: 'Nomen',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 3', pageOrTrack: 'S. 74', context: 'Überstunden durch Freizeit ausgleichen' }
    ],
    pronunciation: '[ˈyːbɐˌʃtʊndə]',
    article: 'die',
    plural: 'die Überstunden',
    genderPersian: 'مونث (die)',
    example: 'Im letzten Monat hat er wegen des wichtigen Projekts dreißig Überstunden gemacht.',
    exampleTranslation: 'در ماه گذشته او به دلیل پروژه مهم، سی ساعت اضافه‌کاری انجام داد.',
    level: 'B1+',
    tags: ['کار', 'اضافه‌کاری']
  },
  {
    id: 'k6-n9',
    german: 'die Aufstiegschance',
    persian: 'فرصت پیشرفت و ارتقای شغلی در سازمان',
    category: 'Nomen',
    lesson: 6,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 2', pageOrTrack: 'S. 73', context: 'Gute Aufstiegschancen in einem internationalen Konzern' }
    ],
    pronunciation: '[ˈaʊ̯fʃtiːksˌʃɑ̃ːsə]',
    article: 'die',
    plural: 'die Aufstiegschancen',
    genderPersian: 'مونث (die)',
    example: 'Das Großunternehmen bietet jungen Talenten hervorragende Aufstiegschancen.',
    exampleTranslation: 'شرکت بزرگ به استعدادهای جوان فرصت‌های پیشرفت شغلی فوق‌العاده‌ای ارائه می‌دهد.',
    level: 'B1+',
    tags: ['پیشرفت', 'کاریره']
  },
  {
    id: 'k6-n10',
    german: 'die Walz',
    persian: 'سنت قدیمی سفر و کار سه‌ساله کارآموزان و معماران صنعت در آلمان (Wanderschaft)',
    category: 'Nomen',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'DVD Kapitel 6', pageOrTrack: 'S. 76 (DVD)', context: 'Handwerksgesellen auf der traditionellen Walz' },
      { source: 'Hörtexte', lesson: 6, module: 'DVD Kapitel 6', pageOrTrack: 'Track 2.10', context: 'Erfahrungsberichte von Gesellen auf der Walz' }
    ],
    pronunciation: '[valts]',
    article: 'die',
    plural: 'die Walz (معمولاً مفرد)',
    genderPersian: 'مونث (die)',
    example: 'Auf der Walz reisen junge Handwerker drei Jahre und einen Tag durch die Welt, um Erfahrungen zu sammeln.',
    exampleTranslation: 'در سنت والز، حرفه‌آموزان جوان سه سال و یک روز در دنیا سفر و کار می‌کنند تا تجربه بیندوزند.',
    level: 'B1+',
    tags: ['سنت', 'صنعت']
  },

  // --- Adjektive & Adverbien (صفات همراه حالات مقایسه‌ای و متضاد) ---
  {
    id: 'k6-adj1',
    german: 'abwechslungsreich',
    persian: 'متنوع، دارای تغییر و بدون یکنواختی',
    category: 'Adjektive',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 2', pageOrTrack: 'S. 72', context: 'eine abwechslungsreiche Tätigkeit im Eventmanagement' }
    ],
    pronunciation: '[ˈapvɛkslʊŋsˌʁaɪ̯ç]',
    comparative: 'abwechslungsreicher',
    superlative: 'am abwechslungsreichsten',
    opposite: 'monoton / eintönig',
    example: 'Die Aufgaben im Journalismus sind überaus spannend und abwechslungsreich.',
    exampleTranslation: 'وظایف شغلی در روزنامه‌نگاری فوق‌العاده جذّاب و متنوع است.',
    level: 'B1+',
    tags: ['تنوع', 'رضایت']
  },
  {
    id: 'k6-adj2',
    german: 'verhandlungssicher',
    persian: 'مسلط در حد مذاکرات رسمی و تخصصی شغلی (زبان خارجی)',
    category: 'Adjektive',
    lesson: 6,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 1', pageOrTrack: 'S. 70', context: 'Verhandlungssichere Englischkenntnisse in Wort und Schrift' }
    ],
    pronunciation: '[fɛɐ̯ˈhandlʊŋsˌzɪçɐ]',
    comparative: 'verhandlungssicherer',
    superlative: 'am verhandlungssichersten',
    opposite: 'Grundkenntnisse',
    example: 'Für die internationale Vertriebsstelle werden verhandlungssichere Englischkenntnisse vorausgesetzt.',
    exampleTranslation: 'برای موقعیت فروش بین‌المللی، تسلط کامل زبان انگلیسی در حد مذاکره الزامی است.',
    level: 'B1+',
    tags: ['زبان', 'رزومه']
  },
  {
    id: 'k6-adj3',
    german: 'befristet',
    persian: 'قرارداد موقت و دارای تاریخ انقضا',
    category: 'Adjektive',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 2', pageOrTrack: 'S. 73', context: 'einen befristeten Arbeitsvertrag über zwei Jahre erhalten' }
    ],
    pronunciation: '[bəˈfʁɪstət]',
    comparative: '—',
    superlative: '—',
    opposite: 'unbefristet / unbefristeter Vertrag',
    example: 'Ihre Stelle an der Universität ist zunächst auf zwei Jahre befristet.',
    exampleTranslation: 'موقعیت شغلی او در دانشگاه در ابتدا به مدت دو سال موقت است.',
    level: 'B1+',
    tags: ['قرارداد', 'امنیت شغلی']
  },
  {
    id: 'k6-adj4',
    german: 'belastbar',
    persian: 'دارای مقاومت بالا در برابر استرس و فشار کاری',
    category: 'Adjektive',
    lesson: 6,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 1', pageOrTrack: 'S. 70', context: 'Wir suchen stressresistente und belastbare Mitarbeiter.' }
    ],
    pronunciation: '[bəˈlastbaːɐ̯]',
    comparative: 'belastbarer',
    superlative: 'am belastbarsten',
    opposite: 'stressempfindlich',
    example: 'In der Notaufnahme müssen Ärztinnen extrem belastbar und ruhig bleiben.',
    exampleTranslation: 'در بخش اورژانس، پزشکان زن باید فوق‌العاده مقاوم در برابر استرس و آرام بمانند.',
    level: 'B1+',
    tags: ['شخصیت', 'استرس']
  },
  {
    id: 'k6-adj5',
    german: 'festangestellt',
    persian: 'استخدام رسمی و دائم (دارای بیمه و قرارداد ثابت)',
    category: 'Adjektive',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 2', pageOrTrack: 'S. 72', context: 'als festangestellter Ingenieur arbeiten' }
    ],
    pronunciation: '[ˈfɛstʔanɡəˌʃtɛlt]',
    comparative: '—',
    superlative: '—',
    opposite: 'freiberuflich / freischaffend',
    example: 'Nach dem Praktikum wurde er von der Firma als festangestellter Entwickler übernommen.',
    exampleTranslation: 'پس از دوره کارآموزی، او توسط شرکت به عنوان توسعه‌دهنده رسمی استخدام شد.',
    level: 'B1+',
    tags: ['استخدام', 'امنیت']
  },

  // --- Redewendungen & Ausdrücke (اصطلاحات کاربردی) ---
  {
    id: 'k6-red1',
    german: 'die Ärmel hochkrempeln',
    persian: 'آستین‌ها را بالا زدن، با جدیت و پشتکار شروع به کار سخت کردن',
    category: 'Redewendungen',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 1', pageOrTrack: 'S. 70', context: 'Jetzt heißt es: Die Ärmel hochkrempeln und das Projekt retten!' }
    ],
    pronunciation: '[diː ˈɛʁml̩ ˈhoːxˌkʁɛmpl̩n]',
    explanation: 'آمادگی عملی برای کار فشرده و حل مشکلات بدون اتلاف وقت.',
    literalMeaning: 'آستین‌ها را بالا پیچیدن',
    example: 'Vor der wichtigen Deadline müssen wir alle die Ärmel hochkrempeln und zusammenhalten.',
    exampleTranslation: 'قبل از موعد مهم تحویل، همه ما باید آستین‌ها را بالا بزنیم و همکاری کنیم.',
    level: 'B1+',
    tags: ['اصطلاح', 'انگیزه']
  },
  {
    id: 'k6-red2',
    german: 'Karriere machen',
    persian: 'پیشرفت شغلی کردن، ارتقا یافتن و به درجات عالی رسیدن',
    category: 'Redewendungen',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 2', pageOrTrack: 'S. 72', context: 'In einem Großkonzern rasch Karriere machen' }
    ],
    pronunciation: '[kaˈʁiːʁə ˈmaxn̩]',
    explanation: 'رسیدن به پست‌های مدیریتی و موفقیت بالای مالی و شغلی.',
    literalMeaning: 'کاریر ساختن',
    example: 'Durch viel Fleiß und Fleiß konnte sie im Unternehmen schnell Karriere machen.',
    exampleTranslation: 'با تلاش زیاد و پشتکار، او توانست در شرکت سریعاً پیشرفت شغلی کند.',
    level: 'B1+',
    tags: ['اصطلاح', 'موفقیت']
  },
  {
    id: 'k6-red3',
    german: 'etwas unter einen Hut bringen',
    persian: 'چند مسئولیت گوناگون (مانند کار و خانواده) را همزمان هماهنگ ساختن',
    category: 'Redewendungen',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 3', pageOrTrack: 'S. 74', context: 'Beruf und Kinderbetreuung unter einen Hut bringen' }
    ],
    pronunciation: '[ˈɛtvas ˈʊntɐ ˈaɪ̯nən huːt ˈbʁɪŋən]',
    explanation: 'مدیریت و توازن همزمان دو یا چند تعهد سخت.',
    literalMeaning: 'چیزی را زیر یک کلاه آوردن',
    example: 'Es ist nicht immer leicht, Vollzeitarbeit und Familie unter einen Hut zu bringen.',
    exampleTranslation: 'همیشه آسان نیست که کار تمام‌وقت و خانواده را زیر یک سقف هماهنگ کرد.',
    level: 'B1+',
    tags: ['اصطلاح', 'توازن']
  },
  {
    id: 'k6-red4',
    german: 'Überstunden schieben / machen',
    persian: 'اضافه‌کاری فشرده انجام دادن',
    category: 'Redewendungen',
    lesson: 6,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 3', pageOrTrack: 'S. 74', context: 'In der Hauptsaison regelmäßig Überstunden schieben' }
    ],
    pronunciation: '[ˈyːbɐˌʃtʊndən ˈʃiːbn̩]',
    explanation: 'انجام ساعات کاری مداوم بیش از تعهد قرارداد.',
    literalMeaning: 'اضافه‌کاری هل دادن',
    example: 'Um das Projekt rechtzeitig fertigzustellen, mussten die Architekten Wochen lang Überstunden schieben.',
    exampleTranslation: 'برای تمام کردن پروژه به موقع، معمارهای شرکت مجبور بودند هفته‌ها اضافه‌کاری فشرده کنند.',
    level: 'B1+',
    tags: ['اصطلاح', 'کار']
  },
  {
    id: 'k6-red5',
    german: 'sich ins Zeug legen',
    persian: 'مایه گذاشتن، نهایت تلاش و انگیزه خود را به کار بستن',
    category: 'Redewendungen',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 6, module: 'Modul 1', pageOrTrack: 'Track 2.3', context: 'Wer die Stelle haben will, muss sich ins Zeug legen.' }
    ],
    pronunciation: '[zɪch ɪns t͡sɔɪ̯k ˈleːɡn̩]',
    explanation: 'تلاش ملموس و انرژی فراوان صرف کردن برای رسیدن به هدف.',
    literalMeaning: 'خود را در مهار قرار دادن',
    example: 'Wenn wir die Präsentation gewinnen wollen, müssen wir uns jetzt richtig ins Zeug legen.',
    exampleTranslation: 'اگر می‌خواهیم در این ارائه‌ برنده شویم، الان باید واقعاً مایه بگذاریم.',
    level: 'B1+',
    tags: ['اصطلاح', 'تلاش']
  },
  {
    id: 'k6-red6',
    german: 'auf eigenen Füßen stehen',
    persian: 'استقلال مالی و شغلی کامل داشتن',
    category: 'Redewendungen',
    lesson: 6,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 2', pageOrTrack: 'S. 72', context: 'Mit dem ersten Gehalt endlich auf eigenen Füßen stehen' }
    ],
    pronunciation: '[ʔaʊ̯f ˈʔaɪ̯ɡnən ˈfyːsn̩ ˈʃteːən]',
    explanation: 'عدم وابستگی به کمک مالی والدین یا دولت.',
    literalMeaning: 'روی پاهای خود ایستادن',
    example: 'Mit seinem neuen Job als Softwareentwickler kann er endlich finanziell auf eigenen Füßen stehen.',
    exampleTranslation: 'با شغل جدیدش به عنوان توسعه‌دهنده نرم‌افزار، او بالاخره می‌تواند از نظر مالی روی پاهای خود بایستد.',
    level: 'B1+',
    tags: ['اصطلاح', 'استقلال']
  },

  // =========================================================================
  // KAPITEL 7: Für immer und ewig (عشق، ازدواج، روابط خانوادگی و طلاق)
  // =========================================================================
  // --- Verben (افعال با تمام زمان‌های Präsens / Präteritum / Perfekt و حروف اضافه) ---
  {
    id: 'k7-v1',
    german: 'sich scheiden lassen',
    persian: 'طلاق گرفتن، به پیوند زناشویی پایان دادن',
    category: 'Verben',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 2', pageOrTrack: 'S. 84', context: 'Sich nach langer Ehe im Einvernehmen scheiden lassen' },
      { source: 'Hörtexte', lesson: 7, module: 'Modul 1', pageOrTrack: 'Track 2.14', context: 'Statistiken zeigen: Jedes dritte Ehepaar lässt sich scheiden.' }
    ],
    pronunciation: '[zɪç ˈʃaɪ̯dn̩ ˈlasn̩]',
    infinitive: 'sich scheiden lassen',
    present: 'lässt sich scheiden',
    preterite: 'ließ sich scheiden',
    perfect: 'hat sich scheiden lassen',
    auxiliary: 'haben',
    reflexive: true,
    example: 'Nach zehn Jahren Ehe entschieden sich die beiden, sich friedlich scheiden zu lassen.',
    exampleTranslation: 'پس از ده سال زندگی مشترک، آن دو تصمیم گرفتند مسالمت‌آمیز از هم طلاق بگیرند.',
    level: 'B1+',
    tags: ['خانواده', 'طلاق']
  },
  {
    id: 'k7-v2',
    german: 'streiten über',
    persian: 'مشاجره و بحث کردن درباره (مسائل مالی، تربیتی یا خانوادگی)',
    category: 'Verben',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 2', pageOrTrack: 'S. 84', context: 'oft über alltägliche Kleinigkeiten und Finanzen streiten' },
      { source: 'Hörtexte', lesson: 7, module: 'Modul 2', pageOrTrack: 'Track 2.15', context: 'Warum streiten Paare in Beziehungen?' }
    ],
    pronunciation: '[ˈʃtʁaɪ̯tn̩ ˈyːbɐ]',
    infinitive: 'streiten über (+ Akk.)',
    present: 'streitet',
    preterite: 'stritt',
    perfect: 'hat gestritten',
    auxiliary: 'haben',
    prepositionCase: 'über + Akkusativ',
    example: 'Viele Paare streiten in der Partnerschaft am häufigsten über Geld und Haushalt.',
    exampleTranslation: 'بسیاری از زوج‌ها در رابطه بیش از هر چیز بر سر پول و کارهای خانه مشاجره می‌کنند.',
    level: 'B1+',
    tags: ['اختلاف', 'رابطه']
  },
  {
    id: 'k7-v3',
    german: 'sich verlieben in',
    persian: 'عاشقِ چیزی یا کسی شدن',
    category: 'Verben',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 1', pageOrTrack: 'S. 82', context: 'sich auf den ersten Blick in jemanden verlieben' }
    ],
    pronunciation: '[zɪç fɛɐ̯ˈliːbn̩ ɪn]',
    infinitive: 'sich verlieben in (+ Akk.)',
    present: 'verliebt sich',
    preterite: 'verliebte sich',
    perfect: 'hat sich verliebt',
    auxiliary: 'haben',
    reflexive: true,
    prepositionCase: 'in + Akkusativ',
    example: 'Er verliebte sich während des Studiums auf den ersten Blick in seine spätere Ehefrau.',
    exampleTranslation: 'او در دوران تحصیل در اولین نگاه عاشق همسر آینده‌اش شد.',
    level: 'B1+',
    tags: ['عشق', 'احساس']
  },
  {
    id: 'k7-v4',
    german: 'sich trennen von',
    persian: 'جدا شدن از (همسر یا شریک زندگی)',
    category: 'Verben',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 2', pageOrTrack: 'S. 85', context: 'sich nach jahrelangem Streit vom Partner trennen' }
    ],
    pronunciation: '[zɪç ˈtʁɛnən fɔn]',
    infinitive: 'sich trennen von (+ Dat.)',
    present: 'trennt sich',
    preterite: 'trennte sich',
    perfect: 'hat sich getrennt',
    auxiliary: 'haben',
    reflexive: true,
    prepositionCase: 'von + Dativ',
    example: 'Nach langem Überlegen hat sie sich schweren Herzens von ihrem Freund getrennt.',
    exampleTranslation: 'پس از اندیشه فراوان، او با دلی سنگین از دوستش جدا شد.',
    level: 'B1+',
    tags: ['جدایی', 'رابطه']
  },
  {
    id: 'k7-v5',
    german: 'zusammenziehen mit',
    persian: 'با هم هم‌خانه شدن، زیر یک سقف رفتن با',
    category: 'Verben',
    lesson: 7,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 1', pageOrTrack: 'S. 82', context: 'nach zwei Jahren Beziehung mit dem Partner zusammenziehen' }
    ],
    pronunciation: '[tsuˈzamənˌt͡siːən]',
    infinitive: 'zusammenziehen mit (+ Dat.)',
    present: 'zieht zusammen',
    preterite: 'zog zusammen',
    perfect: 'ist zusammengezogen',
    auxiliary: 'sein',
    separable: true,
    prepositionCase: 'mit + Dativ',
    example: 'Im Sommer ziehen die beiden Verlobten in eine gemeinsame Wohnung zusammen.',
    exampleTranslation: 'در تابستان، آن دو نامزد با هم به یک آپارتمان مشترک اسباب‌کشی می‌کنند.',
    level: 'B1+',
    tags: ['مسکن', 'رابطه']
  },
  {
    id: 'k7-v6',
    german: 'eingehen',
    persian: 'پیمان بستن و وارد شدن به (یک پیوند زناشویی یا تعهد رسمی)',
    category: 'Verben',
    lesson: 7,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 1', pageOrTrack: 'S. 83', context: 'eine feste Partnerschaft oder Ehe eingehen' }
    ],
    pronunciation: '[ˈaɪ̯nˌɡeːən]',
    infinitive: 'eingehen (+ Akk. z.B. eine Ehe)',
    present: 'geht ein',
    preterite: 'ging ein',
    perfect: 'ist eingegangen',
    auxiliary: 'sein',
    separable: true,
    example: 'Immer mehr junge Menschen zögern, bevor sie eine lebenslange Bindung eingehen.',
    exampleTranslation: 'تعداد بیشتری از جوانان قبل از وارد شدن به یک تعهد مادام‌العمر مردد هستند.',
    level: 'B1+',
    tags: ['تعهد', 'ازدواج']
  },
  {
    id: 'k7-v7',
    german: 'sich verneinen / missverstehen',
    persian: 'سوءتفاهم پیدا کردن، حرف یکدیگر را بد متوجه شدن',
    category: 'Verben',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 2', pageOrTrack: 'S. 84', context: 'mangelnde Kommunikation führt dazu, sich oft zu missverstehen' }
    ],
    pronunciation: '[ˈmɪsfɛɐ̯ˌʃteːən]',
    infinitive: 'missverstehen (+ Akk.)',
    present: 'missversteht',
    preterite: 'missverstand',
    perfect: 'hat missverstanden',
    auxiliary: 'haben',
    example: 'Durch fehlende Gespräche missverstehen sich Paare im Alltag häufig.',
    exampleTranslation: 'به دلیل عدم گفتگو، زوج‌ها در زندگی روزمره بارها دچار سوءتفاهم می‌شوند.',
    level: 'B1+',
    tags: ['ارتباط', 'سوءتفاهم']
  },
  {
    id: 'k7-v8',
    german: 'verzeihen',
    persian: 'بخشیدن، از خطای دیگری گذشت کردن',
    category: 'Verben',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 2', pageOrTrack: 'S. 85', context: 'dem Partner einen Fehler aufrichtig verzeihen' }
    ],
    pronunciation: '[fɛɐ̯ˈt͡saɪ̯ən]',
    infinitive: 'verzeihen (+ Dat. + Akk.)',
    present: 'verzeiht',
    preterite: 'verzieh',
    perfect: 'hat verziehen',
    auxiliary: 'haben',
    example: 'In einer echten Partnerschaft muss man lernen, einander Fehler zu verzeihen.',
    exampleTranslation: 'در یک رابطه واقعی فرد باید بیاموزد که خطاهای یکدیگر را ببخشد.',
    level: 'B1+',
    tags: ['بخشش', 'اخلاق']
  },
  {
    id: 'k7-v9',
    german: 'aufwachsen',
    persian: 'بزرگ شدن و رشد یافتن (در یک محیط خانوادگی یا شهر)',
    category: 'Verben',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 3', pageOrTrack: 'S. 86', context: 'in einer geborgenen Patchworkfamilie aufwachsen' }
    ],
    pronunciation: '[ˈaʊ̯fˌvaksn̩]',
    infinitive: 'aufwachsen',
    present: 'wächst auf',
    preterite: 'wuchs auf',
    perfect: 'ist aufgewachsen',
    auxiliary: 'sein',
    separable: true,
    example: 'Die Kinder sind in einem ländlichen Umfeld behütet aufgewachsen.',
    exampleTranslation: 'فرزندان در یک محیط روستایی با مراقبت و آرامش بزرگ شدند.',
    level: 'B1+',
    tags: ['رشد', 'خانواده']
  },
  {
    id: 'k7-v10',
    german: 'sich verlassen auf',
    persian: 'اعتماد کامل داشتن و دل بستن به پشتیبانی کسی',
    category: 'Verben',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 1', pageOrTrack: 'S. 82', context: 'sich in schweren Zeiten auf den Ehepartner verlassen können' }
    ],
    pronunciation: '[zɪç fɛɐ̯ˈlasn̩ ʔaʊ̯f]',
    infinitive: 'sich verlassen auf (+ Akk.)',
    present: 'verlässt sich',
    preterite: 'verließ sich',
    perfect: 'hat sich verlassen',
    auxiliary: 'haben',
    reflexive: true,
    prepositionCase: 'auf + Akkusativ',
    example: 'In einer guten Ehe kann man sich in jeder Lebenslage blind auf den Partner verlassen.',
    exampleTranslation: 'در یک ازدواج خوب، فرد می‌تواند در هر شرایطی کورکورانه به همسرش اعتماد کند.',
    level: 'B1+',
    tags: ['اعتماد', 'تعهد']
  },

  // --- Nomen (اسامی همراه آرتیکل، جمع، تلفظ و جنسیت) ---
  {
    id: 'k7-n1',
    german: 'die Patchworkfamilie',
    persian: 'خانواده ترکیبی / ناتنی (حاصل از ازدواج‌های قبلی والدین)',
    category: 'Nomen',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 3', pageOrTrack: 'S. 86', context: 'Herausforderungen und Chancen in einer Patchworkfamilie' },
      { source: 'Hörtexte', lesson: 7, module: 'Modul 3', pageOrTrack: 'Track 2.17', context: 'Leben in einer großen Patchworkfamilie mit fünf Kindern' }
    ],
    pronunciation: '[ˈpɛtʃvœʁkfaˌmiːli̯ə]',
    article: 'die',
    plural: 'die Patchworkfamilien',
    genderPersian: 'مونث (die)',
    example: 'Das Zusammenleben in einer Patchworkfamilie erfordert viel Einfühlungsvermögen.',
    exampleTranslation: 'زندگی مشترک در یک خانواده ترکیبی نیازمند درک متقابل فراوان است.',
    level: 'B1+',
    tags: ['خانواده مدرن', 'جامعه']
  },
  {
    id: 'k7-n2',
    german: 'die Scheidungsrate',
    persian: 'نرخ و آمار طلاق در جامعه',
    category: 'Nomen',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 7, module: 'Modul 1', pageOrTrack: 'Track 2.14', context: 'Vergleich der Scheidungsrate in Stadt und Land' }
    ],
    pronunciation: '[ˈʃaɪ̯dʊŋsˌʁaːtə]',
    article: 'die',
    plural: 'die Scheidungsraten',
    genderPersian: 'مونث (die)',
    example: 'Soziologen analysieren die Gründe für das Ansteigen der Scheidungsrate.',
    exampleTranslation: 'جامعه‌شناسان علل افزایش نرخ طلاق را تحلیل می‌کنند.',
    level: 'B1+',
    tags: ['آمار', 'جامعه']
  },
  {
    id: 'k7-n3',
    german: 'die Partnerschaft',
    persian: 'رابطه زناشویی، شراکتی و عاشقانه',
    category: 'Nomen',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 1', pageOrTrack: 'S. 82', context: 'Eine gleichberechtigte Partnerschaft führen' }
    ],
    pronunciation: '[ˈpaʁtnɐʃaft]',
    article: 'die',
    plural: 'die Partnerschaften',
    genderPersian: 'مونث (die)',
    example: 'Eine funktionierende Partnerschaft basiert auf gegenseitigem Vertrauen und Kommunikation.',
    exampleTranslation: 'یک رابطه موفق بر پایه اعتماد متقابل و گفتگو بنا نهاده شده است.',
    level: 'B1+',
    tags: ['رابطه', 'همراهی']
  },
  {
    id: 'k7-n4',
    german: 'der Trauschein',
    persian: 'سند رسمی ازدواج و عقدنامه',
    category: 'Nomen',
    lesson: 7,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 1', pageOrTrack: 'S. 83', context: 'Zusammenleben auch ohne Trauschein genießen' }
    ],
    pronunciation: '[ˈtʁaʊ̯ˌʃaɪ̯n]',
    article: 'der',
    plural: 'die Trauscheine',
    genderPersian: 'مذکر (der)',
    example: 'Viele junge Paare leben heute jahrelang glücklich ohne Trauschein zusammen.',
    exampleTranslation: 'امروزه بسیاری از زوج‌های جوان سال‌ها بدون سند رسمی عقدنامه به خوشی با هم زندگی می‌کنند.',
    level: 'B1+',
    tags: ['ازدواج', 'سند']
  },
  {
    id: 'k7-n5',
    german: 'die Eifersucht',
    persian: 'حسادت عاشقانه و بدگمانی نسبت به شریک زندگی',
    category: 'Nomen',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 2', pageOrTrack: 'S. 84', context: 'Krankhafte Eifersucht zerstört viele Beziehungen.' }
    ],
    pronunciation: '[ˈaɪ̯fɐˌzʊxt]',
    article: 'die',
    plural: 'die Eifersucht (بدون جمع)',
    genderPersian: 'مونث (die)',
    example: 'Übertriebene Eifersucht führt häufig zu schweren Streitigkeiten in der Ehe.',
    exampleTranslation: 'حسادت بیش از حد اغلب منجر به مشاجرات شدید در ازدواج می‌شود.',
    level: 'B1+',
    tags: ['احساس', 'اختلاف']
  },
  {
    id: 'k7-n6',
    german: 'der Alleinerziehende',
    persian: 'سرپرست تک‌والدی (پدر یا مادری که فرزندش را به تنهایی بزرگ می‌کند)',
    category: 'Nomen',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 3', pageOrTrack: 'S. 86', context: 'Staatliche Unterstützung für Alleinerziehende' }
    ],
    pronunciation: '[ˈalaɪ̯nʔɛɐ̯ˌtsiːəndə]',
    article: 'der',
    plural: 'die Alleinerziehenden',
    genderPersian: 'مذکر (der)',
    example: 'Alleinerziehende Mütter stehen im Alltag vor großen finanziellen Herausforderungen.',
    exampleTranslation: 'مادران تک‌والدی در زندگی روزمره با چالش‌های مالی بزرگی روبرو هستند.',
    level: 'B1+',
    tags: ['خانواده', 'جامعه']
  },
  {
    id: 'k7-n7',
    german: 'das Missverständnis',
    persian: 'سوءتفاهم و برداشت اشتباه در گفتگو',
    category: 'Nomen',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 2', pageOrTrack: 'S. 84', context: 'Kleine Missverständnisse durch ein ruhiges Gespräch ausräumen' }
    ],
    pronunciation: '[ˈmɪsfɛɐ̯ˌʃtɛntnɪs]',
    article: 'das',
    plural: 'die Missverständnisse',
    genderPersian: 'خنثی (das)',
    example: 'Ein klärendes Gespräch verhinderte, dass ein kleines Missverständnis zum Streit wurde.',
    exampleTranslation: 'یک گفتگوی شفاف‌کننده مانع از آن شد که یک سوءتفاهم کوچک به مشاجره تبدیل شود.',
    level: 'B1+',
    tags: ['ارتباط', 'گفتگو']
  },
  {
    id: 'k7-n8',
    german: 'die Geborgenheit',
    persian: 'حس امنیت، گرما و آرامش داشتن در آغوش خانواده یا همسر',
    category: 'Nomen',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 1', pageOrTrack: 'S. 82', context: 'Geborgenheit und Schutz in der Familie finden' }
    ],
    pronunciation: '[ɡəˈbɔʁɡn̩haɪ̯t]',
    article: 'die',
    plural: 'die Geborgenheit (بدون جمع)',
    genderPersian: 'مونث (die)',
    example: 'Kinder brauchen Liebe und das Gefühl von absoluter Geborgenheit im Elternhaus.',
    exampleTranslation: 'کودکان نیازمند عشق و احساس امنیت مطلق در خانه والدین هستند.',
    level: 'B1+',
    tags: ['امنیت', 'خانواده']
  },
  {
    id: 'k7-n9',
    german: 'der Generationenkonflikt',
    persian: 'تضاد و اختلاف نظر بین نسل‌ها (والدین و فرزندان)',
    category: 'Nomen',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 4', pageOrTrack: 'S. 88', context: 'Der Generationenkonflikt zwischen Jugendlichen und Eltern' }
    ],
    pronunciation: '[ɡenəʁaˈt͡si̯oːnənkɔnˌflɪkt]',
    article: 'der',
    plural: 'die Generationenkonflikte',
    genderPersian: 'مذکر (der)',
    example: 'Unterschiedliche Wertvorstellungen führen oft zum klassischen Generationenkonflikt.',
    exampleTranslation: 'ارزش‌های متفاوت اغلب منجر به تضاد کلاسیک بین نسلی می‌شود.',
    level: 'B1+',
    tags: ['نسل‌ها', 'اختلاف']
  },

  // --- Adjektive & Adverbien (صفات همراه حالات مقایسه‌ای و متضاد) ---
  {
    id: 'k7-adj1',
    german: 'harmonisch',
    persian: 'هماهنگ، سازگار و سرشار از آرامش و صمیمیت',
    category: 'Adjektive',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 1', pageOrTrack: 'S. 82', context: 'eine harmonische Partnerschaft führen' }
    ],
    pronunciation: '[haʁˈmoːnɪʃ]',
    comparative: 'harmonischer',
    superlative: 'am harmonischsten',
    opposite: 'zerstritten / konfliktreich',
    example: 'Gegenseitiger Respekt ist die wichtigste Voraussetzung für ein harmonisches Zusammenleben.',
    exampleTranslation: 'احترام متقابل مهم‌ترین شرط برای یک زندگی مشترک هماهنگ و آرام است.',
    level: 'B1+',
    tags: ['رابطه', 'آرامش']
  },
  {
    id: 'k7-adj2',
    german: 'eifersüchtig',
    persian: 'حسود (در رابطه عاشقانه)، دارای بدگمانی',
    category: 'Adjektive',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 2', pageOrTrack: 'S. 84', context: 'eifersüchtig auf die Freunde des Partners reagieren' }
    ],
    pronunciation: '[ˈaɪ̯fɐˌzʏxtɪç]',
    comparative: 'eifersüchtiger',
    superlative: 'am eifersüchtigsten',
    opposite: 'vertrauensvoll / gelassen',
    example: 'Er reagierte eifersüchtig, wenn seine Freundin sich mit ihren Arbeitskollegen traf.',
    exampleTranslation: 'او وقتی دوستش با همکاران کاری‌اش دیدار می‌کرد، واکنشی همراه با حسادت نشان می‌داد.',
    level: 'B1+',
    tags: ['احساس', 'رابطه']
  },
  {
    id: 'k7-adj3',
    german: 'alleinerziehend',
    persian: 'تک‌والد (مادری یا پدری که تنهایی فرزند تربیت می‌کند)',
    category: 'Adjektive',
    lesson: 7,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 3', pageOrTrack: 'S. 86', context: 'alleinerziehende Väter in Deutschland' }
    ],
    pronunciation: '[ˈalaɪ̯nʔɛɐ̯ˌtsiːənd]',
    comparative: '—',
    superlative: '—',
    opposite: 'verheiratet / zusammenlebend',
    example: 'Alleinerziehende Eltern leisten im Alltag enorme Arbeit.',
    exampleTranslation: 'والدین تک‌والد در زندگی روزمره زحمت فوق‌العاده‌ای می‌کشند.',
    level: 'B1+',
    tags: ['خانواده', 'سبک زندگی']
  },
  {
    id: 'k7-adj4',
    german: 'verständnisvoll',
    persian: 'دلسوز، با درک و فهم بالا نسبت به دیگری',
    category: 'Adjektive',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 1', pageOrTrack: 'S. 82', context: 'ein verständnisvoller Partner hört aufmerksam zu' }
    ],
    pronunciation: '[fɛɐ̯ˈʃtɛntnɪsˌfɔl]',
    comparative: 'verständnisvoller',
    superlative: 'am verständnisvollsten',
    opposite: 'intolerant / egoistisch',
    example: 'In schwierigen Phasen reagierte sie stets sehr verständnisvoll und geduldig.',
    exampleTranslation: 'در مراحل سخت زندگی، او همواره بسیار با درک و صبورانه رفتار می‌کرد.',
    level: 'B1+',
    tags: ['اخلاق', 'رابطه']
  },
  {
    id: 'k7-adj5',
    german: 'innig',
    persian: 'عمیق، صمیمانه و قلبی (عشق یا ارتباط)',
    category: 'Adjektive',
    lesson: 7,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 1', pageOrTrack: 'S. 82', context: 'eine innige Liebe verbindet die beiden seit Jahrzehnten' }
    ],
    pronunciation: '[ˈɪnɪç]',
    comparative: 'inniger',
    superlative: 'am innigsten',
    opposite: 'oberflächlich / distanziert',
    example: 'Zwischen den Großeltern herrscht eine innige Zuneigung, die man sofort spürt.',
    exampleTranslation: 'میان پدربزرگ و مادربزرگ علاقه‌ای عمیق و قلبی حاکم است که فرد بلافاصله آن را حس می‌کند.',
    level: 'B1+',
    tags: ['احساس', 'صمیمیت']
  },

  // --- Redewendungen & Ausdrücke (اصطلاحات کاربردی) ---
  {
    id: 'k7-red1',
    german: 'auf Wolke sieben schweben',
    persian: 'در اوج شور و نشاط عاشقی بودن، غرق در شادی بودن',
    category: 'Redewendungen',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 1', pageOrTrack: 'S. 82', context: 'Frisch Verliebte schweben in den ersten Monaten auf Wolke sieben.' }
    ],
    pronunciation: '[ʔaʊ̯f ˈvɔlkə ˈziːbn̩ ˈʃveːbn̩]',
    explanation: 'حالت سرخوشی شدید و احساس بی‌وزنی در آغاز یک رابطه عاشقانه.',
    literalMeaning: 'بر روی ابر هفتم معلق بودن',
    example: 'Seit ihrer Verlobung schweben die beiden überglücklich auf Wolke sieben.',
    exampleTranslation: 'از زمان نامزدی‌شان، آن دو غرق در شور و شادی عاشقانه هستند.',
    level: 'B1+',
    tags: ['اصطلاح', 'عشق']
  },
  {
    id: 'k7-red2',
    german: 'durch dick und dünn gehen',
    persian: 'در تمام خوشی‌ها و سختی‌های زندگی همراه و وفادار یکدیگر بودن',
    category: 'Redewendungen',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 1', pageOrTrack: 'S. 82', context: 'Ein wahres Ehepaar geht gemeinsam durch dick und dünn.' }
    ],
    pronunciation: '[dʊʁç dɪk ʊnt dʏn ˈɡeːən]',
    explanation: 'پایداری و وفاداری در شرایط خوب و بد زندگی مشترک.',
    literalMeaning: 'از میان ضخیم و باریک گذشتن',
    example: 'Seit fünfzig Jahren sind sie verheiratet und immer gemeinsam durch dick und dünn gegangen.',
    exampleTranslation: 'پنجاه سال است که آن‌ها ازدواج کرده‌اند و همواره در خوشی و سختی کنار هم بوده‌اند.',
    level: 'B1+',
    tags: ['اصطلاح', 'وفاداری']
  },
  {
    id: 'k7-red3',
    german: 'Schmetterlinge im Bauch haben',
    persian: 'حس پروانه‌ای در شکم داشتن (احساس شور، هیجان و دلهره شیرین عاشقی)',
    category: 'Redewendungen',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 7, module: 'Modul 1', pageOrTrack: 'Track 2.13', context: 'Wenn man verliebt ist, hat man Schmetterlinge im Bauch.' }
    ],
    pronunciation: '[ˈʃmɛtɐlɪŋə ɪm baʊ̯x ˈhaːbn̩]',
    explanation: 'احساس هیجان و ضربان قلب شیرین هنگام دیدار معشوق.',
    literalMeaning: 'پروانه‌ها در شکم داشتن',
    example: 'Jedes Mal, wenn er sie sieht, hat er immer noch Schmetterlinge im Bauch.',
    exampleTranslation: 'هر بار که او را می‌بیند، هنوز هم حس هیجان شیرین عاشقی در او بیدار می‌شود.',
    level: 'B1+',
    tags: ['اصطلاح', 'احساس']
  },
  {
    id: 'k7-red4',
    german: 'jemandem das Herz brechen',
    persian: 'قلب کسی را شکستن، با جدایی یا خیانت او را عمیقاً آزردن',
    category: 'Redewendungen',
    lesson: 7,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 2', pageOrTrack: 'S. 85', context: 'Die unerwartete Trennung hat ihr das Herz gebrochen.' }
    ],
    pronunciation: '[ˈjeːmandn̩ das hɛʁt͡s ˈbʁɛxn̩]',
    explanation: 'ایجاد غم و اندوه شدید روحی در اثر شکست عشقی.',
    literalMeaning: 'قلب کسی را شکستن',
    example: 'Als er ohne Wort wegging, hat er ihr das Herz gebrochen.',
    exampleTranslation: 'وقتی او بدون کلامی رفت، قلب او را شکست.',
    level: 'B1+',
    tags: ['اصطلاح', 'شکست']
  },
  {
    id: 'k7-red5',
    german: 'Liebe auf den ersten Blick',
    persian: 'عشق در نگاه اول',
    category: 'Redewendungen',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 1', pageOrTrack: 'S. 82', context: 'Glauben Sie an die Liebe auf den ersten Blick?' }
    ],
    pronunciation: '[ˈliːbə ʔaʊ̯f deːn ˈeːɐ̯stn̩ blɪk]',
    explanation: 'احساس دلباختگی آنی در اولین دیدار.',
    literalMeaning: 'عشق در اولین نگاه',
    example: 'Als sich ihre Blicke trafen, war es Liebe auf den ersten Blick.',
    exampleTranslation: 'وقتی نگاهمان به هم گره خورد، عشق در نگاه اول بود.',
    level: 'B1+',
    tags: ['اصطلاح', 'عشق']
  },
  {
    id: 'k7-red6',
    german: 'eine Ehe schließen',
    persian: 'پیوند زناشویی بستن، رسمیت دادن به ازدواج',
    category: 'Redewendungen',
    lesson: 7,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 1', pageOrTrack: 'S. 83', context: 'Im Standesamt eine Ehe schließen' }
    ],
    pronunciation: '[ˈaɪ̯nə ˈeːə ˈʃliːsn̩]',
    explanation: 'ثبت قانونی و رسمی عقد زناشویی در محضر.',
    literalMeaning: 'یک ازدواج را بستن',
    example: 'Das Brautpaar hat gestern im historischen Rathaus die Ehe geschlossen.',
    exampleTranslation: 'عروس و داماد دیروز در تالار تاریخی شهرداری عقد زناشویی بستند.',
    level: 'B1+',
    tags: ['اصطلاح', 'ازدواج']
  },

  // =========================================================================
  // KAPITEL 8: Kaufen, kaufen, kaufen (مصرف‌گرایی، خرید و حقوق مصرف‌کننده)
  // =========================================================================
  // --- Verben ---
  {
    id: 'k8-v1',
    german: 'reklamieren',
    persian: 'اعتراض و شکایت کردن بابت کالای معیوب، مرجوع کردن',
    category: 'Verben',
    lesson: 8,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 8, module: 'Modul 3', pageOrTrack: 'Track 2.22', context: 'einen defekten Laptop beim Kundendienst reklamieren' }
    ],
    pronunciation: '[ʁeklaˈmiːʁən]',
    infinitive: 'reklamieren (+ Akk.)',
    present: 'reklamiert',
    preterite: 'reklamierte',
    perfect: 'hat reklamiert',
    auxiliary: 'haben',
    example: 'Der Kunde hat die beschädigte Ware sofort beim Support reklamiert.',
    exampleTranslation: 'مشتری کالای آسیب‌دیده را بلافاصله در بخش پشتیبانی مرجوع و ثبت شکایت کرد.',
    level: 'B1+',
    tags: ['خرید', 'گارانتی']
  },
  {
    id: 'k8-v2',
    german: 'umtauschen',
    persian: 'تعویض کردن کالا (با مدل یا سایز دیگر)',
    category: 'Verben',
    lesson: 8,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 8, module: 'Modul 2', pageOrTrack: 'S. 96', context: 'Kleidung gegen Vorlage des Kassenbons umtauschen' }
    ],
    pronunciation: '[ˈʊmˌtaʊ̯ʃn̩]',
    infinitive: 'umtauschen (+ Akk.)',
    present: 'tauscht um',
    preterite: 'tauschte um',
    perfect: 'hat umgetauscht',
    auxiliary: 'haben',
    separable: true,
    example: 'Mit dem Kassenbon können Sie die Jacke innerhalb von 14 Tagen umtauschen.',
    exampleTranslation: 'با برگه رسید خرید می‌توانید کاپشن را ظرف مدت ۱۴ روز تعویض کنید.',
    level: 'B1+',
    tags: ['فروشگاه', 'مشتری']
  },
  {
    id: 'k8-v3',
    german: 'entsorgen',
    persian: 'دفع کردن زباله یا وسایل اسقاطی بر اساس اصول',
    category: 'Verben',
    lesson: 8,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 8, module: 'Modul 3', pageOrTrack: 'S. 98', context: 'Elektroschrott umweltgerecht entsorgen' }
    ],
    pronunciation: '[ɛntˈzɔʁɡn̩]',
    infinitive: 'entsorgen (+ Akk.)',
    present: 'entsorgt',
    preterite: 'entsorgte',
    perfect: 'hat entsorgt',
    auxiliary: 'haben',
    example: 'Alte Elektrogeräte müssen beim Wertstoffhof fachgerecht entsorgt werden.',
    exampleTranslation: 'لوازم الکترونیکی کهنه باید در مراکز بازیافت به شیوه اصولی دفع شوند.',
    level: 'B1+',
    tags: ['بازیافت', 'محیط زیست']
  },
  // --- Nomen ---
  {
    id: 'k8-n1',
    german: 'das Konsumverhalten',
    persian: 'الگوی رفتار مصرفی و خرید مردم',
    category: 'Nomen',
    lesson: 8,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 8, module: 'DVD Kapitel 8', pageOrTrack: 'DVD (S. 203 - Generation Konsum)', context: 'Das Konsumverhalten Jugendlicher im Wandel' }
    ],
    pronunciation: '[kɔnˈzuːmfɛɐ̯ˌhaltn̩]',
    article: 'das',
    plural: 'die Konsumverhalten (معمولاً مفرد)',
    genderPersian: 'خنثی (das)',
    example: 'Nachhaltiges Konsumverhalten schützt Ressourcen und schont das Klima.',
    exampleTranslation: 'الگوی مصرف پایدار از منابع حفاظت کرده و از آسیب به اقلیم می‌کاهد.',
    level: 'B1+',
    tags: ['اقتصاد', 'جامعه']
  },
  {
    id: 'k8-n2',
    german: 'die Tauschbörse',
    persian: 'شبکه و بازارچه مبادله کالا و خدمات بدون پول',
    category: 'Nomen',
    lesson: 8,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 8, module: 'Modul 2', pageOrTrack: 'Track 2.21', context: 'Kleider und Bücher auf der Tauschbörse anbieten' }
    ],
    pronunciation: '[ˈtaʊ̯ʃˌbœʁzə]',
    article: 'die',
    plural: 'die Tauschbörsen',
    genderPersian: 'مونث (die)',
    example: 'Auf der Tauschbörse kann man gebrauchte Bücher gegen nützliche Haushaltsartikel tauschen.',
    exampleTranslation: 'در بازارچه مبادله می‌توان کتاب‌های دست‌دوم را با اقلام کاربردی خانگی معاوضه کرد.',
    level: 'B1+',
    tags: ['اشتراک‌گذاری', 'پایداری']
  },
  // --- Adjektive & Adverbien ---
  {
    id: 'k8-adj1',
    german: 'überflüssig',
    persian: 'اضافی، غیرضروری و بیهوده',
    category: 'Adjektive',
    lesson: 8,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 8, module: 'Modul 1', pageOrTrack: 'S. 94', context: 'auf überflüssige Konsumgüter verzichten' }
    ],
    pronunciation: '[ˈyːbɐˌflysɪç]',
    comparative: 'überflüssiger',
    superlative: 'am überflüssigsten',
    opposite: 'notwendig / unentbehrlich',
    example: 'Viele Menschen besitzen zu viele überflüssige Dinge, die nur im Schrank verstauben.',
    exampleTranslation: 'بسیاری از افراد وسایل اضافی زیادی دارند که تنها در کمد خاک می‌خورند.',
    level: 'B1+',
    tags: ['مینیمالیسم', 'خرید']
  },
  // --- Redewendungen ---
  {
    id: 'k8-red1',
    german: 'das Geld zum Fenster hinauswerfen',
    persian: 'پول را هدر دادن و بی‌حساب‌کتاب خرج کردن',
    category: 'Redewendungen',
    lesson: 8,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 8, module: 'Modul 1', pageOrTrack: 'S. 94', context: 'Kritik an sinnlosem Konsum' }
    ],
    explanation: 'خرج کردن بی‌ملاحظه پول برای کالاهای بی‌ارزش یا نامناسب.',
    example: 'Wer ständig teure Markensachen kauft, wirft oft sein hart verdientes Geld zum Fenster hinaus.',
    exampleTranslation: 'کسی که مدام اجناس گران‌قیمت برند می‌خرد، اغلب دسترنج خود را به باد می‌دهد.',
    level: 'B1+',
    tags: ['اصطلاح', 'پول']
  },

  // =========================================================================
  // KAPITEL 9: Endlich Urlaub (سفر، گردشگری و جهانگردی)
  // =========================================================================
  // --- Verben ---
  {
    id: 'k9-v1',
    german: 'verreisen',
    persian: 'به مسافرت رفتن، عازم سفر شدن',
    category: 'Verben',
    lesson: 9,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 9, module: 'Modul 1', pageOrTrack: 'S. 106', context: 'in den Sommerferien ans Meer verreisen' }
    ],
    pronunciation: '[fɛɐ̯ˈʁaɪ̯zn̩]',
    infinitive: 'verreisen',
    present: 'verreist',
    preterite: 'verreiste',
    perfect: 'ist verreist',
    auxiliary: 'sein',
    example: 'Im August verreist die ganze Familie für zwei Wochen nach Süditalien.',
    exampleTranslation: 'در ماه آگوست تمام خانواده برای دو هفته به جنوب ایتالیا مسافرت می‌کنند.',
    level: 'B1+',
    tags: ['تعطیلات', 'سفر']
  },
  {
    id: 'k9-v2',
    german: 'stornieren',
    persian: 'لغو کردن (رزرو بلیت، هتل یا تور)',
    category: 'Verben',
    lesson: 9,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 9, module: 'Modul 3', pageOrTrack: 'Track 2.32', context: 'eine Hotelbuchung kostenlos stornieren' }
    ],
    pronunciation: '[ʃtɔʁˈniːʁən]',
    infinitive: 'stornieren (+ Akk.)',
    present: 'storniert',
    preterite: 'stornierte',
    perfect: 'hat storniert',
    auxiliary: 'haben',
    example: 'Wegen Krankheit musste er seine gebuchte Flugreise leider kurzfristig stornieren.',
    exampleTranslation: 'به دلیل بیماری او متأسفانه مجبور شد بلیت پرواز رزرو شده خود را لغو کند.',
    level: 'B1+',
    tags: ['رزرو', 'هتل']
  },
  {
    id: 'k9-v3',
    german: 'erkunden',
    persian: 'کشف و جستجو کردن، با دقت گشتن و شناختن (یک شهر یا منطقه)',
    category: 'Verben',
    lesson: 9,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 9, module: 'Modul 4', pageOrTrack: 'S. 112', context: 'die historische Altstadt zu Fuß erkunden' }
    ],
    pronunciation: '[ɛɐ̯ˈkʊndn̩]',
    infinitive: 'erkunden (+ Akk.)',
    present: 'erkundet',
    preterite: 'erkundete',
    perfect: 'hat erkundet',
    auxiliary: 'haben',
    example: 'Wir haben die kleinen Gassen der Altstadt am liebsten zu Fuß erkundet.',
    exampleTranslation: 'ما کوچه‌های باریک بخش قدیمی شهر را ترجیحاً پیاده کشف و سیاحت کردیم.',
    level: 'B1+',
    tags: ['گردشگری', 'کشف']
  },
  // --- Nomen ---
  {
    id: 'k9-n1',
    german: 'das Workcamp',
    persian: 'اردوی داوطلبانه بین‌المللی (کار عام‌المنفعه در سفر)',
    category: 'Nomen',
    lesson: 9,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 9, module: 'Modul 2', pageOrTrack: 'Track 2.31', context: 'Erfahrungen in einem internationalen Workcamp in Indien' }
    ],
    pronunciation: '[ˈvœːɐ̯kˌkɛmp]',
    article: 'das',
    plural: 'die Workcamps',
    genderPersian: 'خنثی (das)',
    example: 'In einem Workcamp helfen junge Menschen ehrenamtlich beim Bau von Schulen.',
    exampleTranslation: 'در یک اردوی داوطلبانه، جوانان به صورت خیریه در ساخت مدارس کمک می‌کنند.',
    level: 'B1+',
    tags: ['داوطلبانه', 'سفر']
  },
  {
    id: 'k9-n2',
    german: 'die Weltreise',
    persian: 'سفر دور دنیا',
    category: 'Nomen',
    lesson: 9,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 9, module: 'Modul 1', pageOrTrack: 'Track 2.27', context: '15 Monate auf Weltreise mit kleinem Budget' }
    ],
    pronunciation: '[ˈvɛltˌʁaɪ̯zə]',
    article: 'die',
    plural: 'die Weltreisen',
    genderPersian: 'مونث (die)',
    example: 'Nach dem Abschluss erfüllte sie sich ihren großen Traum von einer Weltreise.',
    exampleTranslation: 'پس از فارغ‌التحصیلی، او به رویای بزرگ خود یعنی سفر دور دنیا جامه عمل پوشاند.',
    level: 'B1+',
    tags: ['ماجراجویی', 'جهانگردی']
  },
  // --- Adjektive & Adverbien ---
  {
    id: 'k9-adj1',
    german: 'reiselustig',
    persian: 'مشتاق سفر، اهل گشت‌وگذار و ماجراجویی',
    category: 'Adjektive',
    lesson: 9,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 9, module: 'Modul 1', pageOrTrack: 'S. 106', context: 'reiselustige Backpacker' }
    ],
    pronunciation: '[ˈʁaɪ̯zəˌlʊstɪç]',
    comparative: 'reiselustiger',
    superlative: 'am reiselustigsten',
    opposite: 'sesshaft / heimatverbunden',
    example: 'Reiselustige Studenten nutzen die Semesterferien für Interrail durch Europa.',
    exampleTranslation: 'دانشجویان اهل سفر از تعطیلات ترم برای قطارگردی در اروپا استفاده می‌کنند.',
    level: 'B1+',
    tags: ['سفر', 'شخصیت']
  },
  // --- Redewendungen ---
  {
    id: 'k9-red1',
    german: 'das Fernweh packt jemanden',
    persian: 'شوق شدید سفر و دلتنگی برای رفتن به سرزمین‌های دور دست دادن به کسی',
    category: 'Redewendungen',
    lesson: 9,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 9, module: 'Modul 1', pageOrTrack: 'S. 106', context: 'Wenn draußen der Winter kommt, packt mich das Fernweh.' }
    ],
    explanation: 'احساس عمیق دلتنگی برای سفر و ماجراجویی در کشورهای دوردست (نقطه مقابل Heimweh).',
    example: 'Jedes Mal beim Betrachten alter Reisefotos packt mich sofort das Fernweh.',
    exampleTranslation: 'هر بار با نگاه کردن به عکس‌های سفر قدیمی، فوراً شوق رفتن به دوردست‌ها به جانم می‌افتد.',
    level: 'B1+',
    tags: ['اصطلاح', 'فرهنگ آلمانی']
  },

  // =========================================================================
  // KAPITEL 10: Natürlich Natur! (حیوانات، حیات وحش و حفاظت از محیط زیست)
  // =========================================================================
  // --- Verben ---
  {
    id: 'k10-v1',
    german: 'aussetzen',
    persian: 'رها کردن، در خیابان یا طبیعت بی‌پناه گذاشتن (حیوانات خانگی)',
    category: 'Verben',
    lesson: 10,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 10, module: 'Modul 2 Aufgabe 2c', pageOrTrack: 'Track 2.35 (S. 191)', context: 'Im Sommer finden wir leider sehr viele Tiere, die einfach irgendwo ausgesetzt wurden.' }
    ],
    pronunciation: '[ˈaʊ̯sˌzɛtsn̩]',
    infinitive: 'aussetzen (+ Akk.)',
    present: 'setzt aus',
    preterite: 'setzte aus',
    perfect: 'hat ausgesetzt',
    auxiliary: 'haben',
    separable: true,
    example: 'Vor der Urlaubszeit setzen leider manche unverantwortliche Besitzer ihre Haustiere aus.',
    exampleTranslation: 'متأسفانه قبل از فصل تعطیلات، برخی صاحبان بی‌مسئولیت حیوانات خانگی خود را در خیابان رها می‌کنند.',
    level: 'B1+',
    tags: ['حقوق حیوانات', 'جامعه']
  },
  {
    id: 'k10-v2',
    german: 'schützen vor',
    persian: 'محافظت کردن در برابر، مراقبت کردن از',
    category: 'Verben',
    lesson: 10,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 10, module: 'Modul 1', pageOrTrack: 'S. 118', context: 'bedrohte Tierarten vor dem Aussterben schützen' }
    ],
    pronunciation: '[ˈʃʏtsn̩ foːɐ̯]',
    infinitive: 'schützen vor (+ Dat.)',
    present: 'schützt',
    preterite: 'schützte',
    perfect: 'hat geschützt',
    auxiliary: 'haben',
    prepositionCase: 'vor + Dativ',
    example: 'Nationalparks wurden gegründet, um seltene Tierarten vor Wilderern zu schützen.',
    exampleTranslation: 'پارک‌های ملی برای محافظت از گونه‌های کمیاب جانوری در برابر شکارچیان غیرمجاز تأسیس شدند.',
    level: 'B1+',
    tags: ['محیط زیست', 'حفاظت']
  },
  {
    id: 'k10-v3',
    german: 'überleben',
    persian: 'جان سالم به در بردن، زنده ماندن در شرایط سخت',
    category: 'Verben',
    lesson: 10,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 10, module: 'DVD Kapitel 10', pageOrTrack: 'DVD (S. 204)', context: 'Wie Wildtiere im städtischen Raum überleben' }
    ],
    pronunciation: '[ˌyːbɐˈleːbn̩]',
    infinitive: 'überleben (+ Akk.)',
    present: 'überlebt',
    preterite: 'überlebte',
    perfect: 'hat überlebt',
    auxiliary: 'haben',
    example: 'Viele Wildtiere passen ihr Verhalten an, um im Großstadtdschungel zu überleben.',
    exampleTranslation: 'بسیاری از حیوانات وحشی رفتار خود را سازگار می‌کنند تا در جنگل شهری زنده بمانند.',
    level: 'B1+',
    tags: ['حیات وحش', 'بقا']
  },
  // --- Nomen ---
  {
    id: 'k10-n1',
    german: 'das Tierheim',
    persian: 'پناهگاه و مرکز نگهداری حیوانات بی‌سرپرست',
    category: 'Nomen',
    lesson: 10,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 10, module: 'Modul 2', pageOrTrack: 'Track 2.34', context: 'Besuch im Tierheim Leipzig' }
    ],
    pronunciation: '[ˈtiːɐ̯ˌhaɪ̯m]',
    article: 'das',
    plural: 'die Tierheime',
    genderPersian: 'خنثی (das)',
    example: 'Im Tierheim warten viele verlassene Hunde und Katzen auf ein liebevolles Zuhause.',
    exampleTranslation: 'در پناهگاه حیوانات، سگ‌ها و گربه‌های رهاشده فراوانی منتظر خانه‌ای پرمهر هستند.',
    level: 'B1+',
    tags: ['حیوانات', 'حمایت']
  },
  {
    id: 'k10-n2',
    german: 'die Süßwasservorräte',
    persian: 'ذخایر آب شیرین کره زمین',
    category: 'Nomen',
    lesson: 10,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 10, module: 'Modul 4 Aufgabe 2a', pageOrTrack: 'Track 2.37 (S. 192 - Referat Wasser)', context: 'Nur 0,3 % der globalen Süßwasservorräte befinden sich in Seen und Flüssen.' }
    ],
    pronunciation: '[ˈzyːsvasɐˌfoːɐ̯ʁɛːtə]',
    article: 'die',
    plural: 'die Süßwasservorräte (معمولاً جمع)',
    genderPersian: 'مونث (die)',
    example: 'Durch den Klimawandel und ineffiziente Bewässerung schrumpfen die globalen Süßwasservorräte.',
    exampleTranslation: 'به دلیل تغییرات اقلیمی و آبیاری ناکارآمد، ذخایر آب شیرین جهان در حال کاهش است.',
    level: 'B1+',
    tags: ['محیط زیست', 'منابع']
  },
  {
    id: 'k10-n3',
    german: 'die Artenvielfalt',
    persian: 'تنوع زیستی، گوناگونی گونه‌های گیاهی و جانوری',
    category: 'Nomen',
    lesson: 10,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 10, module: 'Modul 1', pageOrTrack: 'S. 118', context: 'die Artenvielfalt in den Regenwäldern bewahren' }
    ],
    pronunciation: '[ˈaːɐ̯tn̩ˌfiːlfalt]',
    article: 'die',
    plural: 'die Artenvielfalt (بدون جمع)',
    genderPersian: 'مونث (die)',
    example: 'Der Erhalt der biologischen Artenvielfalt ist für das globale Ökosystem unverzichtbar.',
    exampleTranslation: 'حفظ تنوع زیستی برای اکوسیستم جهانی امری حیاتی و غیرقابل چشم‌پوشی است.',
    level: 'B1+',
    tags: ['طبیعت', 'اکولوژی']
  },
  // --- Adjektive & Adverbien ---
  {
    id: 'k10-adj1',
    german: 'zutraulich',
    persian: 'اهلی، دست‌آموز، نترس از انسان (حیوانات وحشی شهری)',
    category: 'Adjektive',
    lesson: 10,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 10, module: 'DVD Kapitel 10', pageOrTrack: 'DVD (S. 204 - Stadtfüchse)', context: 'Zutraulich werden die wilden Tiere in Berlin nur, wenn sie von Menschen gefüttert werden.' }
    ],
    pronunciation: '[ˈtsuːˌtʁaʊ̯lɪç]',
    comparative: 'zutraulicher',
    superlative: 'am zutraulichsten',
    opposite: 'scheu / ängstlich',
    example: 'Stadtfüchse in Berlin haben ihre natürliche Scheu verloren und sind erstaunlich zutraulich.',
    exampleTranslation: 'روباه‌های شهری در برلین ترس طبیعی خود را از دست داده و به طرز شگفت‌آوری با انسان‌ها مأنوس و نترس شده‌اند.',
    level: 'B1+',
    tags: ['حیوانات', 'رفتارشناسی']
  },
  {
    id: 'k10-adj2',
    german: 'nachhaltig',
    persian: 'پایدار، سازگار با محیط زیست و تجدیدپذیر',
    category: 'Adjektive',
    lesson: 10,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 10, module: 'Modul 4', pageOrTrack: 'S. 122', context: 'nachhaltiger Umgang mit natürlichen Ressourcen' }
    ],
    pronunciation: '[ˈnaːxˌhaltɪç]',
    comparative: 'nachhaltiger',
    superlative: 'am nachhaltigsten',
    opposite: 'kurzsichtig / verschwenderisch',
    example: 'Ein nachhaltiger Umgang mit Wasser sichert die Zukunft der kommenden Generationen.',
    exampleTranslation: 'استفاده پایدار از منابع آب، آینده نسل‌های بعدی را تضمین می‌کند.',
    level: 'B1+',
    tags: ['پایداری', 'محیط زیست']
  },
  // --- Redewendungen ---
  {
    id: 'k10-red1',
    german: 'seinen Teil beitragen zu',
    persian: 'سهم خود را ادا کردن در، نقشی سازنده ایفا کردن برای',
    category: 'Redewendungen',
    lesson: 10,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 10, module: 'Modul 4', pageOrTrack: 'S. 122', context: 'Jeder kann seinen Teil zum Umweltschutz beitragen.' }
    ],
    explanation: 'مشارکت فعال و مسئولانه هر فرد در دستیابی به هدفی همگانی.',
    example: 'Durch Mülltrennung und Energiesparen kann jeder Bürger seinen Teil zum Klimaschutz beitragen.',
    exampleTranslation: 'با تفکیک زباله و صرفه‌جویی در مصرف انرژی، هر شهروند می‌تواند سهم خود را در حفاظت از اقلیم ادا کند.',
    level: 'B1+',
    tags: ['اصطلاح', 'مسئولیت اجتماعی']
  }
];
