import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { LinksProvider, VuiProvider } from '@veracity/vui'
import { ReactElement, ReactNode } from 'react'

// Documentation:
// - https://testing-library.com/docs/react-testing-library/setup
// - https://tanstack.com/query/v4/docs/guides/testing

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: Infinity
      }
    }
  })
  return (
    <QueryClientProvider client={client}>
      <VuiProvider>
        <LinksProvider>{children}</LinksProvider>
      </VuiProvider>
    </QueryClientProvider>
  )
}

const customRender = (ui: ReactElement, options: any = {}) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
