import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.png'

import './styles.css'

interface HeaderProps{
    title: string
    description?: string 
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
       <header className="header">
           <div className="top-bar-container">
               <Link to="/">
                   <img src={backIcon} alt="voltar"/>
               </Link>
               <img src={logoImg} alt=""/>
           </div>

           <div className="header-content">
                <strong>{props.title}</strong>
                {props.description && <p>{props.description}</p>}
           </div>
       </header>
    )
}

export default Header