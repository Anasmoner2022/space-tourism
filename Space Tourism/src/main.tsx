/** 
 * Node Modules
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

/**
 * CSS Files
 */
import './index.css'


/**
 * Custom modules
*/
import router from './routers/routes'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
