import { ReactNode } from 'react'
import { VuiProvider, LinksProvider } from '@veracity/vui'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { isLocalhost } from '../utils'

interface Props {
  children: ReactNode
}
const client = new QueryClient()
export const Providers = ({ children }: Props) => (
  <QueryClientProvider client={client}>
    {isLocalhost() && <ReactQueryDevtools />}
    <VuiProvider>
      <LinksProvider>{children}</LinksProvider>
    </VuiProvider>
  </QueryClientProvider>
)
