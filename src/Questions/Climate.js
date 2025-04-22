const Climate = [
    {
      id: 32,
      question: {
        en: "Do you think that global warming is happening?",
        ar: "هل تعتقد أن الاحتباس الحراري يحدث؟",
        fa: "آیا فکر می‌کنید گرم شدن زمین در حال وقوع است؟",
        fr: "Pensez-vous que le réchauffement climatique est en cours ?",
        it: "Pensi che il riscaldamento globale stia accadendo?"
      },
      options: [
        {
          value: "Yes",
          label: {
            en: "Yes",
            ar: "نعم",
            fa: "بله",
            fr: "Oui",
            it: "Sì"
          }
        },
        {
          value: "No",
          label: {
            en: "No",
            ar: "لا",
            fa: "خیر",
            fr: "Non",
            it: "No"
          }
        },
        {
          value: "Don’t know",
          label: {
            en: "Don’t know",
            ar: "لا أعرف",
            fa: "نمی‌دانم",
            fr: "Je ne sais pas",
            it: "Non so"
          }
        }
      ]
    },
    // {
    //     id: 33,
    //     question: {
    //       en: "Assuming global warming is happening, do you think it is… ?",
    //       ar: "بافتراض أن الاحتباس الحراري يحدث، هل تعتقد أنه...؟",
    //       fa: "با فرض اینکه گرم شدن زمین در حال وقوع است، فکر می‌کنید که آن...",
    //       fr: "En supposant que le réchauffement climatique est en cours, pensez-vous qu’il est... ?",
    //       it: "Supponendo che il riscaldamento globale stia avvenendo, pensi che sia...?"
    //     },
    //     options: [
    //       {
    //         value: "Caused mostly by human activities",
    //         label: {
    //           en: "Caused mostly by human activities",
    //           ar: "ناتج في الغالب عن الأنشطة البشرية",
    //           fa: "عمدتاً ناشی از فعالیت‌های انسانی",
    //           fr: "Principalement causé par les activités humaines",
    //           it: "Causato principalmente dalle attività umane"
    //         }
    //       },
    //       {
    //         value: "Caused mostly by natural changes in the environment",
    //         label: {
    //           en: "Caused mostly by natural changes in the environment",
    //           ar: "ناتج في الغالب عن التغيرات الطبيعية في البيئة",
    //           fa: "عمدتاً ناشی از تغییرات طبیعی در محیط زیست",
    //           fr: "Principalement causé par des changements naturels dans l'environnement",
    //           it: "Causato principalmente da cambiamenti naturali nell'ambiente"
    //         }
    //       },
    //       {
    //         value: "None of the above because global warming isn’t happening",
    //         label: {
    //           en: "None of the above because global warming isn’t happening",
    //           ar: "لا شيء مما سبق لأن الاحتباس الحراري لا يحدث",
    //           fa: "هیچ‌کدام از موارد بالا زیرا گرم شدن زمین اتفاق نمی‌افتد",
    //           fr: "Aucune des réponses ci-dessus car le réchauffement climatique ne se produit pas",
    //           it: "Nessuna delle precedenti perché il riscaldamento globale non sta accadendo"
    //         }
    //       },
    //       {
    //         value: "Other",
    //         label: {
    //           en: "Other",
    //           ar: "أخرى",
    //           fa: "سایر",
    //           fr: "Autre",
    //           it: "Altro"
    //         }
    //       },
    //       {
    //         value: "Don’t know",
    //         label: {
    //           en: "Don’t know",
    //           ar: "لا أعرف",
    //           fa: "نمی‌دانم",
    //           fr: "Je ne sais pas",
    //           it: "Non so"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 34,
    //     question: {
    //       en: "Which comes closest to your own view about what most scientists think?",
    //       ar: "ما هو الرأي الأقرب إلى وجهة نظرك حول ما يعتقده معظم العلماء؟",
    //       fa: "کدام مورد نزدیک‌ترین نظر به دیدگاه شما در مورد نظر بیشتر دانشمندان است؟",
    //       fr: "Quel énoncé reflète le plus votre propre opinion sur ce que pensent la plupart des scientifiques ?",
    //       it: "Quale di queste affermazioni riflette meglio la tua opinione su ciò che pensano la maggior parte degli scienziati?"
    //     },
    //     options: [
    //       {
    //         value: "Most scientists think global warming is happening",
    //         label: {
    //           en: "Most scientists think global warming is happening",
    //           ar: "يعتقد معظم العلماء أن الاحتباس الحراري يحدث",
    //           fa: "بیشتر دانشمندان معتقدند که گرم شدن زمین در حال وقوع است",
    //           fr: "La plupart des scientifiques pensent que le réchauffement climatique est en cours",
    //           it: "La maggior parte degli scienziati pensa che il riscaldamento globale stia accadendo"
    //         }
    //       },
    //       {
    //         value: "There is a lot of disagreement among scientists about whether or not global warming is happening",
    //         label: {
    //           en: "There is a lot of disagreement among scientists about whether or not global warming is happening",
    //           ar: "هناك الكثير من الخلاف بين العلماء حول ما إذا كان الاحتباس الحراري يحدث أم لا",
    //           fa: "در میان دانشمندان اختلاف نظر زیادی درباره وقوع یا عدم وقوع گرم شدن زمین وجود دارد",
    //           fr: "Il y a beaucoup de désaccord entre les scientifiques sur la réalité du réchauffement climatique",
    //           it: "C'è molto disaccordo tra gli scienziati sul fatto che il riscaldamento globale stia accadendo o meno"
    //         }
    //       },
    //       {
    //         value: "Most scientists think global warming is not happening",
    //         label: {
    //           en: "Most scientists think global warming is not happening",
    //           ar: "يعتقد معظم العلماء أن الاحتباس الحراري لا يحدث",
    //           fa: "بیشتر دانشمندان معتقدند که گرم شدن زمین در حال وقوع نیست",
    //           fr: "La plupart des scientifiques pensent que le réchauffement climatique ne se produit pas",
    //           it: "La maggior parte degli scienziati pensa che il riscaldamento globale non stia accadendo"
    //         }
    //       },
    //       {
    //         value: "Don’t know enough to say",
    //         label: {
    //           en: "Don’t know enough to say",
    //           ar: "لا أعرف بما فيه الكفاية لأقول",
    //           fa: "اطلاعات کافی برای اظهار نظر ندارم",
    //           fr: "Je n'en sais pas assez pour dire",
    //           it: "Non ne so abbastanza per dirlo"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 35,
    //     question: {
    //       en: "How strongly do you agree or disagree with the following statement: Global warming is affecting the weather in the United States.",
    //       ar: "ما مدى موافقتك أو عدم موافقتك مع العبارة التالية: يؤثر الاحتباس الحراري على الطقس في الولايات المتحدة.",
    //       fa: "تا چه اندازه با این جمله موافق یا مخالف هستید: گرم شدن زمین بر آب و هوای ایالات متحده تأثیر می‌گذارد.",
    //       fr: "Dans quelle mesure êtes-vous d'accord ou non avec l'énoncé suivant : Le réchauffement climatique affecte la météo aux États-Unis.",
    //       it: "Quanto sei d'accordo o in disaccordo con la seguente affermazione: Il riscaldamento globale sta influenzando il clima negli Stati Uniti."
    //     },
    //     options: [
    //       {
    //         value: "Strongly agree",
    //         label: {
    //           en: "Strongly agree",
    //           ar: "أوافق بشدة",
    //           fa: "کاملاً موافقم",
    //           fr: "Tout à fait d'accord",
    //           it: "Fortemente d'accordo"
    //         }
    //       },
    //       {
    //         value: "Somewhat agree",
    //         label: {
    //           en: "Somewhat agree",
    //           ar: "أوافق إلى حد ما",
    //           fa: "تا حدودی موافقم",
    //           fr: "Plutôt d'accord",
    //           it: "Abbastanza d'accordo"
    //         }
    //       },
    //       {
    //         value: "Somewhat disagree",
    //         label: {
    //           en: "Somewhat disagree",
    //           ar: "أعارض إلى حد ما",
    //           fa: "تا حدودی مخالفم",
    //           fr: "Plutôt pas d'accord",
    //           it: "Abbastanza in disaccordo"
    //         }
    //       },
    //       {
    //         value: "Strongly disagree",
    //         label: {
    //           en: "Strongly disagree",
    //           ar: "أعارض بشدة",
    //           fa: "کاملاً مخالفم",
    //           fr: "Pas du tout d'accord",
    //           it: "Completamente in disaccordo"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 36,
    //     question: {
    //       en: "In your opinion, when will global warming start to harm people in the United States?",
    //       ar: "في رأيك، متى سيبدأ الاحتباس الحراري في إيذاء الناس في الولايات المتحدة؟",
    //       fa: "به نظر شما، گرم شدن زمین چه زمانی شروع به آسیب رساندن به مردم در ایالات متحده می‌کند؟",
    //       fr: "À votre avis, quand le réchauffement climatique commencera-t-il à nuire aux gens aux États-Unis ?",
    //       it: "Secondo te, quando il riscaldamento globale inizierà a danneggiare le persone negli Stati Uniti?"
    //     },
    //     options: [
    //       {
    //         value: "They are being harmed right now",
    //         label: {
    //           en: "They are being harmed right now",
    //           ar: "يتعرضون للأذى في الوقت الحالي",
    //           fa: "در حال حاضر آسیب می‌بینند",
    //           fr: "Ils sont déjà en train de subir des préjudices",
    //           it: "Stanno già subendo dei danni"
    //         }
    //       },
    //       {
    //         value: "In 10 years",
    //         label: {
    //           en: "In 10 years",
    //           ar: "في غضون 10 سنوات",
    //           fa: "در عرض ۱۰ سال",
    //           fr: "Dans 10 ans",
    //           it: "Tra 10 anni"
    //         }
    //       },
    //       {
    //         value: "In 25 years",
    //         label: {
    //           en: "In 25 years",
    //           ar: "في غضون 25 سنة",
    //           fa: "در عرض ۲۵ سال",
    //           fr: "Dans 25 ans",
    //           it: "Tra 25 anni"
    //         }
    //       },
    //       {
    //         value: "In 50 years",
    //         label: {
    //           en: "In 50 years",
    //           ar: "في غضون 50 سنة",
    //           fa: "در عرض ۵۰ سال",
    //           fr: "Dans 50 ans",
    //           it: "Tra 50 anni"
    //         }
    //       },
    //       {
    //         value: "Never",
    //         label: {
    //           en: "Never",
    //           ar: "أبداً",
    //           fa: "هرگز",
    //           fr: "Jamais",
    //           it: "Mai"
    //         }
    //       },
    //       {
    //         value: "Don’t know",
    //         label: {
    //           en: "Don’t know",
    //           ar: "لا أعرف",
    //           fa: "نمی‌دانم",
    //           fr: "Je ne sais pas",
    //           it: "Non so"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 37,
    //     question: {
    //       en: "How much do you think global warming will harm you personally?",
    //       ar: "إلى أي مدى تعتقد أن الاحتباس الحراري سيؤذيك شخصياً؟",
    //       fa: "فکر می‌کنید گرم شدن زمین چقدر به شما شخصاً آسیب خواهد رساند؟",
    //       fr: "À quel point pensez-vous que le réchauffement climatique vous nuira personnellement ?",
    //       it: "Quanto pensi che il riscaldamento globale ti danneggerà personalmente?"
    //     },
    //     options: [
    //       {
    //         value: "A great deal",
    //         label: {
    //           en: "A great deal",
    //           ar: "إلى حد كبير جداً",
    //           fa: "خیلی زیاد",
    //           fr: "Énormément",
    //           it: "Molto"
    //         }
    //       },
    //       {
    //         value: "A moderate amount",
    //         label: {
    //           en: "A moderate amount",
    //           ar: "بدرجة معتدلة",
    //           fa: "مقداری متوسط",
    //           fr: "Modérément",
    //           it: "Moderatamente"
    //         }
    //       },
    //       {
    //         value: "Only a little",
    //         label: {
    //           en: "Only a little",
    //           ar: "فقط قليلاً",
    //           fa: "فقط کمی",
    //           fr: "Un peu",
    //           it: "Poco"
    //         }
    //       },
    //       {
    //         value: "Not at all",
    //         label: {
    //           en: "Not at all",
    //           ar: "لا شيء على الإطلاق",
    //           fa: "اصلاً",
    //           fr: "Pas du tout",
    //           it: "Per niente"
    //         }
    //       },
    //       {
    //         value: "Don’t know",
    //         label: {
    //           en: "Don’t know",
    //           ar: "لا أعرف",
    //           fa: "نمی‌دانم",
    //           fr: "Je ne sais pas",
    //           it: "Non so"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 38,
    //     question: {
    //       en: "How much do you think global warming will harm future generations of people?",
    //       ar: "إلى أي مدى تعتقد أن الاحتباس الحراري سيؤذي الأجيال القادمة من الناس؟",
    //       fa: "فکر می‌کنید گرم شدن زمین چقدر به نسل‌های آینده انسان‌ها آسیب خواهد رساند؟",
    //       fr: "À quel point pensez-vous que le réchauffement climatique nuira aux générations futures ?",
    //       it: "Quanto pensi che il riscaldamento globale danneggerà le generazioni future?"
    //     },
    //     options: [
    //       {
    //         value: "A great deal",
    //         label: {
    //           en: "A great deal",
    //           ar: "إلى حد كبير جداً",
    //           fa: "خیلی زیاد",
    //           fr: "Énormément",
    //           it: "Molto"
    //         }
    //       },
    //       {
    //         value: "A moderate amount",
    //         label: {
    //           en: "A moderate amount",
    //           ar: "بدرجة معتدلة",
    //           fa: "مقداری متوسط",
    //           fr: "Modérément",
    //           it: "Moderatamente"
    //         }
    //       },
    //       {
    //         value: "Only a little",
    //         label: {
    //           en: "Only a little",
    //           ar: "فقط قليلاً",
    //           fa: "فقط کمی",
    //           fr: "Un peu",
    //           it: "Poco"
    //         }
    //       },
    //       {
    //         value: "Not at all",
    //         label: {
    //           en: "Not at all",
    //           ar: "لا شيء على الإطلاق",
    //           fa: "اصلاً",
    //           fr: "Pas du tout",
    //           it: "Per niente"
    //         }
    //       },
    //       {
    //         value: "Don’t know",
    //         label: {
    //           en: "Don’t know",
    //           ar: "لا أعرف",
    //           fa: "نمی‌دانم",
    //           fr: "Je ne sais pas",
    //           it: "Non so"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 39,
    //     question: {
    //       en: "How much do you think global warming will harm people in developing countries?",
    //       ar: "إلى أي مدى تعتقد أن الاحتباس الحراري سيؤذي الناس في البلدان النامية؟",
    //       fa: "فکر می‌کنید گرم شدن زمین چقدر به مردم کشورهای در حال توسعه آسیب خواهد رساند؟",
    //       fr: "À quel point pensez-vous que le réchauffement climatique nuira aux habitants des pays en développement ?",
    //       it: "Quanto pensi che il riscaldamento globale danneggerà le persone nei paesi in via di sviluppo?"
    //     },
    //     options: [
    //       {
    //         value: "A great deal",
    //         label: {
    //           en: "A great deal",
    //           ar: "إلى حد كبير جداً",
    //           fa: "خیلی زیاد",
    //           fr: "Énormément",
    //           it: "Molto"
    //         }
    //       },
    //       {
    //         value: "A moderate amount",
    //         label: {
    //           en: "A moderate amount",
    //           ar: "بدرجة معتدلة",
    //           fa: "مقداری متوسط",
    //           fr: "Modérément",
    //           it: "Moderatamente"
    //         }
    //       },
    //       {
    //         value: "Only a little",
    //         label: {
    //           en: "Only a little",
    //           ar: "فقط قليلاً",
    //           fa: "فقط کمی",
    //           fr: "Un peu",
    //           it: "Poco"
    //         }
    //       },
    //       {
    //         value: "Not at all",
    //         label: {
    //           en: "Not at all",
    //           ar: "لا شيء على الإطلاق",
    //           fa: "اصلاً",
    //           fr: "Pas du tout",
    //           it: "Per niente"
    //         }
    //       },
    //       {
    //         value: "Don’t know",
    //         label: {
    //           en: "Don’t know",
    //           ar: "لا أعرف",
    //           fa: "نمی‌دانم",
    //           fr: "Je ne sais pas",
    //           it: "Non so"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 40,
    //     question: {
    //       en: "How much do you think global warming will harm people in the United States?",
    //       ar: "إلى أي مدى تعتقد أن الاحتباس الحراري سيؤذي الناس في الولايات المتحدة؟",
    //       fa: "فکر می‌کنید گرم شدن زمین چقدر به مردم ایالات متحده آسیب خواهد رساند؟",
    //       fr: "À quel point pensez-vous que le réchauffement climatique nuira aux gens aux États-Unis ?",
    //       it: "Quanto pensi che il riscaldamento globale danneggerà le persone negli Stati Uniti?"
    //     },
    //     options: [
    //       {
    //         value: "A great deal",
    //         label: {
    //           en: "A great deal",
    //           ar: "إلى حد كبير جداً",
    //           fa: "خیلی زیاد",
    //           fr: "Énormément",
    //           it: "Molto"
    //         }
    //       },
    //       {
    //         value: "A moderate amount",
    //         label: {
    //           en: "A moderate amount",
    //           ar: "بدرجة معتدلة",
    //           fa: "مقداری متوسط",
    //           fr: "Modérément",
    //           it: "Moderatamente"
    //         }
    //       },
    //       {
    //         value: "Only a little",
    //         label: {
    //           en: "Only a little",
    //           ar: "فقط قليلاً",
    //           fa: "فقط کمی",
    //           fr: "Un peu",
    //           it: "Poco"
    //         }
    //       },
    //       {
    //         value: "Not at all",
    //         label: {
    //           en: "Not at all",
    //           ar: "لا شيء على الإطلاق",
    //           fa: "اصلاً",
    //           fr: "Pas du tout",
    //           it: "Per niente"
    //         }
    //       },
    //       {
    //         value: "Don’t know",
    //         label: {
    //           en: "Don’t know",
    //           ar: "لا أعرف",
    //           fa: "نمی‌دانم",
    //           fr: "Je ne sais pas",
    //           it: "Non so"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 41,
    //     question: {
    //       en: "How much do you think global warming will harm you personally?",
    //       ar: "إلى أي مدى تعتقد أن الاحتباس الحراري سيؤذيك شخصياً؟",
    //       fa: "فکر می‌کنید گرم شدن زمین چقدر به شما شخصاً آسیب خواهد رساند؟",
    //       fr: "À quel point pensez-vous que le réchauffement climatique vous nuira personnellement ?",
    //       it: "Quanto pensi che il riscaldamento globale ti danneggerà personalmente?"
    //     },
    //     options: [
    //       {
    //         value: "A great deal",
    //         label: {
    //           en: "A great deal",
    //           ar: "إلى حد كبير جداً",
    //           fa: "خیلی زیاد",
    //           fr: "Énormément",
    //           it: "Molto"
    //         }
    //       },
    //       {
    //         value: "A moderate amount",
    //         label: {
    //           en: "A moderate amount",
    //           ar: "بدرجة معتدلة",
    //           fa: "مقداری متوسط",
    //           fr: "Modérément",
    //           it: "Moderatamente"
    //         }
    //       },
    //       {
    //         value: "Only a little",
    //         label: {
    //           en: "Only a little",
    //           ar: "فقط قليلاً",
    //           fa: "فقط کمی",
    //           fr: "Un peu",
    //           it: "Poco"
    //         }
    //       },
    //       {
    //         value: "Not at all",
    //         label: {
    //           en: "Not at all",
    //           ar: "لا شيء على الإطلاق",
    //           fa: "اصلاً",
    //           fr: "Pas du tout",
    //           it: "Per niente"
    //         }
    //       },
    //       {
    //         value: "Don’t know",
    //         label: {
    //           en: "Don’t know",
    //           ar: "لا أعرف",
    //           fa: "نمی‌دانم",
    //           fr: "Je ne sais pas",
    //           it: "Non so"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 42,
    //     question: {
    //       en: "When do you think global warming will start to harm people in the United States?",
    //       ar: "متى تعتقد أن الاحتباس الحراري سيبدأ في إيذاء الناس في الولايات المتحدة؟",
    //       fa: "فکر می‌کنید گرم شدن زمین چه زمانی شروع به آسیب رساندن به مردم ایالات متحده خواهد کرد؟",
    //       fr: "Quand pensez-vous que le réchauffement climatique commencera à nuire aux gens aux États-Unis ?",
    //       it: "Quando pensi che il riscaldamento globale inizierà a danneggiare le persone negli Stati Uniti?"
    //     },
    //     options: [
    //       {
    //         value: "They are being harmed right now",
    //         label: {
    //           en: "They are being harmed right now",
    //           ar: "يتعرضون للأذى الآن",
    //           fa: "هم اکنون آسیب می‌بینند",
    //           fr: "Ils sont déjà en train d’être affectés",
    //           it: "Sono già danneggiati in questo momento"
    //         }
    //       },
    //       {
    //         value: "In 10 years",
    //         label: {
    //           en: "In 10 years",
    //           ar: "في غضون 10 سنوات",
    //           fa: "در ۱۰ سال آینده",
    //           fr: "Dans 10 ans",
    //           it: "Tra 10 anni"
    //         }
    //       },
    //       {
    //         value: "In 25 years",
    //         label: {
    //           en: "In 25 years",
    //           ar: "في غضون 25 سنة",
    //           fa: "در ۲۵ سال آینده",
    //           fr: "Dans 25 ans",
    //           it: "Tra 25 anni"
    //         }
    //       },
    //       {
    //         value: "In 50 years",
    //         label: {
    //           en: "In 50 years",
    //           ar: "في غضون 50 سنة",
    //           fa: "در ۵۰ سال آینده",
    //           fr: "Dans 50 ans",
    //           it: "Tra 50 anni"
    //         }
    //       },
    //       {
    //         value: "In 100 years",
    //         label: {
    //           en: "In 100 years",
    //           ar: "في غضون 100 سنة",
    //           fa: "در ۱۰۰ سال آینده",
    //           fr: "Dans 100 ans",
    //           it: "Tra 100 anni"
    //         }
    //       },
    //       {
    //         value: "Never",
    //         label: {
    //           en: "Never",
    //           ar: "أبداً",
    //           fa: "هرگز",
    //           fr: "Jamais",
    //           it: "Mai"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 43,
    //     question: {
    //       en: "How much do you agree or disagree with the following statement: “I have personally experienced the effects of global warming”?",
    //       ar: "ما مدى اتفاقك أو اختلافك مع العبارة التالية: 'لقد تعرضت شخصياً لتأثيرات الاحتباس الحراري'؟",
    //       fa: "چقدر با این جمله موافق یا مخالف هستید: «من شخصاً اثرات گرم شدن زمین را تجربه کرده‌ام»؟",
    //       fr: "Dans quelle mesure êtes-vous d'accord ou pas d'accord avec cette déclaration : « J’ai personnellement ressenti les effets du réchauffement climatique » ?",
    //       it: "Quanto sei d’accordo o in disaccordo con questa affermazione: “Ho sperimentato personalmente gli effetti del riscaldamento globale”?"
    //     },
    //     options: [
    //       {
    //         value: "Strongly agree",
    //         label: {
    //           en: "Strongly agree",
    //           ar: "أوافق بشدة",
    //           fa: "کاملاً موافقم",
    //           fr: "Tout à fait d’accord",
    //           it: "Completamente d'accordo"
    //         }
    //       },
    //       {
    //         value: "Somewhat agree",
    //         label: {
    //           en: "Somewhat agree",
    //           ar: "أوافق إلى حد ما",
    //           fa: "تا حدی موافقم",
    //           fr: "Plutôt d’accord",
    //           it: "Abbastanza d'accordo"
    //         }
    //       },
    //       {
    //         value: "Somewhat disagree",
    //         label: {
    //           en: "Somewhat disagree",
    //           ar: "أعارض إلى حد ما",
    //           fa: "تا حدی مخالفم",
    //           fr: "Plutôt pas d’accord",
    //           it: "Abbastanza in disaccordo"
    //         }
    //       },
    //       {
    //         value: "Strongly disagree",
    //         label: {
    //           en: "Strongly disagree",
    //           ar: "أعارض بشدة",
    //           fa: "کاملاً مخالفم",
    //           fr: "Tout à fait en désaccord",
    //           it: "Completamente in disaccordo"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 44,
    //     question: {
    //       en: "Fund more research into renewable energy sources, such as solar and wind power.",
    //       ar: "تمويل المزيد من البحوث في مصادر الطاقة المتجددة، مثل الطاقة الشمسية وطاقة الرياح.",
    //       fa: "تأمین بودجه بیشتر برای تحقیق در منابع انرژی تجدیدپذیر مانند خورشیدی و بادی.",
    //       fr: "Financer davantage de recherches sur les sources d’énergie renouvelable, comme le solaire et l’éolien.",
    //       it: "Finanziare ulteriori ricerche sulle fonti di energia rinnovabile, come il solare e l’eolico."
    //     },
    //     options: [
    //       {
    //         value: "Strongly support",
    //         label: {
    //           en: "Strongly support",
    //           ar: "أدعم بشدة",
    //           fa: "کاملاً حمایت می‌کنم",
    //           fr: "Tout à fait favorable",
    //           it: "Assolutamente favorevole"
    //         }
    //       },
    //       {
    //         value: "Somewhat support",
    //         label: {
    //           en: "Somewhat support",
    //           ar: "أدعم إلى حد ما",
    //           fa: "تا حدی حمایت می‌کنم",
    //           fr: "Plutôt favorable",
    //           it: "Abbastanza favorevole"
    //         }
    //       },
    //       {
    //         value: "Somewhat oppose",
    //         label: {
    //           en: "Somewhat oppose",
    //           ar: "أعارض إلى حد ما",
    //           fa: "تا حدی مخالفم",
    //           fr: "Plutôt opposé",
    //           it: "Abbastanza contrario"
    //         }
    //       },
    //       {
    //         value: "Strongly oppose",
    //         label: {
    //           en: "Strongly oppose",
    //           ar: "أعارض بشدة",
    //           fa: "کاملاً مخالفم",
    //           fr: "Tout à fait opposé",
    //           it: "Assolutamente contrario"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 45,
    //     question: {
    //       en: "Require fossil fuel companies to pay a carbon tax.",
    //       ar: "إلزام شركات الوقود الأحفوري بدفع ضريبة الكربون.",
    //       fa: "الزام شرکت‌های سوخت فسیلی به پرداخت مالیات کربن.",
    //       fr: "Obliger les compagnies de combustibles fossiles à payer une taxe carbone.",
    //       it: "Obbligare le compagnie dei combustibili fossili a pagare una tassa sul carbonio."
    //     },
    //     options: [
    //       {
    //         value: "Strongly support",
    //         label: {
    //           en: "Strongly support",
    //           ar: "أدعم بشدة",
    //           fa: "کاملاً حمایت می‌کنم",
    //           fr: "Tout à fait favorable",
    //           it: "Assolutamente favorevole"
    //         }
    //       },
    //       {
    //         value: "Somewhat support",
    //         label: {
    //           en: "Somewhat support",
    //           ar: "أدعم إلى حد ما",
    //           fa: "تا حدی حمایت می‌کنم",
    //           fr: "Plutôt favorable",
    //           it: "Abbastanza favorevole"
    //         }
    //       },
    //       {
    //         value: "Somewhat oppose",
    //         label: {
    //           en: "Somewhat oppose",
    //           ar: "أعارض إلى حد ما",
    //           fa: "تا حدی مخالفم",
    //           fr: "Plutôt opposé",
    //           it: "Abbastanza contrario"
    //         }
    //       },
    //       {
    //         value: "Strongly oppose",
    //         label: {
    //           en: "Strongly oppose",
    //           ar: "أعارض بشدة",
    //           fa: "کاملاً مخالفم",
    //           fr: "Tout à fait opposé",
    //           it: "Assolutamente contrario"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 46,
    //     question: {
    //       en: "Provide tax rebates to people who purchase energy-efficient vehicles or solar panels.",
    //       ar: "تقديم خصومات ضريبية للأشخاص الذين يشترون مركبات موفرة للطاقة أو ألواح شمسية.",
    //       fa: "ارائه تخفیف‌های مالیاتی به افرادی که وسایل نقلیه کم‌مصرف یا پنل خورشیدی خریداری می‌کنند.",
    //       fr: "Offrir des crédits d’impôt aux personnes qui achètent des véhicules économes en énergie ou des panneaux solaires.",
    //       it: "Fornire sgravi fiscali a chi acquista veicoli a basso consumo energetico o pannelli solari."
    //     },
    //     options: [
    //       {
    //         value: "Strongly support",
    //         label: {
    //           en: "Strongly support",
    //           ar: "أدعم بشدة",
    //           fa: "کاملاً حمایت می‌کنم",
    //           fr: "Tout à fait favorable",
    //           it: "Assolutamente favorevole"
    //         }
    //       },
    //       {
    //         value: "Somewhat support",
    //         label: {
    //           en: "Somewhat support",
    //           ar: "أدعم إلى حد ما",
    //           fa: "تا حدی حمایت می‌کنم",
    //           fr: "Plutôt favorable",
    //           it: "Abbastanza favorevole"
    //         }
    //       },
    //       {
    //         value: "Somewhat oppose",
    //         label: {
    //           en: "Somewhat oppose",
    //           ar: "أعارض إلى حد ما",
    //           fa: "تا حدی مخالفم",
    //           fr: "Plutôt opposé",
    //           it: "Abbastanza contrario"
    //         }
    //       },
    //       {
    //         value: "Strongly oppose",
    //         label: {
    //           en: "Strongly oppose",
    //           ar: "أعارض بشدة",
    //           fa: "کاملاً مخالفم",
    //           fr: "Tout à fait opposé",
    //           it: "Assolutamente contrario"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 47,
    //     question: {
    //       en: "Set strict CO2 emission limits on coal-fired power plants.",
    //       ar: "فرض حدود صارمة لانبعاثات ثاني أكسيد الكربون على محطات توليد الطاقة التي تعمل بالفحم.",
    //       fa: "تعیین محدودیت‌های سختگیرانه برای انتشار دی‌اکسید کربن توسط نیروگاه‌های زغال‌سنگ.",
    //       fr: "Fixer des limites strictes d’émission de CO2 pour les centrales électriques au charbon.",
    //       it: "Imporre limiti severi alle emissioni di CO2 dalle centrali elettriche a carbone."
    //     },
    //     options: [
    //       {
    //         value: "Strongly support",
    //         label: {
    //           en: "Strongly support",
    //           ar: "أدعم بشدة",
    //           fa: "کاملاً حمایت می‌کنم",
    //           fr: "Tout à fait favorable",
    //           it: "Assolutamente favorevole"
    //         }
    //       },
    //       {
    //         value: "Somewhat support",
    //         label: {
    //           en: "Somewhat support",
    //           ar: "أدعم إلى حد ما",
    //           fa: "تا حدی حمایت می‌کنم",
    //           fr: "Plutôt favorable",
    //           it: "Abbastanza favorevole"
    //         }
    //       },
    //       {
    //         value: "Somewhat oppose",
    //         label: {
    //           en: "Somewhat oppose",
    //           ar: "أعارض إلى حد ما",
    //           fa: "تا حدی مخالفم",
    //           fr: "Plutôt opposé",
    //           it: "Abbastanza contrario"
    //         }
    //       },
    //       {
    //         value: "Strongly oppose",
    //         label: {
    //           en: "Strongly oppose",
    //           ar: "أعارض بشدة",
    //           fa: "کاملاً مخالفم",
    //           fr: "Tout à fait opposé",
    //           it: "Assolutamente contrario"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 48,
    //     question: {
    //       en: "Drill for oil in the Arctic National Wildlife Refuge.",
    //       ar: "الحفر لاستخراج النفط في محمية الحياة البرية الوطنية في القطب الشمالي.",
    //       fa: "حفاری نفت در پناهگاه ملی حیات‌وحش قطب شمال.",
    //       fr: "Forer pour le pétrole dans le Refuge faunique national de l'Arctique.",
    //       it: "Trivellare per il petrolio nel Rifugio nazionale per la fauna dell'Artico."
    //     },
    //     options: [
    //       {
    //         value: "Strongly support",
    //         label: {
    //           en: "Strongly support",
    //           ar: "أدعم بشدة",
    //           fa: "کاملاً حمایت می‌کنم",
    //           fr: "Tout à fait favorable",
    //           it: "Assolutamente favorevole"
    //         }
    //       },
    //       {
    //         value: "Somewhat support",
    //         label: {
    //           en: "Somewhat support",
    //           ar: "أدعم إلى حد ما",
    //           fa: "تا حدی حمایت می‌کنم",
    //           fr: "Plutôt favorable",
    //           it: "Abbastanza favorevole"
    //         }
    //       },
    //       {
    //         value: "Somewhat oppose",
    //         label: {
    //           en: "Somewhat oppose",
    //           ar: "أعارض إلى حد ما",
    //           fa: "تا حدی مخالفم",
    //           fr: "Plutôt opposé",
    //           it: "Abbastanza contrario"
    //         }
    //       },
    //       {
    //         value: "Strongly oppose",
    //         label: {
    //           en: "Strongly oppose",
    //           ar: "أعارض بشدة",
    //           fa: "کاملاً مخالفم",
    //           fr: "Tout à fait opposé",
    //           it: "Assolutamente contrario"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 49,
    //     question: {
    //       en: "Expand offshore drilling for oil and natural gas off the U.S. coast.",
    //       ar: "توسيع الحفر البحري للنفط والغاز الطبيعي قبالة سواحل الولايات المتحدة.",
    //       fa: "گسترش حفاری دریایی برای نفت و گاز طبیعی در سواحل ایالات متحده.",
    //       fr: "Étendre le forage en mer pour le pétrole et le gaz naturel au large des côtes américaines.",
    //       it: "Espandere le trivellazioni offshore per petrolio e gas naturale al largo delle coste degli Stati Uniti."
    //     },
    //     options: [
    //       {
    //         value: "Strongly support",
    //         label: {
    //           en: "Strongly support",
    //           ar: "أدعم بشدة",
    //           fa: "کاملاً حمایت می‌کنم",
    //           fr: "Tout à fait favorable",
    //           it: "Assolutamente favorevole"
    //         }
    //       },
    //       {
    //         value: "Somewhat support",
    //         label: {
    //           en: "Somewhat support",
    //           ar: "أدعم إلى حد ما",
    //           fa: "تا حدی حمایت می‌کنم",
    //           fr: "Plutôt favorable",
    //           it: "Abbastanza favorevole"
    //         }
    //       },
    //       {
    //         value: "Somewhat oppose",
    //         label: {
    //           en: "Somewhat oppose",
    //           ar: "أعارض إلى حد ما",
    //           fa: "تا حدی مخالفم",
    //           fr: "Plutôt opposé",
    //           it: "Abbastanza contrario"
    //         }
    //       },
    //       {
    //         value: "Strongly oppose",
    //         label: {
    //           en: "Strongly oppose",
    //           ar: "أعارض بشدة",
    //           fa: "کاملاً مخالفم",
    //           fr: "Tout à fait opposé",
    //           it: "Assolutamente contrario"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 50,
    //     question: {
    //       en: "Schools should teach our children about the causes, consequences, and potential solutions to global warming.",
    //       ar: "يجب على المدارس تعليم الأطفال أسباب وتبعات وحلول ظاهرة الاحتباس الحراري.",
    //       fa: "مدارس باید به کودکان درباره علل، پیامدها و راه‌حل‌های احتمالی گرمایش جهانی آموزش دهند.",
    //       fr: "Les écoles devraient enseigner aux enfants les causes, les conséquences et les solutions potentielles au réchauffement climatique.",
    //       it: "Le scuole dovrebbero insegnare ai bambini le cause, le conseguenze e le soluzioni potenziali del riscaldamento globale."
    //     },
    //     options: [
    //       {
    //         value: "Strongly agree",
    //         label: {
    //           en: "Strongly agree",
    //           ar: "أوافق بشدة",
    //           fa: "کاملاً موافقم",
    //           fr: "Tout à fait d'accord",
    //           it: "Fortemente d'accordo"
    //         }
    //       },
    //       {
    //         value: "Somewhat agree",
    //         label: {
    //           en: "Somewhat agree",
    //           ar: "أوافق إلى حد ما",
    //           fa: "تا حدی موافقم",
    //           fr: "Plutôt d'accord",
    //           it: "Abbastanza d'accordo"
    //         }
    //       },
    //       {
    //         value: "Somewhat disagree",
    //         label: {
    //           en: "Somewhat disagree",
    //           ar: "أعارض إلى حد ما",
    //           fa: "تا حدی مخالفم",
    //           fr: "Plutôt en désaccord",
    //           it: "Abbastanza in disaccordo"
    //         }
    //       },
    //       {
    //         value: "Strongly disagree",
    //         label: {
    //           en: "Strongly disagree",
    //           ar: "أعارض بشدة",
    //           fa: "کاملاً مخالفم",
    //           fr: "Tout à fait en désaccord",
    //           it: "Completamente in disaccordo"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 51,
    //     question: {
    //       en: "Do you think the following should be doing more or less to address global warming? Corporations and industry.",
    //       ar: "هل تعتقد أن الشركات والصناعات يجب أن تبذل مزيداً من الجهد أو أقل لمعالجة ظاهرة الاحتباس الحراري؟",
    //       fa: "آیا فکر می‌کنید شرکت‌ها و صنایع باید بیشتر یا کمتر برای مقابله با گرمایش جهانی اقدام کنند؟",
    //       fr: "Pensez-vous que les entreprises et l'industrie devraient faire plus ou moins pour lutter contre le réchauffement climatique ?",
    //       it: "Pensi che le aziende e l'industria dovrebbero fare di più o di meno per affrontare il riscaldamento globale?"
    //     },
    //     options: [
    //       {
    //         value: "Much more",
    //         label: {
    //           en: "Much more",
    //           ar: "المزيد بكثير",
    //           fa: "بسیار بیشتر",
    //           fr: "Beaucoup plus",
    //           it: "Molto di più"
    //         }
    //       },
    //       {
    //         value: "More",
    //         label: {
    //           en: "More",
    //           ar: "المزيد",
    //           fa: "بیشتر",
    //           fr: "Plus",
    //           it: "Di più"
    //         }
    //       },
    //       {
    //         value: "Currently doing the right amount",
    //         label: {
    //           en: "Currently doing the right amount",
    //           ar: "يؤدون الكمية المناسبة حالياً",
    //           fa: "در حال حاضر به اندازه کافی اقدام می‌کنند",
    //           fr: "Font actuellement ce qu’il faut",
    //           it: "Attualmente fanno abbastanza"
    //         }
    //       },
    //       {
    //         value: "Less",
    //         label: {
    //           en: "Less",
    //           ar: "أقل",
    //           fa: "کمتر",
    //           fr: "Moins",
    //           it: "Meno"
    //         }
    //       },
    //       {
    //         value: "Much less",
    //         label: {
    //           en: "Much less",
    //           ar: "أقل بكثير",
    //           fa: "خیلی کمتر",
    //           fr: "Beaucoup moins",
    //           it: "Molto meno"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 52,
    //     question: {
    //       en: "The President.",
    //       ar: "الرئيس.",
    //       fa: "رئیس‌جمهور.",
    //       fr: "Le président.",
    //       it: "Il presidente."
    //     },
    //     options: [
    //       {
    //         value: "Much more",
    //         label: {
    //           en: "Much more",
    //           ar: "المزيد بكثير",
    //           fa: "بسیار بیشتر",
    //           fr: "Beaucoup plus",
    //           it: "Molto di più"
    //         }
    //       },
    //       {
    //         value: "More",
    //         label: {
    //           en: "More",
    //           ar: "المزيد",
    //           fa: "بیشتر",
    //           fr: "Plus",
    //           it: "Di più"
    //         }
    //       },
    //       {
    //         value: "Currently doing the right amount",
    //         label: {
    //           en: "Currently doing the right amount",
    //           ar: "يؤدي الكمية المناسبة حالياً",
    //           fa: "در حال حاضر به اندازه کافی اقدام می‌کند",
    //           fr: "Fait actuellement ce qu’il faut",
    //           it: "Attualmente fa abbastanza"
    //         }
    //       },
    //       {
    //         value: "Less",
    //         label: {
    //           en: "Less",
    //           ar: "أقل",
    //           fa: "کمتر",
    //           fr: "Moins",
    //           it: "Meno"
    //         }
    //       },
    //       {
    //         value: "Much less",
    //         label: {
    //           en: "Much less",
    //           ar: "أقل بكثير",
    //           fa: "خیلی کمتر",
    //           fr: "Beaucoup moins",
    //           it: "Molto meno"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 53,
    //     question: {
    //       en: "Congress.",
    //       ar: "الكونغرس.",
    //       fa: "کنگره.",
    //       fr: "Le Congrès.",
    //       it: "Il Congresso."
    //     },
    //     options: [
    //       {
    //         value: "Much more",
    //         label: {
    //           en: "Much more",
    //           ar: "المزيد بكثير",
    //           fa: "بسیار بیشتر",
    //           fr: "Beaucoup plus",
    //           it: "Molto di più"
    //         }
    //       },
    //       {
    //         value: "More",
    //         label: {
    //           en: "More",
    //           ar: "المزيد",
    //           fa: "بیشتر",
    //           fr: "Plus",
    //           it: "Di più"
    //         }
    //       },
    //       {
    //         value: "Currently doing the right amount",
    //         label: {
    //           en: "Currently doing the right amount",
    //           ar: "يؤدي الكمية المناسبة حالياً",
    //           fa: "در حال حاضر به اندازه کافی اقدام می‌کند",
    //           fr: "Fait actuellement ce qu’il faut",
    //           it: "Attualmente fa abbastanza"
    //         }
    //       },
    //       {
    //         value: "Less",
    //         label: {
    //           en: "Less",
    //           ar: "أقل",
    //           fa: "کمتر",
    //           fr: "Moins",
    //           it: "Meno"
    //         }
    //       },
    //       {
    //         value: "Much less",
    //         label: {
    //           en: "Much less",
    //           ar: "أقل بكثير",
    //           fa: "خیلی کمتر",
    //           fr: "Beaucoup moins",
    //           it: "Molto meno"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 54,
    //     question: {
    //       en: "Your Governor.",
    //       ar: "حاكم ولايتك.",
    //       fa: "فرماندار شما.",
    //       fr: "Votre gouverneur.",
    //       it: "Il tuo governatore."
    //     },
    //     options: [
    //       {
    //         value: "Much more",
    //         label: {
    //           en: "Much more",
    //           ar: "المزيد بكثير",
    //           fa: "بسیار بیشتر",
    //           fr: "Beaucoup plus",
    //           it: "Molto di più"
    //         }
    //       },
    //       {
    //         value: "More",
    //         label: {
    //           en: "More",
    //           ar: "المزيد",
    //           fa: "بیشتر",
    //           fr: "Plus",
    //           it: "Di più"
    //         }
    //       },
    //       {
    //         value: "Currently doing the right amount",
    //         label: {
    //           en: "Currently doing the right amount",
    //           ar: "يؤدي الكمية المناسبة حالياً",
    //           fa: "در حال حاضر به اندازه کافی اقدام می‌کند",
    //           fr: "Fait actuellement ce qu’il faut",
    //           it: "Attualmente fa abbastanza"
    //         }
    //       },
    //       {
    //         value: "Less",
    //         label: {
    //           en: "Less",
    //           ar: "أقل",
    //           fa: "کمتر",
    //           fr: "Moins",
    //           it: "Meno"
    //         }
    //       },
    //       {
    //         value: "Much less",
    //         label: {
    //           en: "Much less",
    //           ar: "أقل بكثير",
    //           fa: "خیلی کمتر",
    //           fr: "Beaucoup moins",
    //           it: "Molto meno"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 55,
    //     question: {
    //       en: "Your local officials.",
    //       ar: "المسؤولون المحليون في منطقتك.",
    //       fa: "مقامات محلی شما.",
    //       fr: "Vos responsables locaux.",
    //       it: "I funzionari locali della tua zona."
    //     },
    //     options: [
    //       {
    //         value: "Much more",
    //         label: {
    //           en: "Much more",
    //           ar: "المزيد بكثير",
    //           fa: "بسیار بیشتر",
    //           fr: "Beaucoup plus",
    //           it: "Molto di più"
    //         }
    //       },
    //       {
    //         value: "More",
    //         label: {
    //           en: "More",
    //           ar: "المزيد",
    //           fa: "بیشتر",
    //           fr: "Plus",
    //           it: "Di più"
    //         }
    //       },
    //       {
    //         value: "Currently doing the right amount",
    //         label: {
    //           en: "Currently doing the right amount",
    //           ar: "يؤدون الكمية المناسبة حالياً",
    //           fa: "در حال حاضر به اندازه کافی اقدام می‌کنند",
    //           fr: "Font actuellement ce qu’il faut",
    //           it: "Attualmente fanno abbastanza"
    //         }
    //       },
    //       {
    //         value: "Less",
    //         label: {
    //           en: "Less",
    //           ar: "أقل",
    //           fa: "کمتر",
    //           fr: "Moins",
    //           it: "Meno"
    //         }
    //       },
    //       {
    //         value: "Much less",
    //         label: {
    //           en: "Much less",
    //           ar: "أقل بكثير",
    //           fa: "خیلی کمتر",
    //           fr: "Beaucoup moins",
    //           it: "Molto meno"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 56,
    //     question: {
    //       en: "Citizens themselves.",
    //       ar: "المواطنون أنفسهم.",
    //       fa: "خود شهروندان.",
    //       fr: "Les citoyens eux-mêmes.",
    //       it: "I cittadini stessi."
    //     },
    //     options: [
    //       {
    //         value: "Much more",
    //         label: {
    //           en: "Much more",
    //           ar: "المزيد بكثير",
    //           fa: "بسیار بیشتر",
    //           fr: "Beaucoup plus",
    //           it: "Molto di più"
    //         }
    //       },
    //       {
    //         value: "More",
    //         label: {
    //           en: "More",
    //           ar: "المزيد",
    //           fa: "بیشتر",
    //           fr: "Plus",
    //           it: "Di più"
    //         }
    //       },
    //       {
    //         value: "Currently doing the right amount",
    //         label: {
    //           en: "Currently doing the right amount",
    //           ar: "يقومون بالكمية المناسبة حالياً",
    //           fa: "در حال حاضر به اندازه کافی اقدام می‌کنند",
    //           fr: "Font actuellement ce qu’il faut",
    //           it: "Attualmente fanno abbastanza"
    //         }
    //       },
    //       {
    //         value: "Less",
    //         label: {
    //           en: "Less",
    //           ar: "أقل",
    //           fa: "کمتر",
    //           fr: "Moins",
    //           it: "Meno"
    //         }
    //       },
    //       {
    //         value: "Much less",
    //         label: {
    //           en: "Much less",
    //           ar: "أقل بكثير",
    //           fa: "خیلی کمتر",
    //           fr: "Beaucoup moins",
    //           it: "Molto meno"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 57,
    //     question: {
    //       en: "Should global warming be a priority for the next president and Congress?",
    //       ar: "هل يجب أن يكون الاحتباس الحراري أولوية للرئيس والكونغرس القادمين؟",
    //       fa: "آیا گرمایش جهانی باید برای رئیس‌جمهور و کنگره بعدی اولویت داشته باشد؟",
    //       fr: "Le réchauffement climatique devrait-il être une priorité pour le prochain président et le Congrès ?",
    //       it: "Il riscaldamento globale dovrebbe essere una priorità per il prossimo presidente e il Congresso?"
    //     },
    //     options: [
    //       {
    //         value: "Very high",
    //         label: {
    //           en: "Very high",
    //           ar: "عالية جداً",
    //           fa: "بسیار زیاد",
    //           fr: "Très élevée",
    //           it: "Molto alta"
    //         }
    //       },
    //       {
    //         value: "High",
    //         label: {
    //           en: "High",
    //           ar: "عالية",
    //           fa: "زیاد",
    //           fr: "Élevée",
    //           it: "Alta"
    //         }
    //       },
    //       {
    //         value: "Medium",
    //         label: {
    //           en: "Medium",
    //           ar: "متوسطة",
    //           fa: "متوسط",
    //           fr: "Moyenne",
    //           it: "Media"
    //         }
    //       },
    //       {
    //         value: "Low",
    //         label: {
    //           en: "Low",
    //           ar: "منخفضة",
    //           fa: "کم",
    //           fr: "Faible",
    //           it: "Bassa"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 58,
    //     question: {
    //       en: "Should developing sources of clean energy be a priority?",
    //       ar: "هل يجب أن يكون تطوير مصادر الطاقة النظيفة أولوية؟",
    //       fa: "آیا توسعه منابع انرژی پاک باید در اولویت باشد؟",
    //       fr: "Le développement de sources d’énergie propre devrait-il être une priorité ?",
    //       it: "Lo sviluppo di fonti di energia pulita dovrebbe essere una priorità?"
    //     },
    //     options: [
    //       {
    //         value: "Very high",
    //         label: {
    //           en: "Very high",
    //           ar: "عالية جداً",
    //           fa: "بسیار زیاد",
    //           fr: "Très élevée",
    //           it: "Molto alta"
    //         }
    //       },
    //       {
    //         value: "High",
    //         label: {
    //           en: "High",
    //           ar: "عالية",
    //           fa: "زیاد",
    //           fr: "Élevée",
    //           it: "Alta"
    //         }
    //       },
    //       {
    //         value: "Medium",
    //         label: {
    //           en: "Medium",
    //           ar: "متوسطة",
    //           fa: "متوسط",
    //           fr: "Moyenne",
    //           it: "Media"
    //         }
    //       },
    //       {
    //         value: "Low",
    //         label: {
    //           en: "Low",
    //           ar: "منخفضة",
    //           fa: "کم",
    //           fr: "Faible",
    //           it: "Bassa"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 59,
    //     question: {
    //       en: "Generate renewable energy (solar and wind) on public land in the U.S.",
    //       ar: "توليد الطاقة المتجددة (الشمسية والرياح) على الأراضي العامة في الولايات المتحدة.",
    //       fa: "تولید انرژی تجدیدپذیر (خورشیدی و بادی) در زمین‌های عمومی ایالات متحده.",
    //       fr: "Produire de l’énergie renouvelable (solaire et éolienne) sur les terres publiques aux États-Unis.",
    //       it: "Generare energia rinnovabile (solare ed eolica) su terreni pubblici negli Stati Uniti."
    //     },
    //     options: [
    //       {
    //         value: "Strongly agree",
    //         label: {
    //           en: "Strongly agree",
    //           ar: "أوافق بشدة",
    //           fa: "کاملاً موافقم",
    //           fr: "Tout à fait d’accord",
    //           it: "Assolutamente d'accordo"
    //         }
    //       },
    //       {
    //         value: "Somewhat agree",
    //         label: {
    //           en: "Somewhat agree",
    //           ar: "أوافق إلى حد ما",
    //           fa: "تا حدودی موافقم",
    //           fr: "Plutôt d’accord",
    //           it: "Abbastanza d'accordo"
    //         }
    //       },
    //       {
    //         value: "Somewhat disagree",
    //         label: {
    //           en: "Somewhat disagree",
    //           ar: "أعارض إلى حد ما",
    //           fa: "تا حدودی مخالفم",
    //           fr: "Plutôt en désaccord",
    //           it: "Abbastanza in disaccordo"
    //         }
    //       },
    //       {
    //         value: "Strongly disagree",
    //         label: {
    //           en: "Strongly disagree",
    //           ar: "أعارض بشدة",
    //           fa: "کاملاً مخالفم",
    //           fr: "Tout à fait en désaccord",
    //           it: "Assolutamente in disaccordo"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 60,
    //     question: {
    //       en: "Support U.S. economy transition from fossil fuels to 100% clean energy by 2050.",
    //       ar: "دعم انتقال الاقتصاد الأمريكي من الوقود الأحفوري إلى طاقة نظيفة بنسبة 100٪ بحلول عام 2050.",
    //       fa: "حمایت از گذار اقتصاد آمریکا از سوخت‌های فسیلی به انرژی ۱۰۰٪ پاک تا سال ۲۰۵۰.",
    //       fr: "Soutenir la transition de l'économie américaine des combustibles fossiles vers une énergie 100 % propre d'ici 2050.",
    //       it: "Sostenere la transizione dell'economia statunitense dai combustibili fossili a un'energia 100% pulita entro il 2050."
    //     },
    //     options: [
    //       {
    //         value: "Strongly agree",
    //         label: {
    //           en: "Strongly agree",
    //           ar: "أوافق بشدة",
    //           fa: "کاملاً موافقم",
    //           fr: "Tout à fait d’accord",
    //           it: "Assolutamente d'accordo"
    //         }
    //       },
    //       {
    //         value: "Somewhat agree",
    //         label: {
    //           en: "Somewhat agree",
    //           ar: "أوافق إلى حد ما",
    //           fa: "تا حدودی موافقم",
    //           fr: "Plutôt d’accord",
    //           it: "Abbastanza d'accordo"
    //         }
    //       },
    //       {
    //         value: "Somewhat disagree",
    //         label: {
    //           en: "Somewhat disagree",
    //           ar: "أعارض إلى حد ما",
    //           fa: "تا حدودی مخالفم",
    //           fr: "Plutôt en désaccord",
    //           it: "Abbastanza in disaccordo"
    //         }
    //       },
    //       {
    //         value: "Strongly disagree",
    //         label: {
    //           en: "Strongly disagree",
    //           ar: "أعارض بشدة",
    //           fa: "کاملاً مخالفم",
    //           fr: "Tout à fait en désaccord",
    //           it: "Assolutamente in disaccordo"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 61,
    //     question: {
    //       en: "How often do you discuss global warming with your friends and family?",
    //       ar: "كم مرة تناقش تغير المناخ مع أصدقائك وعائلتك؟",
    //       fa: "چند وقت یک‌بار در مورد گرم شدن زمین با دوستان و خانواده خود صحبت می‌کنید؟",
    //       fr: "À quelle fréquence discutez-vous du réchauffement climatique avec vos amis et votre famille ?",
    //       it: "Quanto spesso parli del riscaldamento globale con amici e familiari?"
    //     },
    //     options: [
    //       {
    //         value: "Often",
    //         label: {
    //           en: "Often",
    //           ar: "غالبًا",
    //           fa: "اغلب",
    //           fr: "Souvent",
    //           it: "Spesso"
    //         }
    //       },
    //       {
    //         value: "Occasionally",
    //         label: {
    //           en: "Occasionally",
    //           ar: "أحيانًا",
    //           fa: "گاهی",
    //           fr: "Parfois",
    //           it: "Occasionalmente"
    //         }
    //       },
    //       {
    //         value: "Rarely",
    //         label: {
    //           en: "Rarely",
    //           ar: "نادراً",
    //           fa: "به ندرت",
    //           fr: "Rarement",
    //           it: "Raramente"
    //         }
    //       },
    //       {
    //         value: "Never",
    //         label: {
    //           en: "Never",
    //           ar: "أبدًا",
    //           fa: "هرگز",
    //           fr: "Jamais",
    //           it: "Mai"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 62,
    //     question: {
    //       en: "How often do you hear about global warming in the media?",
    //       ar: "كم مرة تسمع عن تغير المناخ في وسائل الإعلام؟",
    //       fa: "چند وقت یک‌بار در رسانه‌ها درباره گرم شدن زمین می‌شنوید؟",
    //       fr: "À quelle fréquence entendez-vous parler du réchauffement climatique dans les médias ?",
    //       it: "Quanto spesso senti parlare del riscaldamento globale nei media?"
    //     },
    //     options: [
    //       {
    //         value: "At least once a week",
    //         label: {
    //           en: "At least once a week",
    //           ar: "مرة واحدة على الأقل في الأسبوع",
    //           fa: "حداقل یک بار در هفته",
    //           fr: "Au moins une fois par semaine",
    //           it: "Almeno una volta alla settimana"
    //         }
    //       },
    //       {
    //         value: "At least once a month",
    //         label: {
    //           en: "At least once a month",
    //           ar: "مرة واحدة على الأقل في الشهر",
    //           fa: "حداقل یک بار در ماه",
    //           fr: "Au moins une fois par mois",
    //           it: "Almeno una volta al mese"
    //         }
    //       },
    //       {
    //         value: "Several times a year",
    //         label: {
    //           en: "Several times a year",
    //           ar: "عدة مرات في السنة",
    //           fa: "چند بار در سال",
    //           fr: "Plusieurs fois par an",
    //           it: "Diverse volte all'anno"
    //         }
    //       },
    //       {
    //         value: "Once a year or less often",
    //         label: {
    //           en: "Once a year or less often",
    //           ar: "مرة واحدة في السنة أو أقل",
    //           fa: "یک‌بار در سال یا کمتر",
    //           fr: "Une fois par an ou moins souvent",
    //           it: "Una volta all'anno o meno"
    //         }
    //       },
    //       {
    //         value: "Never",
    //         label: {
    //           en: "Never",
    //           ar: "أبدًا",
    //           fa: "هرگز",
    //           fr: "Jamais",
    //           it: "Mai"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 63,
    //     question: {
    //       en: "How severe would you rate the personal effects of global warming that you’ve experienced?",
    //       ar: "ما مدى شدة التأثيرات الشخصية لتغير المناخ التي شعرت بها؟",
    //       fa: "شدت اثرات شخصی تغییرات اقلیمی که تجربه کرده‌اید را چقدر ارزیابی می‌کنید؟",
    //       fr: "À quel point jugez-vous graves les effets personnels du réchauffement climatique que vous avez vécus ?",
    //       it: "Quanto giudichi gravi gli effetti personali del riscaldamento globale che hai sperimentato?"
    //     },
    //     options: [
    //       {
    //         value: "Not severe at all",
    //         label: {
    //           en: "Not severe at all",
    //           ar: "غير شديدة على الإطلاق",
    //           fa: "اصلاً شدید نیست",
    //           fr: "Pas du tout graves",
    //           it: "Per niente gravi"
    //         }
    //       },
    //       {
    //         value: "Slightly severe",
    //         label: {
    //           en: "Slightly severe",
    //           ar: "شديدة قليلاً",
    //           fa: "کمی شدید",
    //           fr: "Légèrement graves",
    //           it: "Leggermente gravi"
    //         }
    //       },
    //       {
    //         value: "Moderately severe",
    //         label: {
    //           en: "Moderately severe",
    //           ar: "شديدة إلى حد ما",
    //           fa: "تا حدودی شدید",
    //           fr: "Modérément graves",
    //           it: "Moderatamente gravi"
    //         }
    //       },
    //       {
    //         value: "Very severe",
    //         label: {
    //           en: "Very severe",
    //           ar: "شديدة جدًا",
    //           fa: "بسیار شدید",
    //           fr: "Très graves",
    //           it: "Molto gravi"
    //         }
    //       },
    //       {
    //         value: "Don’t know / Not applicable",
    //         label: {
    //           en: "Don’t know / Not applicable",
    //           ar: "لا أعرف / غير قابل للتطبيق",
    //           fa: "نمی‌دانم / قابل استفاده نیست",
    //           fr: "Je ne sais pas / Non applicable",
    //           it: "Non so / Non applicabile"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 64,
    //     question: {
    //       en: "Would you personally be willing to pay higher energy bills to support more renewable energy development (solar, wind, etc.)?",
    //       ar: "هل أنت مستعد شخصيًا لدفع فواتير طاقة أعلى لدعم تطوير المزيد من مصادر الطاقة المتجددة (الطاقة الشمسية، الرياح، إلخ)؟",
    //       fa: "آیا شخصاً مایل هستید صورتحساب انرژی بیشتری بپردازید تا توسعه انرژی‌های تجدیدپذیر (خورشیدی، بادی و غیره) حمایت شود؟",
    //       fr: "Seriez-vous personnellement prêt à payer des factures d'énergie plus élevées pour soutenir le développement des énergies renouvelables (solaire, éolien, etc.) ?",
    //       it: "Saresti personalmente disposto a pagare bollette energetiche più alte per sostenere lo sviluppo delle energie rinnovabili (solare, eolico, ecc.)?"
    //     },
    //     options: [
    //       {
    //         value: "Yes, definitely",
    //         label: {
    //           en: "Yes, definitely",
    //           ar: "نعم، بالتأكيد",
    //           fa: "بله، قطعاً",
    //           fr: "Oui, tout à fait",
    //           it: "Sì, assolutamente"
    //         }
    //       },
    //       {
    //         value: "Probably yes",
    //         label: {
    //           en: "Probably yes",
    //           ar: "ربما نعم",
    //           fa: "احتمالاً بله",
    //           fr: "Probablement oui",
    //           it: "Probabilmente sì"
    //         }
    //       },
    //       {
    //         value: "Probably not",
    //         label: {
    //           en: "Probably not",
    //           ar: "ربما لا",
    //           fa: "احتمالاً نه",
    //           fr: "Probablement pas",
    //           it: "Probabilmente no"
    //         }
    //       },
    //       {
    //         value: "Definitely not",
    //         label: {
    //           en: "Definitely not",
    //           ar: "بالتأكيد لا",
    //           fa: "قطعاً نه",
    //           fr: "Certainement pas",
    //           it: "Assolutamente no"
    //         }
    //       },
    //       {
    //         value: "Don’t know",
    //         label: {
    //           en: "Don’t know",
    //           ar: "لا أعرف",
    //           fa: "نمی‌دانم",
    //           fr: "Je ne sais pas",
    //           it: "Non so"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 65,
    //     question: {
    //       en: "How responsible do you feel personally for helping reduce the effects of global warming on future generations?",
    //       ar: "ما مدى شعورك الشخصي بالمسؤولية للمساعدة في تقليل تأثيرات تغير المناخ على الأجيال القادمة؟",
    //       fa: "چقدر خود را شخصاً مسئول می‌دانید که در کاهش اثرات تغییرات اقلیمی برای نسل‌های آینده کمک کنید؟",
    //       fr: "Dans quelle mesure vous sentez-vous personnellement responsable d’aider à réduire les effets du réchauffement climatique sur les générations futures ?",
    //       it: "Quanto ti senti personalmente responsabile nell’aiutare a ridurre gli effetti del riscaldamento globale sulle generazioni future?"
    //     },
    //     options: [
    //       {
    //         value: "Not at all responsible",
    //         label: {
    //           en: "Not at all responsible",
    //           ar: "غير مسؤول على الإطلاق",
    //           fa: "اصلاً مسئول نیستم",
    //           fr: "Pas du tout responsable",
    //           it: "Per niente responsabile"
    //         }
    //       },
    //       {
    //         value: "Slightly responsible",
    //         label: {
    //           en: "Slightly responsible",
    //           ar: "مسؤول قليلاً",
    //           fa: "کمی مسئول",
    //           fr: "Légèrement responsable",
    //           it: "Leggermente responsabile"
    //         }
    //       },
    //       {
    //         value: "Moderately responsible",
    //         label: {
    //           en: "Moderately responsible",
    //           ar: "مسؤول إلى حد ما",
    //           fa: "تا حدودی مسئول",
    //           fr: "Modérément responsable",
    //           it: "Moderatamente responsabile"
    //         }
    //       },
    //       {
    //         value: "Very responsible",
    //         label: {
    //           en: "Very responsible",
    //           ar: "مسؤول جدًا",
    //           fa: "کاملاً مسئول",
    //           fr: "Très responsable",
    //           it: "Molto responsabile"
    //         }
    //       },
    //       {
    //         value: "Don’t know",
    //         label: {
    //           en: "Don’t know",
    //           ar: "لا أعرف",
    //           fa: "نمی‌دانم",
    //           fr: "Je ne sais pas",
    //           it: "Non so"
    //         }
    //       }
    //     ]
    //   }                                        
  ];  
  
export default Climate;