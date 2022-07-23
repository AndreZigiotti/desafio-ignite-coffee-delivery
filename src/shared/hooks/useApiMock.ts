import { ProductModel } from "../models";
import TradicionalImage from '../../assets/products/coffee-americano.svg'
import ArabeImage from '../../assets/products/coffee-arabe.svg'
import ComLeiteImage from '../../assets/products/coffee-cafe-com-leite.svg'
import CafeGeladoImage from '../../assets/products/coffee-cafe-gelado.svg'
import CapuccinoImage from '../../assets/products/coffee-capuccino.svg'
import ChocolateQuenteImage from '../../assets/products/coffee-chocolate-quente.svg'
import CubanoImage from '../../assets/products/coffee-cubano.svg'
import ExpressoCremosoImage from '../../assets/products/coffee-expresso-cremoso.svg'
import ExpressoImage from '../../assets/products/coffee-expresso.svg'
import HavaianoImage from '../../assets/products/coffee-havaiano.svg'
import IrlandesImage from '../../assets/products/coffee-irlandes.svg'
import LatteImage from '../../assets/products/coffee-latte.svg'
import MacchiatoImage from '../../assets/products/coffee-macchiato.svg'
import MochaccinoImage from '../../assets/products/coffee-mochaccino.svg'

const products: ProductModel[] = [
  {
    id: Math.random().toString(36).substring(2, 9),
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90,
    categories: ['tradicional'],
    imageSrc: ExpressoImage
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90,
    categories: ['tradicional'],
    imageSrc: TradicionalImage
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
    categories: ['tradicional'],
    imageSrc: ExpressoCremosoImage
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90,
    categories: ['tradicional', 'gelado'],
    imageSrc: CafeGeladoImage
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90,
    categories: ['tradicional', 'com leite'],
    imageSrc: ComLeiteImage
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
    categories: ['tradicional', 'com leite'],
    imageSrc: LatteImage
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90,
    categories: ['tradicional', 'com leite'],
    imageSrc: CapuccinoImage
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90,
    categories: ['tradicional', 'com leite'],
    imageSrc: MacchiatoImage
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90,
    categories: ['tradicional', 'com leite'],
    imageSrc: MochaccinoImage
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90,
    categories: ['especial', 'com leite'],
    imageSrc: ChocolateQuenteImage
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90,
    categories: ['especial', 'alcoólico', 'gelado'],
    imageSrc: CubanoImage
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
    categories: ['especial'],
    imageSrc: HavaianoImage
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
    categories: ['especial'],
    imageSrc: ArabeImage
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90,
    categories: ['especial', 'alcoólico'],
    imageSrc: IrlandesImage
  },
]

export function useApiMock() {
  return { products }
}