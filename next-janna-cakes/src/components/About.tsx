import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>О себе</h2>
            <p>Привет! Я - Жанна, профессиональный кондитер со страстью к созданию уникальных тортов.</p>
            <p>Каждый заказ - это творческий процесс, в котором я воплощаю ваши мечты в сладкий шедевр. 
            Я использую только качественные ингредиенты и современные техники украшения.</p>
            <p>Специалист в создании:</p>
            <ul className="about-list">
              <li>Свадебные торты</li>
              <li>Торты для дня рождения</li>
              <li>Корпоративные угощения</li>
              <li>Эксклюзивные десерты</li>
            </ul>
          </div>
          <div className="about-image">
            <Image src="/images/zhanna.jpg" alt="Жанна" width={300} height={300} style={{ borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}