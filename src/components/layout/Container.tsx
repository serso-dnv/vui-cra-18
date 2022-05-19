import { Box } from '@veracity/vui'
import { ChildrenProps } from '../../types'

export const Container = ({ children }: ChildrenProps) => (
  <Box column maxW={1200} my={2} mx="auto" w="100%">
    {children}
  </Box>
)
