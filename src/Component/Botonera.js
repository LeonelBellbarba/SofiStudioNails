import {Link, Route, Router } from "react-router-dom"

function Botonera(){
    return(
    
            
        <div className='botoneraBox'>
            <ul className='botoneraUl'>
            <h1>SofiStudioNails</h1>
            <li className='botonera'><Link to="/gel" className='botonera'><p>Productos</p></Link></li>
            <li className='botonera'><Link  to="/" className='botonera'><p>Nosotros</p></Link></li>
            <li className='botonera'><Link to="/acrilico" className='botonera'><p>Contacto</p></Link></li>
   
            </ul>
    </div>
     

    )
}

export default Botonera;