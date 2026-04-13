'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h2>{t.hero.heading}</h2>
        <p>{t.hero.subtext}</p>
        <a href="/contacts" className="btn btn-primary">{t.hero.cta}</a>
      </div>
    </section>
  );
}
