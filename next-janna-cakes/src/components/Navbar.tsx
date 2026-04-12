'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/"><h1>janna.cakes</h1></Link>
          <p className="tagline">Авторские торты с любовью</p>
        </div>
        <ul className={`nav-menu ${isActive ? 'active' : ''}`} id="navMenu">
          <li><Link href="/">Главная</Link></li>
          <li><Link href="/gallery">Галерея</Link></li>
          <li><Link href="/about">О мне</Link></li>
          <li><Link href="/contacts">Контакты</Link></li>
        </ul>
        <div className="hamburger" id="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}