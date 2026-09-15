import React from 'react';

const Footer: React.FC = () => (
  <footer className="border-t border-night-rule/10 bg-night text-night-ink">
    <div className="mx-auto max-w-page px-6 py-10 sm:px-10">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <p className="eyebrow-night">Resnick Labs</p>
        <p className="eyebrow-night">© 2026 Resnick Labs</p>
      </div>
    </div>
  </footer>
);

export default Footer;
