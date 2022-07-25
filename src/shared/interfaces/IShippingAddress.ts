export interface IShippingAddress {
  cep: string
  address: string
  number: string
  complement?: string
  district: string
  city: string
  uf: string
}