'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { Lang } from '../locales/translations';

const LANGS: { code: Lang; label: string }[] = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
];

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/"><h1>janna.cakes</h1></Link>
          <p className="tagline">{t.navbar.tagline}</p>
        </div>

        <ul className={`nav-menu ${isActive ? 'active' : ''}`} id="navMenu">
          <li><Link href="/"         onClick={() => setIsActive(false)}>{t.navbar.home}</Link></li>
          <li><Link href="/gallery"  onClick={() => setIsActive(false)}>{t.navbar.gallery}</Link></li>
          <li><Link href="/about"    onClick={() => setIsActive(false)}>{t.navbar.about}</Link></li>
          <li><Link href="/contacts" onClick={() => setIsActive(false)}>{t.navbar.contacts}</Link></li>
        </ul>

        <div className="lang-switcher">
          {LANGS.map(({ code, label }) => (
            <button
              key={code}
              className={`lang-btn${lang === code ? ' active' : ''}`}
              onClick={() => setLang(code)}
              aria-label={label}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="hamburger" id="hamburger" onClick={() => setIsActive(!isActive)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
