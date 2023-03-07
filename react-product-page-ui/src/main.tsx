import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider, QueryClient } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store'
import './index.scss'
import App from './App'

const queryClient = new QueryClient()

ReactDOM.hydrateRoot(document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>

        <ReduxProvider store={store}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </ReduxProvider>

      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
