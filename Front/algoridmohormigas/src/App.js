import logo from './logo.svg';
import './App.css';
import Recuadrohormigas from './recuadroHormigas/Recuadrohormigas';



function App() {


 
  return (
 

    <div class="container" style={{ backgroundColor: '#cccccc' }}>

      {/* titulo y precentacion */}
      <div class= "row">
        <h1>Algoridmo de hormigas</h1>
        <h9>para usarlo has click en el recuadro para poner puntos, y configura los parametros a gusto</h9>
      </div>

      {/*app funcionando | opciones configurables */}
      <div class= "row mt-5 mb-5 " >
        <div class="col text-center"  style={{ backgroundColor: '#e36b2c' }} >
          <Recuadrohormigas/>
        </div>

        <div class="col-5 text-center"  style={{ backgroundColor: '#e33b2c' }} >

        </div>

      </div>

      {/* datos de la simulacion*/}
      <div class= "row">
        <h3> Aqui van los datos de la simulacion </h3>
        
      </div>


    </div>

   
  );
}

export default App;
