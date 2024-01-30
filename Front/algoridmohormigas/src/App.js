
import './App.css';
import Canva from './nuevoRecuadro/Canva';
import { MatrizAdya } from './MatrizAdyacencia/MatrizAdya';
import { MatrizFero } from './MatrizFeromonas/MatrizFero';
import { ListaPuntos } from './listaPuntos/ListaPuntos';
import { Datosiniciales } from './Formulario/Datosiniciales';
import { Ejecucion } from './Formulario/Ejecucion';
import { BotonesEjecucion } from './Formulario/BotonesEjecucion';
import { MostrarDatos } from './Datos/MostrarDatos';
import { MostrarResultados } from './Datos/MostrarResultados';

function App() {


  return (
 

    <div class="container" style={{ backgroundColor: '#cccccc' }}>

      {/* titulo y precentacion */}
      <div class= "row">
        <h1>Algoridmo de hormigas</h1>
        <h9>
          Configura parámetros y añade puntos en el mapa para encontrar la ruta más corta.
        </h9>
      </div>

      {/*app funcionando | opciones configurables */}
      <div class= "row mt-5 mb-5 " >
        <div class="col-7 text-center" style={{height:"75vh"}}  >
          <Canva/>
        </div>

        <div class="col-5 text-center">
          <Datosiniciales/>
          
          <Ejecucion/>
          <BotonesEjecucion/>
        </div>

      </div>

      <div class= "row">
        <div class="col">
          <MostrarDatos/>

        </div>

        <div class="col">
          <MostrarResultados/>
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
