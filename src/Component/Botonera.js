import {Link, Route, Router } from "react-router-dom"

function Botonera(){
    return(
    
            
        <div className='botoneraBox'>
            <ul className='botoneraUl'>
            <h1><Link to="/"  target="_top" >SofiStudioNails</Link></h1>
            <li className='botonera'><Link to="/productos"  target="_top" className='botonera'><p>Productos</p></Link></li>
            <li className='botonera'><Link  to="/diseños"  target="_top" className='botonera'><p>Diseños</p></Link></li>
            <li className='botonera'><Link to="/contacto"  target="_top" className='botonera'><p>Contacto</p></Link></li>
   
            </ul>
    </div>
     

    )
}

export default Botonera;