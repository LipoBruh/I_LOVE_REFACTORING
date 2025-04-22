import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//routes
import {router} from './router/routes/routes'
import { RouterProvider } from 'react-router'
//react query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'





const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <QueryClientProvider client={queryClient}>

      <RouterProvider router={router} />

    </QueryClientProvider>

  </StrictMode>,
)
