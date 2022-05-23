import { useQuery } from 'react-query'
import { fetchProfile } from './api'
import { defaultOptions } from './options'

export const useProfile = () =>
  useQuery<any>('profile', fetchProfile, defaultOptions)
