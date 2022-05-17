import { ReactNode } from 'react'
import { Box, H1, v } from '@veracity/vui'

interface Props {
  title?: string
  children?: ReactNode
}

export const AppPage = (props: Props) => {
  const { title, children } = props
  return (
    <v.article>
      <>
        {!!title && <H1>{title}</H1>}
        {!!children && <Box mt={2}>{children}</Box>}
      </>
    </v.article>
  )
}
