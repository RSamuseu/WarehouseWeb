import React from 'react'
import WarehouseLocation from '../warehouse-location/warehouse-location'

const CarDetails = ({ warehouse }) => {

  const { location } = warehouse.cars;

  return (
    <div>
      <h4>Warehouse location</h4>
      <WarehouseLocation location={warehouse.location}/>
      <h4>Car location</h4>
      <div>
        <span>{location}</span>
      </div>
    </div>
  )
}

export default CarDetails