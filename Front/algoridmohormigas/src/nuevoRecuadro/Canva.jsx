import React, { useState, useEffect, useRef } from 'react';
import './canvas.css';

import { useContext } from 'react';
import { DataContext } from '../variables/DataContext';



//componente que se adapta al tamaño del div que lo contiene

//para dibujar en el canvas
//usar de ejemplo la funcion handleClick

const Canva = () => {
  const divRef = useRef(null);
  const canvasRef = useRef(null);
  const [divSize, setDivSize] = useState({ width: 0, height: 0 });

  const {setlistapuntos, listapuntos } = useContext(DataContext);
  const {matrizAdya,setmatrizAdya} = useContext(DataContext);
  const {matrizFer,setmatrizFer} = useContext(DataContext);
  const valorFermona = useContext(DataContext);


  function calculardistancia(x1,y1,x2,y2){
    const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return Math.round(distancia);
  }
  
  //ventana redimencionable
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

  //actualizar listas de puntos
  useEffect(() => {
    
    setmatrizAdya(
      listapuntos.map((punto1, index1) => (
        listapuntos.map((punto2, index2) => (
          calculardistancia(punto1.x, punto1.y, punto2.x, punto2.y)
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

    const newClick = { x, y };
    console.log(newClick);
    setlistapuntos([...listapuntos, newClick]);

    console.log(listapuntos)
  };

  return (
    <div ref={divRef} style={{ width: '100%', height: '100%' }}>
      <canvas class="canvas" ref={canvasRef} id="canvas" width={divSize.width} height={divSize.height} onClick={handleClick}></canvas>
    </div>
  );
};

export default Canva;