import React from 'react'

const Product = ({elm: { title,image,price }}) => {
  return (
 <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card text-center shadow-sm h-100">

        <img
          src={image}
          className="card-img-top p-3 img-fluid"
          alt={title}
          style={{ height: "200px", objectFit: "contain" }}
        />

        <div className="card-body d-flex flex-column">
          <h6 className="card-title">{title}</h6>
          <p className="text-muted small">
            Some quick example text to build on the card title.
          </p>

          <h6 className="fw-bold">Price: ${price}</h6>

          <div className="mt-auto d-flex justify-content-center gap-2 flex-wrap">
            <button className="btn btn-primary btn-sm">Add Cart</button>
            <button className="btn btn-outline-primary btn-sm">Buy Now</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Product