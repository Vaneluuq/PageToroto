import React from 'react'


const Implementation = ({ActividadesList}) => {
    return (
        <section className="implementation">
            <h2>Implementación </h2>
            <div className="activities">
                <h5>Actividades de restauracion</h5>
                <div className="descriptionActivities">{ActividadesList}</div>
            </div>
        </section>
      );
}
 
export default Implementation;