import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { AppHeader, AppMain, AppFooter, AppPage } from './components'

import { DemoPage, HelpPage, HomePage } from './pages'

export const App = () => (
  <BrowserRouter>
    <AppHeader />
    <AppMain>
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="demo" element={<DemoPage />} />
        <Route path="help" element={<HelpPage />} />
        <Route path="/" element={<Navigate to="home" replace />} />
        <Route path="*" element={<AppPage title="Page Not Found" />} />
      </Routes>
    </AppMain>
    <AppFooter />
  </BrowserRouter>
)

export default App

