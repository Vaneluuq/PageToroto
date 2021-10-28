import React from 'react';
import '../CSS/styles.scss';
import iconExternalLink from '../assets/external-link.svg'
import { useEffect } from 'react';
import logo from "../assets/logo.svg"

const Header = () => {
    const [scrolled,setScrolled]=React.useState(false);

    const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 200 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    })
  
    let x=['navbar'];
    if(scrolled){
      x.push('scrolled');
    }
    
    return ( 
        <header className={x.join(" ")}>
            <div className="logo">
                <a href="https://www.toroto.mx/es"><img src={logo} alt="logo-img" /></a>
            </div>
            <nav className="options">
                <ul>
                    <li><a href="/">PROYECTOS</a></li>
                    <li><a href="#section1">SOBRE TOROTO</a></li>
                    <li><a href="#section1">BLOG</a></li>
                    <li><a href="#section1"> META REGISTRO</a></li>
                    <li><a class="menu_link" href="#footer">CONTACTO</a></li>
                </ul>
            </nav>
        </header>
        );
    }

export default Header;

{/* <img src={iconExternalLink} alt="" className="svg-icon"/> */}