import React from 'react'
import { useSelector } from 'react-redux'
import './app.css';
import Warehouse from '../../Warehouse';
import Header from '../header/header';

function App() {
  const warehouses = useSelector((state) => state.cars.products);
  const warehouseItems = warehouses.map((warehouse) => {
    return (
        <Warehouse warehouse = {warehouse} />
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
