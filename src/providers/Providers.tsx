import { ReactNode } from 'react'
import { VuiProvider, LinksProvider } from '@veracity/vui'

interface Props {
  children: ReactNode
}

export const Providers = ({ children }: Props) => (
  <VuiProvider>
    <LinksProvider>{children}</LinksProvider>
  </VuiProvider>
)
