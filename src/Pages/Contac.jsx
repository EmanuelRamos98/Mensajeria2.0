import React from 'react'
import { Navbar } from '../Components'
import data from '../data'
import { Link } from 'react-router-dom'
import './contac.css'


const Contac = () => {
    return (
        <div className='containerContac'>
            <Navbar />
            <div className='listContac'>
            <h2 className='titleContac'>Chats</h2>
            {data.map(contactos => {
                return (
                    <div className='contac' key={contactos.id}>
                            <img src={contactos.imagen} className='imgContac' alt="" />
                        <Link to={'/contac/' + contactos.id}>
                            <p className='nombreContac'>{contactos.nombre}</p>
                            <p className='ultimaVez'>{contactos.ultima_vez}</p>
                        </Link>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Contac