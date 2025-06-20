export const translations = {
  en: {
    nav: {
      home: "HOME",
      translations: "TRANSLATIONS",
    },
    about: {
      title: "About Me",
      paragraph1:
        "I am an undergraduate student at UBC, with a double major in Computer Science and Cognitive Systems, Emphasis in Linguistics.",
      paragraph2:
        "During my years at UBC, I have fortunately been advised by Cristina Conati, Jian Zhu, and Alan Hu.",
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
        "I believe that any concept can be learned if approached with a strong understanding of first principles. Having taken most of the courses I've taught, I hope to impart new ways of looking at such concepts by breaking them down and reflecting on my thought processes when I learned them myself.",
      teachingCourses: [
        {
          code: "CPSC110",
          name: "Computation, Programs, and Programming",
          terms: "2021W1, 2021W2, 2024W1",
        },
        { code: "CPSC210",
          name: "Software Construction",
          terms: "2024S" },
        {
          code: "CPSC320",
          name: "Intermediate Algorithm Design and Analysis",
          terms: "2024W2",
        },
        {
          code: "CPSC416",
          name: "Distributed Systems",
          terms: "2025S",
        },
        { code: "JAPN100", name: "Beginning Japanese I A", terms: "2023S" },
        { code: "JAPN200", name: "Beginning Japanese II B", terms: "2024S" },
      ],
      cvParagraph:
        "My previous work experience include project management at the UBC Cloud Innovation Centre, and software development at Sparkle AI. More information can be found in",
      cvLinkText: "my CV",
    },
    projects: {
      title: "Projects",
      list: [
        {
          title: "yapyap",
          description: "An anonymous social journaling app. Winner of nwHacks 2024.",
          image: "/images/yapyap.jpg",
          link: "https://devpost.com/software/yapyap-anonymous-social-journaling-app",
        },
        {
          title: "You're Not Trash!",
          description: "A web game to help users learn about recycling. Winner of StormHacks 2024.",
          image: "/images/yourenottrash.jpg",
          link: "https://devpost.com/software/you-re-not-trash",
        },
        {
          title: "Invasive Plants Identification App",
          description: "A photo-identification mobile application, available on both iOS and Android devices. Made with the UBC CIC Team.",
          image: "/images/invasive_plants.jpg",
          link: "https://cic.ubc.ca/project/invasive-plants-identification-app/",
        },
        {
          title: "NoiseTracker Web Application",
          description: "A client application coupled with a cloud-native web application to enable information sharing of underwater sound levels. Made with the UBC CIC Team.",
          image: "/images/noisetracker.jpg",
          link: "https://cic.ubc.ca/project/noisetracker-web-application/",
        },
        {
          title: "Institutional Grant Data Analytics",
          description: "A cloud-native web application to modernize the way institutional grant data is analyzed at UBC. Made with the UBC CIC Team.",
          image: "/images/tlef.jpeg",
          link: "https://cic.ubc.ca/project/modernizing-institutional-grant-data-analytics-using-cloud-services/",
        },
        {
          title: "Sooper Tooder",
          description: "A mobile app connecting students with tutors to democratize education for all. Submission for Hack The North 2024.",
          image: "/images/soopertooder.jpg",
          link: "https://devpost.com/software/sooper-tooder",
        },
        {
          title: "Towerist",
          description: "A tower defense game made with Godot for GMTK Game Jam 2024.",
          image: "/images/towerist.png",
          link: "https://keveenwong.itch.io/towerist",
        },
        {
          title: "MnemoMingle",
          description: "A Chrome extension where example sentences, mnemonics, and images are generated in response to a user's highlighted text.",
          image: "/images/mnemomingle.png",
          link: "https://github.com/terwo/mnemo-mingle/tree/main",
        },
      ],
    },
    footer: {
      copyright:
        "© 2025 Franklin Ma. Credit for the opening turtle goes to Dribbble.",
    },
    translationsPage: {
      title: "Translations",
      introduction:
        "At the University of Tokyo, I took classes on translation and interpretation. As part of my goal to internalize both skills as an exercise towards fluency, I translate to familiarize myself with the nuances of the art. I hope this will serve me in furthering my research of developing systems that can understand word connotations and context, and in turn, help language learners communicate cross-culturally more meaningfully.",
      projectsTitle: "Translation Projects",
      projects: [
        {
          title: "Swampland",
          author: "Akutagawa Ryuunosuke",
          description:
            "A short story that I believe doesn't have enough recognition. I am particularly fond of the structure of this piece. My main challenges included differentiating between 絵描き and 画家, and naturally combining clauses in ways natural for English.",
          pdfPath: "/translations/swampland_translation.pdf",
        },
        {
          title: "A Grandmother's Lesson",
          author: "Makino Shinichi",
          description:
            "A reflective narrative on the author's grandmother. I found it challenging to map the different ways of representing quotations to English. My favourite part is imagining the author smiling at the end as he looks back at his memories with his grandmother.",
          pdfPath: "/translations/grandmothers-lesson_translation.pdf",
        },
      ],
      glossaryTitle: "Glossary",
      glossaryIntro:
        "Professor Kaku Hanako told me that our glossary assignments would be one of the things she hopes we take back with us after the course, as a personalized treasure. I am sharing them here, in the hopes that they may be helpful to others.",
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
        "私はブリティッシュコロンビア大学の学部生で、コンピュータサイエンスと認知システム（言語学を中心）の専攻です。",
      paragraph2:
        "学部時代、ありがたいことにCristina Conati教授、Jian Zhu教授、Alan Hu教授の指導を受けることができました。",
      paragraph3:
        "研究は主に言語学習のための言語技術です。同様に、教育にも関心を持っており、コンピュータサイエンス学科とアジア研究学科の両方でティーチングアシスタント (TA) を務めました。",
      researchTitle: "研究関心",
      researchInterests: [
        {
          title: "機械翻訳",
          description:
            "正確性だけでなく、文化的な配慮、創造性も兼ね備えた機械翻訳の実現",
        },
        {
          title: "言語モデルと形式手法の統合",
          description:
            "制約デコーディング、形式意味論、論理学といった形式手法を言語モデルと統合して、幻覚を減らし、より信頼性を向上させる手法",
        },
        {
          title: "言語学習におけるヒューマンAIインタラクション",
          description:
            "第二言語学習者のニーズに応じたコンピューターインタフェースの構築",
        },
      ],
      teaching: "教育",
      teachingPhilosophy:
        "基礎を理解することで、どのような概念も学ぶことができると信じています。TAとして関わった科目のほとんども受講したため、その経験を活かし、自分が学んだ時の思考プロセスを振り返ることで、様々な視点で勉強のサポートをしたいと考えています。",
      teachingCourses: [
        {
          code: "CPSC110",
          name: "Computation, Programs, and Programming",
          terms: "2021W1, 2021W2, 2024W1",
        },
        { code: "CPSC210",
          name: "Software Construction",
          terms: "2024S" },
        {
          code: "CPSC320",
          name: "Intermediate Algorithm Design and Analysis",
          terms: "2024W2",
        },
        {
          code: "CPSC416",
          name: "Distributed Systems",
          terms: "2025S",
        },
        { code: "JAPN100", name: "Beginning Japanese I A", terms: "2023S" },
        { code: "JAPN200", name: "Beginning Japanese II B", terms: "2024S" },
      ],
      cvParagraph:
        "プロジェクト管理とソフトウェア開発の職務経験もあります。詳細は",
      cvLinkText: "履歴書で",
    },
    projects: {
      title: "プロジェクト",
      list: [
        {
          title: "yapyap",
          description: "匿名のSNS日記アプリ。nwHacks 2024受賞。",
          image: "/images/yapyap.jpg",
          link: "https://devpost.com/software/yapyap-anonymous-social-journaling-app",
        },
        {
          title: "You're Not Trash!",
          description: "リサイクルが学べるゲーム。StormHacks 2024受賞。",
          image: "/images/yourenottrash.jpg",
          link: "https://devpost.com/software/you-re-not-trash",
        },
        {
          title: "外来植物識別アプリ",
          description: "写真で外来植物を識別するモバイルアプリ。iOSとAndroidで利用可能。UBC CICで制作。",
          image: "/images/invasive_plants.jpg",
          link: "https://cic.ubc.ca/project/invasive-plants-identification-app/",
        },
        {
          title: "NoiseTrackerウェブアプリケーション",
          description: "水中音量などの情報共有を可能にするクラウドネイティブなウェブアプリ。UBC CICで制作。",
          image: "/images/noisetracker.jpg",
          link: "https://cic.ubc.ca/project/noisetracker-web-application/",
        },
        {
          title: "助成金データ分析システム",
          description: "UBCの助成金データ分析を近代化するクラウドネイティブなウェブアプリ。UBC CICで制作。",
          image: "/images/tlef.jpeg",
          link: "https://cic.ubc.ca/project/modernizing-institutional-grant-data-analytics-using-cloud-services/",
        },
        {
          title: "Sooper Tooder",
          description: "学生と家庭教師をつなぐ教育をより身近にするためのモバイルアプリ。Hack The North 2024提出作品。",
          image: "/images/soopertooder.jpg",
          link: "https://devpost.com/software/sooper-tooder",
        },
        {
          title: "Towerist",
          description: "Godotで制作したタワーディフェンスゲーム。GMTK Game Jam 2024参加作品。",
          image: "/images/towerist.png",
          link: "https://keveenwong.itch.io/towerist",
        },
        {
          title: "MnemoMingle",
          description: "選択したテキストに対して例文・記憶術・画像を生成するChrome拡張機能。",
          image: "/images/mnemomingle.png",
          link: "https://github.com/terwo/mnemo-mingle/tree/main",
        },
      ],
    },
    footer: {
      copyright:
        "© 2025 フランクリン・マ。亀のイラストはDribbbleより。",
    },
    translationsPage: {
      title: "翻訳",
      introduction:
        "東京大学では、翻訳と通訳の授業を受講しました。流暢さを目指した練習の一環として、翻訳を通じてその技術の繊細なニュアンスを習得しようとしています。この取り組みが、語感や文脈を理解するシステムの開発研究、そして言語学習者の異文化間コミュニケーションをより充実したものにする支援に活かされることを期待しています。",
      projectsTitle: "翻訳作品",
      projects: [
        {
          title: "沼地",
          author: "芥川龍之介",
          description:
            "あまり知られていない短編小説です。特にこの作品の構成が気に入っています。主な課題は、「絵描き」と「画家」の区別、そして英語として自然な形で節を組み合わせることでした。",
          pdfPath: "/translations/swampland_translation.pdf",
        },
        {
          title: "祖母の教訓",
          author: "牧野信一",
          description:
            "著者の祖母についての回想録です。引用を表す様々な方法を英語に変換することが難しかったです。最後に、祖母との思い出を振り返る著者がさぞ微笑んでいる様子を、よく思い浮かべます。",
          pdfPath: "/translations/grandmothers-lesson_translation.pdf",
        },
      ],
      glossaryTitle: "用語集",
      glossaryIntro:
        "通訳の授業で作った用語集です。日本で過ごしていた1年間の記念に宝にしています。誰かの役に立つかもしれないという希望で、ここで共有させていただきます。",
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
        "高校の時、病院で母の通訳をしたことがありますが、それは人生で最も充実した経験の一つでした。その体験を通して、人とのつながりの大切さを実感し、人々が深く理解し合える仕事に携わりたいと思うようになりました。",
      paragraph2:
        "言語は人々をつなぐ普遍的な手段。そのため、言語特有のニュアンスをより効果的に習得する方法や、それを支援するコンピューターシステムに取り組みたいと思っています",
      paragraph3:
        "YouTube上のアニメコント、しっとりとした中国音楽、夜の散歩、言語学習などが趣味です。LinkedInで課外活動にもついて投稿させていただいています。",
      imageCaption: "別府で見つけた万葉集の一節",
    },
  },
};
