import { Container } from "../Container";
import { HeaderContainer } from "./style";

import Logo from '../../assets/logo.svg'
import { IconButton } from "../Button";
import { MapPin } from "phosphor-react";
import { Link } from "react-router-dom";
import { Cart } from "../Cart";
import { useEffect, useState } from "react";
import { GeolocationResponse } from "../../shared/models";

type Location = {
  city: string
  uf: string
}

export function Header() {
  const [location, setLocation] = useState<Location | undefined>(undefined)

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(async (postition: GeolocationPosition) => {
      const { latitude, longitude } = postition.coords

      const res = await (await fetch(`http://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)).json() as GeolocationResponse

      const uf = res.address["ISO3166-2-lvl4"].split('-')[1]
      const city = res.address.city

      setLocation({ city, uf })
    })
  }, [])

  return (
    <HeaderContainer>
      <Container>
        <div className="wrapper">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>

          <div className="actions">
            {
              !!location && (
                <IconButton light variant="primary" Icon={<MapPin weight="fill" />}>
                  {location.city}, {location.uf}
                </IconButton>
              )
            }
            <Link to="/checkout" >
              <Cart />
            </Link>
          </div>
        </div>
      </Container>
    </HeaderContainer>
  )
}