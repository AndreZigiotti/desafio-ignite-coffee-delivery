import { PaymentMethods } from "../models";
import { ICartProduct } from "./ICartProduct";

export interface ICheckoutContext {
  products: ICartProduct[]
  subtotal: number
  shippingCost: number
  total: number
  paymentMethod: PaymentMethods
  changePaymentMethod: (method: PaymentMethods) => void
  addProduct: (product: ICartProduct) => void
  removeProduct: (productId: string) => void
  changeProductQuantity: (productId: string, quantity: number) => void
}