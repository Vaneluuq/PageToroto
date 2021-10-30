import React from 'react'

const CardImpact = ({value, name}) => {
    return (
      <div className="cardImp">
        <h3>{value}</h3>
        <p>{name}</p>
        <div className="backgroundCard"></div>
      </div>  
    );
}
 
export default CardImpact;