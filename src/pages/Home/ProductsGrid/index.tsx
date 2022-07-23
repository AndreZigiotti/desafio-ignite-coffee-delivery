import { useContext } from "react";
import { Card, Container } from "../../../components";
import { CheckoutContext } from "../../../shared/contexts/CheckoutContext";
import { useApiMock } from "../../../shared/hooks";
import { ProductsGridContainer } from "./style";

export function ProductsGrid() {
  const { products } = useApiMock()
  const { addProduct } = useContext(CheckoutContext)

  return (
    <ProductsGridContainer>
      <Container>
        <h2 className="section-title">Nossos cafés</h2>

        <div className="products-grid">
          {
            products.map(product => (
              <Card
                key={product.id}
                title={product.title}
                imageSrc={product.imageSrc}
                description={product.description}
                categories={product.categories}
                price={product.price}
                onAddClick={(quantity) => {
                  console.log('add')
                  addProduct({
                    product: product,
                    quantity
                  })
                }}
              />
            ))
          }
        </div>
      </Container>
    </ProductsGridContainer>
  )
}