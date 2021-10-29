import React from 'react'
import Header from '../components/Header';
import DescriptionProyect from '../components/seccion2/DescriptionProyect';
import Implementation from '../components/seccion2/Implementation';
import Services from '../components/seccion1/Services';
import WorksMap from '../components/seccion2/WorksMap';
import Footer from '../components/Footer'
import imgProyect1 from '../assets/img_project_1.png';
import imgProyect2 from '../assets/img_project_2.png';
import imgProyect3 from '../assets/img_project_3.png';
import imgProyect4 from '../assets/img_project_4.png';
import Details from '../components/seccion2/Details';
import Galery from '../components/seccion2/Galery';
import Impact from '../components/seccion2/Impact';
import About from '../components/seccion2/AboutToroto';
import CardsImpact from '../components/seccion2/impact/CardImpact'
import Modal from 'react-modal';
import ModalInfo from '../components/seccion2/ModalInfo';


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
  
const getImages = (id) => {
  const route = [
    { id:"P001",
      link: "/proyect1", 
      image: imgProyect1
    },
    { id:"P002",
      link: "/proyect2",
      image: imgProyect2
    },
    { id:"P003",
      link: "proyect3",
      image: imgProyect3
    },
    { id:"P004",
      link: "proyect4",
      image: imgProyect4
    }
  ]
    

for (let i = 0; i< route.length; i++){
  if(route[i].id === id){
     return route[i].image
  }
}
}
  // console.log(data.map(item => item.activities[0].name))

  const [modalIsOpen, setIsOpen] = React.useState(false);


  // Se abre modal que crea o edita nota
   function openModal() {
      setIsOpen(true);
   }
 
   // Se cierra modal que crea o edita nota
   const closeModal = () => {
     setIsOpen(false);
   }
 


    return ( 
        <>
          <Header/>
          <DescriptionProyect
           location= {data.map(item => item.location)[0]}
           nameProyect = {data.map(item => item.name)[0]}
           description ={data.map(item => item.description)[0]}
           descriptionProblem = {data.map(item => item.problem)}
           imgProyect = {getImages(data.map(item => item.id)[0])}
           servicesOffered = { data.map(item => 
              <Services service = {item.services[0]}
              />)}
          />
          <Implementation
          openModal ={openModal}
          ActividadesList = {
           data.map(item => 
            <Details
            name={item.activities[0].name}
            description={item.activities[0].description}
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
          <Galery/>
          <Impact
           cardsImpact= {
            data.map(item => 
             <CardsImpact
               value={item.impact[0].value}
               name ={item.impact[0].name}
             />
            )}/>
          <About/>
         <Footer/>
        </>
     );
}
 
export default Proyect1;