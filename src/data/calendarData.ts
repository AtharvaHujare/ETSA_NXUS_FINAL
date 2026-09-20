export interface PitStop {
  id: number;
  stopNumber: string; // "01", "02", etc.
  name: string;
  category: string;
  dateStr: string; // "09 OCT 2026"
  dayNumber: 1 | 2;
  dayLabel: string; // "OCT 9"
  time: string; // "10:00 AM"
  location: string;
  tagline: string;
  description: string;
  trackProgress: number; // 0.0 to 1.0 along the 3D race circuit spline
  badgeColor?: string;
}

export interface ScheduleSession {
  time: string;
  title: string;
  pitStopId?: number; // Links to pit stop if applicable
  location?: string;
  status?: string;
}

export interface DaySchedule {
  dayId: 1 | 2;
  dayTag: string; // "DAY 1", "DAY 2"
  dateFormatted: string; // "9 OCT 2026"
  accentColor: string;
  tagline: string;
  sessions: ScheduleSession[];
}

export const PIT_STOPS: PitStop[] = [
  {
    id: 1,
    stopNumber: '01',
    name: 'Hardware Hackathon',
    category: 'HARDWARE & TELEMETRY',
    dateStr: '08 OCT 2026',
    dayNumber: 1,
    dayLabel: 'OCT 8',
    time: '08:00 AM',
    location: 'Third Floor Labs, E&TC Dept.',
    tagline: 'Build. Break. Rebuild.',
    description: 'FORMULA HARDWARE is an open-theme hardware hackathon focused on creativity, practical engineering, innovation and working prototypes.',
    trackProgress: 0.12,
  },
  {
    id: 2,
    stopNumber: '02',
    name: 'Tech Event 2',
    category: 'AERODYNAMICS & AI',
    dateStr: '09 OCT 2026',
    dayNumber: 1,
    dayLabel: 'OCT 9',
    time: '02:00 PM',
    location: 'Design Studio Amphitheatre',
    tagline: 'Next-Gen Vehicle Dynamics',
    description: 'Autonomous robotics, sensor fusion, computer vision track trials, and vehicle dynamics defense judged by industry motorsport aerodynamicists.',
    trackProgress: 0.32,
  },
  {
    id: 3,
    stopNumber: '03',
    name: 'Talent Show',
    category: 'PADDOCK CULTURE',
    dateStr: '10 OCT 2026',
    dayNumber: 2,
    dayLabel: 'OCT 10',
    time: '09:00 AM',
    location: 'Main Paddock Stage',
    tagline: 'Stage Under Floodlights',
    description: 'Unleash raw talent, stage performance, audio-visual synchrony, and motorsport creative culture as the paddock lights ignite.',
    trackProgress: 0.52,
  },
  {
    id: 4,
    stopNumber: '04',
    name: 'Theme Based',
    category: 'APEX INNOVATION',
    dateStr: '10 OCT 2026',
    dayNumber: 2,
    dayLabel: 'OCT 10',
    time: '12:00 PM',
    location: 'Paddock Pavillion & Grid',
    tagline: 'Sustainable Mobility Sprint',
    description: 'High-speed problem solving focused on electric powertrain efficiency, regenerative braking telemetry, and future urban mobility paradigms.',
    trackProgress: 0.72,
  },
  {
    id: 5,
    stopNumber: '05',
    name: 'Gaming Event',
    category: 'ESPORTS GRAND PRIX',
    dateStr: '10 OCT 2026',
    dayNumber: 2,
    dayLabel: 'OCT 10',
    time: '03:00 PM',
    location: 'Apex Sim Rig Arena',
    tagline: 'Wheel-to-Wheel Virtual GP',
    description: 'Competitive sim racing championship on laser-scanned circuits. Elite virtual drivers battle for pole position and fastest lap honors.',
    trackProgress: 0.91,
  },
];

export const DAYS_SCHEDULE: DaySchedule[] = [
  {
    dayId: 1,
    dayTag: 'DAY 1',
    dateFormatted: '9 OCT 2026',
    accentColor: '#E10600',
    tagline: 'IDEAS FUEL THE ENGINE.',
    sessions: [
      {
        time: '09:00 AM',
        title: 'Opening Ceremony',
      },
      {
        time: '10:00 AM',
        title: 'Hardware Hackathon',
        pitStopId: 1,
      },
      {
        time: '02:00 PM',
        title: 'Tech Event 2',
        pitStopId: 2,
      },
      {
        time: '06:00 PM',
        title: 'Networking & Expo',
      },
    ],
  },
  {
    dayId: 2,
    dayTag: 'DAY 2',
    dateFormatted: '10 OCT 2026',
    accentColor: '#7090b0',
    tagline: 'TALENT TAKES THE FINAL LAP.',
    sessions: [
      {
        time: '09:00 AM',
        title: 'Talent Show',
        pitStopId: 3,
      },
      {
        time: '12:00 PM',
        title: 'Theme Based Event',
        pitStopId: 4,
      },
      {
        time: '03:00 PM',
        title: 'Gaming Event',
        pitStopId: 5,
      },
      {
        time: '07:00 PM',
        title: 'Prize Distribution & Closing',
      },
    ],
  },
];

export const CALENDAR_DAYS_HEADER = [
  { dayName: 'MON', dateNum: 5, available: false },
  { dayName: 'TUE', dateNum: 6, available: false },
  { dayName: 'WED', dateNum: 7, available: false },
  { dayName: 'THU', dateNum: 8, available: false },
  { dayName: 'FRI', dateNum: 9, available: true, dayNumber: 1 as const },
  { dayName: 'SAT', dateNum: 10, available: true, dayNumber: 2 as const },
  { dayName: 'SUN', dateNum: 11, available: false },
];
