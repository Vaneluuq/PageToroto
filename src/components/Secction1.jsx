import React from 'react'
import CardsProyects from './CardsProyects';
import '../CSS/styles.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import imgProyect from '../assets/img_project_gallery_1.png'
import Services from './Services';


const DescriptionProyects = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
      axios.get('https://fieldops-api.toroto.mx/api/projects')
       .then(response => {
          setData(response.data.data);
        })
         .catch(e => {
          console.log(e);
           })
  }, []);



    return ( 
        <section id="section1" className="section1">
          <h2 className="titleSection1">Todos nuestros proyectos</h2>
          <div className="cards">
          {data.map(card => 
              <div key={card.id}>
                <CardsProyects
                img={imgProyect}
                location= {card.location}
                name = {card.name}
                description ={card.description}
                servicesOffered = {
                    card.services.map( service => 
                        <Services
                        service = {service}
                        />
                    )
                }
                />
              </div>
            )}

          </div>
        </section>
     );
}
 
export default DescriptionProyects;