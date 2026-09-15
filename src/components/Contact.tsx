import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ContactLink {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

const contactLinks: ContactLink[] = [
  { label: 'General', value: 'hi@resnicklabs.ai', href: 'mailto:hi@resnicklabs.ai' },
  {
    label: 'Partnerships',
    value: 'partners@resnicklabs.ai',
    href: 'mailto:partners@resnicklabs.ai',
  },
  {
    label: 'LinkedIn',
    value: 'company/resnicklabs',
    href: 'https://www.linkedin.com/company/resnicklabs',
    external: true,
  },
];

// The closing section returns to the dark register the hero opened in,
// the page's one deliberate bookend.
const Contact: React.FC = () => (
  <section id="contact" className="bg-night text-night-ink">
    <div className="mx-auto max-w-page px-6 sm:px-10">
      <div className="grid gap-8 py-20 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-14 md:py-28 lg:grid-cols-[11rem_minmax(0,1fr)]">
        <div className="md:sticky md:top-28 md:self-start" data-reveal>
          <h2 className="eyebrow-night flex items-baseline gap-3 md:flex-col md:gap-2">
            <span className="font-mono text-signal">06</span>
            <span>contact</span>
          </h2>
        </div>

        <div className="min-w-0">
          <p
            className="max-w-[38rem] font-serif text-title text-night-ink"
            data-reveal
          >
            If you are an advertiser, agency, DSP or retail media platform interested in a design
            partnership, or a researcher who wants to build this with us, we would like to hear
            from you.
          </p>

          <ul className="mt-12 border-t border-night-rule/10">
            {contactLinks.map((link) => (
              <li key={link.label} data-reveal>
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-night-rule/10 py-5"
                >
                  <span className="eyebrow-night">{link.label}</span>
                  <span className="flex items-center gap-2 text-[0.767466rem] text-night-ink transition-colors duration-300 group-hover:text-signal">
                    {link.value}
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                      className="transition-transform duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
