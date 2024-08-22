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
            <li className='seleccionProducto' 
                        style={{backgroundImage:`url(${KitProducto})`, 
                        backgroundSize:"cover"}}>
                        <Link  to="/kits" className='seleccionProducto'>
                        <p>Kits</p></Link></li>
            {/* Acrilico */}
            <li className='seleccionProducto'  
                        style={{backgroundImage:`url(${AcrilicoProducto})`}}>
                        <Link to="/acrilico" className='seleccionProducto'>
                        <p>Acrilico</p></Link></li>
            {/* Gel */}
            <li className='seleccionProducto' 
                        style={{backgroundImage:`url(${GelProducto})`, 
                        backgroundSize:"cover"}}>
                        <Link to="/gel" className='seleccionProducto' >
                        <p>Gel</p></Link></li>
            {/* Esmaltes */}
            <li className='seleccionProducto'  
                        style={{backgroundImage:`url(${EsmaltesProducto})`, 
                        backgroundSize:"cover"}}>
                        <Link to="/esmaltes" className='seleccionProducto'>
                        <p>Esmaltes</p></Link></li>
            {/* Liquidos */}
            <li className='seleccionProducto' 
                        style={{backgroundImage:`url(${LiquidosProducto})`, 
                        backgroundSize:"cover"}}>
                        <Link to="/liquidos" className='seleccionProducto'>
                        <p>Liquidos</p></Link></li>
            {/* Aparatos */}
            <li className='seleccionProducto' 
                        style={{backgroundImage:`url(${AparatosProducto})`, 
                        backgroundSize:"cover"}}>
                        <Link to="/aparatos" className='seleccionProducto'><p>Aparatos</p></Link></li>
            </ul>
    </div>
     

    )
}

export default Productos;