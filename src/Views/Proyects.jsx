import React from 'react'
import Header from '../components/Header';
import Map from '../components/seccion1/Map'
import DescriptionProyects from '../components/seccion1/ShowProyects';
import Footer from '../components/Footer';
import '../SASS/styles.scss';

const Proyects = ({data}) => {
    return ( 
    <>
    <Header/>
    <Map
    data = {data}
    />
    <DescriptionProyects
      data = {data}
    />
    <Footer></Footer>
    </>
);
}
export default Proyects;