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

import { HARDWARE_HACKATHON_DATA } from './hardwareHackathonData';
import { AERO_X_DATA } from './aeroXData';
import { PIT_STOP_PROTOCOL_DATA } from './pitStopProtocolData';
import { PCCOE_GOT_TALENT_DATA } from './pccoeGotTalentData';

export const NEXUS_EVENTS: NexusEvent[] = [
  {
    id: 'hardware-hackathon',
    number: '01',
    category: 'TECHNICAL',
    name: 'Hardware Hackathon',
    pitStop: HARDWARE_HACKATHON_DATA.pitStop,
    route: '/events/hardware-hackathon',
    tagline: 'Build. Break. Rebuild.',
    description: HARDWARE_HACKATHON_DATA.fullDescription,
    prizePool: HARDWARE_HACKATHON_DATA.prizes.total,
    format: '12-Hour Prototype Build',
    teamSize: HARDWARE_HACKATHON_DATA.teamSize,
    tags: ['Embedded Systems', 'Electronics', 'Robotics', 'AI / ML', 'Open Theme'],
  },
  {
    id: AERO_X_DATA.id,
    number: AERO_X_DATA.number,
    category: AERO_X_DATA.category,
    name: AERO_X_DATA.name,
    pitStop: AERO_X_DATA.pitStop,
    route: AERO_X_DATA.route,
    tagline: AERO_X_DATA.tagline,
    description: AERO_X_DATA.description,
    prizePool: AERO_X_DATA.prizes.total,
    format: 'Workshop + Drone Arena Competition',
    teamSize: AERO_X_DATA.teamSize,
    tags: ['Drone Technology', 'Quadcopter Build', 'Aerodynamics', 'Drone Arena'],
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
    format: 'Technical Talent & Innovation Showcase',
    teamSize: PCCOE_GOT_TALENT_DATA.teamSize,
    tags: ['Technical Innovation', 'Coding & AI', 'Hardware Builds', 'Digital Design', 'Live Stage'],
  },
];

