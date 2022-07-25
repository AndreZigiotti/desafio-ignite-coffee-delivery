export function isValidZipCode(zipCode: string) {
  return zipCode.match(/^\d{5}-\d{3}?$/)
}