import { ReactNode } from 'react'
import { Box } from '@veracity/vui'

interface Props {
  children: ReactNode
}

export const Container = ({ children }: Props) => (
  <Box column maxW={1200} my={2} mx="auto" w="100%">
    {children}
  </Box>
)
