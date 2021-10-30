import React, { useState } from 'react'
import ReactMapGL, {Marker} from 'react-map-gl';
import { Link } from 'react-scroll';
import '../../SASS/styles.scss'

const WorksMap = () => {
    return ( 
      <section className="sectionWorksMap">
          <h5>Mapa de obras</h5>
          <iframe src="https://www.google.com/maps/d/embed?mid=1ktmzGPeaDVFjfx1oVuDIYQhzZmrKZWHq"></iframe>

      </section>
    );
}
 
export default WorksMap;