import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Contac } from '../Pages';
import { MdOutlineArrowBack } from "react-icons/md";
import data from '../data'
import './chats.css'
import PerfilModal from './PerfilModal';


const Chats = () => {
    const { contac_id } = useParams()
    const chat = data.find(el => el.id === Number(contac_id))
    const mensajes = chat.mensajes
    const nav = useNavigate()
    const [modalIsOpen, setIsOpen] = useState(false)

    const openModal = () => { setIsOpen(true) }
    const closeModal = () => { setIsOpen(false) }
    const handleClick = () => { nav('/contac') }


    return (
        <>
        <div className={`overlay ${modalIsOpen && 'active'}`}></div>
        <div className='containerChats'>
            <div className='containerContacChat'>
                <Contac />
            </div>
            <div className='div'>
                <div className='navbarChat'>
                    <div className="containerNombre">
                        <span>{chat.ultima_vez}</span>
                        <span>{chat.nombre}</span>
                    </div>
                    <img src={chat.imagen} onClick={openModal} alt="imagen-perfil" className='perfilNavbarChat' />
                    <button onClick={handleClick}
                        className='volverButton'>
                        <MdOutlineArrowBack className='arrowBack' />
                    </button>
                </div>
                <div className='chats'>
                    {mensajes.map(mensaje => {
                        return (
                            <div key={mensaje.id}>
                                {mensaje.texto}
                                {mensaje.hora}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>        
        <PerfilModal mostrar={modalIsOpen} cerrar={closeModal} prefil={chat}/>
        </>
    )
}

export default Chats