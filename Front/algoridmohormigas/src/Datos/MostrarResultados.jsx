import React from 'react'


import { useContext } from 'react';
import { DataContext } from '../variables/DataContext';


export const MostrarResultados = () => {
  
  const {aprendisaje,setAprendisaje,mejorDistancia, setMejorDistancia,mejorRuta, setMejorRuta,iteracionactual, setIteracionactual,iteraciones, setIteraciones,evaporacion, setEvaporacion,canthormigas, setCanthormigas,valorBeta, setValorBeta,valorAlfa, setValorAlfa,setValorFermona,valorFermona ,listapuntos, setlistapuntos , matrizAdya,setmatrizAdya ,matrizFer,setmatrizFer} = useContext(DataContext);

  
  return (

    <div class="container">
        
        <h3> Datos de ejecucion </h3>
        
        <table class="table">
            
            <tbody>

                
                <tr>
                <th scope="row">Mejor distancia</th>
                <td>{mejorDistancia}</td>
                </tr>

                <tr>
                <th scope="row">Promedio hormigas</th>
                <td>0</td>
                </tr>

                <tr>
                <th scope="row">Iteracion actual</th>
                <td>{iteracionactual}</td>
                </tr>

            </tbody>
        </table>
    
    </div>
  

  )

}


