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
                        <Link  to="/kits" target="_top" className='seleccionProducto'>
                        <p>Kits</p></Link></li>

            {/* Acrilico */}
            <li className='seleccionProducto'  
                        style={{backgroundImage:`url(${AcrilicoProducto})`,
                        backgroundSize:"cover" }}>
                        <Link to="/acrilico" target="_top"  className='seleccionProducto'>
                        <p style={{marginLeft:"-87%"}}>Acrilico</p></Link></li>

            {/* Gel */}
            <li className='seleccionProducto' 
                        style={{backgroundImage:`url(${GelProducto})`, 
                        backgroundSize:"cover"}}>
                        <Link to="/gel" target="_top" className='seleccionProducto' >
                        <p>Gel</p></Link></li>

            {/* Esmaltes */}
            <li className='seleccionProducto'  
                        style={{backgroundImage:`url(${EsmaltesProducto})`, 
                        backgroundSize:"cover"}}>
                        <Link to="/esmaltes" target="_top" className='seleccionProducto'>
                        <p style={{marginLeft:"-87%"}}>Esmaltes</p></Link></li>

            {/* Liquidos */}
            <li className='seleccionProducto' 
                        style={{backgroundImage:`url(${LiquidosProducto})`, 
                        backgroundSize:"cover"}}>
                        <Link to="/liquidos" target="_top" className='seleccionProducto'>
                        <p  style={{marginLeft:"-87%"}}>Liquidos</p></Link></li>
                        
            {/* Aparatos */}
            <li className='seleccionProducto' 
                        style={{backgroundImage:`url(${AparatosProducto})`, 
                        backgroundSize:"cover"}}>
                        <Link to="/aparatos" target="_top" className='seleccionProducto'>
                        <p  style={{marginLeft:"-87%"}}>Aparatos</p></Link></li>
            </ul>
    </div>
     

    )
}

export default Productos;