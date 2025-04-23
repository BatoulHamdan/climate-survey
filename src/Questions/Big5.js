const Big5 = [
    {
      id: 83,
      question: {
        en: "I see myself as someone who is reserved.",
        ar: "أرى نفسي كشخص خجول.",
        fa: "من خود را به عنوان فردی که کم حرف است می‌بینم.",
        fr: "Je me considère comme une personne réservée.",
        it: "Mi vedo come una persona riservata."
      },
      options: [
        { label: { en: "Disagree strongly", ar: "أختلف بشدة", fa: "کاملاً مخالفم", fr: "Pas du tout d'accord", it: "Fortemente in disaccordo" }, value: "disagree_strongly" },
        { label: { en: "Disagree a little", ar: "أختلف قليلاً", fa: "مخالفم کمی", fr: "Pas tout à fait d'accord", it: "Non d'accordo" }, value: "disagree_a_little" },
        { label: { en: "Neither agree nor disagree", ar: "لا أوافق ولا أعارض", fa: "نه موافقم نه مخالفم", fr: "Ni d'accord ni pas d'accord", it: "Né d'accord né in disaccordo" }, value: "neutral" },
        { label: { en: "Agree a little", ar: "أوافق قليلاً", fa: "موافقم قليلاً", fr: "Plutôt d'accord", it: "D'accordo un po'" }, value: "agree_a_little" },
        { label: { en: "Agree strongly", ar: "أوافق بشدة", fa: "موافقم بشدة", fr: "Tout à fait d'accord", it: "Fortemente d'accordo" }, value: "agree_strongly" }
      ]
    },
    {
      id: 84,
      question: {
        en: "I see myself as someone who is generally trusting.",
        ar: "أرى نفسي كشخص يثق بالآخرين بشكل عام.",
        fa: "من خود را به عنوان فردی که معمولاً به دیگران اعتماد دارد می‌بینم.",
        fr: "Je me considère comme une personne généralement confiante.",
        it: "Mi vedo come una persona generalmente fiduciosa."
      },
      options: [
        { label: { en: "Disagree strongly", ar: "أختلف بشدة", fa: "کاملاً مخالفم", fr: "Pas du tout d'accord", it: "Fortemente in disaccordo" }, value: "disagree_strongly" },
        { label: { en: "Disagree a little", ar: "أختلف قليلاً", fa: "مخالفم قليلاً", fr: "Pas tout à fait d'accord", it: "Non d'accordo" }, value: "disagree_a_little" },
        { label: { en: "Neither agree nor disagree", ar: "لا أوافق ولا أعارض", fa: "نه موافقم نه مخالفم", fr: "Ni d'accord ni pas d'accord", it: "Né d'accord né in disaccordo" }, value: "neutral" },
        { label: { en: "Agree a little", ar: "أوافق قليلاً", fa: "موافقم قليلاً", fr: "Plutôt d'accord", it: "D'accordo un po'" }, value: "agree_a_little" },
        { label: { en: "Agree strongly", ar: "أوافق بشدة", fa: "موافقم بشدة", fr: "Tout à fait d'accord", it: "Fortemente d'accordo" }, value: "agree_strongly" }
      ]
    },
    {
      id: 85,
      question: {
        en: "I see myself as someone who tends to be lazy.",
        ar: "أرى نفسي كشخص يميل إلى الكسل.",
        fa: "من خود را به عنوان فردی که معمولاً تنبل است می‌بینم.",
        fr: "Je me considère comme une personne qui a tendance à être paresseuse.",
        it: "Mi vedo come una persona che tende ad essere pigra."
      },
      options: [
        { label: { en: "Disagree strongly", ar: "أختلف بشدة", fa: "کاملاً مخالفم", fr: "Pas du tout d'accord", it: "Fortemente in disaccordo" }, value: "disagree_strongly" },
        { label: { en: "Disagree a little", ar: "أختلف قليلاً", fa: "مخالفم قليلاً", fr: "Pas tout à fait d'accord", it: "Non d'accordo" }, value: "disagree_a_little" },
        { label: { en: "Neither agree nor disagree", ar: "لا أوافق ولا أعارض", fa: "نه موافقم نه مخالفم", fr: "Ni d'accord ni pas d'accord", it: "Né d'accord né in disaccordo" }, value: "neutral" },
        { label: { en: "Agree a little", ar: "أوافق قليلاً", fa: "موافقم قليلاً", fr: "Plutôt d'accord", it: "D'accordo un po'" }, value: "agree_a_little" },
        { label: { en: "Agree strongly", ar: "أوافق بشدة", fa: "موافقم بشدة", fr: "Tout à fait d'accord", it: "Fortemente d'accordo" }, value: "agree_strongly" }
      ]
    },
    {
      id: 86,
      question: {
        en: "I see myself as someone who is relaxed, handles stress well.",
        ar: "أرى نفسي كشخص هادئ ويعالج التوتر جيدًا.",
        fa: "من خود را به عنوان فردی که آرام است و به خوبی استرس را مدیریت می‌کند می‌بینم.",
        fr: "Je me considère comme une personne détendue, qui gère bien le stress.",
        it: "Mi vedo come una persona rilassata, che gestisce bene lo stress."
      },
      options: [
        { label: { en: "Disagree strongly", ar: "أختلف بشدة", fa: "کاملاً مخالفم", fr: "Pas du tout d'accord", it: "Fortemente in disaccordo" }, value: "disagree_strongly" },
        { label: { en: "Disagree a little", ar: "أختلف قليلاً", fa: "مخالفم قليلاً", fr: "Pas tout à fait d'accord", it: "Non d'accordo" }, value: "disagree_a_little" },
        { label: { en: "Neither agree nor disagree", ar: "لا أوافق ولا أعارض", fa: "نه موافقم نه مخالفم", fr: "Ni d'accord ni pas d'accord", it: "Né d'accord né in disaccordo" }, value: "neutral" },
        { label: { en: "Agree a little", ar: "أوافق قليلاً", fa: "موافقم قليلاً", fr: "Plutôt d'accord", it: "D'accordo un po'" }, value: "agree_a_little" },
        { label: { en: "Agree strongly", ar: "أوافق بشدة", fa: "موافقم بشدة", fr: "Tout à fait d'accord", it: "Fortemente d'accordo" }, value: "agree_strongly" }
      ]
    },
    {
        id: 87,
        question: {
          en: "I see myself as someone who has few artistic interests.",
          ar: "أرى نفسي كشخص لديه اهتمام ضئيل بالفن.",
          fa: "من خود را به عنوان فردی که علاقه کمی به هنر دارد می‌بینم.",
          fr: "Je me considère comme quelqu'un qui a peu d'intérêts artistiques.",
          it: "Mi vedo come una persona con pochi interessi artistici."
        },
        options: [
          { label: { en: "Disagree strongly", ar: "أختلف بشدة", fa: "کاملاً مخالفم", fr: "Pas du tout d'accord", it: "Fortemente in disaccordo" }, value: "disagree_strongly" },
          { label: { en: "Disagree a little", ar: "أختلف قليلاً", fa: "مخالفم قليلاً", fr: "Pas tout à fait d'accord", it: "Non d'accordo" }, value: "disagree_a_little" },
          { label: { en: "Neither agree nor disagree", ar: "لا أوافق ولا أعارض", fa: "نه موافقم نه مخالفم", fr: "Ni d'accord ni pas d'accord", it: "Né d'accord né in disaccordo" }, value: "neutral" },
          { label: { en: "Agree a little", ar: "أوافق قليلاً", fa: "موافقم قليلاً", fr: "Plutôt d'accord", it: "D'accordo un po'" }, value: "agree_a_little" },
          { label: { en: "Agree strongly", ar: "أوافق بشدة", fa: "موافقم بشدة", fr: "Tout à fait d'accord", it: "Fortemente d'accordo" }, value: "agree_strongly" }
        ]
      },
      {
        id: 88,
        question: {
          en: "I see myself as someone who is outgoing, sociable.",
          ar: "أرى نفسي كشخص اجتماعي ومنفتح.",
          fa: "من خود را به عنوان فردی که اجتماعی و برون‌گرا است می‌بینم.",
          fr: "Je me considère comme une personne extravertie, sociable.",
          it: "Mi vedo come una persona estroversa e socievole."
        },
        options: [
          { label: { en: "Disagree strongly", ar: "أختلف بشدة", fa: "کاملاً مخالفم", fr: "Pas du tout d'accord", it: "Fortemente in disaccordo" }, value: "disagree_strongly" },
          { label: { en: "Disagree a little", ar: "أختلف قليلاً", fa: "مخالفم قليلاً", fr: "Pas tout à fait d'accord", it: "Non d'accordo" }, value: "disagree_a_little" },
          { label: { en: "Neither agree nor disagree", ar: "لا أوافق ولا أعارض", fa: "نه موافقم نه مخالفم", fr: "Ni d'accord ni pas d'accord", it: "Né d'accord né in disaccordo" }, value: "neutral" },
          { label: { en: "Agree a little", ar: "أوافق قليلاً", fa: "موافقم قليلاً", fr: "Plutôt d'accord", it: "D'accordo un po'" }, value: "agree_a_little" },
          { label: { en: "Agree strongly", ar: "أوافق بشدة", fa: "موافقم بشدة", fr: "Tout à fait d'accord", it: "Fortemente d'accordo" }, value: "agree_strongly" }
        ]
      },
      {
        id: 89,
        question: {
          en: "I see myself as someone who tends to find fault with others.",
          ar: "أرى نفسي كشخص يميل إلى لوم الآخرين.",
          fa: "من خود را به عنوان فردی که تمایل دارد دیگران را سرزنش کند می‌بینم.",
          fr: "Je me considère comme une personne qui a tendance à critiquer les autres.",
          it: "Mi vedo come una persona che tende a trovare difetti negli altri."
        },
        options: [
          { label: { en: "Disagree strongly", ar: "أختلف بشدة", fa: "کاملاً مخالفم", fr: "Pas du tout d'accord", it: "Fortemente in disaccordo" }, value: "disagree_strongly" },
          { label: { en: "Disagree a little", ar: "أختلف قليلاً", fa: "مخالفم قليلاً", fr: "Pas tout à fait d'accord", it: "Non d'accordo" }, value: "disagree_a_little" },
          { label: { en: "Neither agree nor disagree", ar: "لا أوافق ولا أعارض", fa: "نه موافقم نه مخالفم", fr: "Ni d'accord ni pas d'accord", it: "Né d'accord né in disaccordo" }, value: "neutral" },
          { label: { en: "Agree a little", ar: "أوافق قليلاً", fa: "موافقم قليلاً", fr: "Plutôt d'accord", it: "D'accordo un po'" }, value: "agree_a_little" },
          { label: { en: "Agree strongly", ar: "أوافق بشدة", fa: "موافقم بشدة", fr: "Tout à fait d'accord", it: "Fortemente d'accordo" }, value: "agree_strongly" }
        ]
      },
      {
        id: 90,
        question: {
          en: "I see myself as someone who does a thorough job.",
          ar: "أرى نفسي كشخص يؤدي عمله بشكل دقيق.",
          fa: "من خود را به عنوان فردی که کار خود را به طور دقیق انجام می‌دهد می‌بینم.",
          fr: "Je me considère comme une personne qui fait un travail approfondi.",
          it: "Mi vedo come una persona che fa un lavoro accurato."
        },
        options: [
          { label: { en: "Disagree strongly", ar: "أختلف بشدة", fa: "کاملاً مخالفم", fr: "Pas du tout d'accord", it: "Fortemente in disaccordo" }, value: "disagree_strongly" },
          { label: { en: "Disagree a little", ar: "أختلف قليلاً", fa: "مخالفم قليلاً", fr: "Pas tout à fait d'accord", it: "Non d'accordo" }, value: "disagree_a_little" },
          { label: { en: "Neither agree nor disagree", ar: "لا أوافق ولا أعارض", fa: "نه موافقم نه مخالفم", fr: "Ni d'accord ni pas d'accord", it: "Né d'accord né in disaccordo" }, value: "neutral" },
          { label: { en: "Agree a little", ar: "أوافق قليلاً", fa: "موافقم قليلاً", fr: "Plutôt d'accord", it: "D'accordo un po'" }, value: "agree_a_little" },
          { label: { en: "Agree strongly", ar: "أوافق بشدة", fa: "موافقم بشدة", fr: "Tout à fait d'accord", it: "Fortemente d'accordo" }, value: "agree_strongly" }
        ]
      },
      {
        id: 91,
        question: {
          en: "I see myself as someone who gets nervous easily.",
          ar: "أرى نفسي كشخص يصبح عصبيًا بسهولة.",
          fa: "من خود را به عنوان فردی که به راحتی عصبی می‌شود می‌بینم.",
          fr: "Je me considère comme quelqu'un qui devient nerveux facilement.",
          it: "Mi vedo come una persona che si nervosisce facilmente."
        },
        options: [
          { label: { en: "Disagree strongly", ar: "أختلف بشدة", fa: "کاملاً مخالفم", fr: "Pas du tout d'accord", it: "Fortemente in disaccordo" }, value: "disagree_strongly" },
          { label: { en: "Disagree a little", ar: "أختلف قليلاً", fa: "مخالفم قليلاً", fr: "Pas tout à fait d'accord", it: "Non d'accordo" }, value: "disagree_a_little" },
          { label: { en: "Neither agree nor disagree", ar: "لا أوافق ولا أعارض", fa: "نه موافقم نه مخالفم", fr: "Ni d'accord ni pas d'accord", it: "Né d'accord né in disaccordo" }, value: "neutral" },
          { label: { en: "Agree a little", ar: "أوافق قليلاً", fa: "موافقم قليلاً", fr: "Plutôt d'accord", it: "D'accordo un po'" }, value: "agree_a_little" },
          { label: { en: "Agree strongly", ar: "أوافق بشدة", fa: "موافقم بشدة", fr: "Tout à fait d'accord", it: "Fortemente d'accordo" }, value: "agree_strongly" }
        ]
      },
      {
        id: 92,
        question: {
          en: "I see myself as someone who has an active imagination.",
          ar: "أرى نفسي كشخص لديه خيال نشط.",
          fa: "من خود را به عنوان فردی با تخیلی فعال می‌بینم.",
          fr: "Je me considère comme quelqu'un qui a une imagination active.",
          it: "Mi vedo come una persona con una fervida immaginazione."
        },
        options: [
          { label: { en: "Disagree strongly", ar: "أختلف بشدة", fa: "کاملاً مخالفم", fr: "Pas du tout d'accord", it: "Fortemente in disaccordo" }, value: "disagree_strongly" },
          { label: { en: "Disagree a little", ar: "أختلف قليلاً", fa: "کمی مخالفم", fr: "Pas tout à fait d'accord", it: "Non molto d'accordo" }, value: "disagree_a_little" },
          { label: { en: "Neither agree nor disagree", ar: "لا أوافق ولا أعارض", fa: "نه موافقم نه مخالفم", fr: "Ni d'accord ni pas d'accord", it: "Né d'accordo né in disaccordo" }, value: "neutral" },
          { label: { en: "Agree a little", ar: "أوافق قليلاً", fa: "کمی موافقم", fr: "Plutôt d'accord", it: "Abbastanza d'accordo" }, value: "agree_a_little" },
          { label: { en: "Agree strongly", ar: "أوافق بشدة", fa: "کاملاً موافقم", fr: "Tout à fait d'accord", it: "Fortemente d'accordo" }, value: "agree_strongly" }
        ]
      }      
  ];
  
export default Big5;