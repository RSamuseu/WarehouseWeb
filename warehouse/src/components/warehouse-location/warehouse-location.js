import React from 'react';
import './location.css'

function WarehouseLocation({location}) {

  const { lat, long } = location
  return(
    <div className="location">
      <div className="lat">
        <label>lat:</label>
        <span>{lat}</span>
      </div>
      <div className="long">
        <label>long:</label>
        <span>{long}</span>
      </div>
    </div>
  )
}

export default WarehouseLocation