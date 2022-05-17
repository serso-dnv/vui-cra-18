const apiUrl = 'http://localhost:3001/api'

const appName = 'Demo Application'

const mainLinks = [
  { to: '/home', text: 'Home' },
  { to: '/demo', text: 'Demo' }
]

export const useConfig = () => {
  return { apiUrl, appName, mainLinks }
}
