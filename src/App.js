import logo from './logo.svg';
import './App.css';
import './Styles/Header.css'
import './Styles/Producto.css'
import './Styles/Foot.css'
import './Styles/Loading.css'
import './Styles/disenos.css'
import './Styles/Contacto.css'
import Productos from "./Component/Productos"
import Botonera from './Component/Botonera';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Public from './Public/Public';
import Kits from './Pages/Kits';
import Foot from './Component/Foot';
import Context from './Component/Context';
import BotoneraP from './Component/BotoneraP';
import CustomCarousel from './Component/Carousel';


function App() {
  return (
  
    <Router>

    <div className="App">
      {/* Cabezera */}
        <div className="headerBox">
              <Botonera/>
        
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
