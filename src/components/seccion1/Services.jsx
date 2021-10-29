import React from 'react'
import serviceIcon from '../../assets/service_icon.svg'
import '../../SASS/styles.scss';

const Services = ({service}) => {
    return ( 
        <div className="service">
            <img src={serviceIcon} alt="" />
            <span>{service}</span>
        </div>
     );
}
 
export default Services;