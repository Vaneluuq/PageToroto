import React from 'react';
import mapboxgl from 'mapbox-gl';
import { useRef, useEffect } from 'react';
import '../../SASS/styles.scss';
import { Link } from 'react-scroll';
import iconDown from '../../assets/chevron-down.svg';


mapboxgl.accessToken= "pk.eyJ1IjoidmFuZWx1dXEiLCJhIjoiY2t2NzFlYWttMHpwdDJwbzhsMHdhNG92byJ9.-tJpJFnNBJxriD-ci6olZg"


const Mapbox = ({data}) => {
    
  const mapContainerRef = useRef(null);  
  let hoveredPlaceId = null;


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


      map.on("load", async() => {
        const geojson = await getDataToroto();

        map.addSource('torotoAPI', {
            type: 'geojson',
            data: geojson,
            generateId: true
          });

          map.addLayer({
            'id': 'maine',
            'type': 'fill',
            'source': 'torotoAPI', // reference the data source
            'layout': {},
            'paint': {
            'fill-color': '#627BC1', // blue color fill
            'fill-opacity': [
              'case',
              ['boolean', ['feature-state', 'hover'], false],
              1,
              0.5
              ]
            }
            });

            map.addLayer({
              'id': 'outline',
              'type': 'line',
              'source': 'torotoAPI',
              'layout': {},
              'paint': {
              'line-color': '#000',
              'line-width': 3
              }
              });

          const popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
            });

          map.on('mousemove', 'maine', (e) => {
            map.getCanvas().style.cursor = 'pointer';

            const description = e.features[0].properties.id;
            popup.setLngLat(e.lngLat).setHTML(description).addTo(map);

              if (e.features.length > 0) {
                if (hoveredPlaceId !== null) {
                  map.setFeatureState(
                    { source: 'torotoAPI', id: hoveredPlaceId},
                    { hover: false }
                    );
                }
                hoveredPlaceId = e.features[0].id;
                  map.setFeatureState(
                  { source: 'torotoAPI', id: hoveredPlaceId },
                  { hover: true }
                  );
              }
            })

              map.on('mouseleave', 'maine', () => {
                map.getCanvas().style.cursor = '';
                popup.remove();
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
                      const location = info.geometry.coordinates
                      let coordinates = location
                      let properties = id
                      let feature = {"type": "Feature", "geometry": {"type": "Polygon", "coordinates": coordinates}, "properties": properties}
                      mygeojson.features.push(feature);
                    }
                    return mygeojson;
                  }
                })



     // clean up on unmount
            // return () => map.remove();
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




  
