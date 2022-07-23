import { ICartProduct } from "../../interfaces/ICartProduct";
import { ICheckoutState } from "../../interfaces/ICheckoutState";

type Actions = 
  | { type: 'ADD_PRODUCT', payload: { product: ICartProduct } }
  | { type: 'REMOVE_PRODUCT', payload: { productId: string } }
  | { type: 'CHANGE_PRODUCT_QUANTITY', payload: { productId: string, quantity: number } }

export function checkoutReducer(state: ICheckoutState, action: Actions) {
  switch(action.type) {
    case 'ADD_PRODUCT': {
      let newState = {...state}
      const newProduct = action.payload.product

      if(action.payload.product) {
        const productIndex = newState.products.findIndex(prod => prod.product.id === newProduct.product.id)

        if(productIndex > -1) {
          newState.products[productIndex].quantity =+ newProduct.quantity
        } else {
          newState.products.push(newProduct)
        }
      }

      return newState
    }

    case 'CHANGE_PRODUCT_QUANTITY': {
      let newState = {...state}
      const { productId, quantity } = action.payload
      const productIndex = newState.products.findIndex(product => product.product.id === productId)

      if(productIndex > -1) {
        newState.products[productIndex].quantity = quantity
      }

      return newState
    }

    case 'REMOVE_PRODUCT': {
      let newState = {...state}
      const productIdToRemove = action.payload.productId

      const indexToRemove = newState.products.findIndex(prod => prod.product.id === productIdToRemove)
      if(indexToRemove > -1) {
        newState.products.splice(indexToRemove, 1)
      }

      return newState
    }

    default: 
      return state
  }
}