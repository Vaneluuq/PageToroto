import React from "react";
import Services from "../Services"
import CardsProyects from "../CardsProyects"

const Popup = ({id, location, name, description}) => {


  return (
      <div id = {id}>
         <CardsProyects
        // img={getImages(card.id)}
        location= {location}
        name = {name}
        description ={description}
        />

      </div>
  );
};

export default Popup;