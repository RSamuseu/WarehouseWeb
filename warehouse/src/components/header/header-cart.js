import React, { useState } from "react"
import './App.css';
import { useSelector, connect } from 'react-redux'
import Modal from '../../Modal'
import * as actions from '../../action'

const Cart = () => {
  const [isShown, setShown] = useState(false);
  const cart = useSelector((state) => state.cart);
  const { addedCars, count, totalPrice } = cart;

  const cars = !addedCars.length
    ? <div>{"No cars were added!"}</div>
    : addedCars.map(({ make, model, price }) => {
    return (
      <div className="added-cars">
        <div className="cart-car">
          <span>{make}</span>
          <span>{model}</span>
        </div>
        <div className="cart-price">{price}$</div>
      </div>
    );
  });

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
          <div className="total-price">
            <label>Total price:</label>
            <span>{totalPrice.toFixed(2)}$</span>
          </div>
        </Modal>
      </div>
  );
}

export default connect(null, actions)(Cart);