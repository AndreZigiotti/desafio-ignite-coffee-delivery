import { Container } from "../Container";
import { HeaderContainer } from "./style";

import Logo from '../../assets/logo.svg'
import { IconButton } from "../Button";
import { MapPin } from "phosphor-react";
import { Link } from "react-router-dom";
import { Cart } from "../Cart";

export function Header() {
  return (
    <HeaderContainer>
      <Container>
        <div className="wrapper">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>

          <div className="actions">
            <IconButton light variant="primary" Icon={<MapPin weight="fill" />}>
              Porto Alegre, RS
            </IconButton>
            <Link to="/checkout" >
              <Cart />
            </Link>
          </div>
        </div>
      </Container>
    </HeaderContainer>
  )
}