import { render, screen } from '../test-utils'
import { HomePage } from './HomePage'

test('renders home page content', () => {
  render(<HomePage />)
  const content = screen.getByText(/Home page content./i)
  expect(content).toBeInTheDocument()
})
