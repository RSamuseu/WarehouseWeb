import { ADD_PRODUCTS } from '../actiontypes'

const initialState = {
  products: []
}

const cars = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCTS:
      const { products } = action;
      return {
        ...state,
        products: products
      };
    default:
      return state;
  }
}

export default cars