import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Face3Icon from '@mui/icons-material/Face3';
import CustomCarousel from "./Carousel"


function Context(){
    return(
        <>
        <div className="contextBox">
            {/* Texto entrada */}
              <div className='headerTextBox'>
                  <div className='headerText'>
                    <h2>¿Que encontras en SofiStudioNails?</h2>
                    <p>¿Buscas la máxima seguridad y calidad para tus uñas? Tranquilidad, 
                      calidad y sobre todo seguridad es lo que te vas a encontrar cuando
                      acudas a uno de nuestros espacios SofiStudioNails</p>
                  </div>

                  <div className='headerText'>
                    <h2>¿Que ofrecemos?</h2>
                    <p>Presenta unos excelentes protocolos de higiene y desinfección, 
                      marcando distancia y liderazgo en el sector en todos los niveles: seguridad, 
                      calidad e innovación.</p>
                  </div>

                  <div className='headerText'>
                    <h2>Encuentra tu lugar</h2>
                    <p>Si estás buscando un lugar en el que presumir de uñas, pestañas y cejas. 
                      Un espacio donde disfrutar de ti, un espacio seguro, en el que solo 
                      tengas que relajarte. Nails Factory es lo que necesitas.</p>
                  </div>
                </div>
              {/* Turnos y datos */}
              <div className="mainTextBox">
                    <div className='sofiFace'></div>
                <div className="mainText">
                      <div>
                            <h1>Turnos</h1>
                            <h2><AccessAlarmIcon className='iconoMainText1' style={{fontSize:"85px"}}/>Horarios: 13hs - 19hs</h2>
                                                          
                            <h2><WhatsAppIcon className='iconoMainText2' style={{fontSize:"80px",
                                                      paddingRight:"1%",
                                                      marginLeft:"-1%",
                                                      marginBottom:"-4%"}}/>WhatsApp: 3471-523641</h2>
                            <h2 style={{marginRight:"-6%"}}>
                              <Face3Icon className='iconoMainText2' style={{fontSize:"80px",
                                                      paddingRight:"1%",
                                                      marginBottom:"-4%"}}/>Diseñadora: Sofia Montero</h2>

                      </div>
                </div>
              </div>

              {/*Carousel  */}
              <CustomCarousel />
            
        </div>

        </>
    )
}

export default Context;