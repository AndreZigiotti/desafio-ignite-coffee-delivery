import { Container } from "../../components";
import { OrderConfirmationContainer } from "./style";

import Illustration from '../../assets/delivery-illustration.svg'
import { useCheckout } from "../../shared/hooks/useCheckout";
import { useNavigate } from "react-router-dom";
import { PaymentMethods } from "../../shared/models";
import { MapPin } from "phosphor-react";

export function OrderConfirmation() {
  const navigate = useNavigate()
  const { shippingAddress, paymentMethod } = useCheckout()

  const paymentOptions: { [key in PaymentMethods]: string } = {
    creditCard: 'Cartão de Crédito',
    debitCard: 'Débito',
    money: 'Dinheiro'
  }

  if(!shippingAddress.address) {
    navigate('/')
  }

  const { address, city, district, number, uf } = shippingAddress

  return (
    <OrderConfirmationContainer>
      <Container>
        <div className="col">
          <h1>Uhu! Pedido confirmado</h1>
          <p className="message">Agora é só aguardar que logo o café chegará até você</p>

          <div className="box">
            <div className="box-inner">
              <div className="info-item">
                <span className="icon-wrapper primary">
                  <MapPin weight="fill" />
                </span>
                <p>
                  Entrega em <strong>{address}, {number}</strong><br/>
                  {district} - {city}, {uf}
                </p>
              </div>

              <div className="info-item">
                <span className="icon-wrapper secondary">
                  <MapPin weight="fill" />
                </span>
                <p>
                  Previsão de entrega<br/>
                  <strong>20 min - 30 min</strong>
                </p>
              </div>

              <div className="info-item">
                <span className="icon-wrapper secondary dark">
                  <MapPin weight="fill" />
                </span>
                <p>
                  Pagamento na entrega<br/>
                  <strong>{paymentOptions[paymentMethod]}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="illustration-wrapper">
            <img className="illustration" src={Illustration} alt="" />
          </div>
        </div>
      </Container>
    </OrderConfirmationContainer>
  )
}