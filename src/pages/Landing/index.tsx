import React from 'react';
import {Link} from 'react-router-dom'

import logoImg from '../../assets/images/logo.png'
import landingImg from '../../assets/images/landing.svg'

import {IconContext} from 'react-icons'
import {FcSearch} from 'react-icons/fc'
import {FaHandshake} from 'react-icons/fa'

import './styles.css'

export default function Landing(){
    return (
       <div id="page-landing">
           <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} className="logo" alt="Partner"/>
                    <h2>Sua plataforma para encontrar sócios</h2>
                </div> 

                <img 
                    src={landingImg} 
                    alt="Plataforma de conexões de sócios"
                    className="hero-image"
                />

                <div className="buttons-container">

                    <Link to="/announce" className="announce">
                            <IconContext.Provider value={{ color: "#fff", className:"icon" }}>
                                <FaHandshake /> 
                            </IconContext.Provider>
                            Anunciar
                    </Link>

                    <Link to="/list" className="search">
                        <IconContext.Provider value={{ className:"icon" }}>
                            < FcSearch /> 
                         </IconContext.Provider>
                            Procurar
                    </Link>
                </div>
           </div>
       </div>
    )
}