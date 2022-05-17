import { H1 } from '@veracity/vui'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { AppHeader, AppMain, AppFooter } from './components'

import { DemoPage, HomePage } from './pages'

export const App = () => (
  <BrowserRouter>
    <AppHeader />
    <AppMain>
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="demo" element={<DemoPage />} />
        <Route path="/" element={<Navigate to="home" replace />} />
        <Route path="*" element={<H1>Page Not Found</H1>} />
      </Routes>
    </AppMain>
    <AppFooter />
  </BrowserRouter>
)

export default App

