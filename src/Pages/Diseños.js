import React, { useState, useEffect } from 'react';
import firebase from "../Config/Firebase"
import { getDiseñosProducts } from '../Config/FirebaseService';
import ProductosDatos from '../Component/ProductosDisenos';

function Diseños(){
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
      
    
    
    
      
   
            
    useEffect(() => {
        const request = async () => {
          try {
              const response = await getDiseñosProducts();
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
          <div className="disenoBox" >
              {products.map((producto, index) => (
                  <ProductosDatos
                      key={index}
                      imagen={producto.image}
                      
                  />
              ))}
          </div>
          </>
      )
  }

export default Diseños