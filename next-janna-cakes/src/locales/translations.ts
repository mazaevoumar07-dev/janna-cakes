export type Lang = 'ru' | 'en' | 'fr';

export type FilterKey = 'all' | 'cakes' | 'bento' | 'mochi';

export interface GalleryItemTranslation {
  name: string;
  description: string;
}

export interface Translation {
  navbar: {
    tagline: string;
    home: string;
    gallery: string;
    about: string;
    contacts: string;
  };
  hero: {
    heading: string;
    subtext: string;
    cta: string;
  };
  categories: {
    heading: string;
    subtitle: string;
    viewLink: string;
    items: { title: string; description: string }[];
  };
  gallery: {
    heading: string;
    subtitle: string;
    filters: { key: FilterKey; label: string }[];
  };
  galleryItems: Record<number, GalleryItemTranslation>;
  about: {
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    list: string[];
  };
  contacts: {
    heading: string;
    subtitle: string;
    write: string;
    call: string;
    reviewsHeading: string;
    reviewsSubtitle: string;
    leaveReview: string;
  };
  mochi: {
    heading: string;
    subtitle: string;
  };
  footer: {
    rights: string;
    madeWith: string;
    forYou: string;
  };
}

const translations: Record<Lang, Translation> = {
  ru: {
    navbar: {
      tagline: 'Авторские торты с любовью',
      home: 'Главная',
      gallery: 'Галерея',
      about: 'О мне',
      contacts: 'Контакты',
    },
    hero: {
      heading: 'Каждый торт — произведение искусства',
      subtext: 'Индивидуальные десерты для ваших особых моментов',
      cta: 'Сделать заказ',
    },
    categories: {
      heading: 'Наши сладости',
      subtitle: 'Выберите что-то особенное для вашего момента',
      viewLink: 'Смотреть →',
      items: [
        { title: 'Торты',  description: 'Авторские торты на любой праздник — свадьбы, дни рождения, юбилеи' },
        { title: 'Бенто',  description: 'Маленькие торты-сюрпризы с нежными посланиями для близких' },
        { title: 'Моти',   description: 'Японские десерты ручной работы — нежное тесто с кремовой начинкой' },
      ],
    },
    gallery: {
      heading: 'Наши работы',
      subtitle: 'Каждый торт создаётся с любовью и вниманием к деталям',
      filters: [
        { key: 'all',   label: 'Все' },
        { key: 'cakes', label: 'Торты' },
        { key: 'bento', label: 'Бенто' },
        { key: 'mochi', label: 'Моти' },
      ],
    },
    galleryItems: {
      1:  { name: 'Шоколадный торт',      description: 'Бисквит на бельгийском шоколаде, ганаш, шоколадный крем' },
      2:  { name: 'Ванильный торт',        description: 'Нежный ванильный бисквит, малиновое конфи, сырный крем' },
      3:  { name: 'Клубничный торт',       description: 'Ванильный бисквит, свежая клубника, лёгкий сливочный крем' },
      4:  { name: 'Медовик',               description: 'Медовые коржи, карамельный крем, грецкий орех' },
      5:  { name: 'Красный бархат',        description: 'Классический красный бархат, творожный крем-чиз, ягоды' },
      6:  { name: 'Фисташковый торт',      description: 'Фисташковый бисквит, клубничное конфи, фисташковый крем' },
      13: { name: 'Морковный торт',        description: 'Морковный бисквит со специями, апельсиновый крем-чиз' },
      14: { name: 'Праздничный торт',      description: 'Ванильный бисквит, маскарпоне, свежие ягоды' },
      15: { name: 'Шоколадно-вишнёвый',   description: 'Шоколадный бисквит, вишнёвое конфи, ганаш из горького шоколада' },
      16: { name: 'Карамельный торт',      description: 'Бисквит с карамелью, солёная карамель, пралине из миндаля' },
      17: { name: 'Лимонный торт',         description: 'Лимонный бисквит, лимонный курд, лёгкий меренговый крем' },
      18: { name: 'Малиновый торт',        description: 'Ванильный бисквит, малиновое конфи, белый шоколад' },
      19: { name: 'Торт «Эстерхази»',     description: 'Миндальные коржи, ореховый пралине, ванильный крем' },
      20: { name: 'Черничный торт',        description: 'Бисквит с черникой, черничное конфи, сливочный крем' },
      21: { name: 'Манговый торт',         description: 'Кокосовый бисквит, манговое пюре, маракуйя' },
      22: { name: 'Торт «Наполеон»',      description: 'Хрустящие слоёные коржи, нежный заварной крем' },
      7:  { name: 'Бенто «Нежность»',     description: 'Ванильный бисквит, сырный крем, цветочный декор' },
      8:  { name: 'Бенто «Клубника»',     description: 'Клубничный бисквит, свежая клубника, розовый крем' },
      9:  { name: 'Бенто «Шоколад»',      description: 'Шоколадный бисквит, бельгийский ганаш, шоколадный декор' },
      10: { name: 'Бенто «С любовью»',    description: 'Ванильный крем, малина, персонализированная надпись' },
      11: { name: 'Бенто «Матча»',        description: 'Бисквит с чаем матча, белый шоколад, ягоды' },
      12: { name: 'Бенто «Карамель»',     description: 'Карамельный бисквит, солёная карамель, хрустящее пралине' },
      23: { name: 'Бенто «Праздник»',     description: 'Ванильный бисквит, сырный крем, яркий праздничный декор' },
      24: { name: 'Моти «Клубника»',      description: 'Рисовое тесто моти, клубничный крем, свежая ягода внутри' },
      25: { name: 'Моти «Манго»',         description: 'Рисовое тесто моти, манговое пюре, сливочный крем' },
      26: { name: 'Моти «Матча»',         description: 'Тесто с зелёным чаем матча, ванильный крем, орешки' },
      27: { name: 'Моти «Шоколад»',       description: 'Шоколадное тесто моти, трюфельный ганаш, какао' },
      28: { name: 'Моти «Черника»',       description: 'Рисовое тесто, черничный крем, ягоды черники' },
      29: { name: 'Моти «Малина»',        description: 'Нежное тесто моти, малиновый крем, малиновое конфи' },
      30: { name: 'Моти «Ваниль»',        description: 'Классическое тесто моти, ванильный крем, белый шоколад' },
      31: { name: 'Моти «Карамель»',      description: 'Рисовое тесто моти, карамельный крем, кусочки ириса' },
      32: { name: 'Моти «Фисташка»',      description: 'Тесто с фисташкой, фисташковый крем, дроблёные орехи' },
    },
    about: {
      heading: 'О себе',
      p1: 'Привет! Я — Жанна, профессиональный кондитер со страстью к созданию уникальных тортов.',
      p2: 'Каждый заказ — это творческий процесс, в котором я воплощаю ваши мечты в сладкий шедевр. Я использую только качественные ингредиенты и современные техники украшения.',
      p3: 'Специалист в создании:',
      list: ['Свадебные торты', 'Торты для дня рождения', 'Корпоративные угощения', 'Эксклюзивные десерты'],
    },
    contacts: {
      heading: 'Свяжитесь со мной',
      subtitle: 'Заказы принимаю проверенными способами',
      write: 'Написать',
      call: 'Звонить',
      reviewsHeading: 'Отзывы',
      reviewsSubtitle: 'Читайте отзывы или оставьте свой',
      leaveReview: 'Оставить отзыв',
    },
    mochi: {
      heading: 'Моти',
      subtitle: 'Нежные японские десерты ручной работы',
    },
    footer: {
      rights: '© 2024 janna.cakes. Все права защищены.',
      madeWith: 'Сделано с',
      forYou: 'для вас',
    },
  },

  en: {
    navbar: {
      tagline: 'Artisan cakes with love',
      home: 'Home',
      gallery: 'Gallery',
      about: 'About',
      contacts: 'Contact',
    },
    hero: {
      heading: 'Every cake is a work of art',
      subtext: 'Custom desserts for your most special moments',
      cta: 'Place an order',
    },
    categories: {
      heading: 'Our Sweets',
      subtitle: 'Choose something special for your moment',
      viewLink: 'View →',
      items: [
        { title: 'Cakes',  description: 'Custom cakes for any celebration — weddings, birthdays, anniversaries' },
        { title: 'Bento',  description: 'Small surprise cakes with sweet messages for your loved ones' },
        { title: 'Mochi',  description: 'Handmade Japanese desserts — soft dough with creamy filling' },
      ],
    },
    gallery: {
      heading: 'Our Creations',
      subtitle: 'Every cake is crafted with love and attention to detail',
      filters: [
        { key: 'all',   label: 'All' },
        { key: 'cakes', label: 'Cakes' },
        { key: 'bento', label: 'Bento' },
        { key: 'mochi', label: 'Mochi' },
      ],
    },
    galleryItems: {
      1:  { name: 'Chocolate Cake',        description: 'Belgian chocolate sponge, ganache, chocolate cream' },
      2:  { name: 'Vanilla Cake',          description: 'Delicate vanilla sponge, raspberry coulis, cream cheese' },
      3:  { name: 'Strawberry Cake',       description: 'Vanilla sponge, fresh strawberries, light whipped cream' },
      4:  { name: 'Honey Cake',            description: 'Honey layers, caramel cream, walnuts' },
      5:  { name: 'Red Velvet',            description: 'Classic red velvet, cream cheese frosting, berries' },
      6:  { name: 'Pistachio Cake',        description: 'Pistachio sponge, strawberry coulis, pistachio cream' },
      13: { name: 'Carrot Cake',           description: 'Spiced carrot sponge, orange cream cheese frosting' },
      14: { name: 'Celebration Cake',      description: 'Vanilla sponge, mascarpone, fresh berries' },
      15: { name: 'Chocolate Cherry',      description: 'Chocolate sponge, cherry coulis, dark chocolate ganache' },
      16: { name: 'Caramel Cake',          description: 'Caramel sponge, salted caramel, almond praline' },
      17: { name: 'Lemon Cake',            description: 'Lemon sponge, lemon curd, light meringue cream' },
      18: { name: 'Raspberry Cake',        description: 'Vanilla sponge, raspberry coulis, white chocolate' },
      19: { name: 'Esterhazy Cake',        description: 'Almond meringue layers, hazelnut praline, vanilla cream' },
      20: { name: 'Blueberry Cake',        description: 'Blueberry sponge, blueberry coulis, whipped cream' },
      21: { name: 'Mango Cake',            description: 'Coconut sponge, mango purée, passion fruit' },
      22: { name: 'Napoleon Cake',         description: 'Crispy puff pastry layers, delicate custard cream' },
      7:  { name: 'Bento "Tenderness"',    description: 'Vanilla sponge, cream cheese, floral decoration' },
      8:  { name: 'Bento "Strawberry"',    description: 'Strawberry sponge, fresh strawberries, pink cream' },
      9:  { name: 'Bento "Chocolate"',     description: 'Chocolate sponge, Belgian ganache, chocolate decor' },
      10: { name: 'Bento "With Love"',     description: 'Vanilla cream, raspberries, personalised message' },
      11: { name: 'Bento "Matcha"',        description: 'Matcha green tea sponge, white chocolate, berries' },
      12: { name: 'Bento "Caramel"',       description: 'Caramel sponge, salted caramel, crunchy praline' },
      23: { name: 'Bento "Celebration"',   description: 'Vanilla sponge, cream cheese, vibrant festive decor' },
      24: { name: 'Mochi "Strawberry"',    description: 'Rice mochi dough, strawberry cream, fresh berry inside' },
      25: { name: 'Mochi "Mango"',         description: 'Rice mochi dough, mango purée, whipped cream' },
      26: { name: 'Mochi "Matcha"',        description: 'Matcha-infused dough, vanilla cream, crushed nuts' },
      27: { name: 'Mochi "Chocolate"',     description: 'Chocolate mochi dough, truffle ganache, cocoa' },
      28: { name: 'Mochi "Blueberry"',     description: 'Rice dough, blueberry cream, fresh blueberries' },
      29: { name: 'Mochi "Raspberry"',     description: 'Delicate mochi dough, raspberry cream, raspberry coulis' },
      30: { name: 'Mochi "Vanilla"',       description: 'Classic mochi dough, vanilla cream, white chocolate' },
      31: { name: 'Mochi "Caramel"',       description: 'Rice mochi dough, caramel cream, toffee pieces' },
      32: { name: 'Mochi "Pistachio"',     description: 'Pistachio dough, pistachio cream, crushed pistachios' },
    },
    about: {
      heading: 'About me',
      p1: 'Hi! I\'m Zhanna, a professional pastry chef with a passion for creating unique cakes.',
      p2: 'Every order is a creative process where I turn your dreams into a sweet masterpiece. I use only high-quality ingredients and modern decorating techniques.',
      p3: 'Specialising in:',
      list: ['Wedding cakes', 'Birthday cakes', 'Corporate treats', 'Exclusive desserts'],
    },
    contacts: {
      heading: 'Contact me',
      subtitle: 'I accept orders through trusted channels',
      write: 'Message',
      call: 'Call',
      reviewsHeading: 'Reviews',
      reviewsSubtitle: 'Read reviews or leave yours',
      leaveReview: 'Leave a review',
    },
    mochi: {
      heading: 'Mochi',
      subtitle: 'Delicate handmade Japanese desserts',
    },
    footer: {
      rights: '© 2024 janna.cakes. All rights reserved.',
      madeWith: 'Made with',
      forYou: 'for you',
    },
  },

  fr: {
    navbar: {
      tagline: 'Gâteaux artisanaux avec amour',
      home: 'Accueil',
      gallery: 'Galerie',
      about: 'À propos',
      contacts: 'Contact',
    },
    hero: {
      heading: "Chaque gâteau est une œuvre d'art",
      subtext: 'Desserts personnalisés pour vos moments les plus spéciaux',
      cta: 'Passer une commande',
    },
    categories: {
      heading: 'Nos Douceurs',
      subtitle: 'Choisissez quelque chose de spécial pour votre moment',
      viewLink: 'Voir →',
      items: [
        { title: 'Gâteaux', description: 'Gâteaux sur mesure pour toutes les célébrations — mariages, anniversaires, jubilés' },
        { title: 'Bento',   description: 'Petits gâteaux surprise avec de tendres messages pour vos proches' },
        { title: 'Mochi',   description: 'Desserts japonais faits main — pâte moelleuse avec garniture crémeuse' },
      ],
    },
    gallery: {
      heading: 'Nos Créations',
      subtitle: 'Chaque gâteau est créé avec amour et souci du détail',
      filters: [
        { key: 'all',   label: 'Tout' },
        { key: 'cakes', label: 'Gâteaux' },
        { key: 'bento', label: 'Bento' },
        { key: 'mochi', label: 'Mochi' },
      ],
    },
    galleryItems: {
      1:  { name: 'Gâteau au Chocolat',       description: 'Génoise au chocolat belge, ganache, crème chocolatée' },
      2:  { name: 'Gâteau Vanille',            description: 'Génoise vanille délicate, coulis de framboise, crème fraîche' },
      3:  { name: 'Gâteau aux Fraises',        description: 'Génoise vanille, fraises fraîches, crème chantilly légère' },
      4:  { name: 'Gâteau au Miel',            description: 'Couches de miel, crème caramel, noix de Grenoble' },
      5:  { name: 'Red Velvet',                description: 'Red velvet classique, glaçage cream cheese, baies' },
      6:  { name: 'Gâteau Pistache',           description: 'Génoise pistache, coulis de fraise, crème pistache' },
      13: { name: 'Gâteau Carotte',            description: 'Génoise carotte épicée, glaçage cream cheese à l\'orange' },
      14: { name: 'Gâteau de Fête',            description: 'Génoise vanille, mascarpone, baies fraîches' },
      15: { name: 'Chocolat Cerise',           description: 'Génoise chocolat, coulis de cerise, ganache chocolat noir' },
      16: { name: 'Gâteau Caramel',            description: 'Génoise caramel, caramel salé, praline d\'amandes' },
      17: { name: 'Gâteau Citron',             description: 'Génoise citron, curd citron, crème meringuée légère' },
      18: { name: 'Gâteau Framboise',          description: 'Génoise vanille, coulis de framboise, chocolat blanc' },
      19: { name: 'Gâteau Esterhazy',          description: 'Couches de meringue amande, praline noisette, crème vanille' },
      20: { name: 'Gâteau Myrtille',           description: 'Génoise myrtille, coulis de myrtille, crème fouettée' },
      21: { name: 'Gâteau Mangue',             description: 'Génoise coco, purée de mangue, fruit de la passion' },
      22: { name: 'Gâteau Napoléon',           description: 'Feuilletage croustillant, crème pâtissière délicate' },
      7:  { name: 'Bento « Tendresse »',       description: 'Génoise vanille, crème fraîche, décor floral' },
      8:  { name: 'Bento « Fraise »',          description: 'Génoise fraise, fraises fraîches, crème rose' },
      9:  { name: 'Bento « Chocolat »',        description: 'Génoise chocolat, ganache belge, décoration chocolat' },
      10: { name: 'Bento « Avec Amour »',      description: 'Crème vanille, framboises, message personnalisé' },
      11: { name: 'Bento « Matcha »',          description: 'Génoise thé vert matcha, chocolat blanc, baies' },
      12: { name: 'Bento « Caramel »',         description: 'Génoise caramel, caramel salé, praline croustillant' },
      23: { name: 'Bento « Fête »',            description: 'Génoise vanille, crème fraîche, décor festif coloré' },
      24: { name: 'Mochi « Fraise »',          description: 'Pâte mochi riz, crème fraise, baie fraîche à l\'intérieur' },
      25: { name: 'Mochi « Mangue »',          description: 'Pâte mochi riz, purée de mangue, crème fouettée' },
      26: { name: 'Mochi « Matcha »',          description: 'Pâte infusée au matcha, crème vanille, noix concassées' },
      27: { name: 'Mochi « Chocolat »',        description: 'Pâte mochi chocolat, ganache truffe, cacao' },
      28: { name: 'Mochi « Myrtille »',        description: 'Pâte riz, crème myrtille, myrtilles fraîches' },
      29: { name: 'Mochi « Framboise »',       description: 'Pâte mochi délicate, crème framboise, coulis framboise' },
      30: { name: 'Mochi « Vanille »',         description: 'Pâte mochi classique, crème vanille, chocolat blanc' },
      31: { name: 'Mochi « Caramel »',         description: 'Pâte mochi riz, crème caramel, éclats de toffee' },
      32: { name: 'Mochi « Pistache »',        description: 'Pâte pistache, crème pistache, pistaches concassées' },
    },
    about: {
      heading: 'À propos de moi',
      p1: 'Bonjour ! Je suis Zhanna, pâtissière professionnelle passionnée par la création de gâteaux uniques.',
      p2: "Chaque commande est un processus créatif où je transforme vos rêves en chef-d'œuvre sucré. J'utilise uniquement des ingrédients de qualité et des techniques de décoration modernes.",
      p3: 'Spécialisée dans :',
      list: ["Gâteaux de mariage", "Gâteaux d'anniversaire", "Traités d'entreprise", 'Desserts exclusifs'],
    },
    contacts: {
      heading: 'Contactez-moi',
      subtitle: 'Je reçois les commandes par des canaux fiables',
      write: 'Écrire',
      call: 'Appeler',
      reviewsHeading: 'Avis',
      reviewsSubtitle: 'Lisez les avis ou laissez le vôtre',
      leaveReview: 'Laisser un avis',
    },
    mochi: {
      heading: 'Mochi',
      subtitle: 'Délicats desserts japonais faits main',
    },
    footer: {
      rights: '© 2024 janna.cakes. Tous droits réservés.',
      madeWith: 'Fait avec',
      forYou: 'pour vous',
    },
  },
};

export default translations;
