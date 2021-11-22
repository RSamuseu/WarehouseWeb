import * as types from '../action-types/action-types'
import ApiService from '../api/api-service'

const apiService = new ApiService();

export const addToCart = (make, model, price) => ({
  type: types.ADD_TO_CART,
  make,
  model,
  price
})

export const getTotalPrice = () => ({type: types.GET_TOTAL_PRICE})

const addVehicles = vehicles => ({
  type: types.ADD_VEHICLES,
  vehicles
})


export const getAllVehicles = () => dispatch => {
  apiService.getResource().then(vehicles => {
    dispatch(addVehicles(vehicles))
  })
}