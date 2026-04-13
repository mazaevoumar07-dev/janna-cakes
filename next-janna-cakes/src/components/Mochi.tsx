'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

interface MochiItem {
  id: number;
  src: string;
}

const mochiItems: MochiItem[] = [
  { id: 1, src: '/images/torti/PHOTO-2026-04-10-00-56-35.jpg' },
  { id: 2, src: '/images/torti/PHOTO-2026-04-10-00-56-34.jpg' },
  { id: 3, src: '/images/torti/PHOTO-2026-04-10-00-56-37.jpg' },
  { id: 4, src: '/images/torti/PHOTO-2026-04-10-00-56-40.jpg' },
  { id: 5, src: '/images/torti/PHOTO-2026-04-10-00-56-41.jpg' },
  { id: 6, src: '/images/torti/PHOTO-2026-04-10-00-56-36.jpg' },
  { id: 7, src: '/images/torti/PHOTO-2026-04-10-01-00-39.jpg' },
  { id: 8, src: '/images/torti/PHOTO-2026-04-10-01-00-44.jpg' },
  { id: 9, src: '/images/torti/PHOTO-2026-04-10-00-56-38.jpg' },
];

// Mochi gallery IDs map to gallery item IDs 24–32
const mochiGalleryIds = [24, 25, 26, 27, 28, 29, 30, 31, 32];

export default function Mochi() {
  const { t } = useLanguage();
  const [modalItem, setModalItem] = useState<MochiItem | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalItem(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const getName = (mochiIndex: number) => {
    const galleryId = mochiGalleryIds[mochiIndex];
    return t.galleryItems[galleryId]?.name ?? t.mochi.heading;
  };

  return (
    <section id="mochi" className="mochi-section">
      <div className="container">
        <h2>{t.mochi.heading}</h2>
        <p className="section-subtitle">{t.mochi.subtitle}</p>

        <div className="mochi-grid">
          {mochiItems.map((item, i) => (
            <div key={item.id} className="mochi-item" onClick={() => setModalItem(item)}>
              <Image
                src={item.src}
                alt={getName(i)}
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
              alt={getName(mochiItems.indexOf(modalItem))}
              width={800}
              height={800}
              className="modal-content"
              style={{ objectFit: 'contain' }}
            />
            <p className="modal-caption">{getName(mochiItems.indexOf(modalItem))}</p>
          </div>
        </div>
      )}
    </section>
  );
}
