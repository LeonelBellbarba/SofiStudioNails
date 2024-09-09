import React, { useState, useEffect } from 'react';
import firebase from "../Config/Firebase"
import { getKitsProducts } from '../Config/FirebaseService';
import ProductosDatos from '../Component/ProductosDatos';
    

function Kits(){
   
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  
  
  
    
 
          
  useEffect(() => {
      const request = async () => {
        try {
            const response = await getKitsProducts();
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
    return(
        <>
            <div className='loadingBox'>
                <h1 className='loading'>Cargando...</h1>;

            </div>
        </>
    ) 
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
                    // price={producto.price}
                />
            ))}
        </div>
        </>
    )
}


export default Kits