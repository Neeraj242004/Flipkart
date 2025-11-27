import React from 'react'

const Product = ({elm: { title,image,price }}) => {
  return (
    <div className='col-lg-3 col-md-4 mb-4'>
 <div className="card  text-center shadow-sm" style={{height:"75vh"}}>
  <img 
  src={image}
  className="card-img-top p-2 mx-auto  rounded-4" 
  alt="..."
  style={{width:"190px",height:"190px"}}
  />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <h6>Price: ${price}</h6>
    <button  href="#" className="btn btn-primary">Add Cart</button>
     <button  href="#" className="btn btn-primary mx-2">Buy Now</button>
  </div>
</div>
    </div>
  )
}

export default Product