import { ProductModel } from "../models"

export interface ICartProduct {
  product: ProductModel
  quantity: number
}