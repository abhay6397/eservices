import { Router, Route, Routes } from 'react-router'
import './App.css'
import { HomePage } from './pages/HomePage'
import {ServicesPage} from './pages/ServicesPage'
import { ContactPage } from './pages/ContactPage'


function App() {

  return (
  
    <>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/services' element={<ServicesPage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
   </Routes>
    </>
      
  )
}

export default App
