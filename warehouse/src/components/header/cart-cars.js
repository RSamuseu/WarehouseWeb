import React from 'react'
import './header.css'

const Cars = ({car}) => {

  const { make, model, price } = car;

  return (
    <div className="added-cars">
      <div className="cart-car">
        <span>{make}</span>
        <span>{model}</span>
      </div>
      <div className="cart-price">{price}$</div>
    </div>
  )
}

export default Cars