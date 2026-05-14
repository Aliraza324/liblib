import { StrictMode } from 'react'
import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './i18n'
import './index.css'
import App from './App.jsx'
import GlobalLoader from './components/common/GlobalLoader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<GlobalLoader />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
)
