import React from "react";

const ProductosDisenos = ({ titulo, price, description, imagen }) => {
    return (
        <>
        
        <div className="cuadroDiseno ">
            <div className="imagenProducto diseno" style={{ backgroundImage: `url(${imagen})`, backgroundSize: "cover"}}></div>
                
                <div className="datosProducto">
                    <h1>{titulo}</h1>
                    <p>{description}</p>
                </div>
        </div>
        </>
    );
};

export default ProductosDisenos;