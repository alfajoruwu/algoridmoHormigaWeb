import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataContextProvider(props) {
 
  const [listapuntos,setlistapuntos] = useState([]);
  const [matrizAdya, setmatrizAdya] = useState([[]]);

  const [matrizFer,setmatrizFer] = useState([[]]);

  const valorFermona = useState(1);


  return (
    <DataContext.Provider value={ {valorFermona ,listapuntos, setlistapuntos , matrizAdya,setmatrizAdya ,matrizFer,setmatrizFer } }>
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