import React from 'react'
import Header from '../components/Header';
import DescriptionProyect from '../components/seccion2/DescriptionProyect';
import Implementation from '../components/seccion2/Implementation';
import Services from '../components/seccion1/Services';
import WorksMap from '../components/seccion2/WorksMap';
import Footer from '../components/Footer'
import Details from '../components/seccion2/Details';
import GalleryPhotos from '../components/seccion2/Galery';
import Impact from '../components/seccion2/Impact';
import About from '../components/seccion2/AboutToroto';
import CardsImpact from '../components/seccion2/impact/CardImpact'
import Modal from 'react-modal';
import ModalInfo from '../components/seccion2/ModalInfo';
import route from '../components/routes'


//Estilos modal
const customStyles = {
  overlay: {
      backgroundColor: 'rgba(0,0,0,0.6)'
    },
  content: {
    backgroundColor: 'rgba(0,0,0,0)',
    // border: '1px solid #ccc',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: "none"
  },
};


const Proyect1 = ({data}) => {

  // Hook modal de implementación 
const [modalIsOpen, setIsOpen] = React.useState(false);
  
const getImages = (id) => {
  for (let i = 0; i< route.length; i++){
    if(route[i].id === id){
    return route[i].image
  }}};

  const openModal = () => setIsOpen(true);
  const closeModal = () =>  setIsOpen(false);

  const dataTorotoActivities = () => data.map(item => item.activities)[0];
  const dataTorotoServices = () => data.map(item => item.services)[3];

    return ( 
      <section className="section2">
        <Header/>
        <DescriptionProyect
            location= {data.map(item => item.location)[3]}
            nameProyect = {data.map(item => item.name)[3]}
            description ={data.map(item => item.description)[3]}
            descriptionProblem = {data.map(item => item.problem)}
            imgProyect = {getImages(data.map(item => item.id)[3])}
            servicesOffered = { dataTorotoServices().map(item => 
                <Services service = {item}
              />)}
          />
        <Implementation
          openModal ={openModal}
          ActividadesList = {
           dataTorotoActivities().map(item => 
            <Details
            name={item.name}
            description={item.description}
            />
            )}
          />
          {
            modalIsOpen ?
            (
              <Modal
              isOpen={modalIsOpen}
              style={customStyles}
              onRequestClose={closeModal}>
                <ModalInfo
                closeModal= {closeModal}
                />
                </Modal>
            ): (null)
          }
        <WorksMap/>
        <GalleryPhotos/>
        <Impact
          cardsImpact= {
            data.map(item => 
            <CardsImpact
              value={item.impact[2].value}
              name ={item.impact[2].name}
            />
            )}/>
        <About/>
        <Footer/>
      </section>
    );
}

export default Proyect1;