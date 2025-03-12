import React, { useContext, useState } from 'react';
import './productcard.css';
import Store from "../context"



const ProductList = ({ addToCart }) => {
  const [id,setId]=useState([])
  const products = [
    { id: 1, name: 'Laptop', price: 1000,img:"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"},
    { id: 2, name: 'Phone', price: 500,img:"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" },
    { id: 3, name: 'Tablet', price: 700,img:"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" },
    { id: 4, name: 'Headphones', price: 150,img:"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" },
    { id: 5, name: 'Smartwatch', price: 300,img:"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" },
    { id: 7, name: 'Monitor', price: 200,img:"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" },
    { id: 8, name: 'Monitor', price: 200,img:"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" },
  { id: 9, name: 'Monitor', price: 200,img:"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" },
  { id: 10, name: 'Monitor', price: 200,img:"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" },
  { id: 11, name: 'Monitor', price: 200 ,img:"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"},
  { id: 12, name: 'Monitor', price: 200 ,img:"https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"},
];
const data=useContext(Store)

console.log(data,"data")
let a=[]
  const Buy=(i)=>{
  let chicke=data.data.find((item)=>item.id===i.id)
  if(chicke===undefined){
    data.data.push(i)
    a.push(i)
    alert(`Add sucessfully ${i.name}`)
  }else{
     alert(`!Alredy Added !${i.name}`)
  }
   setId(a)
  }

  return (
    <div  style={{height:"610px",overflow:"auto"}}>
      <div>
      <h2 style={{ textAlign: 'center'}}> Our Products</h2>
      </div>
      <div>
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}> Our Products</h2>
      </div>
      <div className='container'>
        {products.map((product) => (
          <div key={product.id} className='container-card'>
            <div className="card">
              <div className="bg" style={{  backgroundImage:`url(${product.img})`}} />
              {/* <div className="blob" /> */}
            </div>
            <div style={{ padding: "10px" }}>
              <h5>{(product.name).toUpperCase()}</h5>
              <p>{product.name} - ${product.price}</p>
            {/* { data?.data?.some((obj)=>{
              if( obj.id === product.id){

                return (<button disabled>select</button>)
              } else{
                return (<button onClick={() => Buy(product)}>Add to Cart</button>
              )
              }})} */}
           <button onClick={() => Buy(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
