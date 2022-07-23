import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layout/DefaultLayout"
import { Checkout, Home } from "./pages"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}