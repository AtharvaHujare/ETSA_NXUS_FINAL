export interface Coordinator {
  name: string;
  year: 'Third Year' | 'Second Year';
  role: string;
  image: string;
  phone?: string;
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
  number: '03',
  category: 'NON-TECHNICAL',
  name: 'Pit Stop Protocol',
  pitStop: 'PIT STOP 03',
  route: '/events/pit-stop-protocol',
  tagline: 'THINK // COORDINATE // OUTRACE',
  heroMotto: 'SAME STRATEGY DIFFERENT HUMANS',
  footerQuote: 'SOME CALL IT A GAME. WE CALL IT A PIT STOP.',
  heroDescription:
    'A multi-round strategy and coordination challenge inspired by the world of Formula 1. Solve, chase, and execute – it’s not just a game, it’s a pit stop.',
  
  dates: '8 & 10 OCT 2026',
  datesSubtitle: 'Online & In-Person Rounds',
  venue: '3rd Floor EnTC Building',
  venueShort: '3rd Floor',
  venueDetail: 'EnTC Building',
  prizePool: '₹15,000',
  teamSize: '4 Members',
  teamSizeLabel: 'Exactly 4 Members',
  eventType: 'Non-Technical Event',
  eligibility: 'Undergraduate engineering students with valid college ID',

  rulebookPdfUrl: '/pitstop_finalfinal.pdf',
  registrationFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSd-bD6nwmFtKreRESHkHEIP90TZvry8b_eOgIpFQihly2j2Dg/viewform?usp=publish-editor',
  heroImage: '/pitstop/pit_stop_crew_hero.webp',
  helmetImage: '/pitstop/f1_helmet_card.webp',

  overview: {
    titleKicker: 'ABOUT THE EVENT',
    titleMain: 'EVENT OVERVIEW',
    paragraphs: [
      'Pit Stop Protocol is a multi-round strategy and coordination event that tests participants’ logical reasoning, clue-solving ability, teamwork, and composure under time pressure. Inspired by the world of Formula 1 racing, the event challenges teams to move through a qualifying assessment, a clue-driven pursuit across campus which also includes simple technical clues, and a final hands-on coordination challenge modelled on a race pit stop.',
      'While the theme is motorsport, every round is self-contained and logic-driven — no prior knowledge of Formula 1, its teams, or its rules is required to compete or to win. The event is designed so that participants who have never watched a race compete on equal footing with those who have.',
    ],
    noPriorKnowledgeBadge: 'NO PRIOR FORMULA 1 KNOWLEDGE REQUIRED',
    quoteCard: {
      quote: "IT'S NOT ABOUT SPEED ALONE, IT'S ABOUT THE TEAM THAT GETS IT RIGHT.",
      tag: 'NEXUS 03',
    },
  },

  rounds: [
    {
      number: '01',
      title: 'GRID QUALIFIERS',
      format: 'Online Assessment',
      iconType: 'screen',
      points: [
        'Conducted online; numerical and logical reasoning questions',
        'Lightly themed around race strategy (pit timing, lap math, probability)',
        'All data required to solve is provided within each question',
        'Teams are ranked by score & time; shortlisted for Round 2',
      ],
    },
    {
      number: '02',
      title: 'PIT LANE PURSUIT',
      format: 'Treasure Hunt',
      iconType: 'map',
      points: [
        'Chit-based clue hunt across campus; each chit leads to the next',
        'Unique clue chain for each team to prevent following one another',
        'Includes short self-contained technical, logical, or engineering tasks',
        'Final clue reveals hidden "suspense object" confirming completion',
      ],
    },
    {
      number: '03',
      title: 'BLINDFOLDED PIT WALK',
      format: 'Final Round',
      iconType: 'cone',
      points: [
        'One team member is blindfolded at the start of a hurdle track',
        'Track obstacles include tyres, barricades, and cones in a fixed layout',
        'Teammates guide strictly verbally from outside — zero touching or contact',
        'Time + hurdle contact penalties decide the champion',
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
      'Using the lifeline adds exactly 45 seconds to the team’s actual completion time (Final Time = Actual Time + 45 sec).',
      'If the lifeline is saved in Round 2, no time penalty is applied.',
      'A saved lifeline carries directly into Round 3 as an exclusive tactical advantage.',
    ],
  },

  keyRules: [
    'Each team must consist of exactly 4 members.',
    'Open to all undergraduate engineering students with a valid college ID.',
    'Teams must report on time for registration and briefing.',
    'Only registered team members are allowed to participate in subsequent rounds.',
    'No external help (phones, internet, books) allowed during Rounds 1 and 2.',
    'Teams must follow their assigned unique clues strictly; swapping or sharing is prohibited.',
    'In Round 3, only verbal guidance is allowed — no team member may touch or physically direct.',
    'Safety briefing for Round 3 is mandatory for all participating teams before entering track.',
    'Hurdle contacts cause time penalties; set touches result in elimination (conveyed during Round 3).',
    'Any form of misconduct, cheating, or rule violation will result in immediate disqualification.',
    'Teams once registered cannot be modified.',
    'Judges’ and coordinators’ decisions are final and binding.',
  ],

  judgingCriteria: [
    'Accuracy of answers and solutions',
    'Logical approach and problem-solving strategy',
    'Team coordination and communication (especially in Round 3)',
    'Time taken to complete each round',
    'Rule adherence, including hurdle-contact penalties in Round 3',
  ],

  tieBreaker: 'In case of a tie in Round 1, the team with the lower time taken in the quiz will be ranked higher.',

  timeline: [
    {
      day: '8 OCT 2026',
      time: '7:00 PM – 8:00 PM',
      title: 'Round 1 — Grid Qualifiers',
      description:
        'Online aptitude and logical-reasoning assessment, lightly themed around race strategy. All data needed to answer is provided within the questions — no prior F1 knowledge required. Teams shortlisted by score and time.',
      highlight: true,
    },
    {
      day: '10 OCT 2026',
      time: '9:15 AM – 9:30 AM',
      title: 'Reporting & Briefing',
      description:
        'Team verification and explanation of event rules, round structure, and safety instructions for the physical final round.',
      highlight: false,
    },
    {
      day: '10 OCT 2026',
      time: '10:00 AM – 11:00 AM',
      title: 'Round 2 — Pit Lane Pursuit',
      description:
        'Chit-based clue hunt across campus. The first chit hints at the location of the second, and so on, ending in a hidden "suspense object" that confirms completion. Teams are shortlisted by the time taken to complete the full chain.',
      highlight: true,
    },
    {
      day: '10 OCT 2026',
      time: '11:00 AM – 11:30 AM',
      title: 'Break & Transition',
      description:
        'Break period, followed by briefing and safety walkthrough for the final round.',
      highlight: false,
    },
    {
      day: '10 OCT 2026',
      time: '11:30 AM – 12:30 PM',
      title: 'Round 3 — Blindfolded Pit Walk',
      description:
        'One blindfolded team member navigates a hurdle track (tyres, barricades, cones) guided only by verbal instructions from teammates. Winner decided by completion time and number of hurdle contacts.',
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
      question: 'Will the clues in Round 2 be the same for all teams?',
      answer: 'No. Each team receives a unique clue chain to prevent teams from following one another.',
    },
    {
      question: 'What happens if the blindfolded participant touches a hurdle in Round 3?',
      answer:
        'A time penalty is added for each contact; a set number of contacts within one attempt results in elimination. The exact number of touches and time penalty will be conveyed at the time of Round 3.',
    },
  ] as FAQItem[],

  coordinators: {
    thirdYear: [
      {
        name: 'Vibhuti Sahu',
        year: 'Third Year',
        role: 'TY Lead Coordinator',
        image: '/images/coordinators/pitstop/vibhuti_sahu.webp',
        phone: '8600964115',
      },
      {
        name: 'Atharva Pagrut',
        year: 'Third Year',
        role: 'TY Lead Coordinator',
        image: '/images/coordinators/pitstop/atharva_pagrut.webp',
        phone: '9637715791',
      },
      {
        name: 'Kunj Patil',
        year: 'Third Year',
        role: 'TY Lead Coordinator',
        image: '/images/coordinators/pitstop/kunj_patil.webp',
        phone: '7745898274',
      },
    ] as Coordinator[],
    secondYear: [
      {
        name: 'Yash Mali',
        year: 'Second Year',
        role: 'SY Event Coordinator',
        image: '/images/coordinators/pitstop/yash_mali.webp',
        phone: '9356800345',
      },
      {
        name: 'Vedanti Waikar',
        year: 'Second Year',
        role: 'SY Event Coordinator',
        image: '/images/coordinators/pitstop/vedanti_waikar.webp',
        phone: '7972037770',
      },
    ] as Coordinator[],
  },
};
