import React from 'react';
import { ArrowDown } from 'lucide-react';
import EmbeddingField from './EmbeddingField';

const Hero: React.FC = () => (
  <section id="hero" className="bg-night text-night-ink">
    <div className="mx-auto max-w-page px-6 sm:px-10">
      <div className="flex min-h-[92vh] flex-col justify-center pb-20 pt-32 sm:pt-40">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
          <div>
            <h1 className="font-serif text-display" data-reveal>
              User foundation
              <br />
              models for advertising.
            </h1>

            <p
              className="mt-7 max-w-measure text-[0.888645rem] italic text-night-muted sm:text-[1rem]"
              data-reveal
              style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
            >
              Transferable, privacy-aware representations of intent, interest, context and
              response, learned once and deployed everywhere advertising happens.
            </p>

            <div
              className="mt-14"
              data-reveal
              style={{ '--reveal-delay': '360ms' } as React.CSSProperties}
            >
              <a
                href="#objective"
                className="group inline-flex items-center gap-3 text-night-muted transition-colors duration-300 hover:text-night-ink"
              >
                <span className="eyebrow-night">Read the objective</span>
                <ArrowDown
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 ease-editorial group-hover:translate-y-1"
                />
              </a>
            </div>
          </div>

          <div
            className="flex flex-col justify-between gap-10"
            data-reveal
            style={{ '--reveal-delay': '240ms' } as React.CSSProperties}
          >
            <EmbeddingField className="h-auto w-full max-w-[25rem] self-center lg:self-end" />

            <figure className="border-t border-night-rule/10 pt-6">
              <blockquote className="text-[0.844213rem] leading-relaxed text-night-ink">
                “A wealth of information creates a poverty of attention.”
              </blockquote>
              <figcaption className="mt-4 text-[0.646287rem] italic text-night-muted">
                Herbert A. Simon, <cite className="not-italic">Designing Organizations for an
                Information-Rich World</cite> (1971)
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
