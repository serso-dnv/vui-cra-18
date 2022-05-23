import { timeMinutes } from '../utils'

export const defaultOptions = {
  cacheTime: timeMinutes(30),
  staleTime: timeMinutes(30),
  retry: 0
}
