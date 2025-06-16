export const translations = {
  en: {
    nav: {
      home: "HOME",
      translations: "TRANSLATIONS",
    },
    about: {
      title: "About Me",
      paragraph1:
        "I am a senior undergraduate student at UBC, with a double major in Computer Science and Cognitive Systems, Emphasis in Linguistics.",
      paragraph2:
        "During my undergraduate years, I have fortunately been advised by Cristina Conati, Jian Zhu, and Alan Hu.",
      paragraph3:
        "My research interests center around language technology for the purposes of language education. Similarly, I enjoy teaching, and have had the honour of assisting in teaching courses across the Department of Computer Science and the Department of Asian Studies.",
      imageCaption: "An excerpt from the Man'yōshū, found in Beppu, Japan",
      researchTitle: "Research Interests",
      researchInterests: [
        {
          title: "Machine Translation",
          description:
            "How can we ensure that machine translations are not only accurate, but also culturally sensitive, contextually appropriate, and still creative?",
        },
        {
          title: "Integrating LLMs with Formal Methods",
          description:
            "How can formal methods (constrained decoding, formal semantics, logic, etc.) be integrated with language models to reduce hallucinations and produce more trustworthy outputs?",
        },
        {
          title: "Human-AI Interaction in Language Learning",
          description:
            "How can we create computer interfaces that enable efficient second-language acquisition?",
        },
      ],
      teaching: "Teaching",
      teachingPhilosophy:
        "I believe that any concept can be learned if approached with a strong understanding of first principles. Having taken most of the courses I've taught, I hope to impart new ways of looking at problems by reflecting on my own thought processes when I learned them.",
      teachingCourses: [
        {
          code: "CPSC110",
          name: "Computation, Programs, and Programming",
          terms: "2021W1, 2021W2, 2024W1",
        },
        { code: "CPSC210", name: "Software Construction", terms: "2024S" },
        {
          code: "CPSC320",
          name: "Intermediate Algorithm Design",
          terms: "2024W2",
        },
        {
          code: "CPSC416",
          name: "Distributed Systems",
          terms: "2025S",
        },
        { code: "JAPN100", name: "Introductory Japanese", terms: "2023S" },
        { code: "JAPN200", name: "Intermediate Japanese", terms: "2024S" },
      ],
      cvParagraph:
        "I also have work experience in project management and software development. More information can be found in",
      cvLinkText: "my complete CV",
    },
    projects: {
      title: "Projects",
    },
    footer: {
      copyright:
        "© 2025 Franklin Ma. Credit for the opening turtle goes to Dribbble.",
    },
    translationsPage: {
      title: "Translations",
      introduction:
        "At the University of Tokyo, I took classes on translation and interpretation. As part of my goal to democratize both skills as an exercise towards fluency, I translate to familiarize myself with the nuances of the art. I hope this will serve me in furthering my research of developing systems that can understand word connotations and context, and in turn, help language learners communicate cross-culturally more meaningfully.",
      projectsTitle: "Translation Projects",
      projects: [
        {
          title: "沼地",
          author: "Akutagawa Ryuunosuke",
          description:
            "A short story that I believe doesn't have enough recognition. I am particularly fond of the structure of this piece. My main challenges included differentiating between 絵描き and 画家, and naturally combining clauses in ways natural for English.",
          pdfPath: "/translations/swampland_translation.pdf",
        },
        {
          title: "祖母の教訓",
          author: "Makino Shinichi",
          description:
            "A reflective narrative on the author's grandmother. I found it challenging to map the different ways of representing quotations to English. My favourite part is imagining the author smiling at the end as he looks back at his memories with his grandmother.",
          pdfPath: "/translations/grandmothers-lesson_translation.pdf",
        },
      ],
      glossaryTitle: "Glossary",
      glossaryIntro:
        "Professor Kaku Hanako told me that our glossary assignments would be one of the things she hopes we take back with us after the course, as a personalized treasure. I am sharing mine here, in the hopes that it may be helpful to someone else.",
      glossaries: [
        { title: "Glossary 1", path: "/glossaries/glossary1.pdf" },
        { title: "Glossary 2", path: "/glossaries/glossary2.pdf" },
        { title: "Glossary 3", path: "/glossaries/glossary3.pdf" },
        { title: "Glossary 4", path: "/glossaries/glossary4.pdf" },
      ],
      openPdf: "Open PDF",
    },
    motivations: {
      title: "Motivations",
      paragraph1:
        "The time I interpreted for my mother at the hospital with my nurses in high school was one of the most fulfilling moments in my life. It was then I realized to always value the interpersonal connections in my life, and that I wanted to do work that allowed people to deeply connect with each other.",
      paragraph2:
        "Naturally, language is the universal medium that allows people to communicate, and I want to focus on researching the ways in which people can learn language-specific nuances more effectively, and the computer systems that can assist in this effort.",
      paragraph3:
        "My hobbies include watching comedy skits on Youtube, listening to sappy Chinese music, going on walks at night, and of course, learning languages. More info about my extracurriculars can be found on my Linkedin.",
      imageCaption: "An excerpt from the Man'yōshū, found in Beppu, Japan",
    },
  },
  ja: {
    nav: {
      home: "ホーム",
      translations: "翻訳",
    },
    about: {
      title: "自己紹介",
      paragraph1:
        "私はUBCの上級学部生で、コンピュータサイエンスと認知システム（言語学）のダブルメジャーを専攻しています。",
      paragraph2:
        "学部時代、幸運にもクリスティーナ・コナティ教授、朱健教授、アラン・フー教授の指導を受けることができました。",
      paragraph3:
        "私の研究関心は言語教育のための言語技術に焦点を当てています。同様に、教育にも情熱を持っており、コンピュータサイエンス学部とアジア研究学部の両方で授業のアシスタントを務める光栄に浴しました。",
      imageCaption: "別府で見つかった万葉集の一節",
      researchTitle: "研究関心",
      researchInterests: [
        {
          title: "機械翻訳",
          description:
            "機械翻訳が正確であるだけでなく、文化的に敏感で、文脈に適切で、創造性も保つにはどうすればよいでしょうか？",
        },
        {
          title: "LLMと形式手法の統合",
          description:
            "形式手法（制約付きデコーディング、形式意味論、論理学など）を言語モデルと統合して、幻覚を減らし、より信頼性の高い出力を生成するにはどうすればよいでしょうか？",
        },
        {
          title: "言語学習における人間-AIインタラクション",
          description:
            "効率的な第二言語習得を可能にするコンピュータインターフェースをどのように作れるでしょうか？",
        },
      ],
      teaching: "教育",
      teachingPhilosophy:
        "私は、第一原理を深く理解することで、どのような概念も学ぶことができると信じています。自分が教えたほとんどのコースを受講した経験を活かし、自分が学んだ時の思考プロセスを振り返ることで、問題を見る新しい視点を伝えたいと考えています。",
      teachingCourses: [
        {
          code: "CPSC110",
          name: "計算、プログラム、プログラミング",
          terms: "2021W1, 2021W2, 2024W1",
        },
        { code: "CPSC210", name: "ソフトウェア構築", terms: "2024S" },
        {
          code: "CPSC320",
          name: "中級アルゴリズム設計",
          terms: "2024W2",
        },
        {
          code: "CPSC416",
          name: "分散システム",
          terms: "2025S",
        },
        { code: "JAPN100", name: "初級日本語", terms: "2023S" },
        { code: "JAPN200", name: "中級日本語", terms: "2024S" },
      ],
      cvParagraph:
        "プロジェクト管理とソフトウェア開発の実務経験もあります。詳細は",
      cvLinkText: "完全な履歴書",
    },
    projects: {
      title: "プロジェクト",
    },
    footer: {
      copyright:
        "© 2025 フランクリン・マー。オープニングの亀のクレジットはDribbbleにあります。",
    },
    translationsPage: {
      title: "翻訳",
      introduction:
        "東京大学では、翻訳と通訳の授業を受けました。流暢さを目指す練習として両方のスキルを民主化するという目標の一環として、翻訳を通じてその芸術のニュアンスに慣れ親しんでいます。これが、単語の意味合いや文脈を理解できるシステムの開発研究に役立ち、言語学習者がより意味のある異文化コミュニケーションを取れるようになることを願っています。",
      projectsTitle: "翻訳プロジェクト",
      projects: [
        {
          title: "沼地",
          author: "芥川龍之介",
          description:
            "十分な評価を受けていないと思う短編小説です。特にこの作品の構成が気に入っています。主な課題は、「絵描き」と「画家」の区別、そして英語として自然な形で節を組み合わせることでした。",
          pdfPath: "/translations/swampland_translation.pdf",
        },
        {
          title: "祖母の教訓",
          author: "牧野信一",
          description:
            "著者の祖母についての回想録です。引用を表現する様々な方法を英語に変換することが難しかったです。著者が祖母との思い出を振り返りながら最後に微笑む様子を想像するのが好きな部分です。",
          pdfPath: "/translations/grandmothers-lesson_translation.pdf",
        },
      ],
      glossaryTitle: "用語集",
      glossaryIntro:
        "賀来教授は、用語集の課題が、コース終了後に持ち帰ってほしい宝物の一つだとおっしゃっていました。誰かの役に立つかもしれないという希望を込めて、ここで共有させていただきます。",
      glossaries: [
        { title: "用語集1", path: "/glossaries/glossary1.pdf" },
        { title: "用語集2", path: "/glossaries/glossary2.pdf" },
        { title: "用語集3", path: "/glossaries/glossary3.pdf" },
        { title: "用語集4", path: "/glossaries/glossary4.pdf" },
      ],
      openPdf: "PDFを開く",
    },
    motivations: {
      title: "動機",
      paragraph1:
        "高校時代に病院で母の通訳をした経験は、私の人生で最も充実した瞬間の一つでした。その時、人とのつながりを大切にすること、そして人々が深くつながることができる仕事をしたいと気づきました。",
      paragraph2:
        "当然のことながら、言語は人々がコミュニケーションを取るための普遍的な媒体です。私は、言語特有のニュアンスをより効果的に学ぶ方法と、それを支援するコンピュータシステムの研究に焦点を当てたいと考えています。",
      paragraph3:
        "趣味は、YouTubeでコメディを見ること、中国の甘い音楽を聴くこと、夜の散歩、そしてもちろん言語学習です。課外活動の詳細はLinkedInでご覧いただけます。",
      imageCaption: "別府で見つかった万葉集の一節",
    },
    experience: {
      title: "経歴",
      education: "学歴",
      work: "職歴",
      research: "研究",
      teaching: "教育",
      items: {
        education: ["UBC認知システム学部言語学専攻", "東京大学1年間交換留学"],
        work: [
          "UBCクラウドイノベーションセンター プロジェクトアシスタント",
          "Sparkle AI パートタイムソフトウェア開発者",
          "Riipenプログラム フリーランスウェブ開発者",
        ],
        research: [
          "Dr. Cristina Conati研究室 研究アシスタント（NSERC）",
          "Dr. Jian Zhu研究室 研究アシスタント",
        ],
        teaching: [
          "CPSC110 TA (2021W1, 2021W2, 2024W1)",
          "CPSC210 TA (2024S2)",
          "CPSC320 TA (2024W2)",
          "JAPN100 TA (2023S)",
          "JAPN200 TA (2024S1)",
          "大内インターナショナル パートタイム英会話講師",
          "中国語会話練習ボランティア (2020W1)",
        ],
      },
    },
  },
};
