import logo from './logo.svg';
import './App.css';
import './Styles/Header.css'
import './Styles/Producto.css'
import './Styles/Foot.css'
import Productos from "./Component/Productos"
import Botonera from './Component/Botonera';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Public from './Public/Public';
import Kits from './Pages/Kits';
import Foot from './Component/Foot';


function App() {
  return (
    
    <Router>

    <div className="App">
      {/* Cabezera */}
        <div className="headerBox">
              <Botonera/>
            <header>
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
            </header>
        </div>

      {/* Main */}
      <div>
        <Public/>
      </div>
      

      {/* footer */}

        <div>
            <footer>
                <Foot/>
               
            </footer>
        </div>
    </div>
     
    </Router>
  );
}

export default App;
