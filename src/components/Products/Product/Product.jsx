import React,{useState,useEffect} from "react";
import axios from 'axios'
const Product = () => {
  
  const [count, setCount] = useState(1)
  const [data, setData] = useState([])

  useEffect(()=>{
    axios({url:`http://localhost:8080/products`,
    method:"GET"
    })
    .then(res=>{
      setData(res.data)
      console.log(res.data)
    })
    
  },[])
  const product = { id: 1 };
  const deletItem=(id)=>{
    useEffect(()=>{
      axios.delete({url:`http://localhost:8080/products${id}`
      
      })
  
    },[])
  }

  const addItem=()=>{

  }
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name"></h3>
      <h6 data-cy="product-description"></h6>
      <button data-cy="product-add-item-to-cart-button" onClick={addItem}>Add item</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={(count)=>setCount(count-1)}>+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={(count)=>setCount(count+1)}>-</button>
        <button data-cy="product-remove-cart-item-button" onClick={deletItem(product.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Product;
