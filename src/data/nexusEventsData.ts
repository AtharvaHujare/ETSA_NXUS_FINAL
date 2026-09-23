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
import { PCCOE_GOT_TALENT_DATA } from './pccoeGotTalentData';

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
    id: 'tech-event-2',
    number: '02',
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
    id: PIT_STOP_PROTOCOL_DATA.id,
    number: PIT_STOP_PROTOCOL_DATA.number,
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
    id: PCCOE_GOT_TALENT_DATA.id,
    number: PCCOE_GOT_TALENT_DATA.number,
    category: PCCOE_GOT_TALENT_DATA.category,
    name: PCCOE_GOT_TALENT_DATA.name,
    pitStop: PCCOE_GOT_TALENT_DATA.pitStop,
    route: PCCOE_GOT_TALENT_DATA.route,
    tagline: PCCOE_GOT_TALENT_DATA.tagline,
    description: PCCOE_GOT_TALENT_DATA.heroDescription,
    prizePool: PCCOE_GOT_TALENT_DATA.prizePool,
    format: 'Live Stage Performance',
    teamSize: PCCOE_GOT_TALENT_DATA.teamSize,
    tags: ['Entertainment', 'Live Stage', 'Performing Arts', 'All PCCOE'],
  },
];

