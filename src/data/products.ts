import { Product } from '../types';
import roseLipBalmImg from '../assets/rose-lip-balm1.png';
import rosyPinkBlushImg from '../assets/rosy-pink-blush.png';
import floralBodyOilImg from '../assets/floral-body-oil.png';

export const products: Product[] = [
  {
    id: 'prdct1',
    name: 'Floral Lip Balm – Rose Infused',
    price: 150,
    image: roseLipBalmImg,
    description: 'A soft, nourishing balm made from real rose extracts to heal, hydrate, and add a natural glow to your lips.',
    shade: 'Rose',
    finish: 'satin',
    inStock: true,
  },
  {
    id: 'prdct2',
    name: 'Rosy Pink Blush – Rose Petal Based',
    price: 100,
    image: rosyPinkBlushImg,
    description: 'A lightweight, natural blush made from crushed rose petals for a soft, dewy pink tint that flatters every skin tone.',
    shade: 'Rosy Pink',
    finish: 'matte',
    inStock: true,
  },
  {
    id: 'prdct3',
    name: 'Floral Body Oil – Botanical Blend',
    price: 300,
    image: floralBodyOilImg,
    description: 'A soothing, non-greasy body oil made from flower-infused oils to deeply moisturize, soften, and leave your skin naturally radiant.',
    shade: 'Botanical Blend',
    finish: 'glossy',
    inStock: true,
  },
];