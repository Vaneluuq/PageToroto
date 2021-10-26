import React from 'react'
import styles from '../CSS/style.css'

const Header = () => {
    return ( 
    <nav>
        <div className="containerHeader">
            <div className="logo">
                <a href="https://www.toroto.mx/es"><img src="https://www.toroto.mx/img/landing/logos/LOGO-BLANCO.png" alt="logo-img" /></a>
            </div>
            <div className="options">
                <ul>
                    <li><a class="menu_link" href="">PROYECTOS</a></li>
                    <li><a class="menu_link" href="">SOBRE TOROTO</a></li>
                    <li><a class="menu_link" href="">BLOG</a></li>
                    <li><a class="menu_link" href="">META REGISTRO</a></li>
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