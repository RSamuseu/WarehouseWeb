import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from '../../action'

class Vehicle extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.AddToCart = this.AddToCart.bind(this);
    this.state = {
      isInCart: false
    }
  }

  onClick() {
    this.props.onClick();
  }

  AddToCart() {
    const { addToCart, vehicle: { make, model, price }, } = this.props;
    addToCart(make, model, price);

    this.setState((state) => ({
      isInCart: !state.isInCart
    }));
  }

  render() {
    
    const { vehicle: { make, model, year_Model, price, licensed, date_Added }, index } = this.props;
    const { isInCart } = this.state;
    const btnDetailClasses = licensed ? "btn btn-success" : "btn btn-success disabled";
    const btnPrimaryClasses = isInCart ? "btn btn-primary disabled" : "btn btn-primary";
    const license = licensed ? "Yes" : "No";
    return(
     <tr>
      <td>{index}</td>
      <td>{make}</td>
      <td>{model}</td>
      <td>{year_Model}</td>
      <td>{price}$</td>
      <td>{license}</td>
      <td>{date_Added.slice(0,10)}</td>
      <td>
        <button onClick={this.onClick} type="button" className={btnDetailClasses}>Details</button>
        <button onClick={this.AddToCart} type="button" className={btnPrimaryClasses}>Add to cart</button>
      </td>
    </tr>
    )
  }
}

export default connect(null, actions)(Vehicle);