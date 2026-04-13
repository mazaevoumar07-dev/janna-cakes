'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const hrefs = ['/gallery', '/gallery', '/mochi'];

export default function Categories() {
  const { t } = useLanguage();
  const srcs = [
    '/images/torti/PHOTO-2026-04-09-22-49-12.jpg',
    '/images/torti/PHOTO-2026-04-10-00-44-14.jpg',
    '/images/torti/PHOTO-2026-04-10-00-56-35.jpg',
  ];

  return (
    <section className="categories">
      <div className="container">
        <h2>{t.categories.heading}</h2>
        <p className="section-subtitle">{t.categories.subtitle}</p>
        <div className="categories-grid">
          {t.categories.items.map((card, i) => (
            <Link key={card.title} href={hrefs[i]} className="category-card">
              <div className="category-card-image">
                <Image
                  src={srcs[i]}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className="category-card-overlay" />
              </div>
              <div className="category-card-body">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <span className="category-card-link">{t.categories.viewLink}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
