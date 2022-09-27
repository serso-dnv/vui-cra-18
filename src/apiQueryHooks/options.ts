import { QueryObserverOptions } from '@tanstack/react-query'

import { timeMinutes } from '../utils'

export const defaultOptions: QueryObserverOptions = {
  cacheTime: timeMinutes(30),
  staleTime: timeMinutes(30),
  retry: 0,
  refetchOnWindowFocus: false
}
