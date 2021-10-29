import React from 'react'
import '../../SASS/styles.scss'
import tooltip from '../../assets/tooltip_icon.svg'


const Implementation = ({ActividadesList, openModal}) => {
    return (
        <section className="implementation">
            <h2>Implementación <button onClick={ openModal} ><img src={tooltip} alt="" /></button> </h2>
            <div className="activities">
                <h5>Actividades de restauracion</h5>
                <div className="descriptionActivities">{ActividadesList}</div>
            </div>
        </section>
      );
}
 
export default Implementation;