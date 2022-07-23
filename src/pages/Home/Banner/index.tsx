import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import BannerImage from '../../../assets/banner-image.svg'
import { Container } from "../../../components";
import { BannerContainer } from "./style";

export function Banner() {
  return (
    <BannerContainer>
      <Container>
        <div className="col">
          <h1 className="section-title">Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

          <ul className="features">
            <li>
              <span className="badge">
                <ShoppingCart weight="fill" />
              </span>
              Compra simples e segura
            </li>

            <li>
              <span className="badge">
                <Package weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </li>

            <li>
              <span className="badge">
                <Timer weight="fill" />
              </span>
              Entrega rápida e rastreada
            </li>

            <li>
              <span className="badge">
                <Coffee weight="fill" />
              </span>
              O café chega fresquinho até você
            </li>
          </ul>
        </div>

        <div className="col">
          <img className="illustration" src={BannerImage} alt="" />
        </div>
      </Container>
    </BannerContainer>
  )
}