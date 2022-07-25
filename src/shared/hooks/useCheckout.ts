import { useContext } from "react";
import { CheckoutContext } from "../contexts/CheckoutContext";

export function useCheckout() {
  return useContext(CheckoutContext)
}