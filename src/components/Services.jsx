import React from 'react'
import serviceIcon from '../assets/service_icon.svg'

const Services = ({service}) => {
    return ( 
        <div>
            <img src={serviceIcon} alt="" />
            <span>{service}</span>
        </div>
     );
}
 
export default Services;