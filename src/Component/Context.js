import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Context(){
    return(
        <>
        <div className="contextBox">

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

            <div className="mainTextBox">
              <div className="mainText">
                  <h1>Turnos</h1>
                  <h2><AccessAlarmIcon style={{fontSize:"60px",paddingRight:"1%"}}/>Horarios desde 13hs - 19hs</h2>
                  <h2><WhatsAppIcon style={{fontSize:"60px",
                                            paddingRight:"1%",
                                            marginLeft:"-3%"}}/>WhatsApp: 3471-523641</h2>
              </div>

            </div>
        </div>

        </>
    )
}

export default Context;