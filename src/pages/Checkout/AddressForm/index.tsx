import { FormContainer } from "./style";

export function AddressForm() {
  return (
    <FormContainer action="">
      <input className="form-control" name="cep" type="text" placeholder="CEP" />
      <input className="form-control full-width" name="street" type="text" placeholder="Rua" />

      <div className="row">
        <input className="form-control" name="number" type="text" placeholder="Número" />
        <input className="form-control full-width" name="complement" type="text" placeholder="Complemento" />
      </div>
      
      <div className="row">
        <input className="form-control" name="district" type="text" placeholder="Bairro" />
        <input className="form-control full-width" name="city" type="text" placeholder="Cidade" />
        <input className="form-control uf" name="uf" type="text" placeholder="UF" />
      </div>
    </FormContainer>
  )
}