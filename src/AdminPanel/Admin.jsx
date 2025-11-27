import React, { useContext, useEffect } from 'react'
import { DataProvider } from '../Store/MyStore'

const Admin = () => {
  const {state:{user}} = useContext(DataProvider)
    const {getAllUsers,state:{userList,getId},deleteUsers,handleShow,dispatch,getSingleUsers} =useContext(DataProvider)
    useEffect(()=>{
        getAllUsers()
    },[])

    const handleDelete =(id)=>{
      deleteUsers(id)
    } 
    const handleEdit = (id)=>{
      dispatch({type:"formCheck",payload:"Edit"});
      getSingleUsers(id)
      handleShow()
      dispatch({type:"changeId",payload:id});
    }

  const handleRead =(id)=>{
     dispatch({type:"changeId",payload:id});
     dispatch({type:"formCheck",payload:"Read"});
     getSingleUsers(id)
     handleShow();
  }
  return (
    <div>
<table className="table table-sm table-striped table-bordered text-center align-middle">
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Email</th>
      <th scope="col">Photo</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
     {userList.map((elm,ind)=> {
        const {name,Age,Address,image,email,id} = elm
        return  (
      <tr key={elm.id}>
      <th scope="row">{ind + 1}</th>
      <td>{name}</td>
      <td>{Age}</td>
      <td>{email}</td>
      <td> 
        <img
        width={"100"}
        height={"100"}
 src={image}
 alt="" /></td>
       <td>{Address}</td>
       <td>
        <div className="btn-group">
            <button className='btn btn-success btn-sm px-2 py-1'
            onClick={()=>handleEdit(id)}
            >Edit</button>
            <button className='btn btn-danger btn-sm px-2 py-1'
            onClick={()=>handleDelete(id)}
            >Delete</button>
            <button className='btn btn-warning btn-sm px-2 py-1'
            onClick={()=>handleRead(id)}
            >Read</button>
        </div>
       </td>
    </tr>
     )}
    
)}
  
  </tbody>
</table></div>
  )
}

export default Admin