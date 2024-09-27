import React from "react";
import { useState } from "react";

const ProductosDatos = ({ titulo, price, description, imagen }) => {
    
const [isImageLarge, setIsImageLarge] = useState(false);

const handleShowImage = () => {
    setIsImageLarge(!isImageLarge); // Cambiar el estado para agrandar/reducir
};
    
    return (
        <>
        <div className="cuadroProducto">
        <button className="botonProducto">
           <div
          className={`imagenProducto ${isImageLarge ? "imagenGrande" : ""}`}
          style={{ backgroundImage: `url(${imagen})`, backgroundSize: "cover" }}
        ></div>
                
                <div className="datosProducto">
                    <h1>{titulo}</h1>
                    <p>{description}</p>
                </div>
        </button>
        </div>
        </>
    );
};

export default ProductosDatos;