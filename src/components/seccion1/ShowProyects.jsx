import React from 'react'
import CardsProyects from './CardsProyects';
import Services from './Services';
import imgProyect1 from '../../assets/img_project_1.png';
import imgProyect2 from '../../assets/img_project_2.png';
import imgProyect3 from '../../assets/img_project_3.png';
import imgProyect4 from '../../assets/img_project_4.png';
import '../../SASS/styles.scss';

const DescriptionProyects = ({data}) => {

    const links = [
      { id:"P001",
        link: "/proyect1", 
        image: imgProyect1
      },
      { id:"P002",
        link: "/proyect2",
        image: imgProyect2
      },
      { id:"P003",
        link: "proyect3",
        image: imgProyect3
      },
      { id:"P004",
        link: "proyect4",
        image: imgProyect4
      }
    ]
      

  const getLinks = (id) => {
    for (let i = 0; i< links.length; i++){
      if(links[i].id === id){
          return links[i].link
      }
    }
  }

  const getImages = (id) => {
    for (let i = 0; i< links.length; i++){
      if(links[i].id === id){
          return links[i].image
      }
    }
  }



    return ( 
        <section id="section1" className="section1">
            <h2 className="titleSection1">Todos nuestros proyectos</h2>
            <div className="cards">
            {data.map(card => 
                <div key={card.id} className="divCard">
                  <CardsProyects
                  img={getImages(card.id)}
                  location= {card.location}
                  name = {card.name}
                  description ={card.description}
                  link = { getLinks(card.id)}
                
                  servicesOffered = {
                      card.services.map(service => 
                        <div key= {service.id}>
                          <Services
                          service = {service}
                          />
                        </div>
                      )}
                  />
                </div>
              )}
            </div>
        </section>
     );
}
 
export default DescriptionProyects;