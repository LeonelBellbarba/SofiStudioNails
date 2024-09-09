import Link, { Route, Router, Routes } from "react-router-dom"
import Kits from "../Pages/Kits"
import Acrilico from "../Pages/Acrilico"
import Esmaltes from "../Pages/Esmaltes"
import Gel from "../Pages/Gel"
import Liquidos from "../Pages/Liquidos"
import Aparatos from "../Pages/Aparatos"

import Productos from "../Component/Productos"
import Context from "../Component/Context"
import Diseños from "../Pages/Diseños"

function Public(){
    return(
        <>
            <div>
                <Routes>
                    <Route path="/" element={<Context/>}/>
                    <Route path="/kits" element={<Kits/>}/>
                    <Route path="/acrilico" element={<Acrilico/>}/>
                    <Route path="/esmaltes" element={<Esmaltes/>}/>
                    <Route path="/gel" element={<Gel/>}/>
                    <Route path="/liquidos" element={<Liquidos/>}/>
                    <Route path="/aparatos" element={<Aparatos/>}/>
                    <Route path="/productos" element={<Productos/>}/>
                    <Route path="/diseños" element={<Diseños/>}/>
                  
                </Routes>
            </div>
        
        
        </>
    )
}

export default Public