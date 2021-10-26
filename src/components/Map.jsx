import React from 'react'
import ReactMapGL, {Marker} from 'react-map-gl';
import { useState, useEffect} from 'react';
// import FetchData from './FetchData';
import axios from 'axios';


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
        latitude: 23.3142195,
        longitude: -111.6414468,
        width: "100vw",
        height: "80vh",
        zoom: 8
      });

      const handleViewportChange = (viewport) => {
          setViewport(viewport)
      }

     const coordinates =data.map(s => s.geometry.coordinates[0][0][0])
     console.log(coordinates)

    return ( 
        <>
        <ReactMapGL
        {...viewport}
        onViewportChange={handleViewportChange}
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
        </>
        );
}

export default Map;



    
// <FetchData
// setData={setData}/>
