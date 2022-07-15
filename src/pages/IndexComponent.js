import Nav from 'react-bootstrap/Nav';
import NavbarComponent from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Product from '../components/Product'


const  IndexComponent = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const a = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(a);
  }, [])

  return (
    
     <div >
      <NavbarComponent/>
      <div className="title-cards">
        <h2>Productos</h2>
      </div>
      <div className="container-card d-flex flex-wrap ">

        {products.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
      </div>
   
  );
}

export default IndexComponent;