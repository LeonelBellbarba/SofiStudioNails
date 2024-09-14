import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MyMapComponent from '../Component/mapsSofi';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contacto(){
    return(
        <>
            <div className="contactoBox">
                <div className="datosSofiBox">
                    <div className="caraSofiContacto"></div>
                    <div className="datosSofi">
                        
                        <ul className='listaContacto'>
                            <li><InstagramIcon style={{fontSize:"4rem", marginTop:"-1%", marginRight:"3%"}}/>sofy.monteroo</li> 
                            <li> <WhatsAppIcon style={{fontSize:"4rem", marginTop:"-1%", marginRight:"3%"}}/>3471-523641</li>
                            <li><FacebookIcon style={{fontSize:"4rem", marginTop:"-1%", marginRight:"3%"}}/>Sofia Montero </li>
                            <li><LocationOnIcon style={{fontSize:"4rem", marginTop:"-1%", marginRight:"3%"}}/>Las Rosas- maipu 933</li>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d841.480268281211!2d-61.57943883395587!3d-32.47480277732341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ca1dbe13cf44c7%3A0xe88e1f6d48c6eb5!2sMaip%C3%BA%20919%2C%20S2520CCS%20Las%20Rosas%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1726166942188!5m2!1ses-419!2sar" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <div className='casaSofi'></div>
                        </ul>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Contacto