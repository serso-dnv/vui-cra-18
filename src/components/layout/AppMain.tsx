import { ReactNode } from 'react'
import { v } from '@veracity/vui'
import { Container } from './Container'

interface Props {
  children: ReactNode
}

export const AppMain = ({ children }: Props) => (
  <v.main flex="1">
    <Container>{children}</Container>
  </v.main>
)
