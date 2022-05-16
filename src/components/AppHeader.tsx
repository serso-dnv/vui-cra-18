import { Header, LoggedInHeader, List } from '@veracity/vui'
import { NavLink, useLocation } from 'react-router-dom'

export const AppHeader = () => {
  const { pathname } = useLocation()

  const mainLinks = [
    { linkProps: { as: NavLink, to: '/home' }, text: 'Home' },
    { linkProps: { as: NavLink, to: '/demo' }, text: 'Demo' }
  ].map(link => ({ ...link, isActive: pathname.startsWith(link.linkProps.to) }))

  const userInfo = {
    companyName: 'Veracity AS',
    displayName: 'Doe, John'
  }

  return (
    <LoggedInHeader
      account={
        <Header.Account
          sections={
            <List>
              <List.Divider />
              <List.Item
                iconLeft="falUser"
                linkProps={{ as: NavLink, to: '/settings' }}
                text="User settings"
              />
              <List.Divider />
              <List.Item
                iconLeft="falEnvelope"
                linkProps={{ as: NavLink, to: '/invite' }}
                text="Invite to Veracity"
              />
              <List.Divider />
              <List.Item
                iconLeft="falSignOut"
                linkProps={{ as: NavLink, to: '/logout' }}
                text="Sign out"
              />
            </List>
          }
          userInfo={userInfo}
        />
      }
      mainLinks={mainLinks}
    />
  )
}
