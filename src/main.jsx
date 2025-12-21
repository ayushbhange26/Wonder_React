
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeContextProvider } from './theme.jsx'

createRoot(document.getElementById('root')).render(
  // need to wrap App with ThemeContextProvider
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
)
