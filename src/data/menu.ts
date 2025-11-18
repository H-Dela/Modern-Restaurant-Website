import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // Entrées
  {
    id: '1',
    name: 'Soupe à l\'Oignon Gratinée',
    description: 'Soupe traditionnelle française avec fromage gratiné',
    price: 12,
    category: 'entrées',
    image: 'https://images.unsplash.com/photo-1699005575488-49ebcecdc794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBzb3VwJTIwc3RhcnRlcnxlbnwxfHx8fDE3NjI1MjEwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '2',
    name: 'Carpaccio de Saumon',
    description: 'Saumon frais mariné aux agrumes et aneth',
    price: 16,
    category: 'entrées',
    image: 'https://images.unsplash.com/photo-1577004686904-1a4f118acf61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBkaXNoJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjI0OTg1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '3',
    name: 'Salade de Chèvre Chaud',
    description: 'Mélange de salades, fromage de chèvre rôti et miel',
    price: 14,
    category: 'entrées',
    image: 'https://images.unsplash.com/photo-1755811248279-1ab13b7d4384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzYyNDQwMzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  
  // Plats
  {
    id: '4',
    name: 'Filet de Bœuf Rossini',
    description: 'Filet de bœuf tendre avec foie gras et truffe',
    price: 38,
    category: 'plats',
    image: 'https://images.unsplash.com/photo-1712746785126-e9f28b5b3cc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhayUyMGRpbm5lciUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzYyNDM0MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '5',
    name: 'Saumon Grillé aux Herbes',
    description: 'Pavé de saumon grillé, sauce beurre blanc et légumes de saison',
    price: 32,
    category: 'plats',
    image: 'https://images.unsplash.com/photo-1577004686904-1a4f118acf61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBkaXNoJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjI0OTg1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '6',
    name: 'Risotto aux Champignons',
    description: 'Risotto crémeux aux cèpes et parmesan',
    price: 26,
    category: 'plats',
    image: 'https://images.unsplash.com/photo-1627207644206-a2040d60ecad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGNhcmJvbmFyYSUyMGRpc2h8ZW58MXx8fHwxNzYyNTA4Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '7',
    name: 'Magret de Canard',
    description: 'Magret de canard rôti, sauce aux fruits rouges',
    price: 34,
    category: 'plats',
    image: 'https://images.unsplash.com/photo-1712746785126-e9f28b5b3cc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhayUyMGRpbm5lciUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzYyNDM0MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  
  // Desserts
  {
    id: '8',
    name: 'Fondant au Chocolat',
    description: 'Cœur coulant au chocolat noir, glace vanille',
    price: 12,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1496890607984-d27fca8a68ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0JTIwZmFuY3l8ZW58MXx8fHwxNzYyNTIxMDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '9',
    name: 'Tiramisu Maison',
    description: 'Dessert italien traditionnel au mascarpone',
    price: 10,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1714385905983-6f8e06fffae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJhbWlzdSUyMGRlc3NlcnR8ZW58MXx8fHwxNzYyNDg2Njk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '10',
    name: 'Tarte Tatin',
    description: 'Tarte aux pommes caramélisées, crème fraîche',
    price: 11,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1496890607984-d27fca8a68ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0JTIwZmFuY3l8ZW58MXx8fHwxNzYyNTIxMDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  
  // Boissons
  {
    id: '11',
    name: 'Vin Rouge - Bordeaux',
    description: 'Château Margaux, millésime 2018',
    price: 85,
    category: 'boissons',
    image: 'https://images.unsplash.com/photo-1755811248279-1ab13b7d4384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzYyNDQwMzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '12',
    name: 'Champagne Brut',
    description: 'Moët & Chandon Imperial',
    price: 95,
    category: 'boissons',
    image: 'https://images.unsplash.com/photo-1755811248279-1ab13b7d4384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzYyNDQwMzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '13',
    name: 'Eau Minérale',
    description: 'Evian 75cl',
    price: 6,
    category: 'boissons',
    image: 'https://images.unsplash.com/photo-1755811248279-1ab13b7d4384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzYyNDQwMzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];
