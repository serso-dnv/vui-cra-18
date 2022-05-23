import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { useProfile } from './apiQueryHooks'
import { AppFooter, AppHeader, AppMain, AppPage } from './components'
import { DemoPage, HelpPage, HomePage } from './pages'
import { isLoading } from './utils'

export const App = () => {
  const { data: userProfile, status } = useProfile()
  return (
    <BrowserRouter>
      <AppHeader isLoading={isLoading(status)} userProfile={userProfile} />
      <AppMain>
        <Routes>
          <Route element={<HomePage />} path="home" />
          <Route element={<DemoPage />} path="demo" />
          <Route element={<HelpPage />} path="help" />
          <Route element={<Navigate replace to="home" />} path="/" />
          <Route element={<AppPage title="Page Not Found" />} path="*" />
        </Routes>
      </AppMain>
      <AppFooter />
    </BrowserRouter>
  )
}

export default App
