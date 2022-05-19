import {
  T,
  Header,
  RenderOnDesktop,
  RenderOnMobile,
  IconButton,
  List,
  Box
} from '@veracity/vui'
import { NavLink, useLocation } from 'react-router-dom'

import { useConfig } from '../../hooks'

export const AppHeader = () => {
  const { appName, mainLinks } = useConfig()
  const { pathname } = useLocation()

  const links = mainLinks
    .map(link => ({ linkProps: { as: NavLink, to: link.to }, text: link.text }))
    .map(link => ({
      ...link,
      isActive: pathname.startsWith(link.linkProps.to)
    }))

  const userInfo = {
    companyName: 'Veracity AS',
    displayName: 'Doe, John'
  }

  return (
    <Header>
      <Header.Content>
        <Header.Logo />
        <Header.Divider mr={2} />
        <T
          fontFamily="DNV Display,Verdana,Geneva,Tahoma,sans-serif"
          fontSize="20px">
          {appName}
        </T>
        <Box ml="auto" />
        <RenderOnDesktop>
          <Header.MainLinks links={links} />
          <Header.Divider ml={1} mr={2} />
        </RenderOnDesktop>
        <IconButton
          as="a"
          colorScheme="prussian"
          href="/help"
          icon="falQuestionCircle"
        />
        <Header.Account
          sections={
            <List isInteractive>
              <List.Divider />
              <List.Item
                as="a"
                href="/settings"
                iconLeft="falCog"
                text="Settings"
              />
            </List>
          }
          userInfo={userInfo}
        />
        <RenderOnMobile>
          <Header.Divider ml={2} />
          <Header.MobileToggle />
          <Header.MobileContent>
            <Header.MainLinks links={links} />
          </Header.MobileContent>
        </RenderOnMobile>
      </Header.Content>
    </Header>
  )
}
