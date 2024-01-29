import React from 'react'

export const MostrarDatos = () => {
  return (

    <div class="container">
        
        <h3> Datos iniciales </h3>
        
        <table class="table">
            
            <tbody>
                <tr>
                <th scope="row">Cantidad de Hormigas</th>
                <td>10</td>
                </tr>
                
                <tr>
                <th scope="row">Feromona inicial</th>
                <td>1</td>
                </tr>

                <tr>
                <th scope="row">Evaporacion</th>
                <td>0.5</td>
                </tr>

                <tr>
                <th scope="row">alpha</th>
                <td>1</td>
                </tr>

                <tr>
                <th scope="row">beta</th>
                <td>1</td>
                </tr>


            </tbody>
            </table>
    
    </div>
  


  )
}
