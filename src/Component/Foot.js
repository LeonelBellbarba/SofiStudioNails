import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


function Foot(){
    return(
        <>
            <div>
            <h1 className="footerTitle">Creado por Leonel Bellabarba</h1>

           <div className="footBox">
                <ul>
                    <li className="footList"><h3>¿Que es SofiStudioNails?</h3>
                    <p>SofiStudioNails es un estudio de uñas elaborado por Sofia Montero</p>
                    </li>

                </ul>
                    
                <ul>
                    <li className="footList"><h3 style={{marginLeft:"67%"}}>Horarios</h3>
                    <p style={{width:"200%"}}>Los turnos se arreglan por WhatsApp</p>
                    </li>
                </ul>
                
                <ul>
                    <li className="footList"><h3 style={{marginLeft:"9%", width:"100%"}}>Contactos</h3>
                        <p style={{width:"182%%"}}>
                            <ul className='linkPaginas'>
                                <li><a href='https://www.instagram.com/sofy.monteroo/'><button><InstagramIcon style={{fontSize:"2.5rem"}}/></button></a></li> 
                                <li><a  href='https://web.whatsapp.com/'><button><WhatsAppIcon style={{fontSize:"2.5rem"}}/></button></a></li>
                                <li><a  href='https://www.facebook.com/profile.php?id=100088755133799'><button><FacebookIcon style={{fontSize:"2.5rem"}}/></button></a></li>

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