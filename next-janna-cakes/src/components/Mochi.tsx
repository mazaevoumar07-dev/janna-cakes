'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface MochiItem {
  id: number;
  src: string;
  alt: string;
}

const mochiItems: MochiItem[] = [
  { id: 1, src: '/images/torti/PHOTO-2026-04-10-00-56-35.jpg', alt: 'Моти' },
  { id: 2, src: '/images/torti/PHOTO-2026-04-10-00-56-34.jpg', alt: 'Моти' },
  { id: 3, src: '/images/torti/PHOTO-2026-04-10-00-56-37.jpg', alt: 'Моти' },
  { id: 4, src: '/images/torti/PHOTO-2026-04-10-00-56-40.jpg', alt: 'Моти' },
  { id: 5, src: '/images/torti/PHOTO-2026-04-10-00-56-41.jpg', alt: 'Моти' },
  { id: 6, src: '/images/torti/PHOTO-2026-04-10-00-56-36.jpg', alt: 'Моти' },
  { id: 7, src: '/images/torti/PHOTO-2026-04-10-01-00-39.jpg', alt: 'Моти' },
  { id: 8, src: '/images/torti/PHOTO-2026-04-10-01-00-44.jpg', alt: 'Моти' },
  { id: 9, src: '/images/torti/PHOTO-2026-04-10-00-56-38.jpg', alt: 'Моти' },
];

export default function Mochi() {
  const [modalItem, setModalItem] = useState<MochiItem | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalItem(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <section id="mochi" className="mochi-section">
      <div className="container">
        <h2>Моти</h2>
        <p className="section-subtitle">Нежные японские десерты ручной работы</p>

        <div className="mochi-grid">
          {mochiItems.map(item => (
            <div key={item.id} className="mochi-item" onClick={() => setModalItem(item)}>
              <Image
                src={item.src}
                alt={item.alt}
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
              alt={modalItem.alt}
              width={800}
              height={800}
              className="modal-content"
              style={{ objectFit: 'contain' }}
            />
            <p className="modal-caption">{modalItem.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
