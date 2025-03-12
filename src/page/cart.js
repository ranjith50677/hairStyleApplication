import React, { useContext } from 'react';
import './productcard.css';
import Store from '../context';

const Cart = () => {

  const data=useContext(Store)
  console.log(data)
const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Tablet', price: 700 },
  { id: 4, name: 'Headphones', price: 150 },
  { id: 5, name: 'Smartwatch', price: 300 },
  { id: 6, name: 'Monitor', price: 200 },
  { id: 6, name: 'Monitor', price: 200 },
  { id: 6, name: 'Monitor', price: 200 },
  { id: 6, name: 'Monitor', price: 200 },
  { id: 6, name: 'Monitor', price: 200 },
  { id: 6, name: 'Monitor', price: 200 },
];
  return (
    <div  style={{height:"600px",overflow:"auto"}}>
      <div>
      <h2 style={{ textAlign: 'center', marginBottom: '20px',fontSize:"35px",fontFamily:"auto" }}>Cart</h2>
      <div className='container'>
        {data?.data?.map((product) => (
          <div key={product.id} className='container-card'>
            <div className="card">
              <div className="bg" />
              {/* <div className="blob" /> */}
            </div>
            <div style={{ padding: "10px" }}>
              <h5>{(product.name).toUpperCase()}</h5>
              <p>{product.name} - ${product.price}</p>
              <button>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
      {/* <p>Your cart is empty</p> */}
    </div>
  );
};

export default Cart;