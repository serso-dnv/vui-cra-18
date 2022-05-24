import { useMutation, useQuery, useQueryClient } from 'react-query'

import { get, isLocalhost, post } from '../utils'

const baseUrl = isLocalhost() ? 'http://localhost:3001' : ''

import { defaultOptions } from './options'

export const useProfile = () => useQuery<any>('profile', () => get(`${baseUrl}/api/profile`), defaultOptions)

export const useProjects = () => useQuery<any>('projects', () => get(`${baseUrl}/api/projects`))

export const useProjectMutation = () => {
  const queryClient = useQueryClient()

  return useMutation((payload: any) => post(`${baseUrl}/api/projects`, payload), {
    onSuccess: () => queryClient.invalidateQueries(['projects'])
  })
}
