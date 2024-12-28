import React from 'react'
import ReactDOM from 'react-dom/client'

import './Global.css'
import { ThemeProvider } from './Components/darkMode.tsx'
import RoutesApp from './routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RoutesApp />
    </ThemeProvider>
  </React.StrictMode>,
)
