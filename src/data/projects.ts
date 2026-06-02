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