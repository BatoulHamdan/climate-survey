const Personal = [
    {
      id: 0,
      question: {
        en: "Gender",
        ar: "الجنس",
        fa: "جنسیت",
        fr: "Genre",
        it: "Genere"
      },
      options: [
        { value: "Male", label: { en: "Male", ar: "ذكر", fa: "مرد", fr: "Homme", it: "Maschio" } },
        { value: "Female", label: { en: "Female", ar: "أنثى", fa: "زن", fr: "Femme", it: "Femmina" } }
      ],
      multiple: false,
    },
    {
      id: 1,
      question: {
        en: "Region of Birth",
        ar: "منطقة الميلاد",
        fa: "منطقه تولد",
        fr: "Région de naissance",
        it: "Regione di nascita"
      },
      options: [
        { value: "Africa", label: { en: "Africa", ar: "أفريقيا", fa: "آفریقا", fr: "Afrique", it: "Africa" } },
        { value: "Asia", label: { en: "Asia", ar: "آسيا", fa: "آسیا", fr: "Asie", it: "Asia" } },
        { value: "Australia", label: { en: "Australia", ar: "أستراليا", fa: "استرالیا", fr: "Australie", it: "Australia" } },
        { value: "Europe", label: { en: "Europe", ar: "أوروبا", fa: "اروپا", fr: "Europe", it: "Europa" } },
        { value: "North America", label: { en: "North America", ar: "أمريكا الشمالية", fa: "آمریکای شمالی", fr: "Amérique du Nord", it: "Nord America" } },
        { value: "South America", label: { en: "South America", ar: "أمريكا الجنوبية", fa: "آمریکای جنوبی", fr: "Amérique du Sud", it: "Sud America" } }
      ],
      multiple: false,
    },
    {
      id: 2,
      question: {
        en: "Region of Residence",
        ar: "منطقة الإقامة",
        fa: "منطقه اقامت",
        fr: "Région de résidence",
        it: "Regione di residenza"
      },
      options: [
        { value: "Africa", label: { en: "Africa", ar: "أفريقيا", fa: "آفریقا", fr: "Afrique", it: "Africa" } },
        { value: "Asia", label: { en: "Asia", ar: "آسيا", fa: "آسیا", fr: "Asie", it: "Asia" } },
        { value: "Australia", label: { en: "Australia", ar: "أستراليا", fa: "استرالیا", fr: "Australie", it: "Australia" } },
        { value: "Europe", label: { en: "Europe", ar: "أوروبا", fa: "اروپا", fr: "Europe", it: "Europa" } },
        { value: "North America", label: { en: "North America", ar: "أمريكا الشمالية", fa: "آمریکای شمالی", fr: "Amérique du Nord", it: "Nord America" } },
        { value: "South America", label: { en: "South America", ar: "أمريكا الجنوبية", fa: "آمریکای جنوبی", fr: "Amérique du Sud", it: "Sud America" } }
      ],
      multiple: false,
    },
    {
      id: 3,
      question: {
        en: "How long ago did you move to your current country of residence?",
        ar: "منذ متى انتقلت إلى بلد إقامتك الحالي؟",
        fa: "چه مدت پیش به کشور محل اقامت فعلی خود نقل مکان کردید؟",
        fr: "Depuis combien de temps avez-vous déménagé dans votre pays de résidence actuel ?",
        it: "Quanto tempo fa ti sei trasferito nel tuo attuale paese di residenza?"
      },
      options: [
        { value: "<5 years", label: { en: "<5 years", ar: "أقل من 5 سنوات", fa: "کمتر از ۵ سال", fr: "Moins de 5 ans", it: "Meno di 5 anni" } },
        { value: "5-10 years", label: { en: "5-10 years", ar: "5-10 سنوات", fa: "۵ تا ۱۰ سال", fr: "5 à 10 ans", it: "5-10 anni" } },
        { value: ">10 years", label: { en: ">10 years", ar: "أكثر من 10 سنوات", fa: "بیش از ۱۰ سال", fr: "Plus de 10 ans", it: "Oltre 10 anni" } }
      ],
      multiple: false,
    },
    {
        id: 4,
        question: {
          en: "Do you have children?",
          ar: "هل لديك أطفال؟",
          fa: "آیا فرزند دارید؟",
          fr: "Avez-vous des enfants ?",
          it: "Hai figli?"
        },
        options: [
          { value: "Yes", label: { en: "Yes", ar: "نعم", fa: "بله", fr: "Oui", it: "Sì" } },
          { value: "No", label: { en: "No", ar: "لا", fa: "خیر", fr: "Non", it: "No" } }
        ],
        multiple: false,
      },
      {
        id: 5,
        question: {
          en: "Education Level (Highest achieved or currently pursuing)",
          ar: "المستوى التعليمي (أعلى مستوى تم تحقيقه أو يتم متابعته حاليًا)",
          fa: "سطح تحصیلات (بالاترین مدرک کسب‌شده یا در حال تحصیل)",
          fr: "Niveau d'éducation (le plus élevé atteint ou en cours)",
          it: "Livello di istruzione (più alto raggiunto o attualmente in corso)"
        },
        options: [
          { value: "Elementary School", label: { en: "Elementary School", ar: "المدرسة الابتدائية", fa: "مدرسه ابتدایی", fr: "École primaire", it: "Scuola elementare" } },
          { value: "High School Degree", label: { en: "High School Degree", ar: "شهادة الثانوية", fa: "دیپلم دبیرستان", fr: "Diplôme de lycée", it: "Diploma di scuola superiore" } },
          { value: "Undergraduate Degree", label: { en: "Undergraduate Degree", ar: "درجة البكالوريوس", fa: "مدرک کارشناسی", fr: "Diplôme de licence", it: "Laurea triennale" } },
          { value: "Postgraduate Degree", label: { en: "Postgraduate Degree", ar: "درجة الدراسات العليا", fa: "مدرک کارشناسی ارشد", fr: "Diplôme de master", it: "Laurea magistrale" } },
          { value: "PhD Degree", label: { en: "PhD Degree", ar: "درجة الدكتوراه", fa: "مدرک دکترا", fr: "Doctorat", it: "Dottorato di ricerca" } }
        ],
        multiple: false,
      },
      {
        id: 6,
        question: {
          en: "Job Status",
          ar: "الوضع الوظيفي",
          fa: "وضعیت شغلی",
          fr: "Statut professionnel",
          it: "Stato lavorativo"
        },
        options: [
          { value: "Unemployed", label: { en: "Unemployed", ar: "عاطل عن العمل", fa: "بیکار", fr: "Sans emploi", it: "Disoccupato" } },
          { value: "Employed", label: { en: "Employed", ar: "موظف", fa: "شاغل", fr: "Employé", it: "Impiegato" } },
          { value: "Freelance", label: { en: "Freelance", ar: "عمل حر", fa: "فریلنسر", fr: "Freelance", it: "Libero professionista" } },
          { value: "Business Owner", label: { en: "Business Owner", ar: "صاحب عمل", fa: "صاحب کسب‌وکار", fr: "Propriétaire d'entreprise", it: "Imprenditore" } }
        ],
        multiple: false,
      },
      {
        id: 7,
        question: {
          en: "Job Role",
          ar: "الدور الوظيفي",
          fa: "نقش شغلی",
          fr: "Fonction",
          it: "Ruolo lavorativo"
        },
        options: [
          { value: "Engineering/Technical", label: { en: "Engineering/Technical", ar: "الهندسة / التقنية", fa: "فنی / مهندسی", fr: "Ingénierie / Technique", it: "Ingegneria / Tecnico" } },
          { value: "Human Resources", label: { en: "Human Resources", ar: "الموارد البشرية", fa: "منابع انسانی", fr: "Ressources humaines", it: "Risorse umane" } },
          { value: "Marketing", label: { en: "Marketing", ar: "التسويق", fa: "بازاریابی", fr: "Marketing", it: "Marketing" } },
          { value: "Legal", label: { en: "Legal", ar: "قانوني", fa: "حقوقی", fr: "Juridique", it: "Legale" } },
          { value: "Finance", label: { en: "Finance", ar: "المالية", fa: "مالی", fr: "Finance", it: "Finanza" } }
        ],
        multiple: false,
      },
      {
        id: 8,
        question: {
          en: "Job Level",
          ar: "المستوى الوظيفي",
          fa: "سطح شغلی",
          fr: "Niveau de poste",
          it: "Livello lavorativo"
        },
        options: [
          { value: "Entry Level", label: { en: "Entry Level", ar: "مبتدئ", fa: "سطح ابتدایی", fr: "Débutant", it: "Livello base" } },
          { value: "Senior Level", label: { en: "Senior Level", ar: "مستوى متقدم", fa: "سطح ارشد", fr: "Niveau senior", it: "Livello senior" } },
          { value: "Management Level", label: { en: "Management Level", ar: "المستوى الإداري", fa: "سطح مدیریتی", fr: "Niveau de gestion", it: "Livello di gestione" } },
          { value: "Executive Management", label: { en: "Executive Management", ar: "الإدارة التنفيذية", fa: "مدیریت اجرایی", fr: "Direction générale", it: "Gestione esecutiva" } }
        ],
        multiple: false,
      },
      {
        id: 9,
        question: {
          en: "Topic(s) of interest",
          ar: "الموضوعات التي تهمك",
          fa: "موضوع(های) مورد علاقه",
          fr: "Sujets d'intérêt",
          it: "Argomenti di interesse"
        },
        options: [
          { value: "Politics", label: { en: "Politics", ar: "السياسة", fa: "سیاست", fr: "Politique", it: "Politica" } },
          { value: "History", label: { en: "History", ar: "التاريخ", fa: "تاریخ", fr: "Histoire", it: "Storia" } },
          { value: "Culture", label: { en: "Culture", ar: "الثقافة", fa: "فرهنگ", fr: "Culture", it: "Cultura" } },
          { value: "Economics", label: { en: "Economics", ar: "الاقتصاد", fa: "اقتصاد", fr: "Économie", it: "Economia" } },
          { value: "Geography", label: { en: "Geography", ar: "الجغرافيا", fa: "جغرافیا", fr: "Géographie", it: "Geografia" } },
          { value: "HealthNutrition", label: { en: "Health & Nutrition", ar: "الصحة والتغذية", fa: "سلامت و تغذیه", fr: "Santé et nutrition", it: "Salute e nutrizione" } }
        ],
        multiple: true,
      },
      {
        id: 10,
        question: {
          en: "Social Media Usage",
          ar: "استخدام وسائل التواصل الاجتماعي",
          fa: "میزان استفاده از شبکه‌های اجتماعی",
          fr: "Utilisation des réseaux sociaux",
          it: "Utilizzo dei social media"
        },
        options: [
          { value: "0-1 hour/day", label: { en: "0-1 hour/day", ar: "0-1 ساعة/يوم", fa: "۰ تا ۱ ساعت در روز", fr: "0-1 heure/jour", it: "0-1 ora/giorno" } },
          { value: "1-3 hours/day", label: { en: "1-3 hours/day", ar: "1-3 ساعات/يوم", fa: "۱ تا ۳ ساعت در روز", fr: "1-3 heures/jour", it: "1-3 ore/giorno" } },
          { value: "3-5 hours/day", label: { en: "3-5 hours/day", ar: "3-5 ساعات/يوم", fa: "۳ تا ۵ ساعت در روز", fr: "3-5 heures/jour", it: "3-5 ore/giorno" } },
          { value: "5+ hours/day", label: { en: "5+ hours/day", ar: "5+ ساعات/يوم", fa: "بیش از ۵ ساعت در روز", fr: "5+ heures/jour", it: "5+ ore/giorno" } }
        ],
        multiple: false,
      },
      {
        id: 11,
        question: {
          en: "How concerned are you that policies to address global warming will increase your cost of living?",
          ar: "ما مدى قلقك من أن تؤدي السياسات لمعالجة الاحتباس الحراري إلى زيادة تكاليف المعيشة؟",
          fa: "چقدر نگران هستید که سیاست‌های مقابله با گرمایش جهانی هزینه زندگی‌تان را افزایش دهند؟",
          fr: "Dans quelle mesure êtes-vous préoccupé par le fait que les politiques contre le réchauffement climatique augmentent votre coût de la vie ?",
          it: "Quanto sei preoccupato che le politiche contro il riscaldamento globale aumentino il costo della vita?"
        },
        options: [
          { value: "Very concerned", label: { en: "Very concerned", ar: "قلق جدًا", fa: "خیلی نگرانم", fr: "Très préoccupé", it: "Molto preoccupato" } },
          { value: "Somewhat concerned", label: { en: "Somewhat concerned", ar: "قلق إلى حد ما", fa: "تا حدی نگرانم", fr: "Assez préoccupé", it: "Un po' preoccupato" } },
          { value: "Not very concerned", label: { en: "Not very concerned", ar: "لست قلقًا كثيرًا", fa: "خیلی نگران نیستم", fr: "Peu préoccupé", it: "Poco preoccupato" } },
          { value: "Not at all concerned", label: { en: "Not at all concerned", ar: "لست قلقًا على الإطلاق", fa: "اصلاً نگران نیستم", fr: "Pas du tout préoccupé", it: "Per niente preoccupato" } },
          { value: "Don’t know", label: { en: "Don’t know", ar: "لا أعلم", fa: "نمی‌دانم", fr: "Je ne sais pas", it: "Non so" } }
        ],
        multiple: false,
      },
      {
        id: 12,
        question: {
          en: "How important is it to you that this country leads the world in new technologies and innovation?",
          ar: "ما مدى أهمية أن تتصدر بلدك العالم في التقنيات والابتكار؟",
          fa: "چقدر برای شما مهم است که کشور شما در فناوری و نوآوری پیشرو باشد؟",
          fr: "Dans quelle mesure est-il important pour vous que votre pays soit à la pointe de la technologie et de l'innovation ?",
          it: "Quanto è importante per te che il tuo paese guidi il mondo nelle nuove tecnologie e innovazioni?"
        },
        options: [
          { value: "Extremely important", label: { en: "Extremely important", ar: "مهم جدًا", fa: "بسیار مهم", fr: "Extrêmement important", it: "Estremamente importante" } },
          { value: "Very important", label: { en: "Very important", ar: "مهم جدًا", fa: "خیلی مهم", fr: "Très important", it: "Molto importante" } },
          { value: "Moderately important", label: { en: "Moderately important", ar: "مهم إلى حد ما", fa: "تا حدی مهم", fr: "Modérément important", it: "Moderatamente importante" } },
          { value: "Slightly important", label: { en: "Slightly important", ar: "قليل الأهمية", fa: "کمی مهم", fr: "Légèrement important", it: "Poco importante" } },
          { value: "Not important at all", label: { en: "Not important at all", ar: "غير مهم إطلاقًا", fa: "اصلاً مهم نیست", fr: "Pas du tout important", it: "Per niente importante" } }
        ],
        multiple: false,
      },
      {
        id: 13,
        question: {
          en: "Do you agree or disagree with the statement: True patriotism means leaving the country better than you found it.",
          ar: "هل توافق أو تختلف مع العبارة: الوطنية الحقيقية تعني ترك البلد في حال أفضل مما وجدته؟",
          fa: "آیا با این جمله موافقید یا مخالف: وطن‌پرستی واقعی یعنی اینکه کشور را بهتر از آنچه بود ترک کنیم؟",
          fr: "Êtes-vous d'accord ou pas avec cette affirmation : Le véritable patriotisme signifie laisser le pays dans un meilleur état que vous ne l'avez trouvé.",
          it: "Sei d'accordo o in disaccordo con l'affermazione: Il vero patriottismo significa lasciare il paese meglio di come lo hai trovato."
        },
        options: [
          { value: "Strongly agree", label: { en: "Strongly agree", ar: "أوافق بشدة", fa: "کاملاً موافقم", fr: "Tout à fait d'accord", it: "Fortemente d'accordo" } },
          { value: "Somewhat agree", label: { en: "Somewhat agree", ar: "أوافق إلى حد ما", fa: "تا حدی موافقم", fr: "Plutôt d'accord", it: "Abbastanza d'accordo" } },
          { value: "Neither agree nor disagree", label: { en: "Neither agree nor disagree", ar: "لا أوافق ولا أعارض", fa: "نه موافقم نه مخالف", fr: "Ni d'accord ni pas d'accord", it: "Né d'accordo né in disaccordo" } },
          { value: "Somewhat disagree", label: { en: "Somewhat disagree", ar: "أعارض إلى حد ما", fa: "تا حدی مخالفم", fr: "Plutôt pas d'accord", it: "Abbastanza in disaccordo" } },
          { value: "Strongly disagree", label: { en: "Strongly disagree", ar: "أعارض بشدة", fa: "کاملاً مخالفم", fr: "Tout à fait en désaccord", it: "Fortemente in disaccordo" } }
        ],
        multiple: false,
      },
      {
        id: 14,
        question: {
          en: "On social and political issues, where would you place yourself?",
          ar: "فيما يتعلق بالقضايا الاجتماعية والسياسية، أين تصنّف نفسك؟",
          fa: "در مسائل اجتماعی و سیاسی، خود را در کجا قرار می‌دهید؟",
          fr: "Sur les questions sociales et politiques, où vous situez-vous ?",
          it: "Su questioni sociali e politiche, dove ti collochi?"
        },
        options: [
          { value: "Very liberal", label: { en: "Very liberal", ar: "ليبرالي جدًا", fa: "بسیار لیبرال", fr: "Très libéral", it: "Molto liberale" } },
          { value: "Slightly liberal", label: { en: "Slightly liberal", ar: "ليبرالي بعض الشيء", fa: "کمی لیبرال", fr: "Légèrement libéral", it: "Leggermente liberale" } },
          { value: "Moderate / Middle of the road", label: { en: "Moderate / Middle of the road", ar: "معتدل", fa: "میانه‌رو", fr: "Modéré", it: "Moderato" } },
          { value: "Slightly conservative", label: { en: "Slightly conservative", ar: "محافظ تقليدي بعض الشيء", fa: "کمی محافظه‌کار", fr: "Légèrement conservateur", it: "Leggermente conservatore" } },
          { value: "Conservative", label: { en: "Conservative", ar: "محافظ تقليدي", fa: "محافظه‌کار", fr: "Conservateur", it: "Conservatore" } },
          { value: "Very conservative", label: { en: "Very conservative", ar: "محافظ تقليدي جدًا", fa: "بسیار محافظه‌کار", fr: "Très conservateur", it: "Molto conservatore" } },
          { value: "Prefer not to answer", label: { en: "Prefer not to answer", ar: "أفضل عدم الإجابة", fa: "ترجیح می‌دهم پاسخ ندهم", fr: "Je préfère ne pas répondre", it: "Preferisco non rispondere" } }
        ],
        multiple: false,
      },
      {
        id: 15,
        question: {
          en: "An ideal society requires some groups to be on top and others to be on the bottom.",
          ar: "المجتمع المثالي يتطلب أن تكون بعض المجموعات في القمة وأخرى في القاع.",
          fa: "یک جامعه ایده‌آل نیاز دارد برخی گروه‌ها بالا و برخی پایین باشند.",
          fr: "Une société idéale nécessite que certains groupes soient au sommet et d'autres au bas de l'échelle.",
          it: "Una società ideale richiede che alcuni gruppi siano in cima e altri in basso."
        },
        options: [
          { value: "Strongly oppose", label: { en: "Strongly oppose", ar: "أعارض بشدة", fa: "کاملاً مخالفم", fr: "Fortement opposé", it: "Fortemente contrario" } },
          { value: "Somewhat oppose", label: { en: "Somewhat oppose", ar: "أعارض إلى حد ما", fa: "تا حدی مخالفم", fr: "Plutôt opposé", it: "Abbastanza contrario" } },
          { value: "Neutral", label: { en: "Neutral", ar: "محايد", fa: "بی‌طرف", fr: "Neutre", it: "Neutrale" } },
          { value: "Somewhat favor", label: { en: "Somewhat favor", ar: "أؤيد إلى حد ما", fa: "تا حدی موافقم", fr: "Plutôt favorable", it: "Abbastanza favorevole" } },
          { value: "Strongly favor", label: { en: "Strongly favor", ar: "أؤيد بشدة", fa: "کاملاً موافقم", fr: "Fortement favorable", it: "Fortemente favorevole" } }
        ],
        multiple: false,
      },
      {
        id: 16,
        question: {
          en: "Do you feel optimistic or pessimistic about the future?",
          ar: "هل تشعر بالتفاؤل أم التشاؤم بشأن المستقبل؟",
          fa: "نسبت به آینده خوشبین هستید یا بدبین؟",
          fr: "Vous sentez-vous optimiste ou pessimiste quant à l'avenir ?",
          it: "Ti senti ottimista o pessimista riguardo al futuro?"
        },
        options: [
          { value: "Very optimistic", label: { en: "Very optimistic", ar: "متفائل جدًا", fa: "بسیار خوشبین", fr: "Très optimiste", it: "Molto ottimista" } },
          { value: "Somewhat optimistic", label: { en: "Somewhat optimistic", ar: "متفائل إلى حد ما", fa: "تا حدی خوشبین", fr: "Plutôt optimiste", it: "Abbastanza ottimista" } },
          { value: "Neither optimistic nor pessimistic", label: { en: "Neither optimistic nor pessimistic", ar: "لا متفائل ولا متشائم", fa: "نه خوشبین نه بدبین", fr: "Ni optimiste ni pessimiste", it: "Né ottimista né pessimista" } },
          { value: "Somewhat pessimistic", label: { en: "Somewhat pessimistic", ar: "متشائم إلى حد ما", fa: "تا حدی بدبین", fr: "Plutôt pessimiste", it: "Abbastanza pessimista" } },
          { value: "Very pessimistic", label: { en: "Very pessimistic", ar: "متشائم جدًا", fa: "بسیار بدبین", fr: "Très pessimiste", it: "Molto pessimista" } }
        ],
        multiple: false,
      },
      {
        id: 17,
        question: {
          en: "Do you think the number of immigrants to your country should be increased, reduced, or remain the same?",
          ar: "هل تعتقد أن عدد المهاجرين إلى بلدك يجب أن يزداد أو ينخفض أو يبقى كما هو؟",
          fa: "آیا فکر می‌کنید تعداد مهاجران به کشور شما باید افزایش یابد، کاهش یابد یا ثابت بماند؟",
          fr: "Pensez-vous que le nombre d'immigrants dans votre pays devrait augmenter, diminuer ou rester le même ?",
          it: "Pensi che il numero di immigrati nel tuo paese dovrebbe aumentare, diminuire o rimanere lo stesso?"
        },
        options: [
          { value: "Increased", label: { en: "Increased", ar: "يزداد", fa: "افزایش یابد", fr: "Augmenter", it: "Aumentare" } },
          { value: "Remain the same", label: { en: "Remain the same", ar: "يبقى كما هو", fa: "ثابت بماند", fr: "Rester le même", it: "Rimanere lo stesso" } },
          { value: "Reduced", label: { en: "Reduced", ar: "ينخفض", fa: "کاهش یابد", fr: "Diminuer", it: "Diminuire" } }
        ],
        multiple: false,
      }       
  ];
  
export default Personal;
  