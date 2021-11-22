import { ADD_VEHICLES } from '../action-types/action-types'

const initialState = {
  vehicles: []
}

const cars = (state = initialState, { vehicles, type }) => {
  switch(type) {
    case ADD_VEHICLES:
      return {
        ...state,
        vehicles: vehicles
      };
    default:
      return state;
  }
}

export default cars