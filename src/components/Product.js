import React from "react";


const Product = ({ item }) => {
  return (
        <div className="card">
          <figure className="text-center">
          <img src={item.image}  />
          </figure>
          <div className="contenido-card">
            <h3>{item.article}</h3>
            <p>{item.price}</p>
            <p> {item.description}</p>
          </div>
        </div>
  );

}
export default Product;