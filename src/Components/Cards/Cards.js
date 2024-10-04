import React, { useState } from 'react'
import './Cards.css'
import Comp1 from '../Comp1/Comp1';
import Comp2 from '../Comp2/Comp2';

function Cards({est, esp, nombre, obj}) {

    const [episodios, setEpisodios] = useState(null);
    const [estadoE, setEstadoE] = useState(false);
    const [detalles, setDetalles] = useState(null);
    const [showDetalles, setShowDetalles] = useState(false);
    
    const detalleEpisodios = () => {
        setEpisodios(obj);
        setEstadoE(!estadoE);
    }

    const detallesObj = () => {
        setDetalles(obj);
        // console.log(obj);
        setShowDetalles(!showDetalles);
    }

  return (
    <div className='cards'>
        <span><img src={obj.image} /></span>
        <h1>{nombre}</h1>
        <hr/>
        <div className='carBody'>
            <span><strong>Status:</strong> {est}</span>
            <span><strong>Especie:</strong> {esp}</span>
            {estadoE && <span>{episodios && <Comp1 envepisodios={episodios}/>}</span>}
            {showDetalles && <span>{detalles && <Comp2 showdetails={detalles}/>}</span>}
            
        </div>
        <div className='btns'>
            <button type='button' onClick={detalleEpisodios}>Ver episodios</button>
            <button type='button' onClick={detallesObj}>Ver detalles</button>
        </div>
    </div>
  )
}

export default Cards