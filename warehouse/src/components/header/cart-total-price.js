import React from "react"

const TotalPrice = ({totalPrice}) => {

  return(
    <div className="total-price">
      <label>Total price:</label>
      <span>{totalPrice.toFixed(2)}$</span>
    </div>
  );
}

export default TotalPrice;