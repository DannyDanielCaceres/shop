import React from "react";


const Product = ({ item }) => {
  return (
    <div className="">
        <div className="card">
          <figure>
          <img src={item.image}  />
          </figure>
          <div className="contenido-card">
            <h3>{item.article}</h3>
            <p>{item.price}</p>
            <p> {item.description}</p>
          </div>
        </div>
      </div>
  
  );

}
export default Product;