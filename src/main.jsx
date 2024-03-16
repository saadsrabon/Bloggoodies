import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './providers/AuthProvider.jsx'
import { ProfileConTextProvider } from './providers/ProfileProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ProfileConTextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ProfileConTextProvider>
    </AuthProvider>

  </React.StrictMode>,
)
