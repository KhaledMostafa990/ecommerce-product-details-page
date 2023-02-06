import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider, QueryClient } from 'react-query';

import './index.scss'
import App from './App'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>

        <App />
        <ReactQueryDevtools initialIsOpen={false} />

      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
