import React from 'react'

import { useContext } from 'react';
import { DataContext } from '../variables/DataContext';


export const MatrizFero = () => {
  

    const {matrizFer} = useContext(DataContext);

    

    return (
    <div>
    
    <h3> Matriz de feromonas </h3>
    <table class="table table-striped table-bordered">
      <tbody>
        {matrizFer.map((lista,index) => (
          <tr>
          {lista.map((elemento,index) => (
            <td> {elemento}</td>
          ) )}

          </tr>
        ))}
      </tbody>
    </table>

    </div>
  )
}
