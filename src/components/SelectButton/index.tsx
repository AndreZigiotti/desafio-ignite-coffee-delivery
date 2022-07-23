import { ButtonHTMLAttributes, ReactNode } from "react"
import { SelectButtonContainer } from "./style"

type SelectButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean
  Icon?: ReactNode
}

export function SelectButton({ active, className, children, Icon, ...props }: SelectButtonProps) {
  return (
    <SelectButtonContainer className={`${className || ''} ${!!active ? 'active' : ''}`} {...props}>
      {Icon}
      <span>
        {children}
      </span>
    </SelectButtonContainer>
  )
}