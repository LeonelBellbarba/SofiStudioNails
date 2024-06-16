import React from "react";

const ProductosDatos = ({ titulo, price, description, imagen }) => {
    return (
        <div className="cuadroProducto" style={{ backgroundImage: `url(${imagen})`, backgroundSize: "cover" }}>
            <h1>{titulo}</h1>
            <p>Description: {description}</p>
            {/* <p>Price: {price}</p> */}
        </div>
    );
};

export default ProductosDatos;