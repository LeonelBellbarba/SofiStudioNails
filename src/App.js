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
            <header>
              <h1>SofiStudioNails</h1>
              <Botonera/>
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
