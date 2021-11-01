import React from 'react'
import '../../SASS/styles.scss';
import { Link} from 'react-router-dom';

const CardsProyects = ({img, location, name, description, servicesOffered, link}) => {

    return ( 
    <>
        <div className="card">
            <img className="cardImagen" src={img} alt="" />
            <div className="cardInformation">
                <h5>{location}</h5>
                <h2>{name}</h2>
                <p>{description}</p>
                <div className="cardServices">{servicesOffered}</div>
                <Link to= {link}>
                  <button>Ver proyecto completo</button>
                </Link>
            </div>
        </div>
    </>
     );
}
 
export default CardsProyects;