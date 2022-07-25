import { useCheckout } from "../../../shared/hooks/useCheckout";
import { useForm } from 'react-hook-form'
import { FormContainer } from "./style";
import { ChangeEvent, useEffect, useState } from "react";
import { zipCodeMask } from "../../../shared/utils/zipCodeMask";
import { isValidZipCode } from "../../../shared/utils/validateZipCode";
import { CEP } from "../../../shared/models";
import { debouceTime } from "../../../shared/utils/debounceTime";

type Props = {
  onValidityChange?: (isValid: boolean) => void
}

export function AddressForm({ onValidityChange }: Props) {
  const { shippingAddress, updateShippingAddress } = useCheckout()
  const { register, reset, formState: { isValid }, getValues } = useForm({
    defaultValues: shippingAddress,
    mode: 'onChange',
  })
  const [cep, setCep] = useState('')

  function formatCep(event: ChangeEvent<HTMLInputElement>) {
    const value = zipCodeMask(event.target.value)
    event.target.value = value
    setCep(value)
  }

  useEffect(() => {
    onValidityChange?.(isValid)
  }, [isValid])

  useEffect(() => {
    const { cancelDebounce } = debouceTime(async () => {
      if(cep && isValidZipCode(cep)) {
        const data = await (await fetch(`https://viacep.com.br/ws/${cep.replace('-', '')}/json/`)).json() as CEP
        
        reset({
          cep,
          address: data.logradouro,
          district: data.bairro,
          city: data.localidade,
          uf: data.uf
        })
      }
    }, 2000)

    return () => cancelDebounce()
  }, [cep])

  return (
    <FormContainer onBlur={() => updateShippingAddress(getValues())}>
      <input
        className="form-control"
        type="text"
        placeholder="CEP"
        {...register('cep', {
          onChange: formatCep,
          required: true,
        })}
      />

      <input 
        className="form-control full-width"
        type="text" 
        placeholder="Rua" 
        {...register('address', {
          required: true
        })}
      />

      <div className="row">
        <input
          className="form-control"
          type="text"
          placeholder="Número"
          {...register('number', {
            required: true
          })}
        />

        <input 
          className="form-control full-width" 
          type="text" 
          placeholder="Complemento" 
          {...register('complement')}
        />
      </div>
      
      <div className="row">
        <input 
          className="form-control" 
          type="text" 
          placeholder="Bairro" 
          {...register('district', {
            required: true
          })}
        />

        <input 
          className="form-control full-width" 
          type="text" 
          placeholder="Cidade" 
          {...register('city', {
            required: true
          })}
        />

        <input 
          className="form-control uf" 
          type="text" 
          placeholder="UF" 
          {...register('uf', {
            required: true
          })}
        />
      </div>
    </FormContainer>
  )
}