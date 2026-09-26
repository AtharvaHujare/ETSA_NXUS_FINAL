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

export interface ScheduleRound {
  time: string;
  title: string;
}

export interface ScheduleSession {
  time: string;
  title: string;
  pitStopId?: number; // Links to pit stop if applicable
  location?: string;
  subtitle?: string;
  badge?: string;
  rounds?: ScheduleRound[];
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
    time: '8:00 AM – 8:00 PM',
    location: 'Third Floor Labs – E&TC Dept., PCCOE',
    tagline: 'Build. Break. Rebuild.',
    description: 'FORMULA HARDWARE is an open-theme hardware hackathon focused on creativity, practical engineering, innovation and working prototypes.',
    trackProgress: 0.14,
  },
  {
    id: 2,
    stopNumber: '02',
    name: 'AERO-X',
    category: 'TECHNICAL',
    dateStr: '09–10 OCT 2026',
    dayNumber: 1,
    dayLabel: 'OCT 9–10',
    time: '09–10 OCT',
    location: 'E&TC Department, PCCOE',
    tagline: 'BUILD | FLY | COMPETE',
    description: 'A two-day hands-on technical workshop and competition on drone technology conducted in association with Prarambh-X Technologies.',
    trackProgress: 0.38,
  },
  {
    id: 3,
    stopNumber: '03',
    name: 'Pit Stop Protocol',
    category: 'NON-TECHNICAL',
    dateStr: '8 & 10 OCT 2026',
    dayNumber: 2,
    dayLabel: 'OCT 8 & 10',
    time: '9:15 AM – 12:30 PM',
    location: '3rd Floor EnTC Building',
    tagline: 'THINK // COORDINATE // OUTRACE',
    description: 'A multi-round strategy and coordination challenge inspired by motorsport. Solve, chase, and execute through 3 thrilling rounds — no prior F1 knowledge needed.',
    trackProgress: 0.62,
  },
  {
    id: 4,
    stopNumber: '04',
    name: 'PCCOE Got Talent',
    category: 'TECHNICAL',
    dateStr: 'DATE & TIME: TBA',
    dayNumber: 2,
    dayLabel: 'TBA',
    time: 'TBA',
    location: 'PCCOE — 3rd Floor (Classroom)',
    tagline: 'TECHNICAL TALENT & INNOVATION SHOWCASE',
    description: 'A technical talent and innovation showcase where PCCOE students present their technical skills, coding, AI, builds, and creative tech ideas.',
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
        time: '8:00 AM – 8:00 PM',
        title: 'Formula Hardware',
        pitStopId: 1,
        location: 'Third Floor Labs – E&TC Dept., PCCOE',
        subtitle: '12-Hour Prototype Build & Evaluation',
      },
      {
        time: '09–10 OCT',
        title: 'AERO-X',
        pitStopId: 2,
        location: 'E&TC Department, PCCOE',
        badge: 'TWO-DAY EVENT',
        subtitle: 'Two-Day Drone Workshop & Arena Competition',
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
        time: '9:15 AM – 12:30 PM',
        title: 'Pit Stop Protocol',
        pitStopId: 3,
        location: '3rd Floor EnTC Building',
        subtitle: 'Campus Strategy & Coordination Challenge',
        rounds: [
          { time: '9:15–9:30 AM', title: 'Reporting & Briefing' },
          { time: '10:00–11:00 AM', title: 'Round 2: Pit Lane Pursuit' },
          { time: '11:00–11:30 AM', title: 'Break & Transition' },
          { time: '11:30 AM–12:30 PM', title: 'Round 3: Blindfolded Pit Walk' },
        ],
      },
      {
        time: 'TBA',
        title: 'PCCOE Got Talent',
        pitStopId: 4,
        location: 'PCCOE — 3rd Floor (Classroom)',
        subtitle: 'Date & Time: TBA (Technical Talent Showcase)',
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
