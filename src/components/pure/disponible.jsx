import React , { useState } from 'react'
 


function Disponible(props) {
  const [conect, setConect] = useState(props.conect)
  const [disponibleText, setDisponibleText] = useState('No disponible')
  const handleConect = ()=>{
if(conect === false) {
  setConect(true)
  setDisponibleText('No disponible')
}else{
  setConect(false)
  setDisponibleText('En linea')
}
  }
  return (
    <div>
       <h4>{disponibleText} </h4>
<button onClick={handleConect}>Cambiar estado</button>
    </div>
  )
}



export default Disponible
