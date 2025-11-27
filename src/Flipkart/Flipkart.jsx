import React, { useContext, useEffect } from 'react'
import Product from './Product'
import { DataProvider } from '../Store/MyStore'
import ModalForm from '../AdminPanel/ModalForm';

const Flipkart = () => {
 const {getProducts,state:{productlist}} =  useContext(DataProvider);

    useEffect(()=>{
       getProducts()
    },[])
  return (
   <div>
   
     <div className='row my-2'>
        {productlist.map((elm,ind)=>(
        <Product key={ind} elm={elm}/> ))}
    </div>
   </div>
  )
}

export default Flipkart