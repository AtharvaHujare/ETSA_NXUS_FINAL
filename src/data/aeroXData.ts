export interface AeroXCoordinator {
  name: string;
  role: string;
  phone?: string;
  image: string;
}

export interface AeroXContact {
  name: string;
  phone: string;
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
  tagline: 'DESIGN. CALIBRATE. AVITATE.',
  subtitle: 'TECHNICAL WORKSHOP + COMPETITION',
  heroMotto: 'WHERE INNOVATION TAKES THE LEAD',
  inCollaborationWith: 'PrarambhX Technologies',
  inAssociationWith: 'PrarambhX Technologies',

  description:
    'Aero-X is a two-day technical workshop and competition on drone technology conducted in collaboration with PrarambhX Technologies. Learn aerodynamics, assemble, calibrate and fly your own quadcopter, followed by simulator training, hands-on piloting, and the Drone Arena obstacle competition.',

  dateStr: '9th & 10th October 2026',
  dateShort: '09–10 OCT 2026',
  venue: 'PCCOE Campus',
  time: '9th & 10th October 2026',
  teamSize: '2–5 Members',
  teamSizeLabel: 'Team Size: 2–5 Members | Individual Registration Allowed',
  individualRegistration:
    'Allowed. Individual participants will be formed into groups or added to an existing group.',
  eventType: 'Technical Workshop + Competition',

  fees: {
    groupWithKit: '₹2,500',
    groupWithKitLabel: 'Group + Kit',
    groupWithoutKit: '₹1,800',
    groupWithoutKitLabel: 'Group without Kit',
    individualWithoutKit: '₹379',
    individualWithoutKitLabel: 'Individual without Kit',
    specialOffer: 'First 5 teams get 50% cashback.',
    summary: 'From ₹379 (Individual) | ₹1800 (Group) | ₹2500 (Group + Kit)',
  },

  rulebookPdfUrl: '/Aero-x rulebook.pdf',
  registrationFormUrl: 'https://forms.gle/7VBzyKmEbCQeBc286',

  organizingAssociations: [
    'ETSA – E&TC Students’ Association',
    'IEEE SPS Student Branch Chapter (SBC62941), PCCOE',
    'ISF, PCCOE',
    'Department of Electronics & Telecommunication Engineering, PCCOE',
  ],

  workshopUsps: [
    {
      title: 'Drone Simulation',
      description: 'Realistic transmitter flight simulation and pilot training drills.',
      icon: 'gamepad',
    },
    {
      title: 'Mission Planning',
      description: 'Ground Control Station, waypoint navigation and autonomous mission setup.',
      icon: 'map',
    },
    {
      title: 'Drone Building',
      description: 'Complete hands-on assembly, wiring, motor calibration and flight controller configuration.',
      icon: 'wrench',
    },
    {
      title: 'DIY Drone Kits',
      description: 'Comprehensive hardware kits with frame, motors, LiPo battery and radio systems.',
      icon: 'cpu',
    },
    {
      title: 'Live Airshow',
      description: 'High-octane live aerial demonstrations of advanced drones and RC gliders.',
      icon: 'zap',
    },
  ],

  dayHighlights: {
    day1: {
      tag: 'DAY 01',
      title: 'BUILD & EXPLORE',
      points: [
        'Drone Technology & Aerodynamics',
        'Drone Building & Assembly',
        'Flight Controller Configuration',
        'Drone Simulation & Pilot Training',
      ],
    },
    day2: {
      tag: 'DAY 02',
      title: 'MISSION & FLY',
      points: [
        'Mission Planning',
        'Hands-on Piloting',
        'Drone Arena Competition',
        'Live Drone & Glider Airshow',
      ],
    },
  },

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
      time: 'Session 01',
      title: 'Drone Technology & Aerodynamics',
      description: 'Principles of flight, lift, drag, thrust, airfoil dynamics and modern UAV architecture.',
      isHighlight: true,
    },
    {
      time: 'Session 02',
      title: 'Drone Building & Assembly',
      description: 'Hands-on hardware assembly: frames, brushless motors, ESCs, power distribution and soldering.',
      isHighlight: true,
    },
    {
      time: 'Session 03',
      title: 'Flight Controller Configuration',
      description: 'Wiring, firmware flashing, sensor calibration, radio binding and safety fail-safes.',
    },
    {
      time: 'Session 04',
      title: 'Drone Simulation & Pilot Training',
      description: 'Transmitter handling, computer flight simulator drills, hover control and aerial orientation.',
      isHighlight: true,
    },
  ] as AeroXScheduleItem[],

  scheduleDay2: [
    {
      time: 'Session 01',
      title: 'Mission Planning',
      description: 'Ground Control Station (GCS) telemetry, GPS waypoints, autonomous routing and fail-safe return-to-home.',
      isHighlight: true,
    },
    {
      time: 'Session 02',
      title: 'Hands-on Piloting',
      description: 'Live field flight trials, outdoor trim calibration, line-of-sight navigation and obstacle practice.',
    },
    {
      time: 'Session 03',
      title: 'Drone Arena Competition',
      description: 'Podium obstacle course circuit: precision navigation, agility gates, and timed challenge.',
      isHighlight: true,
    },
    {
      time: 'Session 04',
      title: 'Live Drone & Glider Airshow',
      description: 'Spectacular aerobatic airshow, prize distribution ceremony and certificate awards.',
      isHighlight: true,
    },
  ] as AeroXScheduleItem[],

  keyRules: [
    'Participation is in teams of 2 to 5 members; individual participants are fully welcome and will be formed into groups or added to an existing group.',
    'Registration options: ₹2500 (Group + Kit), ₹1800 (Group without Kit), and ₹379 (Individual without Kit).',
    'Special Offer: First 5 registered teams receive 50% cashback.',
    'Team composition must remain consistent across both days and all competitive sessions.',
    'The workshop covers drone technology, building, flight controller setup, and simulator flight training on Day 1.',
    'Day 2 features mission planning, live piloting, the Drone Arena obstacle challenge, and a live drone/glider airshow.',
    'All equipment operates on safe low-voltage DC LiPo batteries; strict PCCOE lab safety protocols apply.',
    'First Aid certified PrarambhX trainers and lab safety marshals present at all times.',
    'Judges’ and organizers’ decisions are final and binding.',
  ],

  contacts: [
    { name: 'Manthan Waghmare', phone: '9172490670' },
    { name: 'Arya Jadhav', phone: '9518962557' },
    { name: 'Chinmayi Pethkar', phone: '9527440230' },
    { name: 'V Taraksh', phone: '7558226282' },
    { name: 'Manan Gandhi', phone: '9924426374' },
  ] as AeroXContact[],

  coordinators: [
    {
      name: 'V Taraksh',
      role: 'TY Coordinator',
      phone: '7558226282',
      image: '/images/coordinators/aerox/v_taraksh.webp',
    },
    {
      name: 'Chinmayi Pethkar',
      role: 'TY Coordinator',
      phone: '9527440230',
      image: '/images/coordinators/aerox/chinmayi_pethkar.webp',
    },
    {
      name: 'Manthan Waghmare',
      role: 'SY Coordinator',
      phone: '9172490670',
      image: '/images/coordinators/aerox/manthan_waghmare.webp',
    },
    {
      name: 'Arya Jadhav',
      role: 'SY Coordinator',
      phone: '9518962557',
      image: '/images/coordinators/aerox/arya_jadhav.webp',
    },
    {
      name: 'Manan Gandhi',
      role: 'SY Coordinator',
      phone: '9924426374',
      image: '/images/coordinators/aerox/manan_gandhi.webp',
    },
  ] as AeroXCoordinator[],
};
