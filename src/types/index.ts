export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  shade: string;
  finish: 'matte' | 'glossy' | 'satin';
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export type Page = 'home' | 'about' | 'cart' | 'signin' | 'signup';