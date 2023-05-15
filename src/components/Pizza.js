import React , {useState} from 'react'
import pizzas from '../pizzadata'
import {Modal} from 'react-bootstrap'

export default function Pizza({Pizza}) {
  const [ Quantity , setQuentity] = useState(1)
  const [ variants , setvariants] = useState('small')
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{margin:'20px'}} className='shadow-lg p-3 mb-5 bg-white rounded'>
        
        <div onClick={handleShow}>

        <h1> {Pizza.name} </h1>
        <img src={Pizza.image} className="img-fluid" style={{height:'200px' , width:'300px'}}/>

        </div>

        <div className="flex-container">

          <div className='w-100 m-1'>
            <p>Varients</p>
            <select className='form-control' value={variants} onChange={(e)=>{setvariants(e.target.value)}}>
              {Pizza.variants.map(variants=>{
                  return <option value={variants}>{variants}</option>
              })}
            </select>
          </div>

          <div className='w-100 m-1'>
            <p>Quantity</p>
            <select className='form-control' value={Quantity} onChange={(e)=>{setQuentity(e.target.value)}}>
             {[...Array(10).keys()].map((x , i)=>{

                  return<option value={i+1}>{i+1}</option>
             })}
            </select>
        
          </div>

        </div>

        <div className='flex-container'>
          <div className='m-1 w-100'>
              <h1 className='mt-1'>Price: {Pizza.prices[0][variants] * Quantity} Rs/-</h1>
          </div>
          
          <div className='m-1 w-100'>
              <button className='btn'>ADD TO CART</button>
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {Pizza.name} </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={Pizza.image} className='img-fluid' style={{height: '300px'}}/>
          <p> {Pizza.description} </p>   
        </Modal.Body>

        <Modal.Footer>
          <button className='btn' onClick={handleClose}>CLOSE</button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}
