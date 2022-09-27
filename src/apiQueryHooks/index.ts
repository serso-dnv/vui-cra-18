import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useToast } from '@veracity/vui'

import { Project } from '../types'
import { del, get, isLocalhost, post } from '../utils'

const baseUrl = isLocalhost() ? 'http://localhost:3001' : ''

import { defaultOptions } from './options'

export const useReadProfile = () => useQuery<any>(['profile'], () => get(`${baseUrl}/api/profile`), defaultOptions)

export const useReadProjects = () => useQuery<any>(['projects'], () => get(`${baseUrl}/api/projects`))
export const useReadProject = (id: string) => useQuery<any>(['project'], () => get(`${baseUrl}/api/projects/${id}`))

export const useCreateProjectMutation = () => {
  const queryClient = useQueryClient()
  const { showSuccess, showError } = useToast()
  return useMutation((payload: Project) => post(`${baseUrl}/api/projects`, payload), {
    onSuccess: () => {
      showSuccess('Project added.')
      queryClient.invalidateQueries(['projects'])
    },
    onError: () => showError('An error has occured.')
  })
}
export const useDeleteProjectMutation = () => {
  const queryClient = useQueryClient()
  const { showSuccess, showError } = useToast()
  return useMutation((id: string) => del(`${baseUrl}/api/projects/${id}`), {
    onSuccess: () => {
      showSuccess('Project deleted.')
      queryClient.invalidateQueries(['projects'])
    },
    onError: () => showError('An error has occured.')
  })
}
