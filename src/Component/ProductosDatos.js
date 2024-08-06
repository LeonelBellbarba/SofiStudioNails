import React from "react";

const ProductosDatos = ({ titulo, price, description, imagen }) => {
    return (
        <>
        
        <div className="cuadroProducto">
            <div className="imagenProducto" style={{ backgroundImage: `url(${imagen})`, backgroundSize: "cover"}}></div>
                
                <div className="datosProducto">
                    <h1>{titulo}</h1>
                    <p>Description: {description}</p>
                </div>
        </div>
        </>
    );
};

export default ProductosDatos;