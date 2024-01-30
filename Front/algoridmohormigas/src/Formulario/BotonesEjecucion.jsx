import React from 'react'
import { useContext } from 'react';
import { DataContext } from '../variables/DataContext';



export const BotonesEjecucion = () => {
  
  const {matrizFer,setmatrizFer} = useContext(DataContext);

  const cambiarFeromona = () => {
    const nuevaMatriz = [...matrizFer];
    nuevaMatriz[0][1] = 999;

    setmatrizFer(nuevaMatriz);
    console.log("cambiar feromona");
  }
  
  
  return (
    <div class="container">

        <div class="row mb-3">
            <div class="col">
                <button type="button mb-3" class="btn btn-primary">avanzar un nodo</button>
            </div>   

            <div class="col">
                <button type="button mb-3" class="btn btn-primary" onClick={cambiarFeromona}>avanzar iteracion</button>
            </div> 

            <div class="col">
                <button type="button mb-3" class="btn btn-primary">completar iteraciones</button>
            </div>  
           
        </div>

    </div>
  )
}
