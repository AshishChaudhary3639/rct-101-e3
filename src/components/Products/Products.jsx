import React, { useEffect, useState } from "react";
const Products = () => {
  const [items, setItems] = useState([])
  return <div >
      {
        items.map((item)=>{
          <div key={item.id}>{item.name}</div>
        })
      }
 
    </div>;
};

export default Products;
