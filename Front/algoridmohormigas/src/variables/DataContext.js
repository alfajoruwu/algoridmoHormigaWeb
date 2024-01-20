import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataContextProvider(props) {
 
  const [listapuntos,setlistapuntos] = useState([]);
  const [matrizAdya, setmatrizAdya] = useState([[]]);

  return (
    <DataContext.Provider value={ {listapuntos, setlistapuntos , matrizAdya,setmatrizAdya} }>
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