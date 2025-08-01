import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import Data from './Data'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Data />
  </StrictMode>,
)
