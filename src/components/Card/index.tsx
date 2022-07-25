import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { ProductModel } from "../../shared/models";
import { IconButton } from "../Button";
import { QuantitySelector } from "../QuantitySelector";
import { Tag } from "../Tag";
import { CardContainer } from "./style";

type Props = Partial<ProductModel> & {
  onAddClick?: (quantity: number) => void
}

export function Card({ imageSrc, title, categories, description, price, onAddClick }: Props) {
  const [quantity, setQuantity] = useState(1)
  const formattedPrice = price?.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  function handleAddClick() {
    onAddClick?.(quantity)
  }

  return (
    <CardContainer>
      {
        !!imageSrc && (
          <header>
            <img src={imageSrc} alt="" />
          </header>
        )
      }

      {
        !!categories && categories?.length > 0 && (
          <div className="categories">
            {
              categories?.map(category => (
                <Tag variant="secondary" light key={`${category}-${Math.random().toString(36)}`}>
                  {category}
                </Tag>
              ))
            }
          </div>
        )
      }

      {
        !!title && <h3 className="product-title">{title}</h3>
      }
      
      {
        !!description && <p className="description">{description}</p>
      }

      <footer>
        {
          !!formattedPrice && (
            <div className="price">
              <span>R$</span>
              <span>{formattedPrice}</span>
            </div>
          )
        }

        <div className="controls">
          <QuantitySelector value={quantity} onChange={(quantity) => setQuantity(quantity)} />
          <IconButton variant="primary" Icon={<ShoppingCart weight="fill"/>} onClick={handleAddClick} />
        </div>
      </footer>
    </CardContainer>
  )
}