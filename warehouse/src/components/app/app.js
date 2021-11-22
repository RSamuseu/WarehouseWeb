import React from 'react'
import { useSelector } from 'react-redux'

import Warehouse from '../warehouse/warehouse';
import Header from '../header/header';

import './app.css';

function App() {

  const warehouses = useSelector((state) => state.cars.vehicles);
  const warehouseItems = !warehouses.length
  ? <div>
      <h1>{"All warehouses are empty!"}</h1>
      <img src="pulp-fiction-john-travolta.gif" alt=""/>
    </div>
  :warehouses.map((warehouse, i) => {
    return (
        <Warehouse warehouse = {warehouse} key={i}/>
    );
  });

  return (
    <div className="App">
      <div>
      <Header/>
      </div>
      <div>
        {warehouseItems}
      </div>
    </div>
  );
}

export default App;
