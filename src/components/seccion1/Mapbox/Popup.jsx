import React from "react";

const Popup = ({ feature, data }) => {
  const { id } = feature.properties;

  return (

    <div id={`popup-${id}`}>
             {data.map(card => 
              <div key={card.id} className="divCard">
                <CardsProyects
                img={getImages(card.id)}
                location= {card.location}
                name = {card.name}
                description ={card.description}
                link = { getLinks(card.id)}
               
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
  );
};

export default Popup;