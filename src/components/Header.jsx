import React from 'react';
import '../SASS/styles.scss';
import iconExternalLink from '../assets/external-link.svg'
import { useEffect, useState } from 'react';
import logo from "../assets/logo.svg"
import close from "../assets/close_icon.svg"
import hamburgerMenu from "../assets/hamburguer_menu_icon.svg"
import useMediaQuery from './MediaQuery';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
      backgroundColor: 'rgba(0,0,0,0.6)'
    },
  content: {
    backgroundColor: '#ffbc15',
    top: '0',
    left:'0',
    border: "none",
    width:"70vw",
    height: "100vh",
    padding:"0",
    margin:"0"
  },
};


const Header = () => {
    const [scrolled,setScrolled]= useState(false);
    const isDesktop = useMediaQuery('(min-width: 850px)');



  // Menu pegajoso en desktop
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


  //abre o cierra el menu hamburguesa

  const [modalIsOpen, setIsOpen] = useState(false);


  // Se abre modal que crea o edita nota
   function openModal() {
      setIsOpen(true);
   }

   // Se cierra modal que crea o edita nota
   const closeModal = () => {
     setIsOpen(false);
   }


    return (
     <>
        {isDesktop ? (
        <header className={x.join(" ")}>
        <div className="logo">
            <a href="https://www.toroto.mx/es"><img src={logo} alt="logo-img" /></a>
        </div>
        <nav className="options">
            <ul>
                <li><a href="/">PROYECTOS</a></li>
                <li><a href="#section1">SOBRE TOROTO</a></li>
                <li><a href="#section1">BLOG</a></li>
                <li><a className="menu_img" href="#section1"> <img src={iconExternalLink} alt="" /> META REGISTRO </a></li>
                <li><a class="menu_link" href="#footer">CONTACTO</a></li>
            </ul>
        </nav>
    </header>
    ) : (
      <>
         {
        modalIsOpen ? (
          <Modal
              isOpen={modalIsOpen}
              style={customStyles}
              onRequestClose={closeModal}>
                <nav className="optionsResponsive">
                  <button className="btnCloseModal" onClick= {closeModal}> <img src={close} alt="" /> </button>
                  <ul className="list">
                      <li className="item"><a href="/">PROYECTOS</a></li>
                      <li className="item"><a href="#section1">SOBRE TOROTO</a></li>
                      <li className="item"><a href="#section1">BLOG</a></li>
                      <li className="item"><a href="#section1"> META REGISTRO</a></li>
                      <li className="item"><a class="menu_link" href="#footer">CONTACTO</a></li>
                  </ul>
                </nav>
                </Modal>
            ): (
          <div className="menuResponsive">
              <button className="openButton" onClick= {openModal}> <img className="iconMenu" src={hamburgerMenu} alt="" /> </button>
              <a className="logo" href="https://www.toroto.mx/es"><img className="iconLogo" src={logo} alt="logo-img" /></a>
          </div>
        )
      }
      </>
    )}
      </>
      );
    }

export default Header;















//   const [isNavVisible, setNavVisibility] = useState(false);
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {


//       if(e.matches){
//         setIsSmallScreen(true);
//       }else{
//         setIsSmallScreen(false);
//       }
//     })

//     useEffect(() => {
//       const mediaQuery = window.matchMedia("(max-width: 450px)");

//       return () => {
//         cleanup
//       }
//     }, [input])



//   const toggleNav = () => {
//     setNavVisibility(!isNavVisible);
//   };
