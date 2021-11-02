import React from 'react';
import logo from "../assets/logo.svg"
import '../SASS/styles.scss';
import facebookIcon from '../assets/facebook_icon.svg';
import instagramIcon from '../assets/instagram_icon.svg'
import twitterIcon from '../assets/twitter_icon.svg'
import linkedinIcon from '../assets/linkedin_icon.svg'

const Footer = () => {
    return ( 
        <footer>
            <div className="socialNetworks">
                <a href="https://www.toroto.mx/es"><img src={facebookIcon} alt="icon_facebook" className="svg-facebook"/> </a>
                <a href="https://www.toroto.mx/es"><img src={linkedinIcon} alt="icon_linkedin" className="svg-linkedin"/></a>
                <a href="https://www.toroto.mx/es"><img src={instagramIcon} alt="icon_instagram" className="svg-instagram"/></a>
                <a href="https://www.toroto.mx/es"><img src={twitterIcon} alt="icon_twitter" className="svg-twitter"/></a>
            </div>
            <img className="logo" src={logo} alt="" />
        </footer>
     );
}
 
export default Footer;