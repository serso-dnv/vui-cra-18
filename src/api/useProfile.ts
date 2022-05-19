import { useQuery } from 'react-query'
import { fetchProfile } from './api'
import { timeMinutes } from '../utils'

export const useProfile = () =>
  useQuery<any>('profile', fetchProfile, {
    cacheTime: timeMinutes(30),
    staleTime: timeMinutes(30)
  })
