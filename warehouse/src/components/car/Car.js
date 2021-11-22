import React from 'react';
import './App.css';
import Vehicle from '../vehicle/Vehicle'

const Car = (props) => {
    const { cars: {  vehicles }, onClick} = props;

    const vehicleItems = vehicles.map((vehicle, i) => {
      return (
    //    <div key={vehicle._id}>
          <Vehicle vehicle = {vehicle}
              index={i + 1}
              onClick={onClick}/>
   //     </div>
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
/*     <div className="car">
      <div>{location}</div>
      <div>
      {vehicleItems}
      </div>
    </div> */
  )
}

export default Car