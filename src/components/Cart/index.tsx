import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CheckoutContext } from "../../shared/contexts/CheckoutContext";
import { IconButton } from "../Button";
import { CartContainer } from "./style";

export function Cart() {
  const { products } = useContext(CheckoutContext)
  const totalProducts = products?.length

  return (
    <CartContainer>
      {
        totalProducts > 0 && <span className="indicator">{totalProducts}</span>
      }
      <IconButton light variant="secondary" Icon={<ShoppingCart weight="fill" />} />
    </CartContainer>
  )
}