import React, { useState } from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import { Link } from 'react-scroll';
import iconDown from '../../assets/chevron-down.svg' 
import point from '../../assets/point_icon.png'
import CardsProyects from './CardsProyects';
import Services from './Services';
import '../../SASS/styles.scss';



const Map = ({data}) => {

  const [selectPoint, setSelectPoint] = useState(null);

    const mapboxApiAccessToken = "pk.eyJ1IjoidmFuZWx1dXEiLCJhIjoiY2t2NzFlYWttMHpwdDJwbzhsMHdhNG92byJ9.-tJpJFnNBJxriD-ci6olZg"

    const [viewport, setViewport] = useState({
        latitude: 23.193872,
        longitude: -101.896834,
        width: "99vw",
        height: "80vh",
        zoom:4.5
      });


    const handleViewportChange = (viewport) => {
      setViewport(viewport)
      }

  
    
    const getCoordinates =() => {
      const arr = data.map(s => s.geometry.coordinates)
      let acc = []
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
         acc.push(element[0][0])
      }
      return acc
    }


 
    return ( 
      <section className="sectionMap">
        <div className="mapContainer">
           <ReactMapGL
            {...viewport}
            onViewportChange={handleViewportChange}
            mapboxApiAccessToken = {mapboxApiAccessToken}
            mapStyle="mapbox://styles/vaneluuq/ckv74p7i13j2l15qfqsk1o7v1"
            >
            {getCoordinates().map(place => (
              <Marker
                latitude={place[1]}
                longitude={place[0]}
                offsetLeft={-20}
                offsetTop={-10}
              >
                <button
                onMouseOver ={(e)=> {e.preventDefault();
                setSelectPoint(place)
                  }}
                >
                  <img src={point} alt="" width="20em"/>
                </button>
              </Marker>
            ))}
            {
              selectPoint ? (
                <Popup latitude={selectPoint[1]} longitude={selectPoint[0]}>
                  {data.map(info => 
                  <div key={info.id}>

                    <div>Hola</div>
                     {/* <CardsProyects
                      location= {info.location}
                      name = {info.name}
                      description ={info.description}
                      // link = { getLinks(card.id)
                  /> */}
                  </div>
                  )}
                </Popup>
              ) : null}
          </ReactMapGL>
        </div>
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
}

export default Map;





       // const [coordenadas, setCoordenadas ] = useState({
    //   id:"",
    //   coordenadas:[]
    // })

    // const arr = data.map(s => s.geometry.coordinates)
    // const getLongitud =() => {
    //   // let id = ""
    //   // let acc = []
    //   for (let i = 0; i < arr.length; i++) {
    //     const element = arr[i];
    //      setCoordenadas({id:"POO"+i, coordenadas: coordenadas.concat(element[0][1])})
    //   }
    // }

    // getLongitud()

    // console.log(coordenadas)


