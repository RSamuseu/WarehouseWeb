import React, { useState } from 'react'
import Car from './Car';
import Modal from './Modal'
import CarDetails from './CatDetails'

const Warehouse = (props) => {
  const [isDetailed, setDetailed] = useState(false);

  function setDetales() {
    setDetailed(current => !current)
  }

  const { cars, name } = props.warehouse;
  return (
    <div>
      <h1>{name}</h1>
      <Car cars={cars} onClick={setDetales}/>
      <Modal active={isDetailed} setActive={setDetales}>
        <CarDetails warehouse={props.warehouse}/>
      </Modal>
    </div>
  )
}

export default Warehouse