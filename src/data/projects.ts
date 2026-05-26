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
    image: "/images/plots/shri-hari-vatika-4.jpg",
    heroImage: "/images/plots/shri-hari-vatika-6.jpg",
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
    image: "/images/plots/shri-hari-vatika-2.jpg",
    heroImage: "/images/plots/shri-hari-vatika-5.jpg",
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
    image: "/images/plots/shri-hari-vatika-7.jpg",
    heroImage: "/images/plots/shri-hari-vatika-8.jpg",
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
    id: "hari-shyam-township",
    title: "Hari Shyam Township",
    subtitle: "A larger township canvas for future-ready living",
    description:
      "A full township format with strong internal infrastructure, neighborhood amenities, and a layout designed for balanced daily living.",
    image: "/images/plots/shri-hari-vatika-1.jpg",
    heroImage: "/images/plots/shri-hari-vatika-3.jpg",
    plotSizes: "100-125 Gaj",
    priceRange: "Rs. 17 Lac*",
    ratePerGaj: "Rs. 17 Lac / 100 Gaj",
    location: "Suburban infrastructure node",
    totalPlots: 500,
    availablePlots: 140,
    type: "Residential",
    openSides: "3-side",
    badge: "Flagship",
    paymentPlan: {
      registry: "60%",
      emiPeriod: "20 Months",
      emiAmount: "Rs. 32,000",
      rentalIncome: "Rs. 11,000/month",
    },
  },
  {
    id: "mero-vrindavan-dham",
    title: "Mero Vrindavan Dham",
    subtitle: "Community-first plotted living with a calmer tone",
    description:
      "A quieter plotted neighborhood that blends investment practicality with a more rooted community feel and livable site planning.",
    image: "/images/plots/shri-hari-vatika-3.jpg",
    heroImage: "/images/plots/shri-hari-vatika-4.jpg",
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
    image: "/images/plots/shri-hari-vatika-5.jpg",
    heroImage: "/images/plots/shri-hari-vatika-2.jpg",
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

export const featuredProjects = projects.slice(0, 3);

export const projectMap = Object.fromEntries(projects.map((project) => [project.id, project]));
