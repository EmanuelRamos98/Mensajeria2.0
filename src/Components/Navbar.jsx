import React from 'react'
import { GoGear } from "react-icons/go"
import { VscAccount } from "react-icons/vsc"
import './navbar.css'



const Navbar = () => {
    return (
        <div className='containerNav'>
            <div>
                <GoGear />
            </div>
            <div>
                <VscAccount />
            </div>
        </div>
    )
}

export default Navbar