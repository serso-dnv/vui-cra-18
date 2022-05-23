import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { Spinner } from '@veracity/vui'
import { AppHeader, AppMain, AppFooter, AppPage } from './components'

import { DemoPage, HelpPage, HomePage } from './pages'

import { useProfile } from './apiQueryHooks'
import { isLoading } from './utils'

export const App = () => {
  const { data: userProfile, status } = useProfile()
  return (
    <BrowserRouter>
      <AppHeader isLoading={isLoading(status)} userProfile={userProfile} />
      <AppMain>
        {isLoading(status) && !userProfile ? (
          <Spinner mt={4} />
        ) : (
          <Routes>
            <Route path="home" element={<HomePage />} />
            <Route path="demo" element={<DemoPage />} />
            <Route path="help" element={<HelpPage />} />
            <Route path="/" element={<Navigate to="home" replace />} />
            <Route path="*" element={<AppPage title="Page Not Found" />} />
          </Routes>
        )}
      </AppMain>
      <AppFooter />
    </BrowserRouter>
  )
}

export default App

