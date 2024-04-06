import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './providers/AuthProvider.jsx'
import { ProfileConTextProvider } from './providers/ProfileProvider.jsx'
import { BlogProvider } from './providers/BlogProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ProfileConTextProvider>
        <BlogProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </BlogProvider>
    </ProfileConTextProvider>
    </AuthProvider>

  </React.StrictMode>,
)
