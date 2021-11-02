import React from 'react'
import '../../SASS/styles.scss'
import useMediaQuery from '../MediaQuery';

const DescriptionProyect = ({location, nameProyect, servicesOffered, description, imgProyect, descriptionProblem}) => {

  const isDesktop = useMediaQuery('(min-width: 850px)');

    return ( 
      <>
      {
        isDesktop ? ( 
        <section className="descriptionProyect">
        <div className="itemsDescriptionProyect">
             <h4>{location}</h4>
             <h2>{nameProyect}</h2>
             <div className="itemsSevices">{servicesOffered}</div>
             <p>{description}</p>
           </div>
           <img className="imgProyect" src={imgProyect} alt="" />
           <div className="descriptionProblem">
             <h3>Problemática</h3>
             <p>{descriptionProblem}</p>
           </div>
      </section>) : (
         <section className="descriptionProyect">
           <div className="imgProyect"><div className="whiteSpace"></div></div>
            <div className="itemsDescriptionProyect">
              <h4>{location}</h4>
              <h2>{nameProyect}</h2>
              <div className="itemsSevices">{servicesOffered}</div>
              <p>{description}</p>
              <div className="descriptionProblem">
              <h3>Problemática</h3>
              <p>{descriptionProblem}</p>
            </div>
            </div>
       </section>
      )
      }
    </>
     
  );
}
 
export default DescriptionProyect