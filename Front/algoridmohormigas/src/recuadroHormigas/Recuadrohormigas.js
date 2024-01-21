import React, { useState, useEffect } from 'react';
import './recuadro.css'; 
import { useContext } from 'react';

//importar para las variables
import { DataContext } from '../variables/DataContext';

const Recuadrohormigas = () => {
  
  
  const { setlistapuntos, listapuntos } = useContext(DataContext);
  const {matrizAdya,setmatrizAdya} = useContext(DataContext);
  const { matrizFer,setmatrizFer} = useContext(DataContext);
  const valorFermona = useContext(DataContext);

  function calculardistancia(x1,y1,x2,y2){
    const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return Math.round(distancia);
  }

  const handleClick = (e) => {
    const xRelativeToDiv = e.clientX + window.scrollX;
    const yRelativeToDiv = e.clientY + window.scrollY;

    console.log(`Clic en las coordenadas X: ${xRelativeToDiv}, Y: ${yRelativeToDiv}`);

    const newClick = { xRelativeToDiv, yRelativeToDiv };

    setlistapuntos([...listapuntos, newClick]);

    
    
  };

  useEffect(() => {
    // Utiliza la versión actualizada de listapuntos para calcular la matriz de adyacencia
    setmatrizAdya(
      listapuntos.map((punto1, index1) => (
        listapuntos.map((punto2, index2) => (
          calculardistancia(punto1.xRelativeToDiv, punto1.yRelativeToDiv, punto2.xRelativeToDiv, punto2.yRelativeToDiv)
        ))
      ))
    );
    
    setmatrizFer(
      listapuntos.map((punto1, index1) => (
        listapuntos.map((punto2, index2) => (
          {valorFermona}
        ))
      ))
    )
    

  }, [listapuntos, setmatrizAdya]);

  return (
    <div class="divPrincipal"  onClick={handleClick}>
  
    </div>
  );
};


export default Recuadrohormigas;