import React from 'react';
import mapboxgl from 'mapbox-gl';
import { useRef, useEffect, useState} from 'react';
import '../../SASS/styles.scss';
import  useMediaQuery from '../MediaQuery';
import TextMap from './Map/TextMap';
import NextSection from './Map/NextSection';
import route from '../routes'


mapboxgl.accessToken= "pk.eyJ1IjoidmFuZWx1dXEiLCJhIjoiY2t2NzFlYWttMHpwdDJwbzhsMHdhNG92byJ9.-tJpJFnNBJxriD-ci6olZg";


const Mapbox = ({data}) => {
  const isDesktop = useMediaQuery('(min-width: 850px)');
  const ref = useRef(null);
  const [map, setMap] = useState(null);

  const getImages = (id) => {
    for (let i = 0; i< route.length; i++){
      if(route[i].id === id){
      return route[i].image
    }}};


    useEffect(() => {
      let hoveredPlaceId = null;

      if (ref.current && !map) {
        const map = new mapboxgl.Map({
          container: ref.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [-101.896834, 23.193872],
          zoom: 4.5
        });
      setMap(map); 
    

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
              'circle-color': '#000000',
              'circle-radius': 10,
              'circle-stroke-width': 2,
              'circle-stroke-color': '#ffffff'
              }
            });

            const popup = new mapboxgl.Popup({
              closeButton: false,
              closeOnClick: false,
              className: 'popUpClass'
              });

            map.on('mousemove', 'maine', (e) => {
              map.getCanvas().style.cursor = 'pointer';
              if (e.features.length) {
                const locationProyect = e.features[0].properties.location;
                const nameProyect = e.features[0].properties.name;
                const descriptionProyect= e.features[0].properties.description;
                const imgProyect= e.features[0].properties.id;
                const image = getImages(imgProyect)
                const popUps = document.getElementsByClassName('mapboxgl-popup');
                if (popUps[0]) popUps[0].remove();

               

                popup.setLngLat(e.lngLat)
                     .setHTML(
                        `
                        <div>
                          <img src=${image} alt="" />
                            <h5>${locationProyect}</h5>
                            <h2>${nameProyect}</h2>
                            <p>${descriptionProyect}</p>
                        </div>
                          `)
                        
                      .addTo(map);
                }
              });

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
                      const coordinates = info.geometry.coordinates[0][0]
                      let properties = id
                      let feature = {"type": "Feature", "geometry": {"type": "Point", "coordinates": coordinates}, "properties": properties}
                      mygeojson.features.push(feature);
                    }
                   return mygeojson
                  }
                })
              }
          }, [data, ref, map]); 



        return (
      <section className="sectionMap">
        {
          isDesktop ?  <div ref={ref} className="map-container" /> : <div className="bannerResponsive"></div>
        }
       <TextMap/>
       <NextSection/>
      </section>
    );
  };

  export default Mapbox;



