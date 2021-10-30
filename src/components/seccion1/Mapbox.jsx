import ReactDOM from "react-dom";
import React, { useState } from 'react'
import mapboxgl from 'mapbox-gl';
import { useRef, useEffect } from 'react';
import '../../SASS/styles.scss';
import { Link } from 'react-scroll';
import iconDown from '../../assets/chevron-down.svg';
import Popup from './Mapbox/Popup';

mapboxgl.accessToken= "pk.eyJ1IjoidmFuZWx1dXEiLCJhIjoiY2t2NzFlYWttMHpwdDJwbzhsMHdhNG92byJ9.-tJpJFnNBJxriD-ci6olZg"


const Mapbox = ({data}) => {
    const mapContainerRef = useRef(null);
    const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));
  
    // initialize map when component mounts
    useEffect(() => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        // See style options here: https://docs.mapbox.com/api/maps/#styles
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-101.896834, 23.193872],
        zoom: 4.5
      });
  
      // add navigation control (zoom buttons)
      map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
  
      const coordenadas = data.map(item => item.geometry)
    //   console.log(coordenadas)

      map.on("load", () => {

        map.addSource('torotoAPI', {
            type: 'geojson',
            data: coordenadas
            });
        
        map.addLayer({
            'id': 'torotoAPI',
            'type': '#627BC1',
            'source': 'torotoAPI',
            'layout': {
              "fill-color":"#000000"
            }
            });

    })


   






    //   async function getLocation(updateSource) {
    //     try {
    //     const response = await fetch(
    //     'https://fieldops-api.toroto.mx/api/projects',
    //     { method: 'GET' }
    //     );
    //     const { latitude, longitude } = await response.json();
    //     // Fly the map to the location.
    //     map.flyTo({
    //     center: [longitude, latitude],
    //     speed: 0.5
    //     });
    //     // Return the location of the ISS as GeoJSON.
    //     return {
    //     'type': 'FeatureCollection',
    //     'features': [
    //     {
    //     'type': 'Feature',
    //     'geometry': {
    //     'type': 'Point',
    //     'coordinates': [longitude, latitude]
    //     }
    //     }
    //     ]
    //     };
    //     } catch (err) {
    //     // If the updateSource interval is defined, clear the interval to stop updating the source.
    //     if (updateSource) clearInterval(updateSource);
    //     throw new Error(err);
    //     }
     
        

     // clean up on unmount
      return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

        return ( 
      <section className="sectionMap">
         <div ref={mapContainerRef} className="map-container" />
         <div className="textContainer">
          <h1>Somos desarrolladores de proyectos</h1>
          <h3>Lorem ipsum dolor is simply dummy text of the printing and typesetting industry. Lorem, ipsum dolor sit amet consectetur adipisicing elit..</h3>
          <button>Proponer un proyecto</button>
        </div>

        <div className="nextSecction">
            <h4> Ver lista completa de proyectos </h4>
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
                <img src={iconDown} alt=""/>
            </Link>
        </div>
      </section>
    );
  };
  
  export default Mapbox;



// const Mapbox = () => {

//   mapboxgl.accessToken= "pk.eyJ1IjoidmFuZWx1dXEiLCJhIjoiY2t2NzFlYWttMHpwdDJwbzhsMHdhNG92byJ9.-tJpJFnNBJxriD-ci6olZg"

//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const [lng, setLng] = useState(-101.896834);
//   const [lat, setLat] = useState(23.193872);
//   const [zoom, setZoom] = useState(4.5);

//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//     container: mapContainer.current,
//     style: 'mapbox://styles/vaneluuq/ckv74p7i13j2l15qfqsk1o7v1',
//     center: [lng, lat],
//     zoom: zoom
//     });
//     });

//     map.addControl(new mapboxgl.NavigationControl(), "bottom-right");


//     // let marker = new mapboxgl.Marker

 
//     return ( 
//       <section className="sectionMap">
//          <div ref={mapContainer} className="map-container" />
//          <div className="textContainer">
//           <h1>Somos desarrolladores de proyectos</h1>
//           <h3>Lorem ipsum dolor is simply dummy text of the printing and typesetting industry. Lorem, ipsum dolor sit amet consectetur adipisicing elit..</h3>
//           <button>Proponer un proyecto</button>
//         </div>

//         <div className="nextSecction">
//             <h4> Ver lista completa de proyectos </h4>
//             <Link
//               activeClass="active"
//               to="section1"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}>
//                 <img src={iconDown} alt=""/>
//             </Link>
//         </div>
//       </section>
//     );
// }

// export default Mapbox;



















  
    //   map.on("moveend", async () => {
    //     // get new center coordinates
    //     const { lng, lat } = map.getCenter();
    //     // fetch new data
    //     // const results = await fetchFakeData({ longitude: lng, latitude: lat });
    //     // update "random-points-data" source with new data
    //     // all layers that consume the "random-points-data" data source will be updated automatically
    //     // map.getSource("random-points-data").setData(results);
    //   });
  

    //   // change cursor to pointer when user hovers over a clickable feature
    //   map.on("mouseenter", "random-points-layer", e => {
    //     if (e.features.length) {
    //       map.getCanvas().style.cursor = "pointer";
    //     }
    //   });
  
    //   // reset cursor to default when user is no longer hovering over a clickable feature
    //   map.on("mouseleave", "random-points-layer", () => {
    //     map.getCanvas().style.cursor = "";
    //   });
  
    //   // add popup when user clicks a point
    //   map.on("click", "random-points-layer", e => {
    //     if (e.features.length) {
    //       const feature = e.features[0];
    //       // create popup node
    //       const popupNode = document.createElement("div");
    //       ReactDOM.render(<Popup feature={feature} />, popupNode);
    //       // set popup on map
    //       popUpRef.current
    //         .setLngLat(feature.geometry.coordinates)
    //         .setDOMContent(popupNode)
    //         .addTo(map);
    //     }
    //   });
  
    //   // clean up on unmount
    //   return () => map.remove();
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps
