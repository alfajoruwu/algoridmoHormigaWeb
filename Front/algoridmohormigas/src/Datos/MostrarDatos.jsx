import React from 'react'
import { useContext } from 'react';
import { DataContext } from '../variables/DataContext';


export const MostrarDatos = () => {
  
  const {evaporacion, setEvaporacion,canthormigas, setCanthormigas,valorBeta, setValorBeta,valorAlfa, setValorAlfa,setValorFermona,valorFermona} = useContext(DataContext);
  
  
  
  return (

    <div class="container">
        
        <h3> Datos iniciales </h3>
        
        <table class="table">
            
            <tbody>
                <tr>
                <th scope="row">Cantidad de Hormigas</th>
                <td>{canthormigas}</td>
                </tr>
                
                <tr>
                <th scope="row">Feromona inicial</th>
                <td>{valorFermona}</td>
                </tr>

                <tr>
                <th scope="row">Evaporacion</th>
                <td>{evaporacion}</td>
                </tr>

                <tr>
                <th scope="row">alpha</th>
                <td>{valorAlfa}</td>
                </tr>

                <tr>
                <th scope="row">beta</th>
                <td>{valorBeta}</td>
                </tr>


            </tbody>
        </table>
    
    </div>
  


  )
}
