import { H1 } from '@veracity/vui'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { AppHeader, AppMain, AppFooter } from './components'
import { GuidDemo } from './components/demo'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppHeader />
        <AppMain>
          <Routes>
            <Route path="home" element={<H1>Welcome!</H1>} />
            <Route path="demo" element={<GuidDemo />} />
            <Route path="/" element={<Navigate to="home" replace />} />
            <Route path="*" element={<H1>Page Not Found</H1>} />
          </Routes>
        </AppMain>
        <AppFooter />
      </BrowserRouter>
    </>
  )
}

export default App

