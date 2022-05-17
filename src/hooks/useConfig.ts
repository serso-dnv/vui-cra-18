const appName = 'Demo Application'

const mainLinks = [
  { to: '/home', text: 'Home' },
  { to: '/demo', text: 'Demo' }
]

export const useConfig = () => {
  return { appName, mainLinks }
}
