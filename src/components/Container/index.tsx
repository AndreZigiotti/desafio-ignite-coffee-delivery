import { ReactNode } from "react";
import { ContainerStyle } from "./style";

type Props = {
  children?: ReactNode
}

export function Container({ children }: Props) {
  return (
    <ContainerStyle className="container">
      { children }
    </ContainerStyle>
  )
}