import React, { useState } from 'react'
import ReactMapGL, {Marker} from 'react-map-gl';
import { Link } from 'react-scroll';

const WorksMap = () => {
    const mapboxApiAccessToken = "pk.eyJ1IjoidmFuZWx1dXEiLCJhIjoiY2t2NzFlYWttMHpwdDJwbzhsMHdhNG92byJ9.-tJpJFnNBJxriD-ci6olZg"

    const [viewport, setViewport] = useState({
        latitude: 23.193872,
        longitude: -101.896834,
        width: "80vw",
        height: "50vh",
        zoom:9
      });

      const handleViewportChange = (viewport) => {
          setViewport(viewport)
      }


    return ( 
      <section className="sectionWorksMap">
           <h5>Mapa de obras</h5>
           <ReactMapGL
            {...viewport}
            onViewportChange={handleViewportChange}
            mapboxApiAccessToken = {mapboxApiAccessToken}
            mapStyle="mapbox://styles/vaneluuq/ckv74p7i13j2l15qfqsk1o7v1"
            />
      </section>
    );
}
 
export default WorksMap;