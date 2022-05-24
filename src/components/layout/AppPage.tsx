import { Box, Grid, H1, Panel, v } from '@veracity/vui'
import { ReactNode } from 'react'

import { ChildrenProps } from '../../types'

interface Props extends ChildrenProps {
  title: string
  actionsSlot?: ReactNode
}

export const AppPage = ({ title, actionsSlot, children }: Props) => (
  <Panel>
    <v.article w="100%">
      <>
        <Box column>
          <Grid
            gap={1}
            gridTemplateColumns={{
              lg: 2,
              md: 2,
              xs: 1
            }}
          >
            <Box>
              <H1>{title}</H1>
            </Box>
            {!!actionsSlot && (
              <Box alignSelf="center" justifyContent="flex-end">
                {actionsSlot}
              </Box>
            )}
          </Grid>
        </Box>

        {!!children && <Box mt={2}>{children}</Box>}
      </>
    </v.article>
  </Panel>
)
