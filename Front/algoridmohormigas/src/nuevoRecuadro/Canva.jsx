import React, { useState, useEffect, useRef } from 'react';
import './canvas.css';

//componente que se adapta al tamaño del div que lo contiene

//para dibujar en el canvas
//usar de ejemplo la funcion handleClick

const Canva = () => {
  const divRef = useRef(null);
  const canvasRef = useRef(null);
  const [divSize, setDivSize] = useState({ width: 0, height: 0 });

  
  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        setDivSize({
          width: divRef.current.offsetWidth,
          height: divRef.current.offsetHeight,
        });
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    

    return () => {
      
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  // funciones

  const handleClick = (event) => {
    const canvas = canvasRef.current;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    console.log(`Clicked at position ${x}, ${y} on the canvas`);

    const context = canvas.getContext('2d');
    context.fillStyle = 'red';
    context.fillRect(0, 0, divSize.width, divSize.height);
  };

  return (
    <div ref={divRef} style={{ width: '100%', height: '100%' }}>
      <canvas class="canvas" ref={canvasRef} id="canvas" width={divSize.width} height={divSize.height} onClick={handleClick}></canvas>
    </div>
  );
};

export default Canva;