import React from 'react'
import Header from '../components/Header';
import Map from '../components/Map';
import DescriptionProyects from '../components/Secction1';
import Footer from '../components/Footer';
import '../CSS/styles.scss';

const Proyects = ({data}) => {
    return ( 
    <>
    <Header/>
    <Map/>
    <DescriptionProyects
      data = {data}
    />
    <Footer></Footer>
    </>
);
}
export default Proyects;