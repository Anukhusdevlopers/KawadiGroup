import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Allroutes from './Allroutes'
// import Section1 from './Component/Home/Section1'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Allroutes />
 {/* <Section1/> */}
  </StrictMode>,
)
