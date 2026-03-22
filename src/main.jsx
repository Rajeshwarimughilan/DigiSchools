import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { AdminContentProvider } from './context/AdminContentContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminContentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AdminContentProvider>
  </StrictMode>,
)
