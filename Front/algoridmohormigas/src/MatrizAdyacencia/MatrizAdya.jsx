import React from 'react'

import { useContext } from 'react';
import { DataContext } from '../variables/DataContext';

export const MatrizAdya = () => {
  
  const {matrizAdya,setmatrizAdya} = useContext(DataContext);

  
  
  return (
    <div>
        <h3> Matriz de adyacencia </h3>
          <table class="table table-bordered table-striped">

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
  )
}
