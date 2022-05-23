import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import { GlobalStyle } from './GlobalStyle'
import { Providers } from './providers/Providers'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <GlobalStyle />
    <Providers>
      <App />
    </Providers>
  </StrictMode>
)
