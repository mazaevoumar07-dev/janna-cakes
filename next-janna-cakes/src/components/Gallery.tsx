'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { FilterKey } from '../locales/translations';

interface GalleryItem {
  id: number;
  src: string;
  category: FilterKey;
}

const galleryItems: GalleryItem[] = [
  { id: 1,  src: '/images/torti/020f6024-a664-48a3-9823-fbae71369957.JPG', category: 'cakes' },
  { id: 2,  src: '/images/torti/0a4b3df0-da1e-4ae3-b1bb-b961c1cf3642.JPG', category: 'cakes' },
  { id: 3,  src: '/images/torti/2223d089-33a9-4213-8225-0e3b3c172adb.JPG', category: 'cakes' },
  { id: 4,  src: '/images/torti/42661fa6-9398-4fb5-b89a-a345e238ca7a.jpg', category: 'cakes' },
  { id: 5,  src: '/images/torti/49c46792-4321-43b8-80c0-b844264df835.JPG', category: 'cakes' },
  { id: 6,  src: '/images/torti/52510721-a7b7-4f2f-821b-e3bd4a92a7d1.JPG', category: 'cakes' },
  { id: 13, src: '/images/torti/PHOTO-2026-04-09-22-33-04.jpg',            category: 'cakes' },
  { id: 14, src: '/images/torti/PHOTO-2026-04-09-22-49-12.jpg',            category: 'cakes' },
  { id: 15, src: '/images/torti/PHOTO-2026-04-09-22-49-17.jpg',            category: 'cakes' },
  { id: 16, src: '/images/torti/PHOTO-2026-04-09-22-49-20.jpg',            category: 'cakes' },
  { id: 17, src: '/images/torti/PHOTO-2026-04-10-00-44-16.jpg',            category: 'cakes' },
  { id: 18, src: '/images/torti/PHOTO-2026-04-10-00-54-21.jpg',            category: 'cakes' },
  { id: 19, src: '/images/torti/PHOTO-2026-04-10-00-54-27.jpg',            category: 'cakes' },
  { id: 20, src: '/images/torti/PHOTO-2026-04-10-00-54-30.jpg',            category: 'cakes' },
  { id: 21, src: '/images/torti/PHOTO-2026-04-10-00-54-33.jpg',            category: 'cakes' },
  { id: 22, src: '/images/torti/PHOTO-2026-04-10-00-54-37.jpg',            category: 'cakes' },
  { id: 7,  src: '/images/bento/07985057-c204-451f-84b4-d4357757e220.JPG', category: 'bento' },
  { id: 8,  src: '/images/bento/0981b3ef-7389-4f52-8484-bc829b168317.JPG', category: 'bento' },
  { id: 9,  src: '/images/bento/1dc37ea2-51a1-42c9-b7c8-37613e320583.JPG', category: 'bento' },
  { id: 10, src: '/images/bento/2f9dc4c5-68da-47e6-8dad-5eceee8e0799.JPG', category: 'bento' },
  { id: 11, src: '/images/bento/3cd3cf67-9aff-4da0-9adb-3654bf10030f.jpg', category: 'bento' },
  { id: 12, src: '/images/bento/593cbfcb-546e-465c-a9c1-f488b6c21b9b.JPG', category: 'bento' },
  { id: 23, src: '/images/torti/PHOTO-2026-04-10-00-44-14.jpg',            category: 'bento' },
  { id: 24, src: '/images/torti/PHOTO-2026-04-10-00-56-35.jpg',            category: 'mochi' },
  { id: 25, src: '/images/torti/PHOTO-2026-04-10-00-56-34.jpg',            category: 'mochi' },
  { id: 26, src: '/images/torti/PHOTO-2026-04-10-00-56-37.jpg',            category: 'mochi' },
  { id: 27, src: '/images/torti/PHOTO-2026-04-10-00-56-40.jpg',            category: 'mochi' },
  { id: 28, src: '/images/torti/PHOTO-2026-04-10-00-56-41.jpg',            category: 'mochi' },
  { id: 29, src: '/images/torti/PHOTO-2026-04-10-00-56-36.jpg',            category: 'mochi' },
  { id: 30, src: '/images/torti/PHOTO-2026-04-10-01-00-39.jpg',            category: 'mochi' },
  { id: 31, src: '/images/torti/PHOTO-2026-04-10-01-00-44.jpg',            category: 'mochi' },
  { id: 32, src: '/images/torti/PHOTO-2026-04-10-00-56-38.jpg',            category: 'mochi' },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [modalItem, setModalItem] = useState<GalleryItem | null>(null);

  const filtered = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalItem(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const getItem = (id: number) => t.galleryItems[id] ?? { name: '—', description: '' };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>{t.gallery.heading}</h2>
        <p className="section-subtitle">{t.gallery.subtitle}</p>

        <div className="gallery-filters">
          {t.gallery.filters.map(f => (
            <button
              key={f.key}
              className={`filter-btn${activeFilter === f.key ? ' active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map(item => {
            const info = getItem(item.id);
            return (
              <div key={item.id} className="gallery-item" onClick={() => setModalItem(item)}>
                <Image
                  src={item.src}
                  alt={info.name}
                  fill
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className="overlay">
                  <div className="overlay-info">
                    <span className="overlay-name">{info.name}</span>
                    <span className="overlay-desc">{info.description}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {modalItem && (
        <div className="gallery-modal show" onClick={() => setModalItem(null)}>
          <div onClick={e => e.stopPropagation()}>
            <span className="close" onClick={() => setModalItem(null)}>&times;</span>
            <Image
              src={modalItem.src}
              alt={getItem(modalItem.id).name}
              width={800}
              height={800}
              className="modal-content"
              style={{ objectFit: 'contain' }}
            />
            <p className="modal-caption">
              <strong>{getItem(modalItem.id).name}</strong>
              <br />
              <span className="modal-desc">{getItem(modalItem.id).description}</span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
