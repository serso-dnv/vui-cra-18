import React from 'react'
import ReactDOM from 'react-dom/client'
import { VuiProvider, LinksProvider } from '@veracity/vui'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <VuiProvider>
      <LinksProvider>
        <App />
      </LinksProvider>
    </VuiProvider>
  </React.StrictMode>
)

