import { Box, H1, Panel, v } from '@veracity/vui'

import { ChildrenProps } from '../../types'

interface Props extends ChildrenProps {
  title?: string
}

export const AppPage = ({ title, children }: Props) => (
  <Panel>
    <v.article>
      <>
        {!!title && <H1>{title}</H1>}
        {!!children && <Box mt={2}>{children}</Box>}
      </>
    </v.article>
  </Panel>
)
