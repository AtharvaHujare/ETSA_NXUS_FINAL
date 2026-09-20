export interface Coordinator {
  name: string;
  year: 'Third Year' | 'Second Year';
  role: string;
  image: string;
}

export interface RoundInfo {
  number: string;
  title: string;
  format: string;
  points: string[];
  iconType: 'screen' | 'map' | 'cone';
}

export interface TimelineEntry {
  day: string;
  time: string;
  title: string;
  description: string;
  organizerNote?: string;
  highlight?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const PIT_STOP_PROTOCOL_DATA = {
  id: 'pit-stop-protocol',
  number: '01',
  category: 'NON-TECHNICAL',
  name: 'Pit Stop Protocol',
  pitStop: 'PIT STOP 01',
  route: '/events/pit-stop-protocol',
  tagline: 'THINK // COORDINATE // OUTRACE',
  heroMotto: 'SAME STRATEGY DIFFERENT HUMANS',
  footerQuote: 'SOME CALL IT A GAME. WE CALL IT A PIT STOP.',
  heroDescription:
    'A multi-round strategy and coordination challenge inspired by the world of Formula 1. Solve, chase, and execute – it’s not just a game, it’s a pit stop.',
  
  dates: '8 - 9 OCT 2026',
  datesSubtitle: 'Rounds Across Two Days',
  venue: '3rd Floor, EnTC Building',
  venueShort: '3rd Floor',
  venueDetail: 'EnTC Building',
  prizePool: '₹10,000',
  teamSize: '4 Members',
  teamSizeLabel: 'Exactly 4 Members',
  eventType: 'Non-Technical',

  rulebookPdfUrl: '/PIT_STOP_PROTOCOL_RULEBOOK-finale.pdf',
  heroImage: '/pitstop/pit_stop_crew_hero.jpg',
  helmetImage: '/pitstop/f1_helmet_card.jpg',

  overview: {
    titleKicker: 'ABOUT THE EVENT',
    titleMain: 'EVENT OVERVIEW',
    paragraphs: [
      'Pit Stop Protocol is a multi-round strategy and coordination event that tests your logical reasoning, clue-solving ability, teamwork, and composure under time pressure. Inspired by Formula 1 racing, the event challenges teams to move through a qualifying assessment, a clue-driven pursuit across campus, and a final hands-on coordination challenge.',
      'While the theme is motorsport, every round is self-contained and logic-driven — no prior knowledge of Formula 1, its teams, or its rules is required to compete or to win. Just bring your mind, your team, and your game.',
    ],
    noPriorKnowledgeBadge: 'NO PRIOR FORMULA 1 KNOWLEDGE REQUIRED',
    quoteCard: {
      quote: "IT'S NOT ABOUT SPEED ALONE, IT'S ABOUT THE TEAM THAT GETS IT RIGHT.",
      tag: 'NEXUS 01 D1',
    },
  },

  rounds: [
    {
      number: '01',
      title: 'GRID QUALIFIERS',
      format: 'Online Assessment',
      iconType: 'screen',
      points: [
        'Numerical and logical reasoning',
        'Lightly themed around race strategy',
        'All required data is provided',
        'Teams shortlisted by score and time',
      ],
    },
    {
      number: '02',
      title: 'PIT LANE PURSUIT',
      format: 'Treasure Hunt',
      iconType: 'map',
      points: [
        'Follow a chain of clues across campus',
        'Each team gets a unique set of clues',
        'Find the hidden suspense object',
        'Shortest time → shortlisted',
      ],
    },
    {
      number: '03',
      title: 'BLINDFOLDED PIT WALK',
      format: 'Final Round',
      iconType: 'cone',
      points: [
        'One member blindfolded',
        'Navigate a hurdle track',
        'Guided only by verbal instructions',
        'Time + penalties decide the winner',
      ],
    },
  ] as RoundInfo[],

  lifeline: {
    title: 'LIFELINE STRATEGY',
    badge: '45 SEC PENALTY',
    summary:
      'Teams may use one additional hint during Round 2. Tactical decision: use the lifeline and absorb the penalty, or save it for an advantage in Round 3.',
    rules: [
      'Each team may call for one additional hint at any point during Round 2.',
      'Using the lifeline adds exactly 45 seconds to the team’s total round time.',
      'If the lifeline is saved in Round 2, no time penalty is applied.',
      'A saved lifeline carries directly into Round 3 as an exclusive tactical advantage.',
    ],
  },

  keyRules: [
    'Team must have exactly 4 members.',
    'Teams must report on time for registration and briefing.',
    'Only registered team members can participate in subsequent rounds.',
    'No external help (phones, internet, books) allowed during Rounds 1 and 2.',
    'Teams must strictly follow assigned clues; swapping or sharing clues is forbidden.',
    'In Round 3, only verbal guidance is allowed — no touching or physically directing.',
    'Round 3 safety briefing is mandatory before entering the hurdle track.',
    'Any cheating, misconduct or rule violation will result in immediate disqualification.',
    'Judges’ and coordinators’ decisions are final and binding.',
  ],

  timeline: [
    {
      day: '8 OCT 2026',
      time: '7:00 PM – 8:00 PM',
      title: 'Round 1 — Grid Qualifiers',
      description:
        'Online aptitude and logical-reasoning assessment lightly themed around race strategy. All data needed is provided within the questions — no prior F1 knowledge required. Teams shortlisted by score and time.',
      highlight: true,
    },
    {
      day: '9 OCT 2026',
      time: '9:15 AM – 9:30 AM',
      title: 'Reporting & Briefing',
      description:
        'Team verification and explanation of event rules, round structure, and safety instructions for the physical rounds.',
      highlight: false,
    },
    {
      day: '9 OCT 2026',
      time: '10:00 PM – 11:00 PM',
      title: 'Round 2 — Pit Lane Pursuit',
      description:
        'Chit-based clue hunt across campus. Each chit hints at the next location, culminating in a hidden "suspense object". Shortest completion time advances.',
      organizerNote: 'Official rulebook specifies 10 PM – 11 PM',
      highlight: true,
    },
    {
      day: '9 OCT 2026',
      time: '11:00 PM – 11:30 PM',
      title: 'Break & Transition',
      description:
        'Break period followed by briefing and safety walkthrough for the final track round.',
      highlight: false,
    },
    {
      day: '9 OCT 2026',
      time: '11:30 PM – 12:30 PM',
      title: 'Round 3 — Blindfolded Pit Walk',
      description:
        'Final hands-on coordination test. One blindfolded member navigates hurdles (tyres, barricades, cones) guided strictly by teammates’ verbal instructions.',
      organizerNote: 'Official rulebook specifies 11:30 PM – 12:30 PM',
      highlight: true,
    },
  ] as TimelineEntry[],

  faqs: [
    {
      question: 'Who can participate?',
      answer: 'Any undergraduate engineering student with a valid college ID.',
    },
    {
      question: 'Do we need prior Formula 1 knowledge?',
      answer:
        'No. All rounds are self-contained and logic- or coordination-based; no racing knowledge is tested or assumed.',
    },
    {
      question: 'Can team members be changed later?',
      answer: 'No. Teams once registered cannot be modified.',
    },
    {
      question: 'Will all teams receive the same Round 2 clues?',
      answer: 'No. Each team receives a unique clue chain to prevent teams from following one another.',
    },
    {
      question: 'What happens if the blindfolded participant touches a hurdle?',
      answer:
        'A time penalty is added for each contact; a set number of contacts within one attempt results in elimination. The exact penalty and threshold are conveyed at the safety briefing.',
    },
  ] as FAQItem[],

  coordinators: {
    thirdYear: [
      {
        name: 'Vibhuti Sahu',
        year: 'Third Year',
        role: 'TY Lead Coordinator',
        image: '/coordinators/pitstop/vibhuti sahu.png',
      },
      {
        name: 'Atharva Pagrut',
        year: 'Third Year',
        role: 'TY Lead Coordinator',
        image: '/coordinators/pitstop/atharva pagrut.png',
      },
      {
        name: 'Kunj Patil',
        year: 'Third Year',
        role: 'TY Lead Coordinator',
        image: '/coordinators/pitstop/kunj patil.jpg',
      },
    ] as Coordinator[],
    secondYear: [
      {
        name: 'Yash Mali',
        year: 'Second Year',
        role: 'SY Event Coordinator',
        image: '/coordinators/pitstop/yash mali.jpg',
      },
      {
        name: 'Vedanti Waikar',
        year: 'Second Year',
        role: 'SY Event Coordinator',
        image: '/coordinators/pitstop/vedanti waikar.jpeg',
      },
    ] as Coordinator[],
  },
};
