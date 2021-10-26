import React from 'react';
import '../CSS/styles.scss';
import iconExternalLink from '../assets/external-link.svg'


const Header = () => {
    return ( 
    <nav>
        <div className="containerHeader">
            <div className="logo">
                <a href="https://www.toroto.mx/es"><img src="https://www.toroto.mx/img/landing/logos/LOGO-BLANCO.png" alt="logo-img" /></a>
            </div>
            <div className="options">
                <ul>
                    <li><a href="">PROYECTOS</a></li>
                    <li><a href="">SOBRE TOROTO</a></li>
                    <li><a href="">BLOG</a></li>
                    <li><a href=""> <img src={iconExternalLink} alt="" className="svg-icon"/> META REGISTRO</a></li>
                    <li><a class="menu_link" href="">CONTACTO</a></li>
                </ul>
            </div>
        </div>
    </nav>
        );
    }

export default Header;
<div>
    Soy el header 
</div>