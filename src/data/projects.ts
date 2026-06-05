export interface PaymentPlan {
  registry: string;
  emiPeriod: string;
  emiAmount: string;
  rentalIncome: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  heroImage: string;
  plotSizes: string;
  priceRange: string;
  ratePerGaj: string;
  location: string;
  totalPlots: number;
  availablePlots: number;
  type: "Residential" | "Commercial";
  openSides: "1-side" | "2-side" | "3-side";
  badge: string;
  paymentPlan: PaymentPlan;
}

export const projects: Project[] = [
  {
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
];

export const featuredProjects = projects.filter((project) => project.type === "Residential").slice(0, 5);

export const projectMap = Object.fromEntries(projects.map((project) => [project.id, project]));
