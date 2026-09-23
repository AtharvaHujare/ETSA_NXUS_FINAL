export interface HackathonFeature {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
}

export interface HackathonRound {
  number: string;
  title: string;
  subtitle: string;
  details: string[];
}

export interface HackathonTimelineItem {
  time: string;
  title: string;
  description?: string;
  isBreak?: boolean;
  isEvaluation?: boolean;
}

export interface HackathonPrize {
  rank: string;
  amount: string;
  label: string;
  color: string;
  perks: string;
}

export interface DeskComponentInfo {
  id: string;
  name: string;
  category: string;
  role: string;
  description: string;
  specs: string[];
  position: [number, number, number];
}

export interface HackathonCoordinator {
  id: string;
  name: string;
  role: string;
  image: string;
  phone?: string;
}

export const HARDWARE_HACKATHON_DATA = {
  pitStop: 'PIT STOP 01',
  title: 'HARDWARE HACKATHON',
  eventName: 'FORMULA HARDWARE',
  eventType: 'Technical — Hardware Hackathon',
  motto: 'BUILD . BREAK . REBUILD .',
  tagline: 'IDEAS / CIRCUITS / INNOVATION',
  sideMotto: 'ENGINEER TODAY A FASTER TOMORROW',
  description:
    'A 12-hour hardware hackathon where ideas meet real-world impact. Design, prototype, and push the limits to solve real problems through innovation and engineering.',
  fullDescription:
    'FORMULA HARDWARE is an open-theme hardware hackathon focused on creativity, practical engineering, innovation and working prototypes. Inspired by the precision, pressure and teamwork of Formula 1 while focusing on real hardware, technical evaluation and practical implementation.',
  
  date: '8 OCT 2026',
  dateFormatted: '8 October 2026',
  time: '8:00 AM – 8:00 PM',
  // Target start: 8 October 2026, 8:00 AM IST (UTC+5:30)
  targetStartTime: '2026-10-08T08:00:00+05:30',
  venue: 'Third Floor Labs',
  venueDetail: 'E&TC Dept., PCCOE',
  fullVenue: 'Third Floor Labs – E&TC Dept., PCCOE',
  teamSize: '2–5 Members',
  registrationFee: '₹599 per team',
  participationNote: 'Free for PCCOE Students | Listed fee ₹599 per team',
  rulebookPdfUrl: '/Rulebook_FORMULA_HARDWARE 1.pdf',
  registrationFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfscMSrC3bGdzINzabhfzGmZMRUrToqFEKmQCrq0I-uQUIdaA/viewform?usp=publish-editor',

  overviewPoints: [
    {
      id: 'theme',
      title: 'Open Theme',
      subtitle: 'Any idea, any domain',
      icon: 'Cpu',
    },
    {
      id: 'impact',
      title: 'Real-World Impact',
      subtitle: 'Solve real problems',
      icon: 'Target',
    },
    {
      id: 'innovation',
      title: 'Innovation & Engineering',
      subtitle: 'Build. Test. Learn.',
      icon: 'Wrench',
    },
    {
      id: 'duration',
      title: '12-Hour Build',
      subtitle: 'From idea to prototype',
      icon: 'Clock',
    },
  ],

  domains: [
    'Electronics',
    'Embedded Systems',
    'Programming',
    'Mechanics',
    'AI / ML',
    'IoT & Telemetry',
    'Automation',
    'Robotics',
    'Communication',
    'Sustainability',
    'Social Innovation',
  ],

  rounds: [
    {
      number: '01',
      title: 'Idea Presentation',
      subtitle: '6-slide PPT • Technical clarity & feasibility',
      details: [
        'Problem statement and motivation',
        'Proposed solution and working principle',
        'Components, sensors, controllers planned',
        'Shortlisting based on feasibility to proceed to Round 2',
      ],
    },
    {
      number: '02',
      title: '12-Hour Prototype Build',
      subtitle: 'Build • Test • Integrate • Demonstrate',
      details: [
        'Teams develop, assemble, code, test and demonstrate a working hardware prototype',
        '12-hour build window from 8:00 AM to 8:00 PM',
        'Live subsystem testing and technical jury justification',
      ],
    },
  ],

  timeline: [
    {
      time: '8:00 AM – 8:30 AM',
      title: 'Reporting & Registration',
      description: 'Team verification, lab allocation, and morning briefing.',
    },
    {
      time: '8:30 AM – 9:45 AM',
      title: 'Prototype Build – Phase 1',
      description: 'Schematic wiring, architecture initialization, and component setup.',
    },
    {
      time: '10:00 AM – 10:15 AM',
      title: 'Breakfast Break',
      isBreak: true,
    },
    {
      time: '10:15 AM – 12:00 PM',
      title: 'Prototype Build – Phase 2',
      description: 'Firmware development, sensor integration, and initial calibration.',
    },
    {
      time: '12:00 PM – 12:30 PM',
      title: 'Evaluation Round 1 – Idea & Design Review',
      description: 'Evaluation panel reviews architecture, PPT clarity, and design feasibility.',
      isEvaluation: true,
    },
    {
      time: '12:30 PM – 1:30 PM',
      title: 'Lunch Break',
      isBreak: true,
    },
    {
      time: '1:30 PM – 5:00 PM',
      title: 'Prototype Build – Phase 3',
      description: 'Subsystem integration, hardware troubleshooting, and stress validation.',
    },
    {
      time: '5:00 PM – 5:15 PM',
      title: 'High Tea Break',
      isBreak: true,
    },
    {
      time: '5:15 PM – 7:00 PM',
      title: 'Final Build Phase',
      description: 'Final assembly, casing, testing harness, and live demo preparation.',
    },
    {
      time: '7:00 PM – 8:00 PM',
      title: 'Evaluation Round 2 – Final Demonstration',
      description: 'Comprehensive jury evaluation, live prototype demonstration, and Q&A.',
      isEvaluation: true,
    },
  ] as HackathonTimelineItem[],

  prizes: {
    first: {
      place: '1ST PLACE',
      amount: '₹ 7,000',
      label: 'First Place',
      perks: '+ Vouchers',
      color: '#FFD700',
    },
    second: {
      place: '2ND PLACE',
      amount: '₹ 5,000',
      label: 'Second Place',
      perks: '+ Vouchers',
      color: '#E0E0E0',
    },
    third: {
      place: '3RD PLACE',
      amount: '₹ 3,000',
      label: 'Third Place',
      perks: '+ Vouchers',
      color: '#CD7F32',
    },
    total: '₹ 15,000 + Vouchers',
    totalLabel: 'TOTAL PRIZE POOL',
  },

  keyRules: [
    'Team size must be 2–5 members.',
    'Each team must nominate one Team Captain for official communication.',
    'Every member must have a clearly defined responsibility.',
    'Teams must bring their own components, modules, sensors, controllers, motors, batteries, mechanical parts, tools, wires and consumables.',
    'Organizers will not provide project-specific components unless announced beforehand.',
    'Pre-built modules are allowed as part of a larger original system. Presenting a ready-made complete project as original work is prohibited.',
    'External assistance, online resources or AI tools used must be disclosed when requested.',
    'Teams must follow safe soldering, wiring, battery handling, charging and power-use practices.',
    'Unsafe projects may be stopped or removed by organizers.',
    'Plagiarism, false claims, fabricated results or misrepresentation may lead to disqualification.',
    'Only registered team members may represent a team during evaluation.',
    'Unauthorized interference with another team’s project or workspace is prohibited.',
    'Judges and organizing committee decisions are final.',
  ],

  specialChallenges: [
    {
      title: 'SURPRISE CONSTRAINT TWIST',
      description:
        'Teams may receive an unexpected technical or resource constraint during the building. They must adapt their design while maintaining safety and engineering logic.',
      tag: 'DYNAMIC PADDOCK SCENARIO',
    },
    {
      title: 'REVERSE ENGINEERING CHALLENGE',
      description:
        'Teams may be asked to inspect, interpret or explain an assigned circuit, module, mechanism, signal path or system behavior.',
      tag: 'CIRCUIT DIAGNOSTICS',
    },
    {
      title: 'BONUS MARKS',
      description:
        'Additional marks may be awarded for clearly explaining system logic, signal flow, fault detection, failure handling, debugging approach and design trade-offs.',
      tag: 'TECHNICAL MASTERY',
    },
  ],

  evaluationCriteria: [
    {
      criterion: 'Problem Understanding',
      focus: 'Clarity, relevance and definition of the selected problem',
    },
    {
      criterion: 'Innovation',
      focus: 'Originality, creativity and quality of the approach',
    },
    {
      criterion: 'Technical Architecture',
      focus: 'Integration of hardware, software, mechanics, AI/ML or related systems',
    },
    {
      criterion: 'Implementation Quality',
      focus: 'Build quality, coding, integration, reliability and neatness',
    },
    {
      criterion: 'Functionality & Demonstration',
      focus: 'Working performance, proof of concept and live demonstration',
    },
    {
      criterion: 'Testing & Validation',
      focus: 'Testing method, observations, debugging and evidence',
    },
    {
      criterion: 'Presentation & Team Understanding',
      focus: 'Clarity, documentation, teamwork and responses',
    },
    {
      criterion: 'Impact & Future Scope',
      focus: 'Practical usefulness, scalability, sustainability and improvements',
    },
  ],

  coordinators: [
    {
      id: 'samrat-latane',
      name: 'Samrat Latane',
      role: 'Lead Coordinator',
      image: '/images/coordinators/hardware/samrat_latane.webp',
      phone: '9146649309',
    },
    {
      id: 'vedant-jadhav',
      name: 'Vedant Jadhav',
      role: 'Event Coordinator',
      image: '/images/coordinators/hardware/vedant_jadhav.webp',
      phone: '8308108646',
    },
    {
      id: 'yugandhar-suryawanshi',
      name: 'Yugandhar Suryawanshi',
      role: 'Event Coordinator',
      image: '/images/coordinators/hardware/yugandhar_suryawanshi.webp',
      phone: '7875251257',
    },
    {
      id: 'parth-fundkar',
      name: 'Parth Fundkar',
      role: 'Event Coordinator',
      image: '/images/coordinators/hardware/parth_fundkar.webp',
      phone: '7058355379',
    },
  ] as HackathonCoordinator[],

  deskComponents: [
    {
      id: 'rover',
      name: 'Autonomous 4WD Telemetry Rover',
      category: 'HARDWARE PROTOTYPE',
      role: 'Mobile test platform',
      description: 'Custom dual-deck chassis equipped with geared DC motors, optical wheel encoders, and high-traction motorsport compound tires.',
      specs: ['Dual H-Bridge Driver (20A peak)', 'Telemetry Link', 'Real-time IMU stabilization'],
      position: [0.35, 0.45, 0.25],
    },
    {
      id: 'laptop',
      name: 'Engineering CAD Workstation',
      category: 'DIGITAL TWIN & TELEMETRY',
      role: 'Firmware compiler & live monitor',
      description: 'Open mobile workstation streaming real-time sensor waveforms and displaying mechanical PCB layer schematics.',
      specs: ['16-Core Processor', 'Real-Time Linux Kernel', 'Bus analyzer'],
      position: [-1.2, 0.5, -0.4],
    },
    {
      id: 'oscilloscope',
      name: 'Dual-Channel Digital Oscilloscope',
      category: 'BENCH INSTRUMENTATION',
      role: 'Signal timing & waveform integrity',
      description: '100MHz digital storage oscilloscope monitoring PWM motor signals, noise filtering, and SPI communications bus integrity.',
      specs: ['1GSa/s Sampling Rate', 'Dual Active Probes', 'FFT Spectral Analysis'],
      position: [1.35, 0.65, -0.85],
    },
    {
      id: 'mcu',
      name: 'Dual-Core Telemetry MCU',
      category: 'EMBEDDED CONTROLLER',
      role: 'Main central control unit',
      description: 'High-speed 240MHz 32-bit dual-core microcontroller seated on a solderless breadboard with jumper loom and pulsing LED indicators.',
      specs: ['240MHz Clock Speed', 'Integrated CAN & BLE', '12-bit Multi-channel ADC'],
      position: [-0.45, 0.25, 0.45],
    },
    {
      id: 'soldering',
      name: 'Precision SMD Soldering Station',
      category: 'REWORK STATION',
      role: 'Thermal rework & wiring harness fabrication',
      description: 'Microprocessor-controlled ESD-safe soldering station with brass tip cleaner, fine-gauge lead-free solder wire, and heat shrink tools.',
      specs: ['60W Ceramic Heater', 'Digital Temperature Lock', 'ESD Grounded Enclosure'],
      position: [1.8, 0.4, 0.2],
    },
  ] as DeskComponentInfo[],
};
