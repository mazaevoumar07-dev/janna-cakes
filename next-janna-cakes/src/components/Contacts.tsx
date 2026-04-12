export default function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <div className="container">
        <h2>Свяжитесь со мной</h2>
        <p className="section-subtitle">Заказы принимаю проверенными способами</p>

        <div className="contact-methods">
          <div className="contact-card">
            <i className="fab fa-whatsapp"></i>
            <h3>WhatsApp</h3>
            <p>+7 (963) 701-11-79</p>
            <a href="https://wa.me/79637011179" className="btn btn-secondary" target="_blank">
              Написать
            </a>
          </div>

          <div className="contact-card">
            <i className="fab fa-telegram"></i>
            <h3>Telegram</h3>
            <p>+7 (963) 701-11-79</p>
            <a href="https://t.me/+79637011179" className="btn btn-secondary" target="_blank">
              Написать
            </a>
          </div>

          <div className="contact-card">
            <i className="fas fa-phone"></i>
            <h3>Телефон</h3>
            <p>+7 (963) 701-11-79</p>
            <a href="tel:+79637011179" className="btn btn-secondary">
              Звонить
            </a>
          </div>
        </div>

        <h2 style={{ marginTop: '3.5rem' }}>Отзывы</h2>
        <p className="section-subtitle">Читайте отзывы или оставьте свой</p>

        <div className="contact-methods">
          <div className="contact-card">
            <i className="fab fa-instagram"></i>
            <h3>Instagram</h3>
            <p>@janna.cakes</p>
            <a href="https://www.instagram.com/janna.cakes" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              Оставить отзыв
            </a>
          </div>

          <div className="contact-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Яндекс Карты</h3>
            <p>ул. Ш. Хасанова, 147<br />с. Знаменское, Чечня</p>
            <a href="https://yandex.ru/maps/?ll=45.120463%2C43.669701&z=17&pt=45.120463%2C43.669701" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              Оставить отзыв
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
