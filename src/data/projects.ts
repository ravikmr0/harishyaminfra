// Project data structure for Hari Shyam Infrastructure
export interface ProjectDocument {
  title: string;
  type: 'video' | 'pdf' | 'document';
  url: string;
  filename?: string;
}

export interface Project {
  id: string;
  name: string;
  phase?: string;
  description: string;
  image?: string;
  documents: ProjectDocument[];
  status: 'ongoing' | 'completed' | 'upcoming';
  featured?: boolean;
}

export const projects: Project[] = [
  {
<<<<<<< HEAD
    id: "shri-hari-vatika",
    title: "Shri Hari Vatika Phase 1",
    subtitle: "Approved plotted addresses with fast corridor access",
    description:
      "A gated plotted community shaped for families and investors who want cleaner planning, better access, and a location positioned for long-term growth.",
    highlights: [
      "Wide Roads",
      "Registry Available",
      "Near Expressway",
      "Gated Community",
      "Investment Hotspot",
      "Water & Electricity",
    ],
    image: "/public/projects/shriharivatika/phase_1.png",
    heroImage: "/public/projects/shriharivatika/phase_1.png",
    plotSizes: "100 Gaj",
    priceRange: "Rs. 16 Lac*",
    ratePerGaj: "Rs. 16 Lac / 100 Gaj",
    location: "Yamuna Expressway growth corridor",
    totalPlots: 250,
    availablePlots: 45,
    type: "Residential",
    openSides: "2-side",
    badge: "Featured",
    paymentPlan: {
      registry: "60%",
      emiPeriod: "20 Months",
      emiAmount: "Rs. 30,000",
      rentalIncome: "Rs. 10,000/month",
    },
  },
  {
    id: "shri-hari-vatika-phase-2",
    title: "Shri Hari Vatika Phase 2",
    subtitle: "An expanded release with larger plot options",
    description:
      "The second phase builds on the flagship community with wider choices, smoother circulation, and a more premium residential rhythm.",
    highlights: [
      "Wide Roads",
      "Future Growth Zone",
      "Registry Available",
      "Near Expressway",
      "Loan Facility Available",
      "Green Surroundings",
    ],
    image: "/public/projects/shriharivatika/phase_2.png",
    heroImage: "/public/projects/shriharivatika/phase_2.png",
    plotSizes: "100-150 Gaj",
    priceRange: "Rs. 18 Lac*",
    ratePerGaj: "Rs. 18 Lac / 100 Gaj",
    location: "Extended prime residential pocket",
    totalPlots: 350,
    availablePlots: 120,
    type: "Residential",
    openSides: "2-side",
    badge: "New Release",
    paymentPlan: {
      registry: "60%",
      emiPeriod: "20 Months",
      emiAmount: "Rs. 32,000",
      rentalIncome: "Rs. 12,000/month",
    },
  },
  {
    id: "shri-hari-vatika-phase-3",
    title: "Shri Hari Vatika Phase 3",
    subtitle: "Larger edge plots in a premium release",
    description:
      "A more elevated plotted release designed around larger parcels, open edges, and a sharper community identity for premium buyers.",
    highlights: [
      "Premium Edge Plots",
      "Future Growth Zone",
      "Near Expressway",
      "Gated Community",
      "Water & Electricity",
      "Loan Facility Available",
    ],
    image: "/public/projects/shriharivatika/phase_3.png",
    heroImage: "/public/projects/shriharivatika/phase_3.png",
    plotSizes: "120-200 Gaj",
    priceRange: "Rs. 20 Lac*",
    ratePerGaj: "Rs. 20 Lac / 100 Gaj",
    location: "Premium edge-facing belt",
    totalPlots: 400,
    availablePlots: 180,
    type: "Residential",
    openSides: "3-side",
    badge: "Premium",
    paymentPlan: {
      registry: "60%",
      emiPeriod: "20 Months",
      emiAmount: "Rs. 35,000",
      rentalIncome: "Rs. 14,000/month",
    },
  },
  {
    id: "mero-vrindavan-dham",
    title: "Mero Vrindavan Dham",
    subtitle: "Community-first plotted living with a calmer tone",
    description:
      "A quieter plotted neighborhood that blends investment practicality with a more rooted community feel and livable site planning.",
    highlights: [
      "Green Surroundings",
      "Community Living",
      "Registry Available",
      "Future Growth Zone",
      "Loan Facility Available",
      "Water & Electricity",
    ],
    image: "/public/projects/merovrindavandham/layout.jpeg",
    heroImage: "/public/projects/merovrindavandham/layout.jpeg",
    plotSizes: "90-110 Gaj",
    priceRange: "Rs. 15 Lac*",
    ratePerGaj: "Rs. 15 Lac / 100 Gaj",
    location: "Community-oriented residential pocket",
    totalPlots: 300,
    availablePlots: 95,
    type: "Residential",
    openSides: "2-side",
    badge: "Community",
    paymentPlan: {
      registry: "60%",
      emiPeriod: "24 Months",
      emiAmount: "Rs. 25,000",
      rentalIncome: "Rs. 8,000/month",
    },
  },
  {
    id: "commercial-plaza",
    title: "Premium Commercial Plaza",
    subtitle: "Street-facing plots for high-visibility retail activity",
    description:
      "Commercial parcels planned for better frontage, stronger access, and visibility suited to retail, office, and mixed-use buyers.",
    highlights: [
      "Retail Frontage",
      "Near Expressway",
      "Wide Roads",
      "Investment Hotspot",
      "Water & Electricity",
      "Loan Facility Available",
    ],
    image: "/public/projects/shriharivatika/wall.jpeg",
    heroImage: "/public/projects/shriharivatika/wall.jpeg",
    plotSizes: "150 Gaj",
    priceRange: "Rs. 28 Lac*",
    ratePerGaj: "Rs. 28 Lac / 150 Gaj",
    location: "Retail-friendly connector road",
    totalPlots: 120,
    availablePlots: 34,
    type: "Commercial",
    openSides: "2-side",
    badge: "Commercial",
    paymentPlan: {
      registry: "60%",
      emiPeriod: "24 Months",
      emiAmount: "Rs. 47,000",
      rentalIncome: "Rs. 20,000/month",
    },
  },
=======
    id: 'shri-hari-vatika',
    name: 'Shri Hari Vatika',
    description: 'Premium residential project with modern amenities',
    featured: true,
    status: 'ongoing',
    documents: [
      {
        title: 'Project Video',
        type: 'video',
        url: '/videos/shriharivatika.mp4',
        filename: 'shriharivatika.mp4'
      },
      {
        title: 'Project Brochure',
        type: 'pdf',
        url: '/documents/shri-hari-vatika-brochure.pdf'
      },
      {
        title: 'Development Map Layout',
        type: 'pdf',
        url: '/documents/shri-hari-vatika-layout.pdf'
      },
      {
        title: 'Payment Plan',
        type: 'pdf',
        url: '/documents/shri-hari-vatika-payment-plan.pdf'
      },
      {
        title: 'YEIDA Master Plan 2041',
        type: 'pdf',
        url: '/documents/yeida-master-plan-2041.pdf'
      }
    ]
  },
  {
    id: 'shri-hari-vatika-phase-2',
    name: 'Shri Hari Vatika Phase-2',
    phase: 'Phase 2',
    description: 'Expansion of Shri Hari Vatika with enhanced features',
    featured: true,
    status: 'ongoing',
    documents: [
      {
        title: 'Project Brochure',
        type: 'pdf',
        url: '/documents/shri-hari-vatika-phase2-brochure.pdf'
      },
      {
        title: 'Development Map Layout',
        type: 'pdf',
        url: '/documents/shri-hari-vatika-phase2-layout.pdf'
      },
      {
        title: 'Payment Plan',
        type: 'pdf',
        url: '/documents/shri-hari-vatika-phase2-payment-plan.pdf'
      },
      {
        title: 'YEIDA Master Plan 2041',
        type: 'pdf',
        url: '/documents/yeida-master-plan-2041.pdf'
      }
    ]
  },
  {
    id: 'shri-hari-vatika-3',
    name: 'Shri Hari Vatika Phase-3',
    phase: 'Phase 3',
    description: 'Latest phase of Shri Hari Vatika development',
    featured: true,
    status: 'ongoing',
    documents: [
      {
        title: 'Project Brochure',
        type: 'pdf',
        url: '/documents/shri-hari-vatika-phase3-brochure.pdf'
      },
      {
        title: 'Development Map Layout',
        type: 'pdf',
        url: '/documents/shri-hari-vatika-phase3-layout.pdf'
      },
      {
        title: 'Payment Plan',
        type: 'pdf',
        url: '/documents/shri-hari-vatika-phase3-payment-plan.pdf'
      },
      {
        title: 'YEIDA Master Plan 2041',
        type: 'pdf',
        url: '/documents/yeida-master-plan-2041.pdf'
      }
    ]
  },
  {
    id: 'mero-vrindavan-dham',
    name: 'Mero Vrindavan Dham',
    description: 'Spiritual and residential integrated community',
    featured: true,
    status: 'ongoing',
    documents: [
      {
        title: 'Project Video',
        type: 'video',
        url: '/videos/virindavan.mp4',
        filename: 'virindavan.mp4'
      },
      {
        title: 'Project Brochure',
        type: 'pdf',
        url: '/documents/mero-vrindavan-brochure.pdf'
      },
      {
        title: 'Development Map Layout',
        type: 'pdf',
        url: '/documents/mero-vrindavan-layout.pdf'
      },
      {
        title: 'Payment Plan',
        type: 'pdf',
        url: '/documents/mero-vrindavan-payment-plan.pdf'
      },
      {
        title: 'YEIDA Master Plan 2041',
        type: 'pdf',
        url: '/documents/yeida-master-plan-2041.pdf'
      }
    ]
  },
  {
    id: 'hari-shyam-township',
    name: 'Hari Shyam Township',
    description: 'Comprehensive township development project',
    status: 'ongoing',
    documents: [
      {
        title: 'Project Brochure',
        type: 'pdf',
        url: '/documents/hari-shyam-township-brochure.pdf'
      },
      {
        title: 'Development Map Layout',
        type: 'pdf',
        url: '/documents/hari-shyam-township-layout.pdf'
      },
      {
        title: 'Payment Plan',
        type: 'pdf',
        url: '/documents/hari-shyam-township-payment-plan.pdf'
      }
    ]
  },
  {
    id: 'agricultural-land',
    name: 'Agricultural Land',
    description: 'Prime agricultural land opportunities',
    status: 'ongoing',
    documents: [
      {
        title: 'Land Details',
        type: 'pdf',
        url: '/documents/agricultural-land-details.pdf'
      },
      {
        title: 'Layout Plan',
        type: 'pdf',
        url: '/documents/agricultural-land-layout.pdf'
      }
    ]
  }
>>>>>>> 27f50d5b7583f580752c78e0fd8a21674764ae71
];

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
    url: '/legal/12-salana.pdf',
    dateAdded: '2026-06-01'
  },
  {
    id: 'legal-2',
    title: 'Khatauni',
    category: 'Land Records',
    url: '/legal/khatauni.pdf',
    dateAdded: '2026-06-01'
  },
  {
    id: 'legal-3',
    title: 'Happy Client Registry',
    category: 'Client Documentation',
    url: '/legal/happy-client-registry.pdf',
    dateAdded: '2026-06-01'
  }
];