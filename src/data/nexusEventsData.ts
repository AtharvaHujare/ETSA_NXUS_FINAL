export interface NexusEvent {
  id: string;
  number: string;
  category: string;
  name: string;
  pitStop: string;
  route: string;
  tagline: string;
  description: string;
  prizePool: string;
  format: string;
  teamSize: string;
  tags: string[];
}

import { PIT_STOP_PROTOCOL_DATA } from './pitStopProtocolData';

export const NEXUS_EVENTS: NexusEvent[] = [
  {
    id: 'hardware-hackathon',
    number: '01',
    category: 'TECHNICAL',
    name: 'Hardware Hackathon',
    pitStop: 'PIT STOP 01',
    route: '/events/hardware-hackathon',
    tagline: 'Build. Break. Rebuild.',
    description:
      'FORMULA HARDWARE is an open-theme hardware hackathon focused on creativity, practical engineering, innovation and working prototypes.',
    prizePool: '₹15,000 + Vouchers',
    format: '12-Hour Prototype Build',
    teamSize: '2–5 Members',
    tags: ['Embedded Systems', 'Electronics', 'Robotics', 'Open Theme Prototype'],
  },
  {
    id: PIT_STOP_PROTOCOL_DATA.id,
    number: '02',
    category: PIT_STOP_PROTOCOL_DATA.category,
    name: PIT_STOP_PROTOCOL_DATA.name,
    pitStop: PIT_STOP_PROTOCOL_DATA.pitStop,
    route: PIT_STOP_PROTOCOL_DATA.route,
    tagline: PIT_STOP_PROTOCOL_DATA.tagline,
    description: PIT_STOP_PROTOCOL_DATA.heroDescription,
    prizePool: PIT_STOP_PROTOCOL_DATA.prizePool,
    format: '3-Round Strategy & Pursuit',
    teamSize: PIT_STOP_PROTOCOL_DATA.teamSize,
    tags: ['Strategy', 'Clue Hunt', 'Team Coordination', 'Non-Technical'],
  },
  {
    id: 'tech-event-2',
    number: '03',
    category: 'TECHNICAL',
    name: 'Tech Event 2',
    pitStop: 'PIT STOP 02',
    route: '/events/tech-event-2',
    tagline: 'High-Velocity Technical Challenge',
    description:
      'A technology-focused challenge where participants compete through innovation, problem solving and technical skills.',
    prizePool: '₹20,000+',
    format: 'Technical Sprint & Defense',
    teamSize: '2 — 4 Members',
    tags: ['Algorithms', 'AI & Analytics', 'Problem Solving', 'System Design'],
  },
  {
    id: 'talent-show',
    number: '04',
    category: 'CREATIVE',
    name: 'Talent Show',
    pitStop: 'PIT STOP 03',
    route: '/events/talent-show',
    tagline: 'Stage Under Floodlights',
    description:
      'A stage for participants to showcase creativity, performance and individual talent.',
    prizePool: '₹15,000+',
    format: 'Live Stage Performance',
    teamSize: 'Solo or Group',
    tags: ['Stage Performance', 'Music & Arts', 'Creative Expression', 'Live Showcase'],
  },
  {
    id: 'theme-based',
    number: '05',
    category: 'CREATIVE',
    name: 'Theme Based',
    pitStop: 'PIT STOP 04',
    route: '/events/theme-based',
    tagline: 'NEXUS Visual Experience',
    description:
      'A creative challenge built around the NEXUS theme where participants turn ideas into visual experiences.',
    prizePool: '₹15,000+',
    format: 'Theme Sprint & Showcase',
    teamSize: '1 — 3 Members',
    tags: ['Visual Design', 'Theme Innovation', 'Digital Media', 'Concept Pitch'],
  },
  {
    id: 'gaming-event',
    number: '06',
    category: 'COMPETITIVE',
    name: 'Gaming Event',
    pitStop: 'PIT STOP 05',
    route: '/events/gaming-event',
    tagline: 'Wheel-to-Wheel Virtual Arena',
    description:
      'A competitive gaming experience where participants compete for victory.',
    prizePool: '₹20,000+',
    format: 'Tournament Knockouts',
    teamSize: 'Squad / Solo',
    tags: ['Esports Battle', 'Sim Racing', 'Competitive Gaming', 'Knockout Arena'],
  },
];

