export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'entrées' | 'plats' | 'desserts' | 'boissons';
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface OrderForm {
  name: string;
  email: string;
  phone: string;
  address: string;
}
