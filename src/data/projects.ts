// Project data structure for Hari Shyam Infrastructure
export interface ProjectDocument {
  title: string;
  type: 'video' | 'pdf' | 'document';
  url: string;
  filename?: string;
}

export interface ProjectMedia {
  title: string;
  type: 'image' | 'video';
  url: string;
  poster?: string;
}

export interface Project {
  id: string;
  name: string;
  title?: string;
  phase?: string;
  description: string;
  image?: string;
  heroImage?: string;
  documents: ProjectDocument[];
  status: 'ongoing' | 'completed' | 'upcoming';
  featured?: boolean;
  legalDocuments?: string[]; // Array of legal document IDs
  // Extended properties
  subtitle?: string;
  highlights?: string[];
  plotSizes?: string;
  priceRange?: string;
  ratePerGaj?: string;
  location?: string;
  totalPlots?: number;
  availablePlots?: number;
  type?: string;
  openSides?: string;
  badge?: string;
  media?: ProjectMedia[];
  paymentPlan?: {
    registry: string;
    emiPeriod: string;
    emiAmount: string;
    rentalIncome: string;
  };
}

export const projects: Project[] = [
  {
    id: 'shri-hari-vatika',
    name: 'Shri Hari Vatika',
    title: 'Shri Hari Vatika Phase 1',
    subtitle: 'Approved plotted addresses with fast corridor access',
    description: 'A gated plotted community shaped for families and investors who want cleaner planning, better access, and a location positioned for long-term growth.',
    featured: true,
    status: 'ongoing',
    image: '/projects/shriharivatika/phase_1.png',
    heroImage: '/projects/shriharivatika/phase_1.png',
    highlights: [
      'Wide Roads',
      'Registry Available',
      'Near Expressway',
      'Gated Community',
      'Investment Hotspot',
      'Water & Electricity',
    ],
    plotSizes: '100 Gaj',
    priceRange: 'Rs. 16 Lac*',
    ratePerGaj: 'Rs. 16 Lac / 100 Gaj',
    location: 'Yamuna Expressway growth corridor',
    totalPlots: 250,
    availablePlots: 45,
    type: 'Residential',
    openSides: '2-side',
    badge: 'Featured',
    media: [
      { title: 'Phase 1 layout view', type: 'image', url: '/projects/shriharivatika/phase_1.png' },
      { title: 'Full township view', type: 'image', url: '/projects/shriharivatika/shriharivatika_full.png' },
      { title: 'Internal road view', type: 'image', url: '/projects/shriharivatika/road.jpeg' },
      { title: 'Boundary wall view', type: 'image', url: '/projects/shriharivatika/wall.jpeg' },
      { title: 'Road and boundary view', type: 'image', url: '/projects/shriharivatika/road_wall.jpeg' },
      { title: 'Electricity infrastructure', type: 'image', url: '/projects/shriharivatika/electricity.jpeg' },
      {
        title: 'Project video tour',
        type: 'video',
        url: '/projects/shriharivatika/shriharivatika.mp4',
        poster: '/projects/shriharivatika/phase_1.png',
      },
    ],
    paymentPlan: {
      registry: '60%',
      emiPeriod: '20 Months',
      emiAmount: 'Rs. 30,000',
      rentalIncome: 'Rs. 10,000/month',
    },
    documents: [
      {
        title: 'Project Video',
        type: 'video',
        url: '/projects/shriharivatika/shriharivatika.mp4',
        filename: 'shriharivatika.mp4'
      },
      {
        title: 'Project Brochure',
        type: 'pdf',
        url: '/projects/shriharivatika/brochure_shri_hari_vatika.pdf'
      },
      {
        title: 'Development Map Layout',
        type: 'pdf',
        url: '/projects/shriharivatika/layout_shri_hari_vatika.pdf'
      },
      {
        title: 'Payment Plan',
        type: 'pdf',
        url: '/projects/shriharivatika/payment_plan_shri_hari_vatika.pdf'
      },
      {
        title: 'YEIDA Master Plan 2041',
        type: 'pdf',
        url: '/projects/shriharivatika/yeida_master_plan_2041.pdf'
      }
    ],
    legalDocuments: ['legal-1', 'legal-2', 'legal-3']
  },
  {
    id: 'shri-hari-vatika-phase-2',
    name: 'Shri Hari Vatika Phase-2',
    title: 'Shri Hari Vatika Phase 2',
    phase: 'Phase 2',
    subtitle: 'An expanded release with larger plot options',
    description: 'The second phase builds on the flagship community with wider choices, smoother circulation, and a more premium residential rhythm.',
    featured: true,
    status: 'ongoing',
    image: '/projects/shriharivatika/phase_2.png',
    heroImage: '/projects/shriharivatika/phase_2.png',
    highlights: [
      'Wide Roads',
      'Future Growth Zone',
      'Registry Available',
      'Near Expressway',
      'Loan Facility Available',
      'Green Surroundings',
    ],
    plotSizes: '100-150 Gaj',
    priceRange: 'Rs. 18 Lac*',
    ratePerGaj: 'Rs. 18 Lac / 100 Gaj',
    location: 'Extended prime residential pocket',
    totalPlots: 350,
    availablePlots: 120,
    type: 'Residential',
    openSides: '2-side',
    badge: 'New Release',
    media: [
      { title: 'Phase 2 layout view', type: 'image', url: '/projects/shriharivatika/phase_2.png' },
      { title: 'Full township view', type: 'image', url: '/projects/shriharivatika/shriharivatika_full.png' },
      { title: 'Internal road view', type: 'image', url: '/projects/shriharivatika/road.jpeg' },
      { title: 'Road and boundary view', type: 'image', url: '/projects/shriharivatika/road_wall.jpeg' },
      { title: 'Boundary wall view', type: 'image', url: '/projects/shriharivatika/wall.jpeg' },
      {
        title: 'Project video tour',
        type: 'video',
        url: '/projects/shriharivatika/shriharivatika.mp4',
        poster: '/projects/shriharivatika/phase_2.png',
      },
    ],
    paymentPlan: {
      registry: '60%',
      emiPeriod: '20 Months',
      emiAmount: 'Rs. 32,000',
      rentalIncome: 'Rs. 12,000/month',
    },
    documents: [
      {
        title: 'Project Video',
        type: 'video',
        url: '/projects/shriharivatika/shriharivatika.mp4',
        filename: 'shriharivatika.mp4'
      },
      {
        title: 'Project Brochure',
        type: 'pdf',
        url: '/projects/shriharivatika/brochure_shri_hari_vatika.pdf'
      },
      {
        title: 'Development Map Layout',
        type: 'pdf',
        url: '/projects/shriharivatika/layout_shri_hari_vatika.pdf'
      },
      {
        title: 'Payment Plan',
        type: 'pdf',
        url: '/projects/shriharivatika/payment_plan_shri_hari_vatika.pdf'
      },
      {
        title: 'YEIDA Master Plan 2041',
        type: 'pdf',
        url: '/projects/shriharivatika/yeida_master_plan_2041.pdf'
      }
    ],
    legalDocuments: ['legal-1', 'legal-2', 'legal-3']
  },
  {
    id: 'shri-hari-vatika-phase-3',
    name: 'Shri Hari Vatika Phase-3',
    title: 'Shri Hari Vatika Phase 3',
    phase: 'Phase 3',
    subtitle: 'Larger edge plots in a premium release',
    description: 'A more elevated plotted release designed around larger parcels, open edges, and a sharper community identity for premium buyers.',
    featured: true,
    status: 'ongoing',
    image: '/projects/shriharivatika/phase_3.png',
    heroImage: '/projects/shriharivatika/phase_3.png',
    highlights: [
      'Premium Edge Plots',
      'Future Growth Zone',
      'Near Expressway',
      'Gated Community',
      'Water & Electricity',
      'Loan Facility Available',
    ],
    plotSizes: '120-200 Gaj',
    priceRange: 'Rs. 20 Lac*',
    ratePerGaj: 'Rs. 20 Lac / 100 Gaj',
    location: 'Premium edge-facing belt',
    totalPlots: 400,
    availablePlots: 180,
    type: 'Residential',
    openSides: '3-side',
    badge: 'Premium',
    media: [
      { title: 'Phase 3 layout view', type: 'image', url: '/projects/shriharivatika/phase_3.png' },
      { title: 'Premium full view', type: 'image', url: '/projects/shriharivatika/full_img2.jpeg' },
      { title: 'Full township view', type: 'image', url: '/projects/shriharivatika/shriharivatika_full.png' },
      { title: 'Internal road view', type: 'image', url: '/projects/shriharivatika/road.jpeg' },
      { title: 'Electricity infrastructure', type: 'image', url: '/projects/shriharivatika/electricity.jpeg' },
      {
        title: 'Project video tour',
        type: 'video',
        url: '/projects/shriharivatika/shriharivatika.mp4',
        poster: '/projects/shriharivatika/phase_3.png',
      },
    ],
    paymentPlan: {
      registry: '60%',
      emiPeriod: '20 Months',
      emiAmount: 'Rs. 35,000',
      rentalIncome: 'Rs. 14,000/month',
    },
    documents: [
      {
        title: 'Project Video',
        type: 'video',
        url: '/projects/shriharivatika/shriharivatika.mp4',
        filename: 'shriharivatika.mp4'
      },
      {
        title: 'Project Brochure',
        type: 'pdf',
        url: '/projects/shriharivatika/brochure_shri_hari_vatika.pdf'
      },
      {
        title: 'Development Map Layout',
        type: 'pdf',
        url: '/projects/shriharivatika/layout_shri_hari_vatika.pdf'
      },
      {
        title: 'Payment Plan',
        type: 'pdf',
        url: '/projects/shriharivatika/payment_plan_shri_hari_vatika.pdf'
      },
      {
        title: 'YEIDA Master Plan 2041',
        type: 'pdf',
        url: '/projects/shriharivatika/yeida_master_plan_2041.pdf'
      }
    ],
    legalDocuments: ['legal-1', 'legal-2', 'legal-3']
  },
  {
    id: 'mero-vrindavan-dham',
    name: 'Mero Vrindavan Dham',
    title: 'Mero Vrindavan Dham',
    subtitle: 'Community-first plotted living with a calmer tone',
    description: 'A quieter plotted neighborhood that blends investment practicality with a more rooted community feel and livable site planning.',
    featured: true,
    status: 'ongoing',
    image: '/projects/merovrindavandham/layout.jpeg',
    heroImage: '/projects/merovrindavandham/layout.jpeg',
    highlights: [
      'Green Surroundings',
      'Community Living',
      'Registry Available',
      'Future Growth Zone',
      'Loan Facility Available',
      'Water & Electricity',
    ],
    plotSizes: '90-110 Gaj',
    priceRange: 'Rs. 15 Lac*',
    ratePerGaj: 'Rs. 15 Lac / 100 Gaj',
    location: 'Community-oriented residential pocket',
    totalPlots: 300,
    availablePlots: 95,
    type: 'Residential',
    openSides: '2-side',
    badge: 'Community',
    media: [
      { title: 'Mero Vrindavan Dham layout', type: 'image', url: '/projects/merovrindavandham/layout.jpeg' },
      {
        title: 'Mero Vrindavan Dham video',
        type: 'video',
        url: '/projects/merovrindavandham/virindavan.mp4',
        poster: '/projects/merovrindavandham/layout.jpeg',
      },
    ],
    paymentPlan: {
      registry: '60%',
      emiPeriod: '24 Months',
      emiAmount: 'Rs. 25,000',
      rentalIncome: 'Rs. 8,000/month',
    },
    documents: [
      {
        title: 'Project Video',
        type: 'video',
        url: '/projects/merovrindavandham/virindavan.mp4',
        filename: 'virindavan.mp4'
      },
      {
        title: 'Project Brochure',
        type: 'pdf',
        url: '/projects/merovrindavandham/brochure_mero_vrindavan_dham.pdf'
      },
      {
        title: 'Development Map Layout',
        type: 'pdf',
        url: '/projects/merovrindavandham/layout.jpeg'
      },
      {
        title: 'Payment Plan',
        type: 'pdf',
        url: '/projects/merovrindavandham/payment_mero_vrindavan_dham.pdf'
      },
      {
        title: 'YEIDA Master Plan 2041',
        type: 'pdf',
        url: '/projects/shriharivatika/yeida_master_plan_2041.pdf'
      }
    ]
  },
  {
    id: 'commercial-plaza',
    name: 'Premium Commercial Plaza',
    title: 'Premium Commercial Plaza',
    subtitle: 'Street-facing plots for high-visibility retail activity',
    description: 'Commercial parcels planned for better frontage, stronger access, and visibility suited to retail, office, and mixed-use buyers.',
    status: 'ongoing',
    image: '/projects/shriharivatika/wall.jpeg',
    heroImage: '/projects/shriharivatika/wall.jpeg',
    highlights: [
      'Retail Frontage',
      'Near Expressway',
      'Wide Roads',
      'Investment Hotspot',
      'Water & Electricity',
      'Loan Facility Available',
    ],
    plotSizes: '150 Gaj',
    priceRange: 'Rs. 28 Lac*',
    ratePerGaj: 'Rs. 28 Lac / 150 Gaj',
    location: 'Retail-friendly connector road',
    totalPlots: 120,
    availablePlots: 34,
    type: 'Commercial',
    openSides: '2-side',
    badge: 'Commercial',
    media: [
      { title: 'Commercial frontage view', type: 'image', url: '/projects/shriharivatika/wall.jpeg' },
      { title: 'Road access view', type: 'image', url: '/projects/shriharivatika/road.jpeg' },
      { title: 'Connector road view', type: 'image', url: '/projects/shriharivatika/road_wall.jpeg' },
    ],
    paymentPlan: {
      registry: '60%',
      emiPeriod: '24 Months',
      emiAmount: 'Rs. 47,000',
      rentalIncome: 'Rs. 20,000/month',
    },
    documents: []
  },
  {
    id: 'agricultural-land',
    name: 'Agricultural Land',
    title: 'Agricultural Land',
    description: 'Prime agricultural land opportunities',
    status: 'ongoing',
    image: '/projects/shriharivatika/full_img2.jpeg',
    heroImage: '/projects/shriharivatika/full_img2.jpeg',
    highlights: ['Fertile Land', 'Irrigation Facility', 'Market Access', 'Road Connectivity'],
    plotSizes: '1-5 Acres',
    priceRange: 'Rs. 5-25 Lac*',
    type: 'Agricultural',
    openSides: '2-side',
    badge: 'Agricultural',
    media: [
      { title: 'Agricultural land view', type: 'image', url: '/projects/shriharivatika/full_img2.jpeg' },
      { title: 'Road access view', type: 'image', url: '/projects/shriharivatika/road.jpeg' },
      { title: 'Boundary wall view', type: 'image', url: '/projects/shriharivatika/wall.jpeg' },
    ],
    documents: [
      {
        title: 'Land Details',
        type: 'pdf',
        url: '/projects/shriharivatika/brochure_shri_hari_vatika.pdf'
      },
      {
        title: 'Layout Plan',
        type: 'pdf',
        url: '/projects/merovrindavandham/layout.jpeg'
      }
    ]
  }
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectMap = projects.reduce<Record<string, Project>>((map, project) => {
  map[project.id] = project;
  return map;
}, {});

export interface LegalDocument {
  id: string;
  title: string;
  category: string;
  url: string;
  dateAdded?: string;
}

export const legalDocuments: LegalDocument[] = [
  {
    id: 'legal-1',
    title: '12 Salana',
    category: 'Land Records',
    url: '/legal_documents/12_salana.pdf',
    dateAdded: '2026-06-01'
  },
  {
    id: 'legal-2',
    title: 'Khatauni',
    category: 'Land Records',
    url: '/legal_documents/Khatauni.pdf',
    dateAdded: '2026-06-01'
  },
  {
    id: 'legal-3',
    title: 'Happy Client Registry',
    category: 'Client Documentation',
    url: '/legal_documents/happy_client_registry_1.pdf',
    dateAdded: '2026-06-01'
  }
];
