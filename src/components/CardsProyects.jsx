import React from 'react'
import '../CSS/styles.scss';

const CardsProyects = ({img, location, name, description, servicesOffered}) => {
    return ( 
        <div className="card">
            <img className="cardImagen" src={img} alt="" />
            <div className="cardInformation">
                <h5>{location}</h5>
                <h2>{name}</h2>
                <p>{description}</p>
                <div className="cardServices">
                    {servicesOffered}</div>
                <button>Ver proyecto completo</button>
            </div>
        </div>
     );
}
 
export default CardsProyects;