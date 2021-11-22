import React, { useState } from 'react'
import Location from '../location/location'
import './App.css';

const Warehouse = (props) => {

  const { lat, long } = props.warehouse.location;
  const { location } = props.warehouse.cars;

  return (
    <div>
      <h4>Warehouse location</h4>
      <div className="lat">
        <label>lat:</label>
        <span>{lat}</span>
      </div>
      <div className="long">
        <label>long:</label>
        <span>{long}</span>
      </div>
      <h4>Car location</h4>
      <div>
        <span>{location}</span>
      </div>
    </div>
  )
}

export default Warehouse