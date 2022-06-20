import Tippy from '@tippyjs/react'
import { Box, Button, Icon, Popover, Tooltip, v } from '@veracity/vui'

export const TooltipsDemo = () => (
  <v.div>
    <v.div position="relative" textAlign="center">
      <Tooltip
        placement="top"
        text="Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum"
      >
        <Button>Hover me</Button>
      </Tooltip>
    </v.div>
    <Box centerH mt="4">
      <Tooltip
        linkProps={{
          href: 'https://services.veracity.com/PrivacyStatement',
          isExternal: true,
          isUnderlined: true
        }}
        linkText="Read more…"
        text="Privacy Statement"
      >
        <Button>Hover me</Button>
      </Tooltip>
    </Box>
    <Box my={3}>
      <Tooltip
        linkProps={{
          href: 'mailTo:orders@veracity.com'
        }}
        linkText="orders@veracity.com"
        text="Information you need to include in the invoice we send you eg. purchase order number. For more personalized invoice contact us at"
      >
        <Box w="20px">
          <Icon color="blue.80" name="falInfoCircle" scale={1.2} size="sm" />
        </Box>
      </Tooltip>
    </Box>
  </v.div>
)
