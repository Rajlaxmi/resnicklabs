import React from 'react';
import Section from './Section';

const Objective: React.FC = () => (
  <Section
    id="objective"
    index="01"
    label="objective"
    lead="We develop next-generation user foundation models for advertising, models that learn transferable, privacy-aware representations of user intent, interest, context and response dynamics."
  >
    <p className="mt-8 max-w-measure text-[0.763427rem] text-muted" data-reveal>
      A single representation, learned once and transferred across surfaces, can improve
      retrieval, ranking, creative selection, audience construction and measurement across
      heterogeneous advertising platforms, without a bespoke model, or a new exposure of user
      data, for every one of them.
    </p>

    <blockquote
      className="mt-12 max-w-measure border-l-2 border-gold/50 pl-6 text-[0.767466rem] italic text-ink"
      data-reveal
    >
      One representation. Every surface. No new exposure.
    </blockquote>
  </Section>
);

export default Objective;
