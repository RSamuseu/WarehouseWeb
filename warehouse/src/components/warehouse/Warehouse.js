import React, { useState } from 'react'
import Car from '../car/car';
import Modal from '../modal/modal'
import CarDetails from '../car-details/car-details'

const Warehouse = ({ warehouse }) => {
  const [isDetailed, setDetailed] = useState(false);

  function setDetales() {
    setDetailed(current => !current)
  }

  const { name, cars } = warehouse;

  return (
    <div>
      <h1>{name}</h1>
      <Car cars={cars} onClick={setDetales}/>
      <Modal active={isDetailed} setActive={setDetales}>
        <CarDetails warehouse={warehouse}/>
      </Modal>
    </div>
  )
}

export default Warehouse