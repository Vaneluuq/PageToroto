import React from 'react'
import '../../SASS/styles.scss'

const Details = ({name, description}) => {
    return ( 
        <details>
            <summary>{name}</summary>
            <p>{description}</p>
        </details>
     );
}
 
export default Details;
