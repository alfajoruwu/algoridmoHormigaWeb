
import { useContext } from 'react';
import './App.css';

import Canva from './nuevoRecuadro/Canva';
import { DataContext } from './variables/DataContext';
import { MatrizAdya } from './MatrizAdyacencia/MatrizAdya';
import { MatrizFero } from './MatrizFeromonas/MatrizFero';
import { ListaPuntos } from './listaPuntos/ListaPuntos';
import { Datosiniciales } from './Formulario/Datosiniciales';
import { BotonesAccion } from './Formulario/BotonesAccion';
import { Ejecucion } from './Formulario/Ejecucion';
import { BotonesEjecucion } from './Formulario/BotonesEjecucion';

function App() {

  const contextData = useContext(DataContext)


  return (
 

    <div class="container" style={{ backgroundColor: '#cccccc' }}>

      {/* titulo y precentacion */}
      <div class= "row">
        <h1>Algoridmo de hormigas</h1>
        <h9>para usarlo has click en el recuadro para poner puntos, y configura los parametros a gusto</h9>
      </div>

      {/*app funcionando | opciones configurables */}
      <div class= "row mt-5 mb-5 " >
        <div class="col-7 text-center" style={{height:"75vh"}}  >
          <Canva/>
        </div>

        <div class="col-5 text-center">
          <Datosiniciales/>
          <BotonesAccion/>
          <Ejecucion/>
          <BotonesEjecucion/>
        </div>

      </div>

      <div class= "row">
      
        <div class= "col">  
          <ListaPuntos/>
        </div>

      
        <div class="col">
          
          <div class="col">
            <MatrizAdya/>
          </div>

          <div class="col">
            <MatrizFero/>
          </div>

        </div>

      </div>

    </div>

   
  );
}

export default App;
