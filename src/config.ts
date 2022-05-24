export const apiUrl = 'http://localhost:3001/api'

export const appName = 'Demo Application'

export const signInUrl = '/signIn'

export const signOutUrl = '/signOut'

export const mainLinks = [
  { to: '/home', text: 'Home', authRequired: false },
  { to: '/demo', text: 'Demo', authRequired: false },
  { to: '/projects', text: 'Projects', authRequired: true }
]
