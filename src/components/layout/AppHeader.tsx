import {
  Box,
  Header,
  HeaderCreateAccount,
  HeaderSignIn,
  IconButton,
  List,
  RenderOnDesktop,
  RenderOnMobile,
  T
} from '@veracity/vui'
import { NavLink, useLocation } from 'react-router-dom'

import { appName, mainLinks } from '../../config'
import { ChildrenProps } from '../../types'
import { IconSpinner } from '../helpers/IconSpinner'

interface Props {
  isLoading: boolean
  userProfile?: any
  signInUrl?: string
  signOutUrl?: string
  signUpUrl?: string
}

export const AppName = ({ children }: ChildrenProps) => (
  <T fontFamily="DNV Display,Verdana,Geneva,Tahoma,sans-serif" fontSize="20px">
    {children}
  </T>
)

export const AppHeader = (props: Props) => {
  const { isLoading, signInUrl, signOutUrl, signUpUrl, userProfile } = props

  const { pathname } = useLocation()

  const links = mainLinks
    ?.filter(link => userProfile || !link.authRequired)
    .map(link => ({ linkProps: { as: NavLink, to: link.to }, text: link.text }))
    .map(link => ({
      ...link,
      isActive: pathname.startsWith(link.linkProps.to)
    }))

  const userInfo = {
    companyName: userProfile?.company?.name,
    displayName: userProfile?.name
  }

  return (
    <Header>
      <Header.Content>
        <AppName>{appName}</AppName>
        <Box ml="auto" />
        <RenderOnDesktop>
          <Header.MainLinks links={links} />
          <Header.Divider ml={1} mr={2} />
        </RenderOnDesktop>
        <NavLink to="/help">
          <IconButton colorScheme="prussian" icon="falQuestionCircle" />
        </NavLink>

        {isLoading ? (
          <Box ml={2}>
            <IconSpinner />
          </Box>
        ) : userProfile ? (
          <Header.Account
            sections={
              <List isInteractive>
                <List.Divider />
                <List.Item as="a" href={signOutUrl} iconLeft="falSignOut" text="Sign out" />
              </List>
            }
            userInfo={userInfo}
          />
        ) : (
          <Box ml={2}>
            <HeaderSignIn url={signInUrl} />
            <HeaderCreateAccount url={signUpUrl} />
          </Box>
        )}

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
