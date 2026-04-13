'use client';

import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>{t.about.heading}</h2>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
            <ul className="about-list">
              {t.about.list.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="about-image">
            <Image
              src="/images/zhanna.jpg"
              alt="Жанна"
              width={300}
              height={300}
              style={{ borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
