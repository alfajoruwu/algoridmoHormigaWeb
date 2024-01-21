
import { useContext } from 'react';
import './App.css';
import Recuadrohormigas from './recuadroHormigas/Recuadrohormigas';

import { DataContext } from './variables/DataContext';

function App() {

  const contextData = useContext(DataContext)

  const { setlistapuntos, listapuntos } = useContext(DataContext);
  
  const {matrizAdya,setmatrizAdya} = useContext(DataContext);

  const {matrizFer} = useContext(DataContext);

  const {valorFermona} = useContext(DataContext);


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

      {/* datos */}
      <div class= "row">
      
        {/* lista de puntos */}
        <div class= "col">  
          <h3> Tabla de puntos</h3>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Posicion x</th>
                <th scope="col">Posicion y</th>
                <th scope="col">Eliminar punto</th>
              </tr>
            </thead>
            <tbody>
              
             {listapuntos.map((point, index) => (
              //<div key={index}>{`X: ${point.xRelativeToDiv}, Y: ${point.yRelativeToDiv}`}</div>
              <tr>
                <th scope='row'>{index}</th>
                <td>{point.xRelativeToDiv}</td>
                <td>{point.yRelativeToDiv}</td>
                <td> <button type="button" class="btn btn-warning">Borrar punto</button> </td>
              </tr>

            ))}
              
            </tbody>
          </table>
        </div>

        {/* matriz de adyacencia */}
        <div class="col">
          
        <div class="col">
          <h3> Matriz de adyacencia </h3>
          <table class="table">

            <tbody>
              {matrizAdya.map((lista,index) => (
                <tr>
                {lista.map((elemento,index) => (
                  <td> {elemento}</td>
                ) )}

                </tr>
              ))}
              
            </tbody>
          </table>
        </div>

        <div class="col">
          <h3> Matriz de feromonas </h3>
          <table class="table">
            <tbody>
              {matrizFer.map((lista,index) => (
                <tr>
                {lista.map((elemento,index) => (
                  <td> {valorFermona}</td>
                ) )}

                </tr>
              ))}
              
            </tbody>
          </table>
        </div>


        </div>

        

      </div>


    </div>

   
  );
}

export default App;
