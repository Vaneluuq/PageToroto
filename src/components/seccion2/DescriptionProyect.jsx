import React from 'react'
import '../../SASS/styles.scss'

const DescriptionProyect = ({location, nameProyect, servicesOffered, description, imgProyect, descriptionProblem}) => {
    return ( 
      <section className="descriptionProyect">
        <div className="itemsDescriptionProyect">
             <h4>{location}</h4>
             <h2>{nameProyect}</h2>
             <div>{servicesOffered}</div>
             <p>{description}</p>
           </div>
           <img className="imgProyect" src={imgProyect} alt="" />
           <div className="descriptionProblem">
             <h3>Problemática</h3>
             <p>{descriptionProblem}</p>
           </div>
      </section>
  );
}
 
export default DescriptionProyect