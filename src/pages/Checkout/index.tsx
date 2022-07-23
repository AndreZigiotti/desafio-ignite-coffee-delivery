import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Container, IconButton, SelectButton } from "../../components";
import { CheckoutContext } from "../../shared/contexts/CheckoutContext";
import { PaymentMethods } from "../../shared/models";
import { AddressForm } from "./AddressForm";
import { CartItem } from "./CartItem";
import { CheckoutContainer, ContentBox } from "./style";

export function Checkout() {
  const { products, paymentMethod, removeProduct, changeProductQuantity, subtotal, shippingCost, total, changePaymentMethod } = useContext(CheckoutContext)
  
  function formatPrice(price: number) {
    return price.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  function handlePaymentMethodChange(method: PaymentMethods) {
    changePaymentMethod(method)
  }

  return (
    <CheckoutContainer>
      <Container>
        <div className="col">
          <h2 className="section-title">Complete seu pedido</h2>
          <ContentBox className="address">
            <header>
              <MapPinLine className="icon" />
              <div>
                <h3 className="box-title">Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>
            <div className="content">
              <AddressForm />
            </div>
          </ContentBox>

          <ContentBox className="payment">
            <header>
              <CurrencyDollar className="icon" />
              <div>
                <h3 className="box-title">Pagamento</h3>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </header>

            <div className="content">
              <div className="payment-methods">
                <SelectButton
                  Icon={<CreditCard />}
                  onClick={() => handlePaymentMethodChange('creditCard')}
                  active={paymentMethod === 'creditCard'}
                >
                  Cartão de crédito
                </SelectButton>

                <SelectButton
                  Icon={<Bank />}
                  onClick={() => handlePaymentMethodChange('debitCard')}
                  active={paymentMethod === 'debitCard'}
                >
                  Cartão de débito
                </SelectButton>

                <SelectButton
                  Icon={<Money />}
                  onClick={() => handlePaymentMethodChange('money')}
                  active={paymentMethod === 'money'}
                >
                  Dinheiro
                </SelectButton>
              </div>
            </div>
          </ContentBox>
        </div>

        <div className="col">
          <h2 className="section-title">Cafés selecionados</h2>
          <ContentBox extraRadius>
            {
              !products.length && (
                <p className="empty-alert">Ops! Parece que seu carrinho está vazio.<br/>Que tal dar conferida em <Link to="/">nossos produtos</Link>?</p>
              )
            }

            {
              products.map(product => (
                <div key={product.product.id}>
                  <CartItem
                    quantity={product.quantity}
                    product={product.product}
                    onQuantityChange={(quantity) => changeProductQuantity(product.product.id, quantity)}
                    onRemove={() => removeProduct(product.product.id)}
                  />
                  <hr />
                </div>
              ))
            }
            <div className="checkout-data">
              {
                !!products.length && (
                  <div className="invoice">
                    <div className="item">
                      <span>Total de itens</span>
                      <span>R$ {formatPrice(subtotal)}</span>
                    </div>
                    <div className="item">
                      <span>Entrega</span>
                      <span>R$ {formatPrice(shippingCost)}</span>
                    </div>
                    <div className="item total">
                      <span>Total</span>
                      <span>R$ {formatPrice(total)}</span>
                    </div>
                  </div>
                )
              }
              
              <Button disabled={!products.length}>Confirmar Pedido</Button>
            </div>
          </ContentBox>
        </div>
      </Container>
    </CheckoutContainer>
  )
}