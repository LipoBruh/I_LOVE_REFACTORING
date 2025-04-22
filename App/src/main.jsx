import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RouterComponent from './router/RouterComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterComponent>
      <App />
    </RouterComponent>
  </StrictMode>,
)
