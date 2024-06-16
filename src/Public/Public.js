import Link, { Route, Router, Routes } from "react-router-dom"
import Kits from "../Pages/Kits"
import Acrilico from "../Pages/Acrilico"
import Esmaltes from "../Pages/Esmaltes"
import Productos from "../Component/Productos"

function Public(){
    return(
        <>
            <div>
                <Routes>
                    <Route path="/" element={<Kits/>}/>
                    <Route path="/acrilico" element={<Acrilico/>}/>
                    <Route path="/esmaltes" element={<Esmaltes/>}/>
                    {/* <Route path="/gek" element={<Kits/>}/>
                    <Route path="/kits" element={<Kits/>}/> */}

                </Routes>
            </div>
        
        
        </>
    )
}

export default Public