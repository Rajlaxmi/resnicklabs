import React from 'react';
import { Database, Layers, Share2, ShieldCheck, Target } from 'lucide-react';
import Section from './Section';

interface Pillar {
  icon: React.ElementType;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    icon: Layers,
    title: 'Architecture',
    description:
      'Model design built for representation transfer across retrieval, ranking and creative systems, not tuned for a single task at the expense of the rest.',
  },
  {
    icon: Target,
    title: 'Training objectives',
    description:
      'Self-supervised and multi-task objectives learned directly from behavioral sequences, response signals and context, rather than hand-labeled proxies.',
  },
  {
    icon: Database,
    title: 'Data strategy',
    description:
      'Heterogeneous signal integrated under governance that respects platform boundaries and consumer expectations from the first design decision.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy-preserving methods',
    description:
      'Federated training, differential privacy, on-device computation and clean-room protocols treated as first-class constraints, not compliance added afterward.',
  },
  {
    icon: Share2,
    title: 'Cross-platform transfer',
    description:
      'Representations evaluated by how well they generalize across DSPs, retail media platforms and walled gardens, not only by fit on any one of them.',
  },
];

const Approach: React.FC = () => (
  <Section
    id="approach"
    index="02"
    label="approach"
    lead="The roadmap treats the user representation itself as the product. Architecture, objectives, data and privacy method are designed together, not bolted on after the fact."
  >
    <ol className="mt-12 border-t border-rule">
      {pillars.map((pillar) => (
        <li key={pillar.title} className="border-b border-rule py-7" data-reveal>
          <div className="flex gap-5">
            <span className="icon-badge">
              <pillar.icon size={16} strokeWidth={1.5} />
            </span>
            <div>
              <h3 className="pt-1 text-[0.888645rem] text-ink sm:text-[0.969431rem]">{pillar.title}</h3>
              <p className="mt-2 max-w-measure text-muted">{pillar.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

export default Approach;
