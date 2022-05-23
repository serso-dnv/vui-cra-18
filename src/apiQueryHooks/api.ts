import { isLocalhost } from '../utils'

const baseUrl = isLocalhost() ? 'http://localhost:3001' : ''

export async function fetchProfile() {
  const response = await fetch(`${baseUrl}/api/profile`)
  return response.json()
}
