export type GeolocationResponse = {
  address: {
    "ISO3166-2-lvl4": string
    city: string
    city_district: string
    country: string
    country_code: string
    county: string
    municipality: string
    postcode: string
    quarter: string
    region: string
    road: string
    state: string
    state_district: string
    suburb: string
  },
  boundingbox: string[]
  display_name: string
  lat: string
  licence: string
  lon: string
  osm_id: number
  osm_type: string
  place_id: number
}