import { createContext, ReactNode, useEffect, useReducer } from "react";
import { ICartProduct } from "../interfaces/ICartProduct";
import { ICheckoutContext } from "../interfaces/ICheckoutContext";
import { ICheckoutState } from "../interfaces/ICheckoutState";
import { checkoutReducer } from "../reducers/chekout/reducers";

type Props = {
  children?: ReactNode
}

export const CheckoutContext = createContext({} as ICheckoutContext)

export function CheckoutContextProvider({ children }: Props) {
  const [cartState, dispatch] = useReducer<typeof checkoutReducer, ICheckoutState>(
    checkoutReducer,
    {
      products: []
    },
    (arg) => arg
  )

  const isCartEmpty = cartState.products.length === 0
  const cartSubtotal = !isCartEmpty ? calculateSubtotal() : 0
  const shippingCost = 0
  const total = cartSubtotal + shippingCost

  function calculateSubtotal() {
    let subtotal = 0
    cartState.products.map((prod => {
      const total = prod.quantity * prod.product.price
      subtotal += total
    }))
    
    return subtotal
  }

  function addProduct(product: ICartProduct) {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: {
        product
      }
    })
  }

  function removeProduct(productId: string) {
    dispatch({
      type: 'REMOVE_PRODUCT',
      payload: {
        productId
      }
    })
  }

  function changeProductQuantity(productId: string, quantity: number) {
    dispatch({
      type: 'CHANGE_PRODUCT_QUANTITY',
      payload: {
        productId,
        quantity
      }
    })
  }

  useEffect(() => {
    console.log(cartSubtotal)
  }, [cartState])

  return (
    <CheckoutContext.Provider value={{
      products: cartState.products,
      addProduct,
      subtotal: cartSubtotal,
      shippingCost,
      total,
      removeProduct,
      changeProductQuantity
    }}>
      {children}
    </CheckoutContext.Provider>
  )
}