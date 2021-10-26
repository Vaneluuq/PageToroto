import React from 'react'
import ReactMapGL, {Marker} from 'react-map-gl';
import { useState, useEffect} from 'react';
import axios from 'axios';
import '../CSS/styles.scss';
import iconDown from '../assets/chevron-down.svg'


const Map = () => {
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

  console.log(data)
  

    const mapboxApiAccessToken = "pk.eyJ1IjoidmFuZWx1dXEiLCJhIjoiY2t2NzFlYWttMHpwdDJwbzhsMHdhNG92byJ9.-tJpJFnNBJxriD-ci6olZg"

    const [viewport, setViewport] = useState({
        latitude: 23.193872,
        longitude: -101.896834,
        width: "100vw",
        height: "80vh",
        zoom:4.5
      });

      const handleViewportChange = (viewport) => {
          setViewport(viewport)
      }

     const coordinates =data.map(s => s.geometry.coordinates[0][0][0])
     console.log(coordinates)

    return ( 
      <section className="sectionMap">
        <div className="mapContainer">
           <ReactMapGL
            {...viewport}
            // onViewportChange={handleViewportChange}
            mapboxApiAccessToken = {mapboxApiAccessToken}
            mapStyle="mapbox://styles/vaneluuq/ckv74p7i13j2l15qfqsk1o7v1"
            />
          
              {/* {data.map(place => (
            <Marker key={place.id} 
              latitude={place => place.geometry.coordinates[0][0][0]}
              longitude = {place => place.geometry.coordinates[0][0][1]}
              >
                <div>Hola</div>
            </Marker>
            )
            )}  */}
        </div>
        <div className="textContainer">
          <h1>Somos desarrolladores de proyectos</h1>
          <h3>Lorem ipsum dolor is simply dummy text of the printing and typesetting industry. Lorem, ipsum dolor sit amet consectetur adipisicing elit..</h3>
          <button>Proponer un proyecto</button>
        </div>

        <div className="nextSecction">
            <h4> Ver lista completa de proyectos </h4>
            <a href="#section1"><img src={iconDown} alt=""/></a>
        </div>
      </section>
        );
}

export default Map;



    
// <FetchData
// setData={setData}/>
