import React, { useState, useEffect } from 'react';
import './recuadro.css'; 

const Recuadrohormigas = () => {
  
  const [clicks, setClicks] = useState([]);
  

  
  const handleClick = (e) => {
    const xRelativeToDiv = e.nativeEvent.offsetX;
    const yRelativeToDiv = e.nativeEvent.offsetY;

    console.log(`Clic en las coordenadas X: ${xRelativeToDiv}, Y: ${yRelativeToDiv}`);

    const newClick = { xRelativeToDiv, yRelativeToDiv };

    setClicks(prevClicks => [...prevClicks, newClick]);

  };

  return (
    <div class="divPrincipal"  onClick={handleClick}>
      
    </div>
  );
};


export default Recuadrohormigas;