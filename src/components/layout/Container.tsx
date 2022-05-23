import { Box } from '@veracity/vui'

import { ChildrenProps } from '../../types'

export const Container = ({ children }: ChildrenProps) => (
  <Box column maxW={1200} mx="auto" my={2} w="100%">
    {children}
  </Box>
)
