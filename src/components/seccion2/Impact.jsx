import React from 'react'
import '../../SASS/styles.scss'

const Impact = ({cardsImpact}) => {
    return ( 
      <div className="containerImpact">
        <h2>Impacto</h2>
        <div className="containerCards">{cardsImpact}</div>
      </div>
     );
}
 
export default Impact;