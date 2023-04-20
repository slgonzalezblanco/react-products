
import { useState } from 'react';
import './App.css';


import { Products } from './componets/Products';
import Lista from './pages/Lista';


function App() {
  const [myArrayText,setMyArrayText]= useState([{
    id:1,
    nombre:"Lapiz",
    cantidad:5,
  },{
    id:2,
    nombre:"Libro",
    cantidad:1,
  },{
    id:3,
    nombre:"Goma",
    cantidad:2,
  }])
 
  return (
<Products.Provider value={{setMyArrayText, myArrayText}}>

<Lista></Lista>
</Products.Provider>
  );
}

export default App;
