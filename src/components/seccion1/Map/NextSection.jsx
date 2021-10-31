import React from 'react'
import { Link } from 'react-scroll';
import iconDown from '../../../assets/chevron-down.svg' 
import '../../../SASS/styles.scss';

const NextSection = () => {
    return (  
    <div className="nextSecction">
    <h4> Ver lista completa de proyectos </h4>
    <Link
      activeClass="active"
      to="section1"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}>
        <img src={iconDown} alt=""/>
    </Link>
</div>     );
}
 
export default NextSection;