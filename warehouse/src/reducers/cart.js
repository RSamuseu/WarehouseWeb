import { ADD_TO_CART } from '../action-types/action-types'

const initialState = {
  addedCars: [],
  count: 0,
  totalPrice: 0
}

const cart = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      const { make, model, price } = action
      return {
        ...state,
        addedCars: [...state.addedCars, {make, model, price}],
        count: state.count + 1,
        totalPrice: state.totalPrice + price
      };
    default:
      return state;
  }
}
export default cart