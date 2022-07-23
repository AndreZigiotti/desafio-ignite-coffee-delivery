import { ButtonHTMLAttributes, ReactNode } from "react"
import { ButtonContainer, IconButtonContainer } from "./style"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  Icon?: ReactNode
  light?: boolean
  withBorder?: boolean
}

export function Button({ variant = 'secondary', children, ...props }: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...props}>
      {children}
    </ButtonContainer>
  )
}

export function IconButton({ variant = 'primary', Icon, children, ...props }: ButtonProps) {
  return (
    <IconButtonContainer variant={variant} {...props}>
      { Icon }
      { !!children && (
        <span>{ children }</span>
      ) }
    </IconButtonContainer>
  )
}