import { ReactNode } from "react"
import { TagContainer } from "./style"

export type TagProps = {
  variant?: 'primary' | 'secondary'
  light?: boolean
  children?: ReactNode
}

export function Tag({ variant = 'primary', ...props }: TagProps) {
  return (
    <TagContainer variant={variant} {...props} />
  )
}