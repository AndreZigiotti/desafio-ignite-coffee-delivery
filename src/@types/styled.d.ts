import 'styled-components'
import { customTheme } from "../styles/themes/theme"

type ThemeType = typeof customTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}