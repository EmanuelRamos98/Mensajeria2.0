import React from 'react'
import { useParams } from 'react-router-dom';
import { Contac } from '../Pages';
import data from '../data'
import './chats.css'

const Chats = () => {
    const { contac_id } = useParams()
    const chat = data.find(el=> el.id === Number(contac_id))
    const mensajes = chat.mensajes
    
    return (
        <div className='containerChats'>
            <Contac />
            <div className='chats'>
            {mensajes.map(mensaje=>{
                return(
                    <div key={mensaje.id}>
                        {mensaje.texto}
                        {mensaje.hora}
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Chats