'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <p>{t.footer.rights}</p>
        <p>{t.footer.madeWith} <span className="heart">❤️</span> {t.footer.forYou}</p>
      </div>
    </footer>
  );
}
