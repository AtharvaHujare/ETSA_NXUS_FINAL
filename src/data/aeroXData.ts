export interface AeroXCoordinator {
  name: string;
  role: string;
  image: string;
}

export interface AeroXScheduleItem {
  time: string;
  title: string;
  description: string;
  duration?: string;
  isBreak?: boolean;
  isHighlight?: boolean;
}

export const AERO_X_DATA = {
  id: 'tech-event-2',
  aliasId: 'aero-x',
  number: '02',
  category: 'TECHNICAL',
  name: 'AERO-X',
  pitStop: 'PIT STOP 02',
  route: '/events/tech-event-2',
  tagline: 'BUILD | FLY | COMPETE',
  subtitle: 'A TWO-DAY HANDS-ON TECHNICAL EVENT ON DRONE TECHNOLOGY',
  heroMotto: 'WHERE INNOVATION TAKES THE LEAD',
  inAssociationWith: 'PRARAMBH-X TECHNOLOGIES',
  description:
    'Aero-X is a two-day hands-on technical workshop and competition on drone technology conducted in association with Prarambh-X Technologies. Learn aerodynamics, assemble, calibrate and fly your own quadcopter, followed by a Technical Quiz and a Drone Arena obstacle course.',

  dateStr: '9th & 10th October 2026',
  dateShort: '9-10 OCT 2026',
  venue: 'E&TC Department, PCCOE',
  time: '10:00 AM – 6:00 PM (Day 1) | 9:00 AM – 1:00 PM (Day 2)',
  teamSize: '2–5 Members',
  teamSizeLabel: 'Team Size: 2–5 Members (Beginners Welcome)',
  eventType: 'Technical Event (Workshop + Competition)',
  registrationFee: '₹599 per team',
  registrationNote: 'Free for PCCOE Students | Listed fee ₹599 per team',

  rulebookPdfUrl: '/Aero-x rulebook.pdf',
  registrationFormUrl: 'https://forms.gle/aSW1oNgAGfdZk4pM7',

  pillars: [
    {
      title: 'WORKSHOP',
      description: 'Learn flight principles, aerodynamics, drone components, Pixhawk configuration & DGCA rules.',
      icon: 'wrench',
    },
    {
      title: 'BUILD',
      description: 'Assemble, wire, bind and calibrate your own DIY quadcopter from scratch.',
      icon: 'cpu',
    },
    {
      title: 'COMPETE',
      description: 'Technical Quiz (50 marks) and high-octane Drone Arena obstacle flying for top 10 teams.',
      icon: 'gamepad',
    },
    {
      title: 'WIN',
      description: 'Showcase piloting mastery, win from ₹25,000+ prize pool and take home certificates & kits.',
      icon: 'trophy',
    },
  ],

  prizes: {
    first: {
      place: '1ST PRIZE',
      amount: '₹12,000',
      label: 'First Place',
      perks: 'Winner Trophy & Certificate',
      color: '#FFD700',
    },
    second: {
      place: '2ND PRIZE',
      amount: '₹8,000',
      label: 'Second Place',
      perks: 'Runner-Up Certificate',
      color: '#E0E0E0',
    },
    third: {
      place: '3RD PRIZE',
      amount: '₹5,000',
      label: 'Third Place',
      perks: 'Second Runner-Up Certificate',
      color: '#CD7F32',
    },
    total: '₹25,000+',
    totalLabel: 'TOTAL CASH PRIZE POOL',
  },

  scheduleDay1: [
    {
      time: '10:00 – 10:05 AM',
      title: 'All Aboard: Orientation',
      description: 'Introduction to the workshop, instructors, and event outline.',
      duration: '5 Min',
    },
    {
      time: '10:05 – 10:20 AM',
      title: 'Evolution of Flight & Drone Types',
      description: 'From the Wright brothers and early aviation to modern autonomous UAVs.',
      duration: '15 Min',
    },
    {
      time: '10:20 – 11:20 AM',
      title: 'Principles of Aerodynamics',
      description: 'Lift, drag, thrust, weight, Bernoulli’s principle, Newton’s laws, roll, pitch and yaw demos.',
      duration: '60 Min',
    },
    {
      time: '11:20 – 11:30 AM',
      title: 'Pit Stop (Short Break)',
      description: 'Quick refreshment break.',
      duration: '10 Min',
      isBreak: true,
    },
    {
      time: '11:30 AM – 12:45 PM',
      title: 'Drone Anatomy: Motors to Sensors',
      description: 'Motors, ESCs, batteries, propellers, radios, flight controllers, and obstacle avoidance demos.',
      duration: '75 Min',
    },
    {
      time: '12:45 – 1:30 PM',
      title: 'Lunch Break',
      description: 'Recharge for the hands-on masterclass.',
      duration: '45 Min',
      isBreak: true,
    },
    {
      time: '1:30 – 2:30 PM',
      title: 'Hexa Masterclass (Advanced Kit)',
      description: 'Soldering, wiring, Pixhawk configuration, telemetry, and mission planning on S500 / hexacopters.',
      duration: '60 Min',
      isHighlight: true,
    },
    {
      time: '2:30 – 3:00 PM',
      title: 'Technical Quiz (50 Marks)',
      description: '3-part team quiz on aviation history, aerodynamics, components & assembly. Top 10 qualify.',
      duration: '30 Min',
      isHighlight: true,
    },
    {
      time: '3:00 – 5:00 PM',
      title: 'Drone Simulator Pilot Training',
      description: 'Hands-on transmitter handling and simulator-based flight drills with real-time feedback.',
      duration: '120 Min',
    },
    {
      time: '5:00 – 6:00 PM',
      title: 'DGCA Rules & Top 10 Announcement',
      description: 'Drone Rules, GCS, Mission Planner, LiPo battery safety, and qualifier reveal for Day 2 Arena.',
      duration: '60 Min',
    },
  ] as AeroXScheduleItem[],

  scheduleDay2: [
    {
      time: '9:00 – 11:00 AM',
      title: 'Assembly & Live Piloting Session',
      description: 'Teams assemble their DIY quadcopter, calibrate motor/prop orientation, bind, and fly.',
      duration: '120 Min',
      isHighlight: true,
    },
    {
      time: '11:00 AM – 12:30 PM',
      title: 'Drone Arena Obstacle Course',
      description: 'Top 10 finalist teams pilot drones through a demanding obstacle circuit for podium glory.',
      duration: '90 Min',
      isHighlight: true,
    },
    {
      time: '12:30 – 1:00 PM',
      title: 'Airshow & Grand Prize Distribution',
      description: 'High-performance drone and glider aerobatics, victory ceremony, and certificate awards.',
      duration: '30 Min',
    },
  ] as AeroXScheduleItem[],

  keyRules: [
    'Participation is in teams of 2 to 5 members; individual registrants will form/join teams at the venue.',
    'Teams may register With Kit (keeps take-home DIY quadcopter) or Without Kit (uses provided equipment).',
    'Team composition must remain consistent across both days and all competitive rounds.',
    'Technical Quiz carries 50 marks across 3 papers (15, 15, 10 marks) solved collectively by the team.',
    'Top 10 teams from the Technical Quiz qualify for the Drone Arena obstacle competition.',
    'In Drone Arena, teams fly through an obstacle course; penalties apply for touches, crashes, or boundary exits.',
    'Only minor on-site adjustments (trimming, prop replacement) are permitted; external mods are prohibited.',
    'All equipment operates on safe low-voltage DC LiPo batteries (3.7V–12.6V); safety protocols apply.',
    'Propellers must remain removed during bench work on advanced systems.',
    'Judges’ and organizers’ decisions are final and binding.',
  ],

  coordinators: [
    {
      name: 'V Taraksh',
      role: 'TY Coordinator',
      image: '/images/coordinators/aerox/v_taraksh.webp',
    },
    {
      name: 'Prijay',
      role: 'TY Coordinator',
      image: '/images/coordinators/aerox/prijay.webp',
    },
    {
      name: 'Manthan Waghmare',
      role: 'SY Coordinator',
      image: '/images/coordinators/aerox/manthan_waghmare.webp',
    },
    {
      name: 'Chinmayi Pethkar',
      role: 'SY Coordinator',
      image: '/images/coordinators/aerox/chinmayi_pethkar.webp',
    },
    {
      name: 'Arya Jadhav',
      role: 'SY Coordinator',
      image: '/images/coordinators/aerox/arya_jadhav.webp',
    },
    {
      name: 'Manan Gandhi',
      role: 'SY Coordinator',
      image: '/images/coordinators/aerox/manan_gandhi.webp',
    },
  ] as AeroXCoordinator[],
};
