import React, { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { id: 'objective', label: 'objective' },
  { id: 'approach', label: 'approach' },
  { id: 'applications', label: 'applications' },
  { id: 'deployment', label: 'deployment' },
  { id: 'leadership', label: 'leadership' },
  { id: 'contact', label: 'contact' },
];

interface HeaderProps {
  activeSection?: string;
}

// The header stays dark-on-glass everywhere: it opens over the dark hero
// and needs to keep working once it's pinned over the paper sections below.
const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          isScrolled || isMenuOpen
            ? 'border-b border-night-rule/10 bg-night/85 backdrop-blur-md'
            : 'border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-page items-center justify-between px-6 py-4 sm:px-10">
          <a
            href="#hero"
            className="text-[0.830884rem] tracking-[0.02em] text-night-ink transition-colors duration-300 hover:text-night-muted"
          >
            Resnick Labs
          </a>

          <div className="flex items-center gap-6">
            <nav className="hidden md:block" aria-label="Sections">
              <ul className="flex items-center gap-7">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        aria-current={isActive ? 'true' : undefined}
                        className={`relative flex items-center gap-2 text-[0.782008rem] transition-colors duration-300 hover:text-night-ink ${
                          isActive ? 'text-night-ink' : 'text-night-muted'
                        }`}
                      >
                        <span
                          className={`h-1 w-1 rounded-full bg-signal transition-opacity duration-300 ${
                            isActive ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="eyebrow-night transition-colors duration-300 hover:text-night-ink md:hidden"
            >
              {isMenuOpen ? 'close' : 'menu'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        hidden={!isMenuOpen}
        className="fixed inset-0 z-40 bg-night px-6 pt-24 md:hidden"
      >
        <nav aria-label="Sections">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="border-b border-night-rule/10">
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-4 text-[0.999726rem] text-night-ink transition-colors duration-300 hover:text-night-muted"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
