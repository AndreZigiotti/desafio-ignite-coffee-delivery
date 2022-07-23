import { Banner } from "./Banner";
import { ProductsGrid } from "./ProductsGrid";
import { HomeContainer } from "./style";

export function Home() {

  return (
    <HomeContainer>
      <Banner />
      <ProductsGrid />
    </HomeContainer>
  )
}