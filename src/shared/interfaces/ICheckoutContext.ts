import { PaymentMethods } from "../models";
import { ICartProduct } from "./ICartProduct";
import { IShippingAddress } from "./IShippingAddress";

export interface ICheckoutContext {
  products: ICartProduct[]
  subtotal: number
  shippingCost: number
  total: number
  paymentMethod: PaymentMethods
  shippingAddress: IShippingAddress
  confirmOrder: () => void
  updateShippingAddress: (address: IShippingAddress) => void
  changePaymentMethod: (method: PaymentMethods) => void
  addProduct: (product: ICartProduct) => void
  removeProduct: (productId: string) => void
  changeProductQuantity: (productId: string, quantity: number) => void
}