import { v } from '@veracity/vui'

import { ChildrenProps } from '../../types'
import { Container } from './Container'

export const AppMain = ({ children }: ChildrenProps) => (
  <v.main flex="1">
    <Container>{children}</Container>
  </v.main>
)
