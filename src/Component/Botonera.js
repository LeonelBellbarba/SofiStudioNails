import {Link, Route, Router } from "react-router-dom"

function Botonera(){
    return(
    
            
        <div className='botoneraBox'>
            <ul className='botoneraUl'>
            <li className='botonera'><Link  to="/" className='botonera'>Kits</Link></li>
            <li className='botonera'><Link to="/acrilico" className='botonera'>Acrilico</Link></li>
            <li className='botonera'><Link to="/gel" className='botonera'>Gel</Link></li>
            <li className='botonera'><Link to="/esmaltes" className='botonera'>Esmaltes</Link></li>
            <li className='botonera'><Link to="/liquidos" className='botonera'>Liquidos</Link></li>
            <li className='botonera'><Link to="/aparatos" className='botonera'>Aparatos</Link></li>
            </ul>
    </div>
     

    )
}

export default Botonera;