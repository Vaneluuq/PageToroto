import React from 'react'
import '../CSS/styles.scss';
import Services from './Services';

const CardsProyects = ({img, location, name, description, service}) => {
    return ( 
        <div className="card">
            <img className="cardImagen" src={img} alt="" />
            <div className="cardInformation">
                <h5>{location}</h5>
                <h2>{name}</h2>
                <p>{description}</p>
                <Services
                 service = {service}
                 />
                <button>Ver proyecto completo</button>
            </div>
        </div>
     );
}
 
export default CardsProyects;