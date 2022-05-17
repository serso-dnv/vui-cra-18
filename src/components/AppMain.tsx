import { ReactNode } from 'react'
import { Box, v } from '@veracity/vui'

interface Props {
  children: ReactNode
}

export const AppMain = ({ children }: Props) => (
  <v.main flex="1">
    <Box column maxW={1200} my={2} mx="auto" w="100%">
      {children}
    </Box>
  </v.main>
)
