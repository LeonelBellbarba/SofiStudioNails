import {Link, Route, Router } from "react-router-dom"

function BotoneraP(){
    return(
    
            
        <div className='botoneraPBox'>
            <ul className='botoneraPUl'>
            
            <li className='botoneraP'><Link  to="/" className='botoneraP'><p>Kits</p></Link></li>
            <li className='botoneraP'><Link to="/acrilico" className='botoneraP'><p>Acrilico</p></Link></li>
            <li className='botoneraP'><Link to="/gel" className='botoneraP'><p>Gel</p></Link></li>
            <li className='botoneraP'><Link to="/esmaltes" className='botoneraP'><p>Esmaltes</p></Link></li>
            <li className='botoneraP'><Link to="/liquidos" className='botoneraP'><p>Liquidos</p></Link></li>
            <li className='botoneraP'><Link to="/aparatos" className='botoneraP'><p>Aparatos</p></Link></li>
            </ul>
    </div>
     

    )
}

export default BotoneraP;