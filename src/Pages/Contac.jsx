import React from 'react'
import { Navbar } from '../Components'
import data from '../data'
import { Link } from 'react-router-dom'
import './contac.css'


const Contac = () => {
    return (
        <div className='containerContac'>
            <Navbar />
            <div>
            Contac
            {data.map(contactos => {
                return (
                    <div key={contactos.id}>
                        <Link to={'/contac/' + contactos.id}>
                            {contactos.nombre}
                            {contactos.ultima_vez}
                        </Link>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Contac