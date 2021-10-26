import React from 'react'
import CardsProyects from './CardsProyects';
import '../CSS/styles.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import imgProyect from '../assets/img_project_gallery_1.png'


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
        <section id="seccion1" className="section1">
          <h2>Todos nuestros proyectos</h2>
          <div className="cards">
          {data.map(card => 
              <div key={card.id}>
                <CardsProyects
                img={imgProyect}
                location= {card.location}
                name = {card.name}
                description ={card.description}
                services = {card.services}
                />
              </div>
            )}

          </div>
        </section>
     );
}
 
export default DescriptionProyects;