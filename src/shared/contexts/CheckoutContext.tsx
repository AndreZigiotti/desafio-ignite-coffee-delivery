import { ShoppingCart } from "phosphor-react";
import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { toast } from "react-toastify";
import { ICartProduct } from "../interfaces/ICartProduct";
import { ICheckoutContext } from "../interfaces/ICheckoutContext";
import { ICheckoutState } from "../interfaces/ICheckoutState";
import { PaymentMethods } from "../models";
import { checkoutReducer } from "../reducers/chekout/reducers";

type Props = {
  children?: ReactNode
}

export const CheckoutContext = createContext({} as ICheckoutContext)

export function CheckoutContextProvider({ children }: Props) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethods>('creditCard')
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
    try {
      dispatch({
        type: 'ADD_PRODUCT',
        payload: {
          product
        }
      })

      toast.success('Produto adicionado ao carrinho.', {
        icon: () => <ShoppingCart weight="fill" />
      })
    } catch (err) {
      toast.error('Não foi possível adicionar o produto ao carrinho.')
    }
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

  function changePaymentMethod(method: PaymentMethods) {
    if(method !== paymentMethod) setPaymentMethod(method)
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
      changePaymentMethod,
      paymentMethod,
      removeProduct,
      changeProductQuantity
    }}>
      {children}
    </CheckoutContext.Provider>
  )
}