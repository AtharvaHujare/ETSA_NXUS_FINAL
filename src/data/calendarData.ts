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
    category: 'TECHNICAL',
    dateStr: '09 OCT 2026',
    dayNumber: 1,
    dayLabel: 'OCT 9',
    time: '10:00 AM',
    location: 'Third Floor Labs, E&TC Dept.',
    tagline: 'Build. Break. Rebuild.',
    description: 'FORMULA HARDWARE is an open-theme hardware hackathon focused on creativity, practical engineering, innovation and working prototypes.',
    trackProgress: 0.14,
  },
  {
    id: 2,
    stopNumber: '02',
    name: 'Tech Event 2',
    category: 'TECHNICAL',
    dateStr: '09 OCT 2026',
    dayNumber: 1,
    dayLabel: 'OCT 9',
    time: '02:00 PM',
    location: 'Design Studio Amphitheatre',
    tagline: 'High-Velocity Technical Challenge',
    description: 'A technology-focused challenge where participants compete through innovation, problem solving and technical skills.',
    trackProgress: 0.38,
  },
  {
    id: 3,
    stopNumber: '03',
    name: 'Pit Stop Protocol',
    category: 'NON-TECHNICAL',
    dateStr: '10 OCT 2026',
    dayNumber: 2,
    dayLabel: 'OCT 10',
    time: '10:00 AM',
    location: '3rd Floor, EnTC Building',
    tagline: 'THINK // COORDINATE // OUTRACE',
    description: 'A multi-round strategy and coordination challenge inspired by the world of Formula 1. Solve, chase, and execute – it’s not just a game, it’s a pit stop.',
    trackProgress: 0.62,
  },
  {
    id: 4,
    stopNumber: '04',
    name: 'PCCOE Got Talent',
    category: 'NON-TECHNICAL',
    dateStr: 'DATE TO BE ANNOUNCED',
    dayNumber: 2,
    dayLabel: 'TBA',
    time: 'TBA',
    location: 'PCCOE — 3rd Floor (Classroom)',
    tagline: 'YOUR STAGE. YOUR STORY.',
    description: 'A fun-filled, non-technical entertainment event where PCCOE students showcase talent, creativity, humour and spontaneity in front of a live audience and judging panel.',
    trackProgress: 0.85,
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
        title: 'Networking & Paddock Expo',
      },
    ],
  },
  {
    dayId: 2,
    dayTag: 'DAY 2',
    dateFormatted: '10 OCT 2026',
    accentColor: '#7090b0',
    tagline: 'STRATEGY & TALENT TAKE THE FINAL LAP.',
    sessions: [
      {
        time: '09:30 AM',
        title: 'Briefing & Scrutineering',
      },
      {
        time: '10:00 AM',
        title: 'Pit Stop Protocol',
        pitStopId: 3,
      },
      {
        time: '02:00 PM',
        title: 'PCCOE Got Talent',
        pitStopId: 4,
      },
      {
        time: '06:00 PM',
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
