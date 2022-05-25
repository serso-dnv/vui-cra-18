import { ReactNode } from 'react'

export interface ChildrenProps {
  children?: ReactNode
}

export interface Project {
  id: string
  name: string
  description?: string
}
