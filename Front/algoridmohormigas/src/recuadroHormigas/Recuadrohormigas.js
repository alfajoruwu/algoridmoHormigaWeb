import React, { useState, useEffect } from 'react';
import './recuadro.css'; 
import { useContext } from 'react';

//importar para las variables
import { DataContext } from '../variables/DataContext';

const Recuadrohormigas = () => {
  
  
  const { setlistapuntos, listapuntos } = useContext(DataContext);
  
  const handleClick = (e) => {
    const xRelativeToDiv = e.clientX + window.scrollX;
    const yRelativeToDiv = e.clientY + window.scrollY;

    console.log(`Clic en las coordenadas X: ${xRelativeToDiv}, Y: ${yRelativeToDiv}`);

    const newClick = { xRelativeToDiv, yRelativeToDiv };

    setlistapuntos([...listapuntos, newClick]);

    console.log(listapuntos)

  };

  return (
    <div class="divPrincipal"  onClick={handleClick}>
      {listapuntos.map((point, index) => (
      <div key={index}>{`X: ${point.xRelativeToDiv}, Y: ${point.yRelativeToDiv}`}</div>
    ))}
    </div>
  );
};


export default Recuadrohormigas;