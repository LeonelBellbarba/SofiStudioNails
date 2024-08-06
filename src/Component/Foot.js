
function Foot(){
    return(
        <>
            <div>
            <h2 className="footerTitle">Creado por Leonel Bellabarba</h2>

           <div className="footBox">
                <ul>
                    <li className="footList"><h3>¿Que es SofiStudioNails?</h3>
                    <p>SofiStudioNails es un estudio de uñas elaborado por sofia montero</p>
                    </li>

                </ul>
                    
                <ul>
                    <li className="footList"><h3 style={{marginLeft:"67%"}}>Horarios</h3>
                    <p style={{width:"200%"}}>sin horario disponible, a pedido por WhatsApp</p>
                    </li>
                </ul>
                
                <ul>
                    <li className="footList"><h3 style={{marginLeft:"42%", width:"100%"}}>Contactos</h3>
                        <p style={{width:"200%"}}>
                            <ul>
                                <li>Instragram</li> 
                                <li>WhatsApp</li>
                                <li>Facebook</li>

                            </ul>
                        </p>
                    </li>
                </ul>
            </div> 
            
            </div>

        </>
    )
}

export default Foot;