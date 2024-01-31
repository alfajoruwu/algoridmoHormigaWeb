import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataContextProvider(props) {
 
  const [listapuntos,setlistapuntos] = useState([]);
  const [matrizAdya, setmatrizAdya] = useState([[]]);
  const [matrizFer,setmatrizFer] = useState([[]]);

  const [valorFermona, setValorFermona] = useState(1);

  const [valorAlfa, setValorAlfa] = useState(1);
  const [valorBeta, setValorBeta] = useState(1);

  const [canthormigas, setCanthormigas] = useState(10);

  const [evaporacion, setEvaporacion] = useState(0.5);

  const [iteraciones, setIteraciones] = useState(1);
  const [iteracionactual, setIteracionactual] = useState(0);

  const [mejorRuta, setMejorRuta] = useState([]);
  const [mejorDistancia, setMejorDistancia] = useState(0);

  const [aprendisaje,setAprendisaje] = useState(1);


  return (
    <DataContext.Provider value={{aprendisaje,setAprendisaje,mejorDistancia, setMejorDistancia,mejorRuta, setMejorRuta,iteracionactual, setIteracionactual,iteraciones, setIteraciones,evaporacion, setEvaporacion,canthormigas, setCanthormigas,valorBeta, setValorBeta,valorAlfa, setValorAlfa,setValorFermona,valorFermona ,listapuntos, setlistapuntos , matrizAdya,setmatrizAdya ,matrizFer,setmatrizFer } }>
      {props.children}
    </DataContext.Provider>
  );

}


//forma de usarlo facilito,
// importas esto:
// import { DataContext } from '../variables/DataContext';


//formas de llamarlo, la mas facil usar tal cual las variables que exportas:
// {contextData.setContextData(99)}
// {contextData.contextData}

//forma de llamarlo 2 (recomendable)
//     const {valorFermona} = useContext(DataContext);
// llamar la variable del datacontext y usarlo tal cual
