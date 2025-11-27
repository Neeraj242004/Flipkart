import React from 'react'
import Navbar from './omponent/Navbar'
import { Outlet } from 'react-router-dom'
import MyStore from './Store/MyStore'
import ModalForm from './AdminPanel/ModalForm'


const App = () => {
  return (
    <MyStore>
        <div className=''>
           <ModalForm/>
         <Navbar/>
         <Outlet/>
         </div>
    </MyStore>
    
  )
}

export default App