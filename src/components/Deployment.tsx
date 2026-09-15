import React from 'react';
import Section from './Section';

const evaluationStages = ['Baseline definition', 'Offline testing', 'Shadow deployment', 'Measured impact'];
const partnerTypes = ['Advertisers', 'Agencies', 'DSPs', 'Retail media platforms'];

const Deployment: React.FC = () => (
  <Section
    id="deployment"
    index="04"
    label="deployment"
    lead="Model performance is proven with customers, not only on benchmarks, and built together with the platforms that will run it."
  >
    <div className="mt-10 grid gap-12 sm:grid-cols-2 sm:gap-10">
      <div className="border-t border-rule pt-6" data-reveal>
        <h3 className="text-[0.888645rem] text-ink sm:text-[0.969431rem]">Evaluation</h3>
        <p className="mt-2 max-w-measure text-muted">
          Every technical evaluation moves through the same stages, in order, before a model earns
          production traffic.
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {evaluationStages.map((stage) => (
            <li key={stage} className="chip-accent">
              {stage}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-rule pt-6" data-reveal>
        <h3 className="text-[0.888645rem] text-ink sm:text-[0.969431rem]">Partners</h3>
        <p className="mt-2 max-w-measure text-muted">
          Product requirements, design partnerships and integrations are shaped directly with the
          organizations closest to the advertising stack.
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {partnerTypes.map((type) => (
            <li key={type} className="chip-gold">
              {type}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <p className="mt-10 max-w-measure text-[0.763427rem] text-muted" data-reveal>
      Alongside every deployment, we track the terrain it depends on: machine learning research,
      privacy regulation, data availability, clean rooms and identity systems, so product and
      research decisions keep pace with how the ecosystem actually moves.
    </p>
  </Section>
);

export default Deployment;
