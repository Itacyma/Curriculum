import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './style/tokens.css'
import './index.css'
import App from './App.jsx'
import { applyDocumentLanguage, getInitialLanguage } from './utils/language.mjs'

applyDocumentLanguage(getInitialLanguage())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
