import React from 'react'
import serviceIcon from '../../assets/service_icon.svg'
import imgModal from '../../assets/img_modal_actvidad.png'
import '../../SASS/styles.scss'


const ModalInfo = ({closeModal}) => {
    return ( 
        <div className="modalInfo">
            <img className="modalImage" src={imgModal} alt="" />
            <button className="close" onClick= {closeModal}> X </button>
            <div className="modalText">
                <div className="titleProcess">
                  <img src={serviceIcon} alt="" />
                  <h3> Restauración ecológica</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam nostrum unde vero et explicabo, sequi placeat quo nam quia non illo quasi at itaque quae perferendis. Nesciunt, repellendus. Obcaecati?</p>

                <h5>¿Cómo lo hacemos?</h5>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur.</li>
                </ul>
                <div>
                  <button>PROPONE UN PROYECTO </button>
                  <span>Ver los proyectos </span>
                    
                </div>
            </div>
        </div>
     );
}
 
export default ModalInfo;