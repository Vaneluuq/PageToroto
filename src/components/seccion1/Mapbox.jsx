import React from 'react';
import mapboxgl from 'mapbox-gl';
import { useRef, useEffect } from 'react';
import '../../SASS/styles.scss';
import { Link } from 'react-scroll';
import iconDown from '../../assets/chevron-down.svg';
import Popup from './Mapbox/Popup'
// import Services from "../Services"
import CardsProyects from '../seccion1/CardsProyects'
import ReactDOM from "react-dom"


mapboxgl.accessToken= "pk.eyJ1IjoidmFuZWx1dXEiLCJhIjoiY2t2NzFlYWttMHpwdDJwbzhsMHdhNG92byJ9.-tJpJFnNBJxriD-ci6olZg"


const Mapbox = ({data}) => {

  const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }))
  const mapContainerRef = useRef(null);


    // initialize map when component mounts
    useEffect(() => {
      let hoveredPlaceId = null;

      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-101.896834, 23.193872],
        zoom: 4.5
      });

      // add navigation control (zoom buttons)
      map.addControl(new mapboxgl.NavigationControl(), "bottom-right");


      map.on("load", async() => {
        const geojson = await getDataToroto();

        map.addSource('torotoAPI', {
            type: 'geojson',
            data: geojson,
            generateId: true
          });

          map.addLayer({
            'id': 'maine',
            'type': 'circle',
            'source': 'torotoAPI', // reference the data source
            'layout': {},
            'paint': {
              'circle-color': '#4264fb',
              'circle-radius': 10,
              'circle-stroke-width': 2,
              'circle-stroke-color': '#ffffff'
              }
            });

            const popup = new mapboxgl.Popup({
              closeButton: false,
              closeOnClick: false
              });
               

            map.on('mousemove', 'maine', (e) => {
              map.getCanvas().style.cursor = 'pointer';
              const description = e.features[0].properties.description;
              popup.setLngLat(e.lngLat).setHTML(description).addTo(map);
           
              });





              map.on('mouseleave', 'maine', () => {
                map.getCanvas().style.cursor = '';
                // popup.remove();
                if (hoveredPlaceId!== null) {
                 map.setFeatureState(
                  { source: 'torotoAPI', id: hoveredPlaceId},
                  { hover: false });
                }
                hoveredPlaceId = null;
              });

              async function getDataToroto () {
                let mygeojson = {"type": "FeatureCollection", "features": []}
                    for(let info of data){
                      const id = info
                      const coordinates = info.geometry.coordinates[0][0]
                      let properties = id
                      let feature = {"type": "Feature", "geometry": {"type": "Point", "coordinates": coordinates}, "properties": properties}
                      mygeojson.features.push(feature);
                    }
                   return mygeojson
                  }
                })
          }, [data]); 



        return (
      <section className="sectionMap">
         <div ref={mapContainerRef} className="map-container" />
         <div className="textContainer">
          <h1>Somos desarrolladores de proyectos</h1>
          <h3>Lorem ipsum dolor is simply dummy text of the printing and typesetting industry. Lorem, ipsum dolor sit amet consectetur adipisicing elit..</h3>
          <button>Proponer un proyecto</button>
        </div>
        <div ref={popUpRef}>popup</div>

        <div className="nextSecction">
            <h4> Ver lista completa de proyectos </h4>
            {/* <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
                <img src={iconDown} alt=""/>
            </Link> */}
        </div>
      </section>
    );
  };

  export default Mapbox;






            // const feature = e.features;
            // const popupNode = document.createElement("div");
            // ReactDOM.render(<Popup feature={feature} data = {data} />, popupNode);
            // popUpRef.current
            // .setLngLat(e.lngLat)
            // .setDOMContent(popupNode)
            // .addTo(map);


              // if (e.features.length > 0) {
              //   if (hoveredPlaceId !== null) {
              //     map.setFeatureState(
              //       { source: 'torotoAPI', id: hoveredPlaceId},
              //       { hover: false }
              //       );
              //   }
              //   hoveredPlaceId = e.features[0].id;
              //     map.setFeatureState(
              //     { source: 'torotoAPI', id: hoveredPlaceId },
              //     { hover: true }
              //     );
              // }