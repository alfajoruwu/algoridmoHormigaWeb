import React from 'react'
import { useContext } from 'react';
import { DataContext } from '../variables/DataContext';


export const Datosiniciales = () => {
  
  const {evaporacion, setEvaporacion,canthormigas, setCanthormigas,valorBeta, setValorBeta,valorAlfa, setValorAlfa,setValorFermona,valorFermona} = useContext(DataContext);
  

    
  const valoresinput = () => {
        
        var hormigas = document.getElementById('Canthormigas').value
        if (hormigas === "") {
            hormigas = 10
        }
        setCanthormigas(hormigas); 

        var feromona = document.getElementById('feromona').value
        if (feromona === "") {
            feromona = 1
        }
        setValorFermona(feromona);

        var evaporacion = document.getElementById('evapora').value
        if (evaporacion === "") {
            evaporacion = 0.5
        }
        setEvaporacion(evaporacion);

        var alpha = document.getElementById('alpha').value
        if (alpha === "") {
            alpha = 1
        }
        setValorAlfa(alpha);

        var beta = document.getElementById('beta').value
        if (beta === "") {
            beta = 1
        }
        setValorBeta(beta);

    }


  
  return (
    <div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Cantidad de hormigas</span>
            <input id='Canthormigas'  type="text" class="form-control" placeholder="10"></input>
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Feromona</span>
            <input id='feromona' type="text" class="form-control" placeholder="1" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Evaporacion</span>
            <input id='evapora' type="text" class="form-control" placeholder="0.5" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">alpha</span>
            <input id='alpha' type="text" class="form-control" placeholder="1" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">beta</span>
            <input id='beta' type="text" class="form-control" placeholder="1" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        <div class="row mb-3">
            <div class="col">
                <button type="button mb-3" class="btn btn-primary" onClick={valoresinput}>Aplicar cambios</button>
            </div>    
        </div>


    </div>
  )
}
