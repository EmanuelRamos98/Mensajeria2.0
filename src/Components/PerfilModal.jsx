import React from 'react'
import './perfilModal.css'

const PerfilModal = ({mostrar, cerrar, perfil}) => {

    if (!mostrar) {
        return null
    }
    return (
        <div className='containerModal'>
            <button onClick={cerrar}>cerrar</button>

        </div>
    )
}

export default PerfilModal