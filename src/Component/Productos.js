import {Link, Route, Router } from "react-router-dom"
import GelProducto from "../ImagesWeb/ProductosImagen/GelProducto.png"
import KitProducto from "../ImagesWeb/ProductosImagen/KitProducto.png"
import AcrilicoProducto from "../ImagesWeb/ProductosImagen/AcrilicoProducto.png"
import EsmaltesProducto from "../ImagesWeb/ProductosImagen/EsmaltesProducto.png"
import LiquidosProducto from "../ImagesWeb/ProductosImagen/LiquidosProducto.png"
import AparatosProducto from "../ImagesWeb/ProductosImagen/AparatosProducto.png"
function Productos(){
    return(
    
            
        <div className='productosBox'>
            <ul style={{marginTop:"0"}}>

            {/* Kit */}
            <Link  to="/kits" target="_top" className='seleccionProducto'>
            <li className='seleccionProducto' 
                        style={{backgroundImage:`url(${KitProducto})`, 
                        backgroundSize:"cover"}}>
                        <p>Kits</p></li></Link>

            {/* Acrilico */}
            <Link to="/acrilico" target="_top"  className='seleccionProducto'>
            <li className='seleccionProducto'  
                        style={{backgroundImage:`url(${AcrilicoProducto})`,
                        backgroundSize:"cover" }}>
                        
                        <p>Acrilico</p></li></Link>

            {/* Gel */}
            <Link to="/gel" target="_top" className='seleccionProducto'>
            <li className='seleccionProducto' 
                        style={{backgroundImage:`url(${GelProducto})`, 
                        backgroundSize:"cover"}}>
                        <p>Gel</p></li></Link>

            {/* Esmaltes */}
            <Link to="/esmaltes" target="_top" className='seleccionProducto'>
            <li className='seleccionProducto'  
                        style={{backgroundImage:`url(${EsmaltesProducto})`, 
                        backgroundSize:"cover"}}>
                        <p>Esmaltes</p></li></Link>

            {/* Liquidos */}
            <Link to="/liquidos" target="_top" className='seleccionProducto'>
            <li className='seleccionProducto' 
                        style={{backgroundImage:`url(${LiquidosProducto})`, 
                        backgroundSize:"cover"}}>
                        <p>Liquidos</p></li></Link>
                        
            {/* Aparatos */}
            <Link to="/aparatos" target="_top" className='seleccionProducto'>
            <li className='seleccionProducto' 
                        style={{backgroundImage:`url(${AparatosProducto})`, 
                        backgroundSize:"cover", backgroundPosition:"-57px"}}>
                        <p>Aparatos</p></li></Link>
            </ul>
    </div>
     

    )
}

export default Productos;