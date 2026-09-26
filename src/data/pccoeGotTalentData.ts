export interface TalentCategory {
  name: string;
  description: string;
  iconName: string;
}

export interface TalentStep {
  number: string;
  title: string;
  description: string;
}

export interface TalentCoordinator {
  name: string;
  role: string;
  image: string;
}

export interface JudgingCriterion {
  title: string;
  description: string;
  icon: string;
}

export const PCCOE_GOT_TALENT_DATA = {
  id: 'pccoe-got-talent',
  number: '04',
  category: 'TECHNICAL',
  name: 'PCCOE Got Talent',
  pitStop: 'PIT STOP 04',
  route: '/events/pccoe-got-talent',
  tagline: 'TECHNICAL TALENT & INNOVATION SHOWCASE',
  heroMotto: 'INNOVATION LIVES HERE',
  footerQuote: 'WHERE TECHNICAL MASTERY MEETS CREATIVE GENIUS.',
  heroDescription:
    'A technical talent and innovation showcase where PCCOE students present their technical skills, creativity, innovation, originality, technology-driven ideas, and technical builds in front of a live audience and judging panel.',

  dates: 'DATE & TIME',
  datesSubtitle: 'To be announced',
  venue: 'PCCOE — 3rd Floor',
  venueShort: '3rd Floor',
  venueDetail: 'Classroom',
  prizePool: '₹15,000',
  teamSize: 'Individual / Team (Max 4)',
  teamSizeLabel: 'Solo or Group (Up to 4 Members)',
  eventType: 'Technical – Talent & Innovation Showcase',
  registrationFee: '₹100 (Individual / Group)',
  registrationNote: 'Free for PCCOE Students',

  rulebookPdfUrl: '/RULEBOOK_Pccoe_Got_Talent_Technical_final.pdf',
  registrationFormUrl: 'https://forms.gle/aSW1oNgAGfdZk4pM7',
  heroImage: '/talent/pccoe_got_talent_hero.webp',

  overview: {
    titleKicker: 'ABOUT THE EVENT',
    titleMain: 'EVENT OVERVIEW',
    paragraphs: [
      'PCCOE Got Talent is a technical talent and innovation showcase designed to give students a platform to showcase their technical skills, creativity, innovation, originality, technology-driven ideas, and technical creations in front of a live audience and a panel of judges.',
      'Participants can bring their unique technical talents to the stage—including coding, AI, technical builds, digital design, app/website development, technical storytelling, and other technology-based creations. Judges interact with participants through questions, reactions, and a simple 1–10 rating system, creating an energetic and engaging atmosphere.',
    ],
    features: [
      {
        title: 'Open to All PCCOE',
        subtitle: 'Currently Enrolled Students Across Years & Depts',
        icon: 'users',
      },
      {
        title: 'Solo or Team (Max 4)',
        subtitle: 'Individual or Group Acts (Max 4 Minutes)',
        icon: 'sparkles',
      },
      {
        title: '10 Tech Categories',
        subtitle: 'Builds, AI, Code, Design, Skits & Innovation',
        icon: 'cpu',
      },
      {
        title: '1–10 Rating & Guess Score',
        subtitle: 'Predict Score & Match for Prize Contention',
        icon: 'trophy',
      },
    ],
    mottoBanner: {
      headline: 'TECHNICAL TALENT FUELS INNOVATION',
      tagline: 'BUILD | CODE | CREATE | INSPIRE',
    },
  },

  categories: [
    {
      name: 'Unique Projects & Technical Builds',
      description: 'Hardware prototypes, robotics, embedded systems, IoT devices & custom engineering builds',
      iconName: 'cpu',
    },
    {
      name: 'AI & AI Creativity',
      description: 'Generative AI applications, intelligent agents, neural models & machine learning workflows',
      iconName: 'brain',
    },
    {
      name: 'Tech-Based Skits & Storytelling',
      description: 'Creative sketches, comedy sets & narrative performances centered on technology and engineering life',
      iconName: 'film',
    },
    {
      name: 'Coding & Creative Programming',
      description: 'Live coding, creative algorithms, shaders, generative art, game development & scripting',
      iconName: 'code',
    },
    {
      name: 'Digital Art & Graphic Design',
      description: 'UI/UX concepts, 3D renders, vector art, digital illustrations & technical visual designs',
      iconName: 'pen-tool',
    },
    {
      name: 'Video Editing & Content Creation',
      description: 'Motion graphics, CGI VFX, technical explainers, trailers & digital cinematography',
      iconName: 'video',
    },
    {
      name: 'App / Website Design',
      description: 'Web applications, mobile apps, SaaS tools, developer utilities & interactive platforms',
      iconName: 'globe',
    },
    {
      name: 'Innovation & Tech Ideas',
      description: 'Disruptive technology concepts, startup solutions, architectural proposals & breakthrough ideas',
      iconName: 'lightbulb',
    },
    {
      name: 'Digital Music & Audio Production',
      description: 'Synthesized sound design, DAW music production, electronic beats & algorithmic audio',
      iconName: 'music',
    },
    {
      name: 'Approved Technical Talents',
      description: 'Any unique creative or technical demonstration approved by the organizing committee',
      iconName: 'star',
    },
  ] as TalentCategory[],

  structureSteps: [
    {
      number: '01',
      title: 'Registration',
      description: 'Open for students 1–2 weeks prior to the event, with participants selecting their preferred technical category.',
    },
    {
      number: '02',
      title: 'Auditions / Shortlisting',
      description: 'Conduct a brief screening round to review technical entries and finalize the lineup and running order, if required.',
    },
    {
      number: '03',
      title: 'Welcome & Opening',
      description: 'The host introduces the event, judges/guests, technical showcase categories, judging criteria, and "Guess Your Score" format.',
    },
    {
      number: '04',
      title: 'Performance Rounds',
      description: 'Each participant/team presents or demonstrates their technical talent, project, idea, creation, or implementation (Max 4 minutes).',
    },
    {
      number: '05',
      title: 'Score Guess',
      description: 'Immediately after performing, the participant writes their self-assessed score on a sealed card and submits it to the coordinator.',
    },
    {
      number: '06',
      title: "Judges' Verdict",
      description: 'The external judging panel announces the official technical showcase score for the performance on a 1–10 scale.',
    },
    {
      number: '07',
      title: 'Match Reveal',
      description: "The participant's sealed score is opened and compared with the judges' score. A match places the participant on the prize contention list.",
    },
    {
      number: '08',
      title: 'Repeat for All Acts',
      description: 'Steps 4–7 are repeated for every registered entry across all technical categories.',
    },
    {
      number: '09',
      title: 'Final Tally & Winner Announcement',
      description: 'Among participants who matched their scores, tie-breakers are conducted if required. The top 3 technical entries are selected.',
    },
    {
      number: '10',
      title: 'Prize Distribution',
      description: 'Cash prizes (₹7,000 / ₹5,000 / ₹3,000) and certificates are awarded to the winners on stage.',
    },
    {
      number: '11',
      title: 'Closing & Vote of Thanks',
      description: 'The event concludes with a wrap-up, group photo, and acknowledgements to the judges, guests, sponsors, and student volunteers.',
    },
  ] as TalentStep[],

  guessYourScore: {
    title: 'GUESS YOUR SCORE',
    kicker: 'SIGNATURE STAGE MECHANIC',
    subtitle: 'PREDICT YOUR PERFORMANCE. MATCH WITH THE JUDGES.',
    rules: [
      'Each judge scores the technical showcase on an overall rating scale of 1 to 10.',
      'Immediately after performing, the participant writes down their self-predicted score on a sealed card and submits it.',
      'The self-prediction is completely independent and does NOT affect the judges’ actual scoring evaluation.',
      'The judges announce their official score, after which the participant’s sealed prediction is revealed.',
      'If your predicted score matches the official judges’ score, you immediately enter the prize contention list!',
    ],
  },

  judgingCriteria: [
    {
      title: 'Technical Skill & Understanding',
      description: 'Depth of technical competence, conceptual clarity, and mastery of tools or frameworks',
      icon: 'cpu',
    },
    {
      title: 'Creativity',
      description: 'Inventive approach, unique presentation style, and creative integration of technology',
      icon: 'sparkles',
    },
    {
      title: 'Innovation & Originality',
      description: 'Novelty of the concept, uniqueness of the solution, and distinct engineering perspective',
      icon: 'lightbulb',
    },
    {
      title: 'Implementation / Functionality',
      description: 'Live demonstration stability, working execution, prototype quality, and practical viability',
      icon: 'check-circle',
    },
    {
      title: 'Stage Presence',
      description: 'Confidence, poise, command of the stage, and composure under live lights',
      icon: 'user-check',
    },
    {
      title: 'Presentation & Communication',
      description: 'Clarity of explanation, effective storytelling, and ability to communicate technical ideas',
      icon: 'message-square',
    },
    {
      title: 'Audience Engagement',
      description: 'Live crowd connection, audience delight, and overall impact of the showcase',
      icon: 'users',
    },
  ] as JudgingCriterion[],

  prizes: {
    first: {
      place: '1ST PLACE',
      amount: '₹7,000',
      label: 'First Place',
      perks: 'Certificate + Cash Prize',
      color: '#FFD700',
    },
    second: {
      place: '2ND PLACE',
      amount: '₹5,000',
      label: 'Second Place',
      perks: 'Certificate + Cash Prize',
      color: '#E0E0E0',
    },
    third: {
      place: '3RD PLACE',
      amount: '₹3,000',
      label: 'Third Place',
      perks: 'Certificate + Cash Prize',
      color: '#CD7F32',
    },
    total: '₹15,000',
    totalLabel: 'TOTAL CASH PRIZE POOL',
    additionalRewards: [
      'First Place — ₹7,000 + Winner Certificate',
      'Second Place — ₹5,000 + Certificate',
      'Third Place — ₹3,000 + Certificate',
      'All Participants — Official NEXUS Participation Certificate',
    ],
  },

  coordinators: [
    {
      name: 'Pushkar Sinha',
      role: 'Lead Event Coordinator',
      image: '/images/coordinators/talent/pushkar_sinha.webp',
    },
    {
      name: 'Harshita Singh',
      role: 'Lead Event Coordinator',
      image: '/images/coordinators/talent/harshita_singh.webp',
    },
    {
      name: 'Deepshikha Joshi',
      role: 'Lead Event Coordinator',
      image: '/images/coordinators/talent/deepshikha_joshi.webp',
    },
    {
      name: 'Arohi Shende',
      role: 'Event Coordinator',
      image: '/images/coordinators/talent/arohi_shende.webp',
    },
    {
      name: 'Viren Patil',
      role: 'Event Coordinator',
      image: '/images/coordinators/talent/viren_patil.webp',
    },
  ] as TalentCoordinator[],

  quoteCard: {
    quote: 'WHERE TECHNICAL MASTERY MEETS CREATIVE GENIUS.',
    tag: 'NEXUS 2026 // PCCOE GOT TALENT',
  },

  keyRules: [
    'Open to all currently enrolled PCCOE students across years and departments.',
    'Individual or team participation with a maximum team size of 4 members.',
    'Each participant/team will have a maximum of 4 minutes for their performance/showcase.',
    'Participants must understand and present their own technical work within the allotted time.',
    'Performances must be college-appropriate; explicit, obscene, sexually inappropriate, discriminatory, or abusive content is strictly prohibited.',
    'Personal attacks, harassment, bullying, or defamatory remarks against students, faculty, or staff are strictly prohibited.',
    'Mild humour and roasting are permitted within acceptable college standards; jokes targeting protected or personal characteristics are forbidden.',
    'Sensitive political or religious material must not be used in a manner that promotes hostility or targets individuals/groups.',
    'Fire, explosives, weapons, flammable substances, dangerous chemicals, and hazardous equipment are strictly prohibited.',
    'Technical equipment (laptops, microcontrollers, sensors, robotics, prototypes) requires prior approval and safety compliance.',
    'Required digital media (videos, audio, slides, software demonstrations) must be submitted before the event with backup copies maintained.',
    'Plagiarism, false specifications, or falsely claiming another person’s work will lead to immediate disqualification.',
    "The judges' decisions are final and binding on all aspects of evaluation.",
  ],
};
