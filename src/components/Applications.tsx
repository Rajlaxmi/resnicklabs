import React from 'react';
import { BarChart3, Gauge, Search, Sparkles, Users } from 'lucide-react';
import Section from './Section';

interface Application {
  icon: React.ElementType;
  title: string;
  description: string;
}

const applications: Application[] = [
  {
    icon: Search,
    title: 'Retrieval',
    description: 'Surfacing the right candidate users and inventory from billions of possibilities.',
  },
  {
    icon: BarChart3,
    title: 'Ranking',
    description: 'Ordering candidates by predicted response, not merely predicted click.',
  },
  {
    icon: Sparkles,
    title: 'Creative selection',
    description: 'Matching message and format to inferred intent, in context, at the moment it matters.',
  },
  {
    icon: Users,
    title: 'Audience construction',
    description:
      'Building durable, privacy-respecting cohorts from learned representations rather than raw identifiers.',
  },
  {
    icon: Gauge,
    title: 'Measurement',
    description:
      'Attributing outcomes back to representation quality, closing the loop between model and business impact.',
  },
];

const Applications: React.FC = () => (
  <Section
    id="applications"
    index="03"
    label="applications"
    lead="One representation, five surfaces. The same learned user state moves through every stage of the advertising funnel."
  >
    <ul className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2">
      {applications.map((application, i) => (
        <li
          key={application.title}
          className={`flex gap-5 border-t border-rule pt-6 ${
            i === applications.length - 1 ? 'sm:col-span-2 sm:max-w-[calc(50%-1.25rem)]' : ''
          }`}
          data-reveal
        >
          <span className="icon-badge">
            <application.icon size={16} strokeWidth={1.5} />
          </span>
          <div>
            <h3 className="pt-1 text-[0.888645rem] text-ink sm:text-[0.969431rem]">{application.title}</h3>
            <p className="mt-2 max-w-measure text-muted">{application.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </Section>
);

export default Applications;
