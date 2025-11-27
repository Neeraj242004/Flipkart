import React, { useContext } from 'react'
import { DataProvider } from '../Store/MyStore';
import { Button, Modal } from 'react-bootstrap';
import UserDetails from './UserDetails';


const ModalForm = () => {
  const {handleShow,handleClose,addUser,editusers ,dispatch,state:{show,user,checkForm,getId}} = useContext(DataProvider)
  const { name, Age,email,image,Address} = user

  const handleSignup =() => {
    if(checkForm=="Add"){
      addUser(user);
    }else if(checkForm=="Edit"){
       editusers(getId,user);
    }
    handleClose()
  }
 return (
    <>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton> 
          <Modal.Title>{checkForm} User</Modal.Title>
        </Modal.Header>
       {(checkForm=="Add" || checkForm=="Edit")?( <Modal.Body>
           <form action="">
        <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInputName" 
        placeholder="name@example.com"
        name ="name"
        value={name}
        onChange={(e)=>dispatch({type:"userForm",payload:{...user,[e.target.name]:e.target.value}})}
        />
        <label htmlFor="floatingInputName">Name</label>
         </div>

         <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInputEmail"
         placeholder="name@example.com"
         name ="email"
         value={email}
         onChange={(e)=>dispatch({type:"userForm",payload:{...user,[e.target.name]:e.target.value}})}
         />
        <label htmlFor="floatingInputEmail">Email</label>
         </div>

         <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInputAge"
         placeholder="name@example.com"
         name ="Age"
         value={Age}
         onChange={(e)=>dispatch({type:"userForm",payload:{...user,[e.target.name]:e.target.value}})}
         />
        <label htmlFor="floatingInputAge">Age</label>
         </div>

         <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInputAddress"
         placeholder="name@example.com"
         name ="Address"
         value={Address}
         onChange={(e)=>dispatch({type:"userForm",payload:{...user,[e.target.name]:e.target.value}})}
         />
        <label htmlFor="floatingInputAddress"> Address</label>
         </div>

         <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInputPhoto"
         placeholder="name@example.com"
         name ="image"
         value={image}
         onChange={(e)=>dispatch({type:"userForm",payload:{...user,[e.target.name]:e.target.value}})}
         />
        <label htmlFor="floatingInputPhoto">Photo</label>
         </div>
           </form>
           <div className='text-center'>
            <Button variant="success" onClick={handleSignup}>
            {checkForm}
          </Button>
           </div>
        </Modal.Body>):<UserDetails/>}
      </Modal>
    </>
  );
}

export default ModalForm