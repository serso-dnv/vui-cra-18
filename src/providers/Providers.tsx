import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { LinksProvider, VuiProvider } from '@veracity/vui'
import { ReactNode } from 'react'

import { isLocalhost } from '../utils'

interface Props {
  children: ReactNode
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})
export const Providers = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>
    {isLocalhost() && <ReactQueryDevtools />}
    <VuiProvider>
      <LinksProvider>{children}</LinksProvider>
    </VuiProvider>
  </QueryClientProvider>
)
