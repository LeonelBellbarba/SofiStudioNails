import Link, { Route, Router, Routes } from "react-router-dom"
import Kits from "../Pages/Kits"
import Acrilico from "../Pages/Acrilico"
import Esmaltes from "../Pages/Esmaltes"
import Productos from "../Component/Productos"
import Context from "../Component/Context"

function Public(){
    return(
        <>
            <div>
                <Routes>
                <Route path="/" element={<Context/>}/>
                    <Route path="/productos" element={<Productos/>}/>
                    <Route path="/acrilico" element={<Acrilico/>}/>
                    <Route path="/esmaltes" element={<Esmaltes/>}/>
                  
                </Routes>
            </div>
        
        
        </>
    )
}

export default Public