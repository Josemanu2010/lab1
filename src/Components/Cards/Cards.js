import React, { useState } from 'react'
import './Cards.css'
import Comp1 from '../Comp1/Comp1';

function Cards({est, esp, nombre, obj}) {

    const [episodios, setEpisodios] = useState(null);
    const [estadoE, setEstadoE] = useState(false)
    // const estadoEp = () => {
    //     setEstadoE(!estadoE);
    // }
    const detalleEpisodios = () => {
        setEpisodios(obj);
        setEstadoE(!estadoE);
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
            
        </div>
        <div className='btns'>
            <button type='button' onClick={detalleEpisodios}>Ver episodios</button>
            <button type='button'>Ver detalles</button>
        </div>
    </div>
  )
}

export default Cards