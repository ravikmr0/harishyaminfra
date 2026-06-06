import {
  Award,
  Building2,
  Handshake,
  Heart,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react';

export default function About() {
  const stats = [
    { icon: TrendingUp, label: '10 Years', value: 'Industry Experience' },
    { icon: Users, label: '500', value: 'Happy Customers' },
    { icon: Award, label: '10', value: 'Projects Delivered' },
    { icon: Heart, label: '100%', value: 'Customer Commitment' },
  ];

  const values = [
    {
      title: 'Integrity',
      description:
        'We believe in transparent communication, fair dealing, and relationships built on trust.',
    },
    {
      title: 'Quality',
      description:
        'Every project and customer interaction is handled with attention to detail and care.',
    },
    {
      title: 'Innovation',
      description:
        'We keep improving the way we plan, present, and deliver real estate opportunities.',
    },
    {
      title: 'Customer Focus',
      description:
        'Our team stays responsive, supportive, and solution-oriented through every stage of the journey.',
    },
  ];

  const leadershipTeam = [
    {
      name: 'Sudheer Kumar',
      role: 'Founder & CEO',
      image: '/about/sudheer.png',
      bio: 'Leads the company vision with a strong focus on trust, long-term growth, and customer value.',
    },
    {
      name: 'Anubhav Sharma',
      role: 'Managing Director',
      image: '/about/anubhav.png',
      bio: 'Drives operations and execution with disciplined leadership and a professional client-first approach.',
    },
  ];

  const salesTeam = [
    {
      name: 'Ashish',
      role: 'Sales Executive',
      image: '/about/ashish.jpeg',
      bio: 'Supports clients with clear property guidance, prompt follow-up, and smooth coordination.',
    },
    {
      name: 'Dushant',
      role: 'Senior Sales Manager',
      image: '/about/dushant.jpeg',
      bio: 'Helps buyers evaluate options confidently with responsive communication and dependable support.',
    },
    {
      name: 'Gyanendra',
      role: 'Field Manager',
      image: '/about/gyanendra.jpeg',
      bio: 'Focuses on transparent conversations and a seamless experience from enquiry to site visit.',
    },
    {
      name: 'Harsh',
      role: 'Sales Executive',
      image: '/about/harsh.jpeg',
      bio: 'Assists clients with timely updates, property details, and professional sales support.',
    },
    {
      name: 'Milan',
      role: 'Sales Executive',
      image: '/about/milan.jpeg',
      bio: 'Works closely with prospects to understand needs and recommend the right opportunity.',
    },
    {
      name: 'Soniya',
      role: 'Senior Manager',
      image: '/about/soniya.jpeg',
      bio: 'Provides attentive client assistance with polished communication and reliable coordination.',
    },
  ];

  const strengths = [
    {
      icon: Building2,
      title: 'Premium Projects',
      description:
        'We focus on developments that combine location value, smart planning, and long-term potential.',
    },
    {
      icon: ShieldCheck,
      title: 'Trusted Guidance',
      description:
        'Clients rely on our team for transparent information, honest advice, and steady support.',
    },
    {
      icon: Sparkles,
      title: 'Professional Experience',
      description:
        'Every touchpoint is designed to feel organized, responsive, and comfortable for buyers.',
    },
    {
      icon: Handshake,
      title: 'Relationship Driven',
      description:
        'We believe strong service and long-term trust are at the heart of meaningful real estate work.',
    },
  ];

  return (
    <div className="site-page">
      <section id="who-we-are" className="section-shell">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_1.05fr]">
          <div className="content-stack">
            <span className="page-kicker-light">Who We Are</span>
            <h2 className="page-title-dark mt-4">
              A professional real estate company.
            </h2>
            <p className="page-copy-dark">
              For more than a decade, Harishyam Infra has focused on creating premium residential opportunities and
              dependable customer experiences. We believe every buyer deserves straightforward guidance, responsive
              support, and a team that treats every enquiry with sincerity.
            </p>
            <p className="page-copy-dark">
              Our leadership and sales professionals work together to keep communication clear, execution disciplined,
              and every client interaction thoughtful from first conversation to final decision.
            </p>
          </div>

          <div className="page-hero-soft p-3 md:p-4">
            <img
              src="/about/team.jpeg"
              alt="Harishyam Infra team"
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="our-track-record" className="section-shell bg-[rgba(255,253,248,0.7)]">
        <div className="mx-auto max-w-7xl">
          <div className="section-heading">
            <span className="page-kicker-light">Our Track Record</span>
            <h2 className="page-title-dark mt-4">A growing reputation built on service and consistency.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div key={stat.value} className="stat-card text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(178,98,67,0.12)]">
                    <Icon className="h-7 w-7 text-brand-deep" />
                  </div>
                  <p className="text-3xl font-bold text-brand-ink">{stat.label}</p>
                  <p className="mt-1 text-sm text-[rgba(31,44,43,0.72)]">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="our-values" className="section-shell">
        <div className="mx-auto max-w-7xl">
          <div className="section-heading">
            <span className="page-kicker-light">Our Values</span>
            <h2 className="page-title-dark mt-4">The principles that guide every project and conversation.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="surface-card" id={value.title.toLowerCase().replace(/\s+/g, '-')}>
                <span className="label-chip">{value.title}</span>
                <p className="mt-4 text-base text-[rgba(31,44,43,0.78)]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="our-team" className="section-shell bg-[rgba(255,253,248,0.7)]">
        <div className="mx-auto max-w-7xl">
          <div className="section-heading">
            <span className="page-kicker-light">Our Team</span>
            <h2 className="page-title-dark mt-4">Leadership and sales professionals working together for every client.</h2>
            <p className="section-copy mt-4">
              Meet the people behind Harishyam Infra. Our leadership team sets the direction, and our sales team keeps
              every customer journey clear, supportive, and professionally managed.
            </p>
          </div>

          <div id="leadership-team" className="grid gap-6 lg:grid-cols-2">
            {leadershipTeam.map((member) => (
              <article
                key={member.name}
                className="surface-card overflow-hidden"
                id={member.name.toLowerCase().replace(/\s+/g, '-')}
              >
                <div className="rounded-[1.4rem] bg-[rgba(231,199,166,0.16)] p-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-[420px] w-full rounded-[1.1rem] object-cover object-top md:h-[520px]"
                  />
                </div>
                <div className="mt-6">
                  <span className="label-chip">{member.role}</span>
                  <h3 className="mt-4 text-2xl font-bold text-brand-ink">{member.name}</h3>
                  <p className="mt-3 text-[rgba(31,44,43,0.78)]">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="soft-divider my-8" />

          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-brand-ink">Sales Team</h3>
            <p className="mx-auto mt-3 max-w-2xl text-[rgba(31,44,43,0.72)]">
              Our sales executives help buyers with timely communication, property information, and a smooth experience
              throughout the process.
            </p>
          </div>

          <div id="sales-team" className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {salesTeam.map((member) => (
              <article
                key={member.name}
                className="surface-card overflow-hidden"
                id={member.name.toLowerCase().replace(/\s+/g, '-')}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-[3/4] w-full rounded-[1.25rem] object-cover object-top"
                />
                <div className="mt-5">
                  <span className="label-chip">{member.role}</span>
                  <h3 className="mt-4 text-xl font-bold text-brand-ink">{member.name}</h3>
                  <p className="mt-3 text-sm text-[rgba(31,44,43,0.72)]">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="section-shell">
        <div className="mx-auto max-w-7xl">
          <div className="section-heading">
            <span className="page-kicker-light">Why Choose Us</span>
            <h2 className="page-title-dark mt-4">A team focused on dependable service and meaningful results.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {strengths.map((strength) => {
              const Icon = strength.icon;

              return (
                <div key={strength.title} className="surface-card" id={strength.title.toLowerCase().replace(/\s+/g, '-')}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(178,98,67,0.12)]">
                    <Icon className="h-7 w-7 text-brand-deep" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-brand-ink">{strength.title}</h3>
                  <p className="mt-3 text-sm text-[rgba(31,44,43,0.72)]">{strength.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
