import { Trash } from "phosphor-react";
import { IconButton, QuantitySelector } from "../../../components";
import { ICartProduct } from "../../../shared/interfaces/ICartProduct";
import { CartItemContainer } from "./style";

type Props = Partial<ICartProduct> & {
  onRemove?: () => void
  onQuantityChange?: (quantity: number) => void
}

export function CartItem({ product, quantity, onRemove, onQuantityChange }: Props) {
  const total = product?.price && quantity && product.price * quantity
  const formattedPrice = total?.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  function handleOnRemove() {
    onRemove?.()
  }

  function handleOnChangeQuantity(newQuantity: number) {
    onQuantityChange?.(newQuantity)
  }

  return (
    <CartItemContainer>
      <div className="wrapper">
        <img className="product-image" src={product?.imageSrc} alt="" />

        <div className="content">
          <h3>{product?.title}</h3>
          <div className="controls">
            <QuantitySelector
              value={quantity || 1}
              onChange={handleOnChangeQuantity}
            />

            <IconButton onClick={handleOnRemove} light Icon={<Trash />}>Remover</IconButton>
          </div>
        </div>
      </div>

      {
        !!formattedPrice && (
          <div className="price">R$ {formattedPrice}</div>
        )
      }
    </CartItemContainer>
  )
}