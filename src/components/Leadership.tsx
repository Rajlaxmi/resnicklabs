import React from 'react';
import { Compass, FlaskConical, Globe2, Handshake, Settings2 } from 'lucide-react';
import Section from './Section';

interface Mandate {
  icon: React.ElementType;
  title: string;
  description: string;
}

const mandates: Mandate[] = [
  {
    icon: Compass,
    title: 'Technical strategy',
    description: 'Architecture, training objectives, data strategy, privacy method and cross-platform transfer.',
  },
  {
    icon: FlaskConical,
    title: 'Customer evaluation',
    description: 'Baselines, offline testing, shadow deployment, and measurement of performance and impact.',
  },
  {
    icon: Handshake,
    title: 'Partnerships',
    description: 'Advertisers, agencies, DSPs and retail media platforms, from requirements through integration.',
  },
  {
    icon: Globe2,
    title: 'Landscape',
    description: 'Machine learning, privacy regulation, data availability, clean rooms and identity systems.',
  },
  {
    icon: Settings2,
    title: 'Operations',
    description: 'People, compute, data governance, company strategy and financing.',
  },
];

const Leadership: React.FC = () => (
  <Section
    id="leadership"
    index="05"
    label="leadership"
    lead="Resnick Labs is led with a single mandate: build the model, prove it with customers, and build a company able to sustain both."
  >
    <ol className="mt-12 border-t border-rule">
      {mandates.map((mandate) => (
        <li key={mandate.title} className="border-b border-rule py-6" data-reveal>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="icon-badge">
              <mandate.icon size={16} strokeWidth={1.5} />
            </span>
            <h3 className="text-[0.848251rem] text-ink sm:text-[0.888645rem]">{mandate.title}</h3>
            <p className="text-muted">{mandate.description}</p>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

export default Leadership;
