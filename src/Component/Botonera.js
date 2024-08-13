import {Link, Route, Router } from "react-router-dom"

function Botonera(){
    return(
    
            
        <div className='botoneraBox'>
            <ul className='botoneraUl'>
            <h1>SofiStudioNails</h1>
            <li className='botonera'><Link  to="/" className='botonera'><p>Kits</p></Link></li>
            <li className='botonera'><Link to="/acrilico" className='botonera'><p>Acrilico</p></Link></li>
            <li className='botonera'><Link to="/gel" className='botonera'><p>Gel</p></Link></li>
            <li className='botonera'><Link to="/esmaltes" className='botonera'><p>Esmaltes</p></Link></li>
            <li className='botonera'><Link to="/liquidos" className='botonera'><p>Liquidos</p></Link></li>
            <li className='botonera'><Link to="/aparatos" className='botonera'><p>Aparatos</p></Link></li>
            </ul>
    </div>
     

    )
}

export default Botonera;