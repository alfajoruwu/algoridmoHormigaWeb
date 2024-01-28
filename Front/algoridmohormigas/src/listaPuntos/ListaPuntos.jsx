import React from 'react'

import { useContext } from 'react';
import { DataContext } from '../variables/DataContext';


export const ListaPuntos = () => {
  
    const { setlistapuntos, listapuntos } = useContext(DataContext);


    const handleBorrarPunto = (indice) => {
        const nuevaLista = [...listapuntos];
        nuevaLista.splice(indice, 1);
        setlistapuntos(nuevaLista);
      };

    return (
    <div>
        <h3> Tabla de puntos</h3>
          <table class="table table-bordered table-striped">
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
                <td> <button type="button" onClick={() => handleBorrarPunto(index)} class="btn btn-warning">Borrar punto</button> </td>
              </tr>

            ))}
              
            </tbody>
          </table>

    </div>
  )
}
