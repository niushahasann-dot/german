import { VocabularyItem } from '../types/vocabulary';

export const INITIAL_VOCABULARY: VocabularyItem[] = [
  // =========================================================================
  // KAPITEL 1: Leute heute (مردم امروز)
  // =========================================================================
  // --- Verben ---
  {
    id: 'k1-v1',
    german: 'teilnehmen',
    persian: 'شرکت کردن، حضور یافتن',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 10', context: 'an einem Workshop über Freundschaft teilnehmen' },
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2 Aufgabe 2c', pageOrTrack: 'Track 1.3', context: 'Wir wollten eure Meinung wissen und haben Anrufe gesammelt.' }
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
    persian: 'قرار گذاشتن، قرار ملاقات تنظیم کردن',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2 Aufgabe 2a', pageOrTrack: 'Track 1.2', context: 'Eventuell verabredet man sich auch mal auf einen Kaffee.' },
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 12', context: 'sich mit Freunden verabreden' }
    ],
    pronunciation: '[zɪç fɛɐ̯ˈʔapˌʁeːdn̩]',
    infinitive: 'sich verabreden mit (+ Dat.)',
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
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2 Aufgabe 2c', pageOrTrack: 'Track 1.4', context: 'Einem echten Freund kann man alles anvertrauen.' }
    ],
    pronunciation: '[ˈanfɛɐ̯ˌtʁaʊ̯ən]',
    infinitive: 'anvertrauen (+ Dat. + Akk.)',
    present: 'vertraut an',
    preterite: 'vertraute an',
    perfect: 'hat anvertraut',
    auxiliary: 'haben',
    separable: true,
    example: 'Einem wahren Freund kann man seine tiefsten Geheimnisse anvertrauen.',
    exampleTranslation: 'به یک دوست واقعی می‌توان عمیق‌ترین رازهای خود را در میان گذاشت.',
    level: 'B1+',
    tags: ['اعتماد', 'روابط']
  },
  {
    id: 'k1-v4',
    german: 'beistehen',
    persian: 'یاری رساندن، در شرایط سخت کنار کسی ایستادن',
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
  // --- Nomen ---
  {
    id: 'k1-n1',
    german: 'die Freundschaft',
    persian: 'دوستی، پیوند رفاقت',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 10', context: 'Über Freundschaft und Beziehungen sprechen' }
    ],
    pronunciation: '[ˈfʁɔɪ̯ntʃaft]',
    article: 'die',
    plural: 'die Freundschaften',
    genderPersian: 'مونث (die)',
    example: 'Eine tiefe Freundschaft hält oft ein ganzes Leben lang.',
    exampleTranslation: 'یک دوستی عمیق اغلب در تمام طول زندگی پایدار می‌ماند.',
    level: 'B1+',
    tags: ['روابط', 'عاطفه']
  },
  {
    id: 'k1-n2',
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
    id: 'k1-n3',
    german: 'das Vorbild',
    persian: 'الگو، سرمشق',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 3', pageOrTrack: 'S. 14', context: 'Vorbilder und Helden im Alltag' }
    ],
    pronunciation: '[ˈfoːɐ̯ˌbɪlt]',
    article: 'das',
    plural: 'die Vorbilder',
    genderPersian: 'خنثی (das)',
    example: 'Meine Großmutter ist für mich ein großes persönliches Vorbild.',
    exampleTranslation: 'مادربزرگ من برای من یک الگوی بزرگ شخصی است.',
    level: 'B1+',
    tags: ['شخصیت', 'الهام‌بخش']
  },
  {
    id: 'k1-n4',
    german: 'die Zuverlässigkeit',
    persian: 'قابلیت اطمینان، خوش‌قولی و تعهد',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 12', context: 'Zuverlässigkeit ist eine wichtige Eigenschaft.' }
    ],
    pronunciation: '[ˈtsuːfɛɐ̯ˌlɛsɪçkaɪ̯t]',
    article: 'die',
    plural: 'die Zuverlässigkeit (بدون جمع)',
    genderPersian: 'مونث (die)',
    example: 'In der Arbeitswelt und in der Freundschaft ist Zuverlässigkeit unverzichtbar.',
    exampleTranslation: 'در محیط کار و در دوستی، خوش‌قولی و تعهد غیرقابل چشم‌پوشی است.',
    level: 'B1+',
    tags: ['ویژگی‌های اخلاقی']
  },
  // --- Adjektive & Adverbien ---
  {
    id: 'k1-adj1',
    german: 'oberflächlich',
    persian: 'سطحی، کم‌عمق (در روابط یا شناخت)',
    category: 'Adjektive',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2', pageOrTrack: 'Track 1.3', context: 'Manche Online-Freundschaften bleiben leider sehr oberflächlich.' }
    ],
    pronunciation: '[ˈoːbɐˌflɛçlɪç]',
    comparative: 'oberflächlicher',
    superlative: 'am oberflächlichsten',
    opposite: 'gründlich / tiefgründig',
    example: 'Viele Kontakte in den sozialen Medien sind eher oberflächlich.',
    exampleTranslation: 'بسیاری از ارتباطات در شبکه‌های اجتماعی نسبتاً سطحی هستند.',
    level: 'B1+',
    tags: ['روابط', 'ارزیابی']
  },
  {
    id: 'k1-adj2',
    german: 'selbstlos',
    persian: 'فداکارانه، بدون چشم‌داشت شخصی',
    category: 'Adjektive',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 3', pageOrTrack: 'S. 15', context: 'selbstloses Engagement für die Mitmenschen' }
    ],
    pronunciation: '[ˈzɛlpstˌloːs]',
    comparative: 'selbstloser',
    superlative: 'am selbstlosesten',
    opposite: 'egoistisch',
    example: 'Er half den Flutopfern mit vollkommen selbstlosem Einsatz.',
    exampleTranslation: 'او با تلاشی کاملاً فداکارانه به آسیب‌دیدگان سیل کمک کرد.',
    level: 'B1+',
    tags: ['اخلاق', 'فداکاری']
  },
  // --- Redewendungen ---
  {
    id: 'k1-red1',
    german: 'durch dick und dünn gehen',
    persian: 'در تمام خوشی‌ها و سختی‌ها همراه و وفادار ماندن',
    category: 'Redewendungen',
    lesson: 1,
    sources: ['Lehrbuch'],
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
    german: 'ein offenes Ohr haben für',
    persian: 'با جان و دل به درد دل کسی گوش دادن',
    category: 'Redewendungen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 11', context: 'immer ein offenes Ohr für die Sorgen anderer haben' }
    ],
    explanation: 'همدلی و آمادگی کامل برای شنیدن مشکلات و حرف‌های اطرافیان.',
    example: 'Meine beste Freundin hat in jeder Lebenslage ein offenes Ohr für mich.',
    exampleTranslation: 'بهترین دوستم در هر شرایطی از زندگی با جان و دل به حرف‌هایم گوش می‌دهد.',
    level: 'B1+',
    tags: ['اصطلاح', 'همدلی']
  },

  // =========================================================================
  // KAPITEL 2: Wohnwelten (جهان‌های مسکونی)
  // =========================================================================
  // --- Verben ---
  {
    id: 'k2-v1',
    german: 'einziehen',
    persian: 'اسباب‌کشی کردن به خانه جدید، ساکن شدن',
    category: 'Verben',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 22', context: 'in eine neue Wohnung einziehen' }
    ],
    pronunciation: '[ˈaɪ̯nˌtsiːən]',
    infinitive: 'einziehen in (+ Akk.)',
    present: 'zieht ein',
    preterite: 'zog ein',
    perfect: 'ist eingezogen',
    auxiliary: 'sein',
    separable: true,
    prepositionCase: 'in + Akkusativ',
    example: 'Nächsten Monat ziehen die Studenten in ihre neue Wohngemeinschaft ein.',
    exampleTranslation: 'ماه آینده دانشجویان به خانه اشتراکی جدید خود اسباب‌کشی می‌کنند.',
    level: 'B1+',
    tags: ['مسکن', 'اسباب‌کشی']
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
    example: 'Mit zwanzig Jahren ist sie von zu Hause ausgezogen, um zu studieren.',
    exampleTranslation: 'در بیست سالگی او از خانه پدری بیرون آمد تا تحصیل کند.',
    level: 'B1+',
    tags: ['استقلال', 'مسکن']
  },
  {
    id: 'k2-v3',
    german: 'kündigen',
    persian: 'فسخ کردن (قرارداد اجاره یا کار)',
    category: 'Verben',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 24', context: 'den Mietvertrag fristgerecht kündigen' }
    ],
    pronunciation: '[ˈkʏndɪɡn̩]',
    infinitive: 'kündigen (+ Akk. / + Dat.)',
    present: 'kündigt',
    preterite: 'kündigte',
    perfect: 'hat gekündigt',
    auxiliary: 'haben',
    example: 'Der Mieter muss die Wohnung drei Monate im Voraus schriftlich kündigen.',
    exampleTranslation: 'مستأجر باید سه ماه قبل آپارتمان را به صورت کتبی فسخ کند.',
    level: 'B1+',
    tags: ['قرارداد', 'حقوق']
  },
  {
    id: 'k2-v4',
    german: 'vermieten',
    persian: 'اجاره دادن به دیگری',
    category: 'Verben',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 23', context: 'eine möblierte Wohnung vermieten' }
    ],
    pronunciation: '[fɛɐ̯ˈmiːtn̩]',
    infinitive: 'vermieten an (+ Akk.)',
    present: 'vermietet',
    preterite: 'vermietete',
    perfect: 'hat vermietet',
    auxiliary: 'haben',
    prepositionCase: 'an + Akkusativ',
    example: 'Der Vermieter vermietet das helle Zimmer ausschließlich an Studenten.',
    exampleTranslation: 'صاحبخانه این اتاق روشن را منحصراً به دانشجویان اجاره می‌دهد.',
    level: 'B1+',
    tags: ['مسکن', 'اجاره']
  },
  // --- Nomen ---
  {
    id: 'k2-n1',
    german: 'die Wohngemeinschaft',
    persian: 'خانه اشتراکی (WG)',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 24', context: 'Leben in einer Wohngemeinschaft' }
    ],
    pronunciation: '[ˈvoːnɡəˌmaɪ̯nʃaft]',
    article: 'die',
    plural: 'die Wohngemeinschaften (die WGs)',
    genderPersian: 'مونث (die)',
    example: 'In einer Wohngemeinschaft teilen sich mehrere Mitbewohner Küche und Bad.',
    exampleTranslation: 'در یک خانه اشتراکی، چندین هم‌خانه آشپزخانه و حمام را با هم شریک هستند.',
    level: 'B1+',
    tags: ['زندگی دانشجویی', 'مسکن']
  },
  {
    id: 'k2-n2',
    german: 'die Kaution',
    persian: 'مبلغ ودیعه، پول پیش ضمانت اجاره',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 25', context: 'drei Monatsmieten als Kaution hinterlegen' }
    ],
    pronunciation: '[kaʊ̯ˈtsi̯oːn]',
    article: 'die',
    plural: 'die Kautionen',
    genderPersian: 'مونث (die)',
    example: 'Vor der Schlüsselübergabe muss der Mieter die Kaution überweisen.',
    exampleTranslation: 'قبل از تحویل کلید، مستأجر باید ودیعه را واریز کند.',
    level: 'B1+',
    tags: ['قرارداد', 'امور مالی']
  },
  {
    id: 'k2-n3',
    german: 'die Nebenkosten',
    persian: 'هزینه‌های جانبی ساختمان (آب، گرمایش، نظافت و...)',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 22', context: 'Kaltmiete plus Nebenkosten ergibt die Warmmiete.' }
    ],
    pronunciation: '[ˈneːbn̩ˌkɔstn̩]',
    article: 'die',
    plural: 'die Nebenkosten (معمولاً جمع)',
    genderPersian: 'مونث (die)',
    example: 'In der Warmmiete sind die Nebenkosten für Heizung und Müllabfuhr enthalten.',
    exampleTranslation: 'در کرایه ناخالص، هزینه‌های جانبی گرمایش و حمل زباله گنجانده شده است.',
    level: 'B1+',
    tags: ['مسکن', 'هزینه‌ها']
  },
  {
    id: 'k2-n4',
    german: 'die Kündigungsfrist',
    persian: 'مهلت قانونی فسخ قرارداد',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 25', context: 'die gesetzliche Kündigungsfrist einhalten' }
    ],
    pronunciation: '[ˈkʏndɪɡʊŋsˌfʁɪst]',
    article: 'die',
    plural: 'die Kündigungsfristen',
    genderPersian: 'مونث (die)',
    example: 'Die gesetzliche Kündigungsfrist für diesen Mietvertrag beträgt drei Monate.',
    exampleTranslation: 'مهلت قانونی فسخ برای این قرارداد اجاره سه ماه است.',
    level: 'B1+',
    tags: ['حقوقی', 'قرارداد']
  },
  // --- Adjektive & Adverbien ---
  {
    id: 'k2-adj1',
    german: 'geräumig',
    persian: 'جادار، وسیع و دلباز',
    category: 'Adjektive',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 2, module: 'Modul 1', pageOrTrack: 'Track 1.14', context: 'eine sehr geräumige Dreizimmerwohnung' }
    ],
    pronunciation: '[ɡəˈʁɔɪ̯mɪç]',
    comparative: 'geräumiger',
    superlative: 'am geräumigsten',
    opposite: 'beengt / winzig',
    example: 'Das Wohnzimmer ist sehr geräumig und bietet viel Platz für Möbel.',
    exampleTranslation: 'اتاق نشیمن بسیار جادار است و فضای زیادی برای مبلمان فراهم می‌کند.',
    level: 'B1+',
    tags: ['توصیف مسکن']
  },
  {
    id: 'k2-adj2',
    german: 'bezahlbar',
    persian: 'قابل پرداخت، با قیمت مناسب و دست‌یافتنی',
    category: 'Adjektive',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 22', context: 'bezahlbaren Wohnraum in der Innenstadt finden' }
    ],
    pronunciation: '[bəˈtsaːlbaːɐ̯]',
    comparative: 'bezahlbarer',
    superlative: 'am bezahlbarsten',
    opposite: 'unbezahlbar / überteuert',
    example: 'In deutschen Großstädten wird es immer schwerer, bezahlbare Wohnungen zu finden.',
    exampleTranslation: 'در کلان‌شهرهای آلمان پیدا کردن مسکن با قیمت مناسب روز به روز سخت‌تر می‌شود.',
    level: 'B1+',
    tags: ['اقتصاد', 'مسکن']
  },
  // --- Redewendungen ---
  {
    id: 'k2-red1',
    german: 'die eigenen vier Wände',
    persian: 'خانه شخصی خود آدم، حریم مستقل زندگی',
    category: 'Redewendungen',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 22', context: 'endlich in den eigenen vier Wänden wohnen' }
    ],
    explanation: 'اشاره به استقلال مسکونی و داشتن خانه‌ای مستقل از خانواده.',
    example: 'Nach dem Studium freute er sich riesig auf die eigenen vier Wände.',
    exampleTranslation: 'پس از پایان تحصیلات دانشگاهی، او بی‌اندازه از داشتن خانه مستقل خود خوشحال بود.',
    level: 'B1+',
    tags: ['اصطلاح', 'مسکن']
  },
  {
    id: 'k2-red2',
    german: 'auf eigenen Beinen stehen',
    persian: 'روی پای خود ایستادن، از نظر مالی و زندگی مستقل بودن',
    category: 'Redewendungen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 2, module: 'Modul 3', pageOrTrack: 'Track 1.18', context: 'Junge Erwachsene wollen früh auf eigenen Beinen stehen.' }
    ],
    explanation: 'کسب استقلال کامل فردی و مالی بدون تکیه به والدین.',
    example: 'Wer eine eigene Wohnung mietet, lernt schnell, auf eigenen Beinen zu stehen.',
    exampleTranslation: 'کسی که خانه مستقلی اجاره می‌کند، سریع یاد می‌گیرد که روی پای خود بایستد.',
    level: 'B1+',
    tags: ['اصطلاح', 'استقلال']
  },

  // =========================================================================
  // KAPITEL 3: Wie geht’s denn so? (سلامت، تغذیه و سبک زندگی)
  // =========================================================================
  // --- Verben ---
  {
    id: 'k3-v1',
    german: 'sich ernähren von',
    persian: 'تغذیه کردن از، رژیم غذایی داشتن',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 34', context: 'sich gesund und ausgewogen ernähren' }
    ],
    pronunciation: '[zɪç ɛɐ̯ˈnɛːʁən]',
    infinitive: 'sich ernähren von (+ Dat.)',
    present: 'ernährt sich',
    preterite: 'ernährte sich',
    perfect: 'hat sich ernährt',
    auxiliary: 'haben',
    reflexive: true,
    prepositionCase: 'von + Dativ',
    example: 'Immer mehr Menschen ernähren sich bewusst von regionalen Bio-Produkten.',
    exampleTranslation: 'افراد بیشتری آگاهانه از محصولات ارگانیک و محلی تغذیه می‌کنند.',
    level: 'B1+',
    tags: ['تغذیه', 'سلامت']
  },
  {
    id: 'k3-v2',
    german: 'wegwerfen',
    persian: 'دور انداختن، هدر دادن (غذا یا وسایل)',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 3, module: 'Modul 2', pageOrTrack: 'Track 1.21', context: 'Lebensmittel nicht unnötig wegwerfen' }
    ],
    pronunciation: '[ˈvɛkˌvɛʁfn̩]',
    infinitive: 'wegwerfen (+ Akk.)',
    present: 'wirft weg',
    preterite: 'warf weg',
    perfect: 'hat weggeworfen',
    auxiliary: 'haben',
    separable: true,
    example: 'Viele essbare Lebensmittel werden weggeworfen, nur weil das Datum abgelaufen ist.',
    exampleTranslation: 'بسیاری از غذاهای قابل خوردن دور انداخته می‌شوند فقط چون تاریخ انقضای آن‌ها گذشته است.',
    level: 'B1+',
    tags: ['ضایعات', 'محیط زیست']
  },
  {
    id: 'k3-v3',
    german: 'verzichten auf',
    persian: 'صرف‌نظر کردن از، چشم‌پوشی کردن از',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 35', context: 'auf Zucker und Fertiggerichte verzichten' }
    ],
    pronunciation: '[fɛɐ̯ˈtsɪçtn̩]',
    infinitive: 'verzichten auf (+ Akk.)',
    present: 'verzichtet',
    preterite: 'verzichtete',
    perfect: 'hat verzichtet',
    auxiliary: 'haben',
    prepositionCase: 'auf + Akkusativ',
    example: 'Wer fit bleiben möchte, sollte auf zu viel Zucker und Fast Food verzichten.',
    exampleTranslation: 'کسی که می‌خواهد تندرست بماند، باید از قند زیاد و فست‌فود صرف‌نظر کند.',
    level: 'B1+',
    tags: ['سلامت', 'رژیم']
  },
  {
    id: 'k3-v4',
    german: 'zubereiten',
    persian: 'آماده و طبخ کردن (غذا)',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 36', context: 'eine frische Mahlzeit zubereiten' }
    ],
    pronunciation: '[ˈtsuːbəˌʁaɪ̯tn̩]',
    infinitive: 'zubereiten (+ Akk.)',
    present: 'bereitet zu',
    preterite: 'bereitete zu',
    perfect: 'hat zubereitet',
    auxiliary: 'haben',
    separable: true,
    example: 'Am Wochenende nimmt sie sich Zeit, ein traditionelles Gericht frisch zuzubereiten.',
    exampleTranslation: 'آخر هفته او وقت می‌گذارد تا یک غذای سنتی را تازه طبخ کند.',
    level: 'B1+',
    tags: ['آشپزی', 'غذا']
  },
  // --- Nomen ---
  {
    id: 'k3-n1',
    german: 'die Nahrungsmittelverschwendung',
    persian: 'هدررفت و اسراف مواد غذایی',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 3, module: 'Modul 2', pageOrTrack: 'Track 1.21', context: 'Kampf gegen Nahrungsmittelverschwendung' }
    ],
    pronunciation: '[ˈnaːʁʊŋsmɪtl̩fɛɐ̯ˌʃvɛndʊŋ]',
    article: 'die',
    plural: 'die Nahrungsmittelverschwendung (بدون جمع)',
    genderPersian: 'مونث (die)',
    example: 'Initiativen setzen sich aktiv gegen die weltweite Nahrungsmittelverschwendung ein.',
    exampleTranslation: 'کمپین‌ها به طور فعال علیه اسراف جهانی مواد غذایی تلاش می‌کنند.',
    level: 'B1+',
    tags: ['محیط زیست', 'تغذیه']
  },
  {
    id: 'k3-n2',
    german: 'das Mindesthaltbarkeitsdatum',
    persian: 'حداقل تاریخ انقضا و بهترین زمان مصرف (MHD)',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 2', pageOrTrack: 'S. 37', context: 'Das Mindesthaltbarkeitsdatum ist kein Wegwerfdatum.' }
    ],
    pronunciation: '[ˈmɪndəsthaltbaːɐ̯kaɪ̯tsˌdaːtʊm]',
    article: 'das',
    plural: 'die Mindesthaltbarkeitsdaten',
    genderPersian: 'خنثی (das)',
    example: 'Lebensmittel sind oft noch Wochen nach dem Mindesthaltbarkeitsdatum genießbar.',
    exampleTranslation: 'مواد غذایی اغلب تا هفته‌ها پس از حداقل تاریخ انقضا نیز قابل خوردن هستند.',
    level: 'B1+',
    tags: ['خرید', 'تغذیه']
  },
  {
    id: 'k3-n3',
    german: 'der Biorhythmus',
    persian: 'ریتم و ساعت بیولوژیکی بدن',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 3, module: 'Modul 3', pageOrTrack: 'Track 1.22', context: 'Der Biorhythmus bestimmt unsere Leistungsfähigkeit.' }
    ],
    pronunciation: '[ˈbiːoˌʁʏtmʊs]',
    article: 'der',
    plural: 'die Biorhythmen',
    genderPersian: 'مذکر (der)',
    example: 'Wer nach seinem natürlichen Biorhythmus lebt, ist tagsüber konzentrierter und fitter.',
    exampleTranslation: 'کسی که مطابق با ریتم طبیعی بدن خود زندگی کند، در طول روز متمرکزتر و پرانرژی‌تر است.',
    level: 'B1+',
    tags: ['سلامت', 'زیست‌شناسی']
  },
  // --- Adjektive & Adverbien ---
  {
    id: 'k3-adj1',
    german: 'ausgewogen',
    persian: 'متعادل، همه‌جانبه و متناسب (رژیم غذایی)',
    category: 'Adjektive',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 34', context: 'eine ausgewogene Ernährung mit viel Gemüse' }
    ],
    pronunciation: '[ˈaʊ̯sɡəˌvoːɡn̩]',
    comparative: 'ausgewogener',
    superlative: 'am ausgewogensten',
    opposite: 'einseitig',
    example: 'Eine ausgewogene Ernährung liefert dem Körper alle lebenswichtigen Vitamine.',
    exampleTranslation: 'یک رژیم غذایی متعادل تمام ویتامین‌های حیاتی را به بدن می‌رساند.',
    level: 'B1+',
    tags: ['تغذیه', 'سلامتی']
  },
  {
    id: 'k3-adj2',
    german: 'genießbar',
    persian: 'قابل خوردن و مصرف، سالم و فاسدنشده',
    category: 'Adjektive',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 2', pageOrTrack: 'S. 37', context: 'Produkte sind nach Ablauf noch genießbar.' }
    ],
    pronunciation: '[ɡəˈniːsbaːɐ̯]',
    comparative: 'genießbarer',
    superlative: 'am genießbarsten',
    opposite: 'ungenießbar / verdorben',
    example: 'Riechen und probieren Sie das Produkt: Meist ist es vollkommen genießbar.',
    exampleTranslation: 'محصول را بو کرده و بچشید: معمولاً کاملاً قابل خوردن و سالم است.',
    level: 'B1+',
    tags: ['کیفیت غذا']
  },
  // --- Redewendungen ---
  {
    id: 'k3-red1',
    german: 'Liebe geht durch den Magen',
    persian: 'مهر و محبت از طریق غذای لذیذ و دست‌پخت خوشمزه بیشتر می‌شود',
    category: 'Redewendungen',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 36', context: 'Sprichwörter rund ums Essen' }
    ],
    explanation: 'تأثیر پذیرایی و آشپزی عالی در جلب محبت و ایجاد پیوند عاطفی.',
    example: 'Er kocht bei jedem Date ein Drei-Gänge-Menü, denn Liebe geht durch den Magen.',
    exampleTranslation: 'او در هر قرار یک منوی ۳بخشی طبخ می‌کند، زیرا محبت از سفره و طعم خوب آغاز می‌شود.',
    level: 'B1+',
    tags: ['ضرب‌المثل', 'تغذیه']
  },

  // =========================================================================
  // KAPITEL 4: Viel Spaß! (اوقات فراغت، ورزش و هیجان)
  // =========================================================================
  // --- Verben ---
  {
    id: 'k4-v1',
    german: 'sich entspannen',
    persian: 'استراحت کردن، ریلکس و آرام شدن',
    category: 'Verben',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 1', pageOrTrack: 'S. 46', context: 'sich am Wochenende bei Musik entspannen' }
    ],
    pronunciation: '[zɪç ɛntˈʃpanən]',
    infinitive: 'sich entspannen bei (+ Dat.)',
    present: 'entspannt sich',
    preterite: 'entspannte sich',
    perfect: 'hat sich entspannt',
    auxiliary: 'haben',
    reflexive: true,
    prepositionCase: 'bei + Dativ',
    example: 'Nach einem langen Arbeitstag entspannt sie sich am liebsten mit einem guten Buch.',
    exampleTranslation: 'پس از یک روز کاری طولانی، او ترجیح می‌دهد با یک کتاب خوب آرامش یابد.',
    level: 'B1+',
    tags: ['آرامش', 'فراغت']
  },
  {
    id: 'k4-v2',
    german: 'unternehmen',
    persian: 'دست به کاری زدن، انجام دادن یک گردش یا فعالیت',
    category: 'Verben',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 4, module: 'Modul 1', pageOrTrack: 'Track 1.23', context: 'Was unternehmen Sie am liebsten am Wochenende?' }
    ],
    pronunciation: '[ˌʊntɐˈneːmən]',
    infinitive: 'unternehmen (+ Akk.)',
    present: 'unternimmt',
    preterite: 'unternahm',
    perfect: 'hat unternommen',
    auxiliary: 'haben',
    example: 'Am Samstag wollen wir gemeinsam einen Ausflug in die Berge unternehmen.',
    exampleTranslation: 'روز شنبه می‌خواهیم با هم یک سفر و گردش به کوهستان ترتیب دهیم.',
    level: 'B1+',
    tags: ['گردش', 'فعالیت']
  },
  {
    id: 'k4-v3',
    german: 'abschalten',
    persian: 'فکر کار را کنار گذاشتن، ذهن را استراحت دادن',
    category: 'Verben',
    lesson: 4,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 1', pageOrTrack: 'S. 47', context: 'beim Sport völlig abschalten' }
    ],
    pronunciation: '[ˈapˌʃaltn̩]',
    infinitive: 'abschalten',
    present: 'schaltet ab',
    preterite: 'schaltete ab',
    perfect: 'hat abgeschaltet',
    auxiliary: 'haben',
    separable: true,
    example: 'Beim Joggen in der Natur kann ich die Sorgen des Alltags völlig abschalten.',
    exampleTranslation: 'هنگام دویدن در طبیعت می‌توانم دغدغه‌های روزمره را کاملاً خاموش کنم.',
    level: 'B1+',
    tags: ['سلامت روان', 'ورزش']
  },
  // --- Nomen ---
  {
    id: 'k4-n1',
    german: 'der Nervenkitzel',
    persian: 'هیجان و آدرنالین شدید، حس ماجراجویی',
    category: 'Nomen',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 3', pageOrTrack: 'S. 50', context: 'Extremsportler suchen den Nervenkitzel.' }
    ],
    pronunciation: '[ˈnɛʁfn̩ˌkɪtsl̩]',
    article: 'der',
    plural: 'der Nervenkitzel (بدون جمع)',
    genderPersian: 'مذکر (der)',
    example: 'Beim Bungee-Jumping sucht man den absoluten Nervenkitzel.',
    exampleTranslation: 'در ورزش بانجی‌جامپینگ فرد به دنبال هیجان و آدرنالین محض است.',
    level: 'B1+',
    tags: ['ورزش', 'هیجان']
  },
  {
    id: 'k4-n2',
    german: 'die Sehenswürdigkeit',
    persian: 'جاذبه دیدنی، مکان تاریخی و توریستی',
    category: 'Nomen',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 4, module: 'Modul 4', pageOrTrack: 'Track 1.29', context: 'Historische Sehenswürdigkeiten bei der Nachtwächter-Führung' }
    ],
    pronunciation: '[ˈzeːənsˌvʏʁdɪçkaɪ̯t]',
    article: 'die',
    plural: 'die Sehenswürdigkeiten',
    genderPersian: 'مونث (die)',
    example: 'Zürich besitzt zahlreiche historische Sehenswürdigkeiten aus dem Mittelalter.',
    exampleTranslation: 'شهر زوریخ دارای جاذبه‌های دیدنی تاریخی متعددی از قرون وسطی است.',
    level: 'B1+',
    tags: ['گردشگری', 'تاریخ']
  },
  // --- Adjektive & Adverbien ---
  {
    id: 'k4-adj1',
    german: 'atemberaubend',
    persian: 'نفس‌گیر، خارق‌العاده و شگفت‌انگیز',
    category: 'Adjektive',
    lesson: 4,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 3', pageOrTrack: 'S. 51', context: 'eine atemberaubende Aussicht von den Bergen' }
    ],
    pronunciation: '[ˈaːtəmˌbəʁaʊ̯bn̩t]',
    comparative: 'atemberaubender',
    superlative: 'am atemberaubendsten',
    opposite: 'langweilig / unspektakulär',
    example: 'Der Blick vom Berggipfel über das Tal war einfach atemberaubend.',
    exampleTranslation: 'منظره از قله کوه بر فراز دره واقعاً نفس‌گیر و شگفت‌انگیز بود.',
    level: 'B1+',
    tags: ['طبیعت', 'توصیف']
  },
  // --- Redewendungen ---
  {
    id: 'k4-red1',
    german: 'die Seele baumeln lassen',
    persian: 'استراحت مطلق کردن و به آرامش روح و روان پرداختن',
    category: 'Redewendungen',
    lesson: 4,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 1', pageOrTrack: 'S. 46', context: 'Im Urlaub einfach mal die Seele baumeln lassen.' }
    ],
    explanation: 'تسکین ذهن و فرار از هرگونه استرس و مسئولیت.',
    example: 'Am Strand am See kann man herrlich liegen und die Seele baumeln lassen.',
    exampleTranslation: 'کنار ساحل دریاچه می‌توان به زیبایی دراز کشید و به روح و روان آرامش داد.',
    level: 'B1+',
    tags: ['اصطلاح', 'آرامش']
  },

  // =========================================================================
  // KAPITEL 5: Alles will gelernt sein (آموزش، حافظه و مهارت‌ها)
  // =========================================================================
  // --- Verben ---
  {
    id: 'k5-v1',
    german: 'sich einprägen',
    persian: 'به خاطر سپردن، ملکه ذهن کردن',
    category: 'Verben',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 5, module: 'Modul 3', pageOrTrack: 'Track 1.35', context: 'Wie prägt man sich Vokabeln am besten ein?' }
    ],
    pronunciation: '[zɪç ˈaɪ̯nˌpʁɛːɡn̩]',
    infinitive: 'sich (+ Dat.) einprägen (+ Akk.)',
    present: 'prägt sich ein',
    preterite: 'prägte sich ein',
    perfect: 'hat sich eingeprägt',
    auxiliary: 'haben',
    reflexive: true,
    separable: true,
    example: 'Mit Eselsbrücken und Beispielsätzen kann man sich neue Wörter dauerhaft einprägen.',
    exampleTranslation: 'با ترفندهای یادسپاری و جملات مثال می‌توان کلمات جدید را برای همیشه به خاطر سپرد.',
    level: 'B1+',
    tags: ['حافظه', 'یادگیری']
  },
  {
    id: 'k5-v2',
    german: 'fördern',
    persian: 'پرورش دادن، تقویت و حمایت کردن',
    category: 'Verben',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 2', pageOrTrack: 'S. 60', context: 'die kognitiven Fähigkeiten gezielt fördern' }
    ],
    pronunciation: '[ˈfœʁdɐn]',
    infinitive: 'fördern (+ Akk.)',
    present: 'fördert',
    preterite: 'förderte',
    perfect: 'hat gefördert',
    auxiliary: 'haben',
    example: 'Gute Lehrer fördern die individuellen Talente und Stärken jedes Schülers.',
    exampleTranslation: 'معلمان خوب استعدادها و توانمندی‌های فردی هر دانش‌آموز را پرورش می‌دهند.',
    level: 'B1+',
    tags: ['آموزش', 'رشد']
  },
  {
    id: 'k5-v3',
    german: 'erwerben',
    persian: 'کسب کردن، به دست آوردن (دانش، مدرک یا مهارت)',
    category: 'Verben',
    lesson: 5,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 1', pageOrTrack: 'S. 58', context: 'wertvolle Qualifikationen im Kurs erwerben' }
    ],
    pronunciation: '[ɛɐ̯ˈvɛʁbn̩]',
    infinitive: 'erwerben (+ Akk.)',
    present: 'erwirbt',
    preterite: 'erwarb',
    perfect: 'hat erworben',
    auxiliary: 'haben',
    example: 'In der Fortbildung hat sie fundierte Kenntnisse im Projektmanagement erworben.',
    exampleTranslation: 'در دوره ارتقای مهارت، او دانش عمیقی در مدیریت پروژه کسب کرد.',
    level: 'B1+',
    tags: ['دانش', 'مهارت']
  },
  // --- Nomen ---
  {
    id: 'k5-n1',
    german: 'die Volkshochschule',
    persian: 'مرکز آموزش مردمی و بزرگسالان (VHS)',
    category: 'Nomen',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 5, module: 'Modul 1', pageOrTrack: 'Track 1.30', context: 'Kursangebote der Volkshochschule für Sprachen und IT' }
    ],
    pronunciation: '[ˈfɔlksˌhoːxʃuːlə]',
    article: 'die',
    plural: 'die Volkshochschulen (die VHS)',
    genderPersian: 'مونث (die)',
    example: 'An der Volkshochschule kann man günstig Fremdsprachen und berufliche Fähigkeiten lernen.',
    exampleTranslation: 'در مرکز آموزش مردمی می‌توان زبان‌های خارجی و مهارت‌های شغلی را با هزینه مناسب آموخت.',
    level: 'B1+',
    tags: ['آموزش', 'جامعه']
  },
  {
    id: 'k5-n2',
    german: 'das Gedächtnis',
    persian: 'حافظه، قدرت یادآوری',
    category: 'Nomen',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 3', pageOrTrack: 'S. 62', context: 'Das Gedächtnis durch regelmäßiges Training stärken' }
    ],
    pronunciation: '[ɡəˈdɛçtnɪs]',
    article: 'das',
    plural: 'die Gedächtnisse',
    genderPersian: 'خنثی (das)',
    example: 'Durch tägliche Denkübungen bleibt das Gedächtnis auch im Alter leistungsfähig.',
    exampleTranslation: 'با تمرین‌های فکری روزانه، حافظه حتی در سنین بالا نیز کارآمد می‌ماند.',
    level: 'B1+',
    tags: ['روانشناسی', 'ذهن']
  },
  // --- Adjektive & Adverbien ---
  {
    id: 'k5-adj1',
    german: 'hochbegabt',
    persian: 'تیزهوش، دارای نبوغ و استعداد ویژه',
    category: 'Adjektive',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 5, module: 'DVD Kapitel 5', pageOrTrack: 'DVD (S. 201)', context: 'Hochbegabte Kinder brauchen spezielle Förderung.' }
    ],
    pronunciation: '[ˈhoːxbəˌɡaːpt]',
    comparative: 'hochbegabter',
    superlative: 'am hochbegabtesten',
    opposite: 'durchschnittlich',
    example: 'Das hochbegabte Kind beherrscht bereits mit sieben Jahren virtuos das Klavierspiel.',
    exampleTranslation: 'این کودک تیزهوش در هفت سالگی ساز پیانو را استادانه می‌نوازد.',
    level: 'B1+',
    tags: ['استعداد', 'هوش']
  },
  // --- Redewendungen ---
  {
    id: 'k5-red1',
    german: 'man lernt nie aus',
    persian: 'انسان هیچ‌وقت از آموختن بی‌نیاز نمی‌شود (ز گهواره تا گور دانش بجوی)',
    category: 'Redewendungen',
    lesson: 5,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 1', pageOrTrack: 'S. 58', context: 'Lebenslanges Lernen: Man lernt nie aus.' }
    ],
    explanation: 'تأکید بر لزوم یادگیری مستمر در تمام طول حیات.',
    example: 'Auch nach 40 Jahren Berufserfahrung gilt: Man lernt eben nie aus.',
    exampleTranslation: 'حتی بعد از ۴۰ سال سابقه کاری حقیقت این است: آدم هیچ‌وقت از یادگیری بی‌نیاز نمی‌شود.',
    level: 'B1+',
    tags: ['ضرب‌المثل', 'دانش']
  },

  // =========================================================================
  // KAPITEL 6: Berufsbilder (مشاغل، بازار کار و آینده شغلی)
  // =========================================================================
  // --- Verben ---
  {
    id: 'k6-v1',
    german: 'sich bewerben um',
    persian: 'درخواست دادن برای، اپلای کردن برای (شغل یا موقعیت)',
    category: 'Verben',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 1', pageOrTrack: 'S. 70', context: 'sich um eine offene Stelle bewerben' }
    ],
    pronunciation: '[zɪç bəˈvɛʁbn̩ ʊm]',
    infinitive: 'sich bewerben um (+ Akk.)',
    present: 'bewirbt sich',
    preterite: 'bewarb sich',
    perfect: 'hat sich beworben',
    auxiliary: 'haben',
    reflexive: true,
    prepositionCase: 'um + Akkusativ',
    example: 'Er hat sich erfolgreich um eine Stelle als IT-Consultant beworben.',
    exampleTranslation: 'او با موفقیت برای موقعیت شغلی به عنوان مشاور فناوری اطلاعات اقدام کرد.',
    level: 'B1+',
    tags: ['استخدام', 'شغل']
  },
  {
    id: 'k6-v2',
    german: 'einstellen',
    persian: 'استخدام کردن به کارمند',
    category: 'Verben',
    lesson: 6,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 2', pageOrTrack: 'S. 72', context: 'neue Mitarbeiter im Unternehmen einstellen' }
    ],
    pronunciation: '[ˈaɪ̯nˌʃtɛlən]',
    infinitive: 'einstellen (+ Akk.)',
    present: 'stellt ein',
    preterite: 'stellte ein',
    perfect: 'hat eingestellt',
    auxiliary: 'haben',
    separable: true,
    example: 'Das wachsende Software-Unternehmen möchte dieses Jahr zehn neue Entwickler einstellen.',
    exampleTranslation: 'این شرکت نرم‌افزاری رو به رشد می‌خواهد امسال ده توسعه‌دهنده جدید استخدام کند.',
    level: 'B1+',
    tags: ['استخدام', 'شرکت']
  },
  {
    id: 'k6-v3',
    german: 'verhandeln über',
    persian: 'مذاکره کردن بر سر (حقوق، شرایط کاری)',
    category: 'Verben',
    lesson: 6,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 1', pageOrTrack: 'S. 71', context: 'über das Gehalt und Arbeitszeiten verhandeln' }
    ],
    pronunciation: '[fɛɐ̯ˈhandl̩n]',
    infinitive: 'verhandeln über (+ Akk.)',
    present: 'verhandelt',
    preterite: 'verhandelte',
    perfect: 'hat verhandelt',
    auxiliary: 'haben',
    prepositionCase: 'über + Akkusativ',
    example: 'Im Vorstellungsgespräch verhandelte sie selbstbewusst über ihr Einstiegsgehalt.',
    exampleTranslation: 'در مصاحبه کاری او با اعتماد به نفس درباره حقوق پایه خود مذاکره کرد.',
    level: 'B1+',
    tags: ['مذاکره', 'درآمد']
  },
  // --- Nomen ---
  {
    id: 'k6-n1',
    german: 'das Vorstellungsgespräch',
    persian: 'مصاحبه استخدامی و شغلی',
    category: 'Nomen',
    lesson: 6,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 1', pageOrTrack: 'S. 71', context: 'Tipps für ein erfolgreiches Vorstellungsgespräch' }
    ],
    pronunciation: '[ˈfoːɐ̯ʃtɛlʊŋsɡəˌʃpʁɛːç]',
    article: 'das',
    plural: 'die Vorstellungsgespräche',
    genderPersian: 'خنثی (das)',
    example: 'Eine gute Vorbereitung auf typische Fragen ist der Schlüssel zum Vorstellungsgespräch.',
    exampleTranslation: 'آمادگی خوب برای سوالات متداول، کلید موفقیت در مصاحبه استخدامی است.',
    level: 'B1+',
    tags: ['کاریابی', 'مصاحبه']
  },
  {
    id: 'k6-n2',
    german: 'die Walz',
    persian: 'سنت کهن سفر کاری نجاران و صنعت‌گران دوره‌گرد',
    category: 'Nomen',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 6, module: 'DVD Kapitel 6', pageOrTrack: 'DVD (S. 202 - Auf der Walz)', context: 'Handwerksgesellen auf der traditionellen Walz' }
    ],
    pronunciation: '[valts]',
    article: 'die',
    plural: 'die Wanderschaft (معمولاً مفرد)',
    genderPersian: 'مونث (die)',
    example: 'Auf der Walz reisen junge Handwerker drei Jahre und einen Tag durch die Welt.',
    exampleTranslation: 'در سنت والز، کارآموزان جوان سه سال و یک روز در دنیا سفر و کار می‌کنند.',
    level: 'B1+',
    tags: ['سنت', 'صنعت']
  },
  // --- Adjektive & Adverbien ---
  {
    id: 'k6-adj1',
    german: 'abwechslungsreich',
    persian: 'متنوع، دارای تغییر و بدون یکنواختی',
    category: 'Adjektive',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 6, module: 'Modul 2', pageOrTrack: 'Track 2.6', context: 'Junge Menschen suchen abwechslungsreiche Aufgaben.' }
    ],
    pronunciation: '[ˈapvɛkslʊŋsˌʁaɪ̯ç]',
    comparative: 'abwechslungsreicher',
    superlative: 'am abwechslungsreichsten',
    opposite: 'monoton / eintönig',
    example: 'Die Aufgaben eines Tauchlehrers sind spannend und überaus abwechslungsreich.',
    exampleTranslation: 'وظایف یک مربی غواصی مهیج و فوق‌العاده متنوع است.',
    level: 'B1+',
    tags: ['شغل', 'رضایت']
  },
  // --- Redewendungen ---
  {
    id: 'k6-red1',
    german: 'die Ärmel hochkrempeln',
    persian: 'آستین‌ها را بالا زدن، با جدیت و پشتکار شروع به کار کردن',
    category: 'Redewendungen',
    lesson: 6,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 1', pageOrTrack: 'S. 70', context: 'Jetzt heißt es: Ärmel hochkrempeln und anpacken!' }
    ],
    explanation: 'آمادگی عملی برای کار سخت و حل مشکلات بدون اتلاف وقت.',
    example: 'Vor der Deadline müssen wir alle die Ärmel hochkrempeln und zusammenhalten.',
    exampleTranslation: 'قبل از پایان موعد تحویل پروژه، همه ما باید آستین‌ها را بالا بزنیم و همکاری کنیم.',
    level: 'B1+',
    tags: ['اصطلاح', 'انگیزه']
  },

  // =========================================================================
  // KAPITEL 7: Für immer und ewig (عشق، ازدواج و روابط خانوادگی)
  // =========================================================================
  // --- Verben ---
  {
    id: 'k7-v1',
    german: 'sich scheiden lassen',
    persian: 'طلاق گرفتن، به پیوند زناشویی پایان دادن',
    category: 'Verben',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 7, module: 'Modul 1', pageOrTrack: 'Track 2.14', context: 'Jedes dritte Ehepaar lässt sich heutzutage scheiden.' }
    ],
    pronunciation: '[zɪç ˈʃaɪ̯dn̩ ˈlasn̩]',
    infinitive: 'sich scheiden lassen',
    present: 'lässt sich scheiden',
    preterite: 'ließ sich scheiden',
    perfect: 'hat sich scheiden lassen',
    auxiliary: 'haben',
    reflexive: true,
    example: 'Nach zehn Jahren Ehe haben sie sich im gegenseitigen Einvernehmen scheiden lassen.',
    exampleTranslation: 'پس از ده سال زندگی مشترک، آن‌ها با توافق دوطرفه از هم طلاق گرفتند.',
    level: 'B1+',
    tags: ['خانواده', 'حقوق']
  },
  {
    id: 'k7-v2',
    german: 'streiten über',
    persian: 'مشاجره و بحث کردن درباره',
    category: 'Verben',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 2', pageOrTrack: 'S. 84', context: 'oft über alltägliche Finanzen streiten' }
    ],
    pronunciation: '[ˈʃtʁaɪ̯tn̩ ˈyːbɐ]',
    infinitive: 'streiten über (+ Akk.)',
    present: 'streitet',
    preterite: 'stritt',
    perfect: 'hat gestritten',
    auxiliary: 'haben',
    prepositionCase: 'über + Akkusativ',
    example: 'Paare streiten in Beziehungen am häufigsten über Geld und Hausarbeit.',
    exampleTranslation: 'زوج‌ها در روابط بیش از هر چیز بر سر پول و کارهای خانه بحث می‌کنند.',
    level: 'B1+',
    tags: ['اختلاف', 'رابطه']
  },
  // --- Nomen ---
  {
    id: 'k7-n1',
    german: 'die Patchworkfamilie',
    persian: 'خانواده ناتنی / ترکیبی (حاصل از ازدواج‌های قبلی)',
    category: 'Nomen',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 3', pageOrTrack: 'S. 86', context: 'Herausforderungen in einer Patchworkfamilie meistern' }
    ],
    pronunciation: '[ˈpɛtʃvœʁkfaˌmiːli̯ə]',
    article: 'die',
    plural: 'die Patchworkfamilien',
    genderPersian: 'مونث (die)',
    example: 'Das Zusammenleben in einer Patchworkfamilie erfordert viel Geduld und Toleranz.',
    exampleTranslation: 'زندگی در یک خانواده ترکیبی مستلزم صبر و مدارای فراوان است.',
    level: 'B1+',
    tags: ['خانواده مدرن']
  },
  {
    id: 'k7-n2',
    german: 'die Scheidungsrate',
    persian: 'نرخ و آمار طلاق در جامعه',
    category: 'Nomen',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 7, module: 'Modul 1', pageOrTrack: 'Track 2.14', context: 'Entwicklung der Scheidungsrate in Großstädten' }
    ],
    pronunciation: '[ˈʃaɪ̯dʊŋsˌʁaːtə]',
    article: 'die',
    plural: 'die Scheidungsraten',
    genderPersian: 'مونث (die)',
    example: 'In vielen europäischen Ländern ist die Scheidungsrate in den letzten Jahrzehnten gestiegen.',
    exampleTranslation: 'در بسیاری از کشورهای اروپایی نرخ طلاق در دهه‌های اخیر افزایش یافته است.',
    level: 'B1+',
    tags: ['آمار', 'جامعه']
  },
  // --- Adjektive & Adverbien ---
  {
    id: 'k7-adj1',
    german: 'harmonisch',
    persian: 'هماهنگ، سازگار و سرشار از آرامش',
    category: 'Adjektive',
    lesson: 7,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 1', pageOrTrack: 'S. 82', context: 'eine harmonische Partnerschaft führen' }
    ],
    pronunciation: '[haʁˈmoːnɪʃ]',
    comparative: 'harmonischer',
    superlative: 'am harmonischsten',
    opposite: 'zerstritten / konfliktreich',
    example: 'Gegenseitiger Respekt ist die Basis für ein harmonisches Familienleben.',
    exampleTranslation: 'احترام متقابل پایه و اساس یک زندگی خانوادگی هماهنگ و آرام است.',
    level: 'B1+',
    tags: ['رابطه', 'آرامش']
  },
  // --- Redewendungen ---
  {
    id: 'k7-red1',
    german: 'auf Wolke sieben schweben',
    persian: 'در اوج شور و نشاط عاشقی بودن، غرق در شادی بودن',
    category: 'Redewendungen',
    lesson: 7,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 1', pageOrTrack: 'S. 82', context: 'Frisch Verliebte schweben auf Wolke sieben.' }
    ],
    explanation: 'حالت سرخوشی شدید در آغاز یک رابطه عاشقانه.',
    example: 'Seit ihrer Verlobung schweben die beiden überglücklich auf Wolke sieben.',
    exampleTranslation: 'از زمان نامزدی‌شان، آن دو غرق در شور و شادی عاشقانه هستند.',
    level: 'B1+',
    tags: ['اصطلاح', 'عشق']
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
