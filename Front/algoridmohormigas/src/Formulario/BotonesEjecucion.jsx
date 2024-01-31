import {React,useState} from 'react'
import { useContext } from 'react';
import { DataContext } from '../variables/DataContext';



export const BotonesEjecucion = () => {
  
  const {aprendisaje,setAprendisaje,mejorDistancia, setMejorDistancia,mejorRuta, setMejorRuta,iteracionactual, setIteracionactual,iteraciones, setIteraciones,evaporacion, setEvaporacion,canthormigas, setCanthormigas,valorBeta, setValorBeta,valorAlfa, setValorAlfa,setValorFermona,valorFermona ,listapuntos, setlistapuntos , matrizAdya,setmatrizAdya ,matrizFer,setmatrizFer} = useContext(DataContext);

  
  function elegirElementoConProbabilidad(elementos, probabilidades) {
    // Verificar si las listas tienen la misma longitud
    if (elementos.length !== probabilidades.length) {
        console.error("Las listas de elementos y probabilidades deben tener la misma longitud.");
        return null;
    }

    // Calcular la suma total de probabilidades
    const sumaProbabilidades = probabilidades.reduce((suma, probabilidad) => suma + probabilidad, 0);

    // Generar un número aleatorio entre 0 y la suma total de probabilidades
    const numeroAleatorio = Math.random() * sumaProbabilidades;

    // Elegir el elemento según la probabilidad acumulativa
    let probabilidadAcumulativa = 0;
    for (let i = 0; i < elementos.length; i++) {
        probabilidadAcumulativa += probabilidades[i];
        if (numeroAleatorio < probabilidadAcumulativa) {
            return elementos[i];
        }
    }

    // En caso de algún problema, devolver null
    return null;
  }

  function extraerElementoDeLista(elemento, lista) {
    let indice = lista.indexOf(elemento);

    if (indice !== -1) {
        let elementoExtraido = lista.splice(indice, 1)[0];
        return elementoExtraido;
    } else {
        console.log("Elemento no encontrado en la lista.");
        return null;  // Retornar null si el elemento no está en la lista
    }
  }

  const hormiga = () => {
    
    //funcionamiento hormiga 
    // crear lista de nodos a visitar  
    // aplicar formula para seleccionar el siguiente nodo
    // avanzar
    // eliminar nodo avanzado de la lista
    // repetir hasta que la lista este vacia
    // ir a nodo inicial    
    
      //lista de nodos por visitar
      let listaVisitas = [];
      let nodoActual = 0;
      let formula1 = [];
      let provabilidadcaminos = [];
      let caminoRecorrido = [];
      let distanciaRecorrida = 0;


      matrizAdya.forEach((lista, index) => {
        listaVisitas = [...listaVisitas, index];
      });
      //quito nodo actual
      caminoRecorrido.push(listaVisitas.shift());

      
    while (listaVisitas.length > 0) {
      //calcular probabilidad de caminos parte 1
      let auxsuma = 0;
      listaVisitas.map((elemento,index) => {
          let prova = matrizFer[nodoActual][elemento] * (1/matrizAdya[nodoActual][elemento]) 
          formula1.push( prova);
          //sumatoria
          auxsuma += prova;
      });

      //calcular la probavilidad parte 2
      formula1.map((elemento,index) => {
          provabilidadcaminos.push( elemento / auxsuma);    
      });

      
      //avanzar nodo
      let caminoSleccionado = elegirElementoConProbabilidad(listaVisitas,provabilidadcaminos);
      caminoRecorrido.push(extraerElementoDeLista(caminoSleccionado,listaVisitas));

      formula1 = [];
      provabilidadcaminos = [];

      //sumar distancia
      distanciaRecorrida += matrizAdya[nodoActual][caminoSleccionado];

      //actualizar nodo actual
      nodoActual = caminoSleccionado;
      
    }
    //sumar distancia de regreso al nodo inicial
    distanciaRecorrida += matrizAdya[nodoActual][0];
    
    //añadir inicial a la lista
    caminoRecorrido.push(0);
    console.log(distanciaRecorrida);
    //retorna la lista del camino recorrido
    return {caminoRecorrido,distanciaRecorrida};
  };
  
  
  const realizarIteracion = () => {
    let listaCaminos = [];
    
    for (let i = 0; i < canthormigas; i++) {
      let camino = hormiga();
      listaCaminos.push(camino);
    }

    evaporarFeromona();
    
    
    listaCaminos.map((elemento,index) => {

      elemento.caminoRecorrido.map((elemento2,index2) => {
        console.log(elemento.caminoRecorrido);
        
        if (index2 !== elemento.caminoRecorrido.length - 1) {
          
          console.log(matrizFer[elemento.caminoRecorrido[index2]][elemento.caminoRecorrido[index2+1]]);
          
          
          let aporte = matrizFer[elemento.caminoRecorrido[index2]][elemento.caminoRecorrido[index2+1]]+(aprendisaje / elemento.distanciaRecorrida)
          console.log(aporte);
          
          cambiarFeromona(elemento.caminoRecorrido[index2],elemento.caminoRecorrido[index2+1],aporte)

        }
        
      });
    });




  };



  const cambiarFeromona = (nodo1,nodo2,valor) => {
    const nuevaMatriz = [...matrizFer];
    nuevaMatriz[nodo1][nodo2] = valor;
    setmatrizFer(nuevaMatriz);
  }

  const evaporarFeromona = () => {
    const nuevaMatriz = [...matrizFer];
    
    nuevaMatriz.forEach((lista,index1) => {
      lista.forEach((elemento,index2) => {
        nuevaMatriz[index1][index2] = elemento * (1-evaporacion);
      });
    });
    setmatrizFer(nuevaMatriz);

  };
  
  
  return (
    <div class="container">

        <div class="row mb-3">
            <div class="col">
                <button type="button mb-3" class="btn btn-primary" onClick={realizarIteracion}>avanzar un nodo</button>
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
