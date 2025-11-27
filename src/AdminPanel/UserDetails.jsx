import React, { useContext } from 'react'
import { DataProvider } from '../Store/MyStore'

const UserDetails = () => {
    const {state:{user:{name,age,Address,email,image}}} = useContext(DataProvider)
  return (
    <div className='container'>
        <div className="row">
           
 <div className="card  text-center shadow-sm" style={{height:"65vh"}}>
  <img 
  src={image || "https://via.placeholder.com/250"}
  className="card-img-top p-2 mx-auto  rounded-4" 
  alt={name}
  style={{width:"250px",height:"250px"}}
  />
  <div className="card-body">
    <h3 className="card-title">{name}</h3>
    <p className="card-text">{email}</p>
    <h6 className="card-text">{Address}</h6>
  
  </div>
</div>
    </div>
        </div>
   
  )
}

export default UserDetails