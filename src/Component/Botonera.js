import {Link, Route, Router } from "react-router-dom"

function Botonera(){
    return(
    
            
        <div className='botoneraBox'>
            <ul className='botoneraUl'>
            <h1><Link to="/">SofiStudioNails</Link></h1>
            <li className='botonera'><Link to="/productos" className='botonera'><p>Productos</p></Link></li>
            <li className='botonera'><Link  to="/nosotros" className='botonera'><p>Nosotros</p></Link></li>
            <li className='botonera'><Link to="/contacto" className='botonera'><p>Contacto</p></Link></li>
   
            </ul>
    </div>
     

    )
}

export default Botonera;