const apiUrl = 'http://localhost:3001/api'

const appName = 'Demo Application'

const mainLinks = [
  { to: '/home', text: 'Home', authRequired: false },
  { to: '/demo', text: 'Demo', authRequired: false },
  { to: '/authenticated', text: 'Authenticated', authRequired: true }
]

export const useConfig = () => {
  return { apiUrl, appName, mainLinks }
}
