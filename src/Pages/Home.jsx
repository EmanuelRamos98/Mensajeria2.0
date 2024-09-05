import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
    return (
        <div>
            <h1>Bienvenido</h1>
            <h3>Emanuel</h3>
            <p>Al mejor servicio de mensajeria</p>
            
            <Link to={'/contac'}>Ingresar</Link>
        </div>
    )
}

export default Home