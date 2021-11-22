import React from 'react';
import Vehicle from '../vehicle/vehicle'

import '../../index.css'

const Car = (props) => {

    const { cars: { vehicles }, onClick} = props;

    const vehicleItems = vehicles.map((vehicle, i) => {
      return (
        <Vehicle vehicle = {vehicle}
          index={i + 1}
          key={i}
          onClick={onClick}/>
      );
    });

    const renderTableHead = () => {
      return(
        <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Make</th>
          <th scope="col">Model</th>
          <th scope="col">Year Model</th>
          <th scope="col">Price</th>
          <th scope="col">Licensed</th>
          <th scope="col">Date added</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      )
    }

  return(
    <table className="table">
      {renderTableHead()}
      <tbody>
      {vehicleItems}
      </tbody>
    </table>
  )
}

export default Car