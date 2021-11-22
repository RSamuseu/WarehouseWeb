import { combineReducers } from 'redux'
import cart from './cart'
import cars from './cars'

export default combineReducers({
  cart,
  cars
})
