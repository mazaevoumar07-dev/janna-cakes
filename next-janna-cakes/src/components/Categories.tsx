import Image from 'next/image';
import Link from 'next/link';

const cards = [
  {
    title: 'Торты',
    description: 'Авторские торты на любой праздник — свадьбы, дни рождения, юбилеи',
    src: '/images/torti/PHOTO-2026-04-09-22-49-12.jpg',
    href: '/gallery',
  },
  {
    title: 'Бенто',
    description: 'Маленькие торты-сюрпризы с нежными посланиями для близких',
    src: '/images/torti/PHOTO-2026-04-10-00-44-14.jpg',
    href: '/gallery',
  },
  {
    title: 'Моти',
    description: 'Японские десерты ручной работы — нежное тесто с кремовой начинкой',
    src: '/images/torti/PHOTO-2026-04-10-00-56-35.jpg',
    href: '/mochi',
  },
];

export default function Categories() {
  return (
    <section className="categories">
      <div className="container">
        <h2>Наши сладости</h2>
        <p className="section-subtitle">Выберите что-то особенное для вашего момента</p>
        <div className="categories-grid">
          {cards.map(card => (
            <Link key={card.title} href={card.href} className="category-card">
              <div className="category-card-image">
                <Image
                  src={card.src}
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
                <span className="category-card-link">Смотреть &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
