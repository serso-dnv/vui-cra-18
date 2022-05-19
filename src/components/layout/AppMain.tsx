import { v } from '@veracity/vui'
import { Container } from './Container'
import { ChildrenProps } from '../../types'

export const AppMain = ({ children }: ChildrenProps) => (
  <v.main flex="1">
    <Container>{children}</Container>
  </v.main>
)
