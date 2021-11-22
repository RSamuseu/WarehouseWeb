import React from 'react';

function Location(props) {
  const { lat, long } = props.location;

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

export default Location