import { ReactNode } from 'react'
import { Box } from '@veracity/vui'

interface Props {
  children: ReactNode
}

export const AppMain = (props: Props) => {
  const { children } = props
  return (
    <main>
      <Box p={4}>{children}</Box>
    </main>
  )
}
