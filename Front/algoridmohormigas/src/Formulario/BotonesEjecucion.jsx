import {React,useState,useEffect} from 'react'
import { useContext } from 'react';
import { DataContext } from '../variables/DataContext';



export const BotonesEjecucion = () => {
  
  const {canvasGlobal,aprendisaje,setAprendisaje,mejorDistancia, setMejorDistancia,mejorRuta, setMejorRuta,iteracionactual, setIteracionactual,iteraciones, setIteraciones,evaporacion, setEvaporacion,canthormigas, setCanthormigas,valorBeta, setValorBeta,valorAlfa, setValorAlfa,setValorFermona,valorFermona ,listapuntos, setlistapuntos , matrizAdya,setmatrizAdya ,matrizFer,setmatrizFer} = useContext(DataContext);

  useEffect(() => {
   // dibujarResultados();
  }, [mejorDistancia, mejorRuta]);
  
  
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
    
    //console.log(distanciaRecorrida);
    
    //retorna la lista del camino recorrido
    return {caminoRecorrido,distanciaRecorrida};
  };
  
  const dibujarPuntos = () => {
    if (canvasGlobal) {
      
    const context = canvasGlobal.getContext('2d');
    
    context.clearRect(0, 0, canvasGlobal.width, canvasGlobal.height);

    //dibujar lineas
    listapuntos.map((punto1, index1) => (
      listapuntos.map((punto2, index2) => (
        context.beginPath(),
        context.moveTo(punto1.x, punto1.y),
        context.lineTo(punto2.x, punto2.y),
        context.strokeStyle = "#b8bdbe46",
        context.stroke(),
        context.closePath()
      ))
    ));

    //dibujar puntos
    listapuntos.map((punto, index) => (
      context.beginPath(),
      context.arc(punto.x, punto.y, 2, 0, 2 * Math.PI),
      context.fillStyle = "black",
      context.fill(),
      context.closePath()
    ));
    }
  }


  const dibujarResultados = () => {
    if (canvasGlobal) {
    
    const context = canvasGlobal.getContext('2d');
  
    //dibujar mejor ruta
    dibujarPuntos();
    
    context.beginPath();
    context.moveTo(listapuntos[mejorRuta[0]], listapuntos[mejorRuta[0]+1]);
    mejorRuta.map((elemento,index) => {
      context.lineTo(listapuntos[elemento].x, listapuntos[elemento].y);
    });
    context.strokeStyle = "blue";
    context.stroke();
    context.closePath();

    
  }
    

  }
  
  const realizarIteracion = () => {
    let listaCaminos = [];
    
    for (let i = 0; i < canthormigas; i++) {
      let camino = hormiga();
      listaCaminos.push(camino);
    }

    evaporarFeromona();
    
    
    listaCaminos.map((elemento,index) => {
      //camino mas corto

      if (elemento.distanciaRecorrida < mejorDistancia) {
        setMejorDistancia(elemento.distanciaRecorrida);
        setMejorRuta(elemento.caminoRecorrido);
        dibujarResultados();
      }


      elemento.caminoRecorrido.map((elemento2,index2) => {
        
        if (index2 !== elemento.caminoRecorrido.length - 1) {
          let aporte = matrizFer[elemento.caminoRecorrido[index2]][elemento.caminoRecorrido[index2+1]]+(aprendisaje / elemento.distanciaRecorrida)          
          cambiarFeromona(elemento.caminoRecorrido[index2],elemento.caminoRecorrido[index2+1],aporte)
        }
        
      });
    });

    
    setIteracionactual(prevIteracion => prevIteracion + 1);

  };

  const ejecucion = () => {
    for (let i = 0; i < iteraciones; i++) {
      realizarIteracion();
      console.log("uw");
    }

  }

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
                <button type="button mb-3" class="btn btn-primary" onClick={ejecucion}>completar iteraciones</button>
            </div>  
           
        </div>

    </div>
  )
}
