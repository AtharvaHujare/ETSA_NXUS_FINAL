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
  category: 'NON-TECHNICAL',
  name: 'PCCOE Got Talent',
  pitStop: 'PIT STOP 04',
  route: '/events/pccoe-got-talent',
  tagline: 'YOUR STAGE. YOUR STORY.',
  heroMotto: 'TALENT LIVES HERE',
  footerQuote: 'SOME CALL IT A FEST. WE CALL IT PROGRESS.',
  heroDescription:
    "A fun-filled, non-technical entertainment event inspired by India's Got Latent. Showcase your talent, creativity, humour and spontaneity in front of a live audience and a panel of judges.",

  dates: 'DATE & TIME',
  datesSubtitle: 'To be announced',
  venue: 'PCCOE — 3rd Floor',
  venueShort: '3rd Floor',
  venueDetail: 'Classroom',
  prizePool: '₹5,000',
  teamSize: 'Solo / Group',
  teamSizeLabel: 'Solo or Group Acts Welcome',
  eventType: 'Non-Technical — Entertainment & Talent Showcase',
  registrationFee: '₹100 (Individual)',
  registrationNote: 'Free for PCCOE Students',

  rulebookPdfUrl: '/Rulebook_PCCOE_GOT_TALENT.pdf',
  registrationFormUrl: 'https://forms.gle/aSW1oNgAGfdZk4pM7',
  heroImage: '/talent/pccoe_got_talent_hero.jpg',

  overview: {
    titleKicker: 'ABOUT THE EVENT',
    titleMain: 'EVENT OVERVIEW',
    paragraphs: [
      "PCCOE Got Talent is a fun-filled, non-technical entertainment event giving students a platform to showcase their talent, creativity, humour, and spontaneity in front of a live audience and a panel of judges. Inspired by the popular Got Talent format, the event focuses on entertainment, originality, audience engagement, and creating an enjoyable experience for everyone.",
      "Participants can bring their unique talents to the stage, while judges interact with them through fun questions, reactions, and a simple 1–10 rating system. The event aims to provide students with a break from academics while encouraging confidence, creativity, self-expression, and healthy participation.",
    ],
    features: [
      {
        title: 'Open to All',
        subtitle: 'All PCCOE Students Across Years & Depts',
        icon: 'users',
      },
      {
        title: 'Solo or Group',
        subtitle: 'Acts Welcome (Subject to time limits)',
        icon: 'sparkles',
      },
      {
        title: 'Multiple Categories',
        subtitle: 'Singing, Dancing, Comedy & More',
        icon: 'mic',
      },
      {
        title: 'Fun Judging Format',
        subtitle: '1–10 Rating & Guess Your Score',
        icon: 'trophy',
      },
    ],
    mottoBanner: {
      headline: 'TALENT FUELS A BRIGHTER TOMORROW',
      tagline: 'EXPRESS | ENTERTAIN | INSPIRE',
    },
  },

  categories: [
    { name: 'Singing', description: 'Vocal solos, duets, or acapella tracks', iconName: 'mic' },
    { name: 'Dancing', description: 'Contemporary, classical, hip-hop, or freestyle', iconName: 'activity' },
    { name: 'Instrumental', description: 'Guitar, keyboard, drums, flute & percussion', iconName: 'music' },
    { name: 'Stand-up Comedy', description: 'Observational humour, witty sets & clean college jokes', iconName: 'smile' },
    { name: 'Mimicry', description: 'Impressions, character voices & parody acts', iconName: 'volume-2' },
    { name: 'Poetry / Spoken Word', description: 'Original verse, shayari, Hindi, English or Marathi prose', iconName: 'book-open' },
    { name: 'Acting / Monoact', description: 'Dramatic monologues, theatrical scenes & storytelling', iconName: 'film' },
    { name: 'Beatboxing', description: 'Rhythmic vocal percussion and sound creation', iconName: 'radio' },
    { name: 'Magic & Illusion', description: 'Close-up sleight of hand & stage illusions', iconName: 'wand' },
    { name: 'Other Performing Arts', description: 'Any unique creative act approved by organizers', iconName: 'star' },
  ] as TalentCategory[],

  structureSteps: [
    {
      number: '01',
      title: 'Registration',
      description: 'Open for students 1–2 weeks prior to the event, with participants selecting their preferred category.',
    },
    {
      number: '02',
      title: 'Auditions & Shortlisting',
      description: 'Conduct a brief screening round to finalize the lineup and running order, if required.',
    },
    {
      number: '03',
      title: 'Welcome & Opening',
      description: 'Host introduces the event, external judges/guests, and explains the interactive "Guess Your Score" format.',
    },
    {
      number: '04',
      title: 'Performance Rounds',
      description: 'Each student participant/act performs on stage, with each performance strictly time-boxed.',
    },
    {
      number: '05',
      title: 'Score Guess',
      description: 'Immediately after performing, participant writes their self-assessed score on a sealed card and submits it.',
    },
    {
      number: '06',
      title: "Judges' Verdict",
      description: 'The judging panel announces the official rating (1–10) based on skill and entertainment value.',
    },
    {
      number: '07',
      title: 'Match Reveal',
      description: "The participant's sealed card is opened and compared with judges' score. A match places them on the prize contention list.",
    },
    {
      number: '08',
      title: 'Repeat for All Acts',
      description: 'Steps 4–7 are repeated for every registered performance across categories.',
    },
    {
      number: '09',
      title: 'Final Tally & Winner Announcement',
      description: 'Among participants who matched their scores, tie-breakers are conducted if required. Top 3 are crowned.',
    },
    {
      number: '10',
      title: 'Prize Distribution',
      description: 'Cash prizes and certificates are awarded to the winners on stage under the floodlights.',
    },
    {
      number: '11',
      title: 'Closing & Vote of Thanks',
      description: 'Wrap-up, celebratory group photo, and acknowledgements to judges, sponsors, and student volunteers.',
    },
  ] as TalentStep[],

  guessYourScore: {
    title: 'GUESS YOUR SCORE',
    kicker: 'INTERACTIVE STAGE ELEMENT',
    subtitle: 'PREDICT YOUR PERFORMANCE. MATCH WITH THE JUDGES.',
    rules: [
      'Each judge scores the performance on an overall scale of 1 to 10.',
      'Before judges reveal their score, the participant writes down their own self-predicted score on a sealed card.',
      'The self-prediction is completely independent and does NOT affect the judges’ actual scores.',
      'If your predicted score matches the official judges’ score, you immediately enter the prize contention list!',
    ],
  },

  judgingCriteria: [
    {
      title: 'Talent & Skill',
      description: 'Technical competence, vocal/body control, and execution mastery',
      icon: 'star',
    },
    {
      title: 'Creativity & Originality',
      description: 'Unique style, freshness of the piece, and innovative interpretation',
      icon: 'sparkles',
    },
    {
      title: 'Stage Presence',
      description: 'Poise, confidence, command of the stage, and composure under lights',
      icon: 'user-check',
    },
    {
      title: 'Entertainment Value',
      description: 'Overall enjoyment factor, fun delivery, and audience delight',
      icon: 'heart',
    },
    {
      title: 'Self-Prediction',
      description: 'Interactive "Guess Your Score" card matching for prize contention',
      icon: 'target',
    },
    {
      title: 'Audience Engagement',
      description: 'Crowd reaction, applause, connection, and energy in the auditorium',
      icon: 'users',
    },
  ] as JudgingCriterion[],

  prizes: {
    first: {
      place: '1ST PLACE',
      amount: '₹3,000',
      label: 'Winner',
      perks: 'Certificate + Cash Prize',
      color: '#FFD700',
    },
    second: {
      place: '2ND PLACE',
      amount: '₹2,000',
      label: 'Runner-Up',
      perks: 'Certificate + Cash Prize',
      color: '#E0E0E0',
    },
    third: {
      place: '3RD PLACE',
      amount: '₹1,000',
      label: 'Third Place',
      perks: 'Certificate + Cash Prize',
      color: '#CD7F32',
    },
    total: '₹5,000',
    totalLabel: 'TOTAL CASH PRIZE POOL',
    additionalRewards: [
      'Winner — Certificate + Cash Prize',
      'Runner-Up — Certificate + Cash Prize',
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
    quote: "IT'S NOT JUST A STAGE, IT'S A CELEBRATION OF YOU.",
    tag: 'NEXUS 2026',
  },

  keyRules: [
    'The event is open to all currently enrolled PCCOE students across years and departments.',
    'Performances must be appropriate for a general college audience.',
    'Explicit, obscene, sexually inappropriate, discriminatory, hateful, or abusive content is strictly prohibited.',
    'Personal attacks, harassment, bullying, or defamatory remarks against students, faculty, or staff are forbidden.',
    'Mild humour and roasting may be permitted within organizer-set boundaries; hostility is disallowed.',
    'Jokes targeting religion, caste, race, gender, appearance, or sexuality are strictly prohibited.',
    'Each participant/team will be allotted a fixed performance time limit that must be respected.',
    'Participants must inform the organizers in advance about any special props or equipment required.',
    'Fire, explosives, weapons, flammable substances, and hazardous equipment are strictly prohibited.',
    'Background audio/music tracks must be submitted in advance in standard audio format, with backup copies kept.',
    'All participants are expected to maintain respectful behaviour towards judges, staff, and fellow performers.',
    "The judges' decisions are final and binding in all cases.",
  ],
};
