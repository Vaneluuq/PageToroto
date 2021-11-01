import React from 'react'
import serviceIcon from '../../assets/service_icon.svg'
import '../../SASS/styles.scss'
import close from '../../assets/close_icon.svg'
import nextIcon from '../../assets/previous_icon.svg'
import { Link } from 'react-router-dom'


const ModalInfo = ({closeModal}) => {
    return ( 
        <div className="modalInfo">
            <div className="modalImage">
              <button className="close" onClick= {closeModal}> 
                <img className="iconClose" alt="icon close" src={close}></img> 
              </button>
            </div>
            <div className="modalText">
                <div className="titleModal">
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
                <div className="btnModal">
                  <button>PROPONE UN PROYECTO </button>
                  <span>Ver los proyectos</span>
                    <img src={nextIcon}></img>
                </div>
            </div>
        </div>
     );
}
 
export default ModalInfo;