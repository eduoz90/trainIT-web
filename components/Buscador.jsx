import React from 'react';
import '../css/Buscador.css'

export const Buscador = () =>{
    return(
        <>

        <section className='container-section-buscador'>
            <div className="buscador">
                <input type='text' placeholder='buscar palabras claves'/>
                <button  type='submit' >Buscar</button>
            </div>
        </section>
        
        
        
        </>
    )
}