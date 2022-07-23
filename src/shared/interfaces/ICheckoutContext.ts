import { ICartProduct } from "./ICartProduct";

export interface ICheckoutContext {
  products: ICartProduct[]
  subtotal: number
  shippingCost: number
  total: number
  addProduct: (product: ICartProduct) => void
  removeProduct: (productId: string) => void
  changeProductQuantity: (productId: string, quantity: number) => void
}