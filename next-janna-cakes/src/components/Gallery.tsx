'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  name: string;
  src: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1,  name: 'Торт', src: '/images/torti/020f6024-a664-48a3-9823-fbae71369957.JPG', category: 'Торты' },
  { id: 2,  name: 'Торт', src: '/images/torti/0a4b3df0-da1e-4ae3-b1bb-b961c1cf3642.JPG', category: 'Торты' },
  { id: 3,  name: 'Торт', src: '/images/torti/2223d089-33a9-4213-8225-0e3b3c172adb.JPG', category: 'Торты' },
  { id: 4,  name: 'Торт', src: '/images/torti/42661fa6-9398-4fb5-b89a-a345e238ca7a.jpg', category: 'Торты' },
  { id: 5,  name: 'Торт', src: '/images/torti/49c46792-4321-43b8-80c0-b844264df835.JPG', category: 'Торты' },
  { id: 6,  name: 'Торт', src: '/images/torti/52510721-a7b7-4f2f-821b-e3bd4a92a7d1.JPG', category: 'Торты' },
  { id: 13, name: 'Торт', src: '/images/torti/PHOTO-2026-04-09-22-33-04.jpg', category: 'Торты' },
  { id: 14, name: 'Торт', src: '/images/torti/PHOTO-2026-04-09-22-49-12.jpg', category: 'Торты' },
  { id: 15, name: 'Торт', src: '/images/torti/PHOTO-2026-04-09-22-49-17.jpg', category: 'Торты' },
  { id: 16, name: 'Торт', src: '/images/torti/PHOTO-2026-04-09-22-49-20.jpg', category: 'Торты' },
  { id: 17, name: 'Торт', src: '/images/torti/PHOTO-2026-04-10-00-44-16.jpg', category: 'Торты' },
  { id: 18, name: 'Торт', src: '/images/torti/PHOTO-2026-04-10-00-54-21.jpg', category: 'Торты' },
  { id: 19, name: 'Торт', src: '/images/torti/PHOTO-2026-04-10-00-54-27.jpg', category: 'Торты' },
  { id: 20, name: 'Торт', src: '/images/torti/PHOTO-2026-04-10-00-54-30.jpg', category: 'Торты' },
  { id: 21, name: 'Торт', src: '/images/torti/PHOTO-2026-04-10-00-54-33.jpg', category: 'Торты' },
  { id: 22, name: 'Торт', src: '/images/torti/PHOTO-2026-04-10-00-54-37.jpg', category: 'Торты' },
  { id: 7,  name: 'Бенто', src: '/images/bento/07985057-c204-451f-84b4-d4357757e220.JPG', category: 'Бенто' },
  { id: 8,  name: 'Бенто', src: '/images/bento/0981b3ef-7389-4f52-8484-bc829b168317.JPG', category: 'Бенто' },
  { id: 9,  name: 'Бенто', src: '/images/bento/1dc37ea2-51a1-42c9-b7c8-37613e320583.JPG', category: 'Бенто' },
  { id: 10, name: 'Бенто', src: '/images/bento/2f9dc4c5-68da-47e6-8dad-5eceee8e0799.JPG', category: 'Бенто' },
  { id: 11, name: 'Бенто', src: '/images/bento/3cd3cf67-9aff-4da0-9adb-3654bf10030f.jpg', category: 'Бенто' },
  { id: 12, name: 'Бенто', src: '/images/bento/593cbfcb-546e-465c-a9c1-f488b6c21b9b.JPG', category: 'Бенто' },
  { id: 23, name: 'Бенто', src: '/images/torti/PHOTO-2026-04-10-00-44-14.jpg', category: 'Бенто' },
  { id: 24, name: 'Моти', src: '/images/torti/PHOTO-2026-04-10-00-56-35.jpg', category: 'Моти' },
  { id: 25, name: 'Моти', src: '/images/torti/PHOTO-2026-04-10-00-56-34.jpg', category: 'Моти' },
  { id: 26, name: 'Моти', src: '/images/torti/PHOTO-2026-04-10-00-56-37.jpg', category: 'Моти' },
  { id: 27, name: 'Моти', src: '/images/torti/PHOTO-2026-04-10-00-56-40.jpg', category: 'Моти' },
  { id: 28, name: 'Моти', src: '/images/torti/PHOTO-2026-04-10-00-56-41.jpg', category: 'Моти' },
  { id: 29, name: 'Моти', src: '/images/torti/PHOTO-2026-04-10-00-56-36.jpg', category: 'Моти' },
  { id: 30, name: 'Моти', src: '/images/torti/PHOTO-2026-04-10-01-00-39.jpg', category: 'Моти' },
  { id: 31, name: 'Моти', src: '/images/torti/PHOTO-2026-04-10-01-00-44.jpg', category: 'Моти' },
  { id: 32, name: 'Моти', src: '/images/torti/PHOTO-2026-04-10-00-56-38.jpg', category: 'Моти' },
];

const categories = ['Все', 'Торты', 'Бенто', 'Моти'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('Все');
  const [modalItem, setModalItem] = useState<GalleryItem | null>(null);

  const filtered = activeFilter === 'Все'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalItem(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Наши работы</h2>
        <p className="section-subtitle">Каждый торт создаётся с любовью и вниманием к деталям</p>

        <div className="gallery-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn${activeFilter === cat ? ' active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map(item => (
            <div key={item.id} className="gallery-item" onClick={() => setModalItem(item)}>
              <Image
                src={item.src}
                alt={item.name}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="overlay">
                <span className="overlay-icon">🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalItem && (
        <div className="gallery-modal show" onClick={() => setModalItem(null)}>
          <div onClick={e => e.stopPropagation()}>
            <span className="close" onClick={() => setModalItem(null)}>&times;</span>
            <Image
              src={modalItem.src}
              alt={modalItem.name}
              width={800}
              height={800}
              className="modal-content"
              style={{ objectFit: 'contain' }}
            />
            <p className="modal-caption">{modalItem.name}</p>
          </div>
        </div>
      )}
    </section>
  );
}
