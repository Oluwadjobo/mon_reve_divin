import { Product } from './types';

export const WHATSAPP_NUMBER = '22967348635';
export const PHONE_NUMBER_1 = '+229 67 34 86 35';
export const PHONE_NUMBER_2 = '+229 62 03 76 72';

export const DEFAULT_PRODUCTS: Product[] = [
  {
    id: 1,
    nom: 'Gâteau d\'Anniversaire',
    categorie: 'Gâteaux',
    image: '/menu/1-gateau-anniversaire.png',
    allergenes: ['Gluten', 'Lait', 'Oeufs'],
    description: 'Célébrez vos moments spéciaux avec nos gâteaux d\'anniversaire personnalisés, créés sur mesure pour enchanter vos papilles.',
    actif: true,
  },
  {
    id: 2,
    nom: 'Gâteau de Mariage',
    categorie: 'Gâteaux',
  image: '/menu/2-gateau-mariage.png',
    allergenes: ['Gluten', 'Lait', 'Oeufs', 'Fruits à coque'],
    description: 'Une pièce montée spectaculaire et élégante pour le plus beau jour de votre vie. Un rêve devenu réalité.',
    actif: true,
  },
  {
    id: 3,
    nom: 'Gâteau de Baptême',
    categorie: 'Gâteaux',
  image: '/menu/3-gateau-bapteme.png',
    allergenes: ['Gluten', 'Lait', 'Oeufs'],
    description: 'Un gâteau pur et délicat pour célébrer une nouvelle arrivée. Douceur et tendresse au rendez-vous.',
    actif: true,
  },
  {
    id: 4,
    nom: 'Gâteau de Communion',
    categorie: 'Gâteaux',
  image: '/menu/4-gateau-communion.png',
    allergenes: ['Gluten', 'Lait', 'Oeufs'],
    description: 'Un délice symbolique pour marquer cette étape importante avec gourmandise et partage.',
    actif: true,
  },
  {
    id: 5,
    nom: 'Petite Pizza',
    categorie: 'Petit four',
  image: '/menu/5-petite-pizza.png',
    allergenes: ['Gluten', 'Lait'],
    description: 'Des bouchées savoureuses et irrésistibles, parfaites pour vos apéritifs et réceptions.',
    actif: true,
  },
  {
    id: 6,
    nom: 'Pack de Petits Fours',
    categorie: 'Petit four',
  image: '/menu/6-pack-petits-fours.png',
    allergenes: ['Gluten', 'Lait', 'Oeufs', 'Soja'],
    description: 'Un assortiment varié de nos meilleures créations salées et sucrées en format mini.',
    actif: true,
  },
  {
    id: 7,
    nom: 'Mini Toast',
    categorie: 'Petit four',
  image: '/menu/7-mini-toast.png',
    allergenes: ['Gluten', 'Poisson', 'Lait'],
    description: 'Des toasts garnis, colorés et délicieux pour impressionner vos invités à tous vos événements.',
    actif: true,
  },
  {
    id: 8,
    nom: 'Crêpes Farcies',
    categorie: 'Crêpes farcie',
  image: '/menu/8-crepes-farcies.png',
    allergenes: ['Gluten', 'Lait', 'Oeufs'],
    description: 'Généreusement garnies selon vos envies, nos crêpes salées sont un véritable régal pour un repas complet.',
    actif: true,
  }
];