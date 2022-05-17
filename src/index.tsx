import React from 'react'
import ReactDOM from 'react-dom/client'
import { VuiProvider, LinksProvider } from '@veracity/vui'

import { GlobalStyle } from './GlobalStyle'

import { App } from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <VuiProvider>
      <LinksProvider>
        <App />
      </LinksProvider>
    </VuiProvider>
  </React.StrictMode>
)

