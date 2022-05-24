import { useLinks, useLoadLinks } from '@veracity/vui'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { useProfile } from './apiQueryHooks'
import { AppFooter, AppHeader, AppMain, AppPage } from './components'
import { signInUrl, signOutUrl } from './config'
import { DemoPage, HelpPage, HomePage, ProjectsPage } from './pages'
import { isLoading } from './utils'

export const App = () => {
  const { data: userProfile, status } = useProfile()
  useLoadLinks('Prod', !!userProfile)
  const [links] = useLinks()
  return (
    <BrowserRouter>
      <AppHeader
        isLoading={isLoading(status)}
        signInUrl={signInUrl}
        signOutUrl={signOutUrl}
        signUpUrl={`${links.signUp}?return-url=${window.location.origin}${signInUrl}`}
        userProfile={userProfile}
      />
      <AppMain>
        <Routes>
          <Route element={<HomePage />} path="home" />
          <Route element={<DemoPage />} path="demo" />
          <Route element={<ProjectsPage />} path="projects" />
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
