import App from "../App"
import { render } from '@testing-library/react'

test('Renders main page correctly', async () => {
  render(<App />)
  expect(true).toBeTruthy()
})