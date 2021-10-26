import React from 'react'
import serviceIcon from '../assets/service_icon.svg'
import '../CSS/styles.scss';

const Services = ({service}) => {
    return ( 
        <div className="service">
            <img src={serviceIcon} alt="" />
            <span>{service}</span>
        </div>
     );
}
 
export default Services;