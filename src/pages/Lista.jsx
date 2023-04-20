
import { useContext} from 'react'
import { Products } from '../componets/Products'
import './Lista.css';

const Lista = () => {
 
  const { myArrayText, setMyArrayText } = useContext(Products)

  const addMany = () => {

    let nombre = prompt("añade un nombre");
    let cantidad = prompt("añade una cantidad");
    const copyArray = myArrayText.slice();
    copyArray.push({ nombre: nombre, cantidad: cantidad })
    setMyArrayText(copyArray)
  }

  const modify = (index) => {
    const listaProduct = [...myArrayText]
    listaProduct[index].nombre = prompt("añade un nombre");
    listaProduct[index].cantidad = prompt("añade una cantidad");
    setMyArrayText(listaProduct)
  }

  const eliminar = (many) => {
    const filtrar = myArrayText.filter((elemento) => many !== elemento);
    setMyArrayText(...[filtrar])
  }

  return (

    <div>
      <h1 className='tittle'>Productos</h1>
      <div className='carta'>
        {myArrayText.map((elemento, index) => {

          return <>
            <div className='tarjeta' key={index}>
              <button className='borrar' onClick={() => eliminar(elemento)}>borrar</button>
              <button className='modificar' onClick={() => modify(index)}>modificar</button>
              <p>{elemento.nombre} </p>
              <p>Cantidad:{elemento.cantidad} </p>
            </div>
          </>
        })}

        <button className='añadir' onClick={addMany}>añadir</button>
       
        
      </div>
    </div>
  )
}

export default Lista