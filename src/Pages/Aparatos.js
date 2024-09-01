import React, { useState, useEffect } from 'react';
import firebase from "../Config/Firebase"
import { getAparatosProducts } from '../Config/FirebaseService';
import ProductosDatos from '../Component/ProductosDatos';

function Aparatos(){
    
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
    
  
  
  
    
 
          
  useEffect(() => {
      const request = async () => {
        try {
            const response = await getAparatosProducts();
            setProducts(response);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching productos: ", error);
            setLoading(false);
        }
    };
    request();
    }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }



    return(
        <>
        <div className="productosBox">
            {products.map((producto, index) => (
                <ProductosDatos
                    key={index}
                    titulo={producto.name}
                    description={producto.description}
                    imagen={producto.image}
                    
                />
            ))}
        </div>
        </>
    )
}

export default Aparatos