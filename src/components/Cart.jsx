import React , {useState} from 'react'
import { UseSelector } from 'react-redux'
import Product from './Product'


const Cart = () => {
  const [product, setProduct] = useState([])

  
  const handleButton = () =>{
    return handleButton()
  }
  return (
    <>
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={Product.image} alt={Product.title} height="200px" width="180px" />
                </div>
                <div className="col-md-4">
                  <h3>{Product.title}</h3>
                  <p className="lead fw-bold">
                    {Product.qty} X ${Product.price} = ${Product.qty * Product.price}
                  </p>
                  <button className="btn btn-outline-dark me-4" onClick={()=>handleButton(product)}>
                      <i className="fa fa-minus"></i>
                  </button>
                  <button className="btn btn-outline-dark " onClick={()=>handleButton(product)}>
                      <i className="fa fa-plus"></i>
                  </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cart