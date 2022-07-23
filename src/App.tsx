import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { CheckoutContextProvider } from "./shared/contexts/CheckoutContext"
import { GlobalStyles } from "./styles/global"
import { customTheme } from "./styles/themes/theme"

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <div className="App">
          <CheckoutContextProvider>
            <Router />    
          </CheckoutContextProvider>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
