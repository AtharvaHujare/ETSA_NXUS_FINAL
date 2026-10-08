export interface DomainMember {
  name: string;
  role?: string;
  image: string;
}

export interface NexusDomain {
  number: string;
  name: string;
  description: string;
  members: DomainMember[];
}

export interface EventCoordinatorContact {
  name: string;
  phone: string;
  tel: string;
}

export const NEXUS_DOMAINS: NexusDomain[] = [
  {
    number: '01',
    name: 'COORDINATORS',
    description: 'Event leadership and symposium orchestrators steering the vision and operations of NEXUS 2026.',
    members: [
      {
        name: 'Aashna',
        role: 'Event Coordinator',
        image: '/images/domains/coordinators/aashna.webp',
      },
      {
        name: 'Krishna',
        role: 'Event Coordinator',
        image: '/images/domains/coordinators/krishna.webp',
      },
      {
        name: 'Nikhilesh',
        role: 'Event Coordinator',
        image: '/images/domains/coordinators/nikhilesh.webp',
      },
      {
        name: 'Komal Kankariya',
        role: 'Event Coordinator',
        image: '/images/domains/coordinators/komal_kankariya.webp',
      },
      {
        name: 'Tejas Kundargi',
        role: 'Event Coordinator',
        image: '/images/domains/coordinators/tejas_kundargi.webp',
      },
    ],
  },
  {
    number: '02',
    name: 'CONVENER',
    description: 'Symposium conveners steering the digital architecture, platform strategy, and technical vision of NEXUS 2026.',
    members: [
      {
        name: 'Vedant Gore',
        role: 'Convener',
        image: '/images/domains/convener/vedant_gore.webp',
      },
      {
        name: 'Atharv Huilgol',
        role: 'Convener',
        image: '/images/domains/convener/atharv_huilgol.webp',
      },
    ],
  },
  {
    number: '03',
    name: 'WEB DEV',
    description: 'Digital architects and engineers constructing the high-velocity portal and interactive race telemetries.',
    members: [
      {
        name: 'Atharva Hujare',
        role: 'Web Developer',
        image: '/images/domains/webdev/atharva_hujare.webp',
      },
      {
        name: 'Manan Gandhi',
        role: 'Web Developer',
        image: '/images/domains/webdev/manan_gandhi.webp',
      },
      {
        name: 'Unnati Badhe',
        role: 'Web Developer',
        image: '/images/domains/webdev/unnati_badhe.webp',
      },
    ],
  },
  {
    number: '04',
    name: 'SPONSORSHIP',
    description: 'Corporate alliance leads driving industry partnerships, paddock alliances, and constructor support.',
    members: [
      {
        name: 'Niraj Ingle',
        role: 'Sponsorship Lead',
        image: '/images/domains/sponsorship/niraj_ingle_final.webp',
      },
      {
        name: 'Swarnika Salunkhe',
        role: 'Sponsorship Lead',
        image: '/images/domains/sponsorship/swarnika_salunkhe.webp',
      },
      {
        name: 'Zaid Shaikh',
        role: 'Sponsorship Lead',
        image: '/images/domains/sponsorship/zaid_shaikh.webp',
      },
    ],
  },
  {
    number: '05',
    name: 'SOCIAL MEDIA',
    description: 'Digital narrative strategists amplifying NEXUS broadcasts, paddock spotlights, and real-time coverage.',
    members: [
      {
        name: 'Harshita Singh',
        role: 'Social Media Lead',
        image: '/images/domains/socialmedia/harshita_singh.webp',
      },
      {
        name: 'Vedanti Waikar',
        role: 'Social Media Lead',
        image: '/images/domains/socialmedia/vedanti_waikar.webp',
      },
    ],
  },
];

export const EVENT_COORDINATORS_CONTACTS: EventCoordinatorContact[] = [
  {
    name: 'AASHNA',
    phone: '+91 90674 19673',
    tel: '+919067419673',
  },
  {
    name: 'KRISHNA',
    phone: '+91 70830 26710',
    tel: '+917083026710',
  },
  {
    name: 'NIKHILESH',
    phone: '+91 84849 96755',
    tel: '+918484996755',
  },
];
