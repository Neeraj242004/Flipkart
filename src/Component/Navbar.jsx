import React, { useContext } from 'react'
import  {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DataProvider } from '../Store/MyStore';

const Navbar = () => {
  const {handleShow,dispatch} = useContext(DataProvider)
  const handleAdd =()=>{
    dispatch({type:"formclear",payload:{
            name:"",
            Age:"",
            email:"",
            image:"",
            Address:"",
        }})
     dispatch({type:"formCheck",payload:"Add"})
     handleShow()
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container">
    <Link className="navbar-brand" to="/"></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin">Admin Panel</Link>
        </li>
      </ul>
     </div>
   <div>
     <div>
        <Button
        variant="primary" 
        onClick={handleAdd}
        >
        SignUp
      </Button>
    </div>
   </div>
  </div>
</nav>
 </>
  );
};

export default Navbar