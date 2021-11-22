import React, { useState } from "react"
import { useSelector, connect } from 'react-redux'

import Cars from './cart-cars'
import Modal from '../modal/modal'
import TotalPrice from './cart-total-price'

import * as actions from '../../actions/action'

import './header.css'

const Cart = () => {
  const [isShown, setShown] = useState(false);
  const cart = useSelector((state) => state.cart);
  const { addedCars, count, totalPrice } = cart;

  const cars = !addedCars.length
    ? <div>{"No cars were added!"}</div>
    : addedCars.map((car) => {
    return (
      <Cars car={car}/>
    );
  });

  const total = !totalPrice
    ? null
    : <TotalPrice totalPrice={totalPrice}/>

  return(
    <div className="header-cart">
      <div className="header-cart-icon">
        <img src="cart-59-48.ico" alt="" onClick={() => setShown(current => !current)}/>
      </div>
      <div className="header-cart-count">
        <span className="dot" onClick={() => setShown(current => !current)}>{count}</span>
      </div>
      <Modal active={isShown} setActive={() => setShown(current => !current)}>
        {cars}
        {total}
      </Modal>
    </div>
  );
}

export default connect(null, actions)(Cart);