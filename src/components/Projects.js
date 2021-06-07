import React from 'react';
import discourse from '../discourse.png';
import gigbag from '../gigbag.png';
import grooveplayer from '../grooveplayer.png';
// FONT AWESOME IMPORTS
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSearchPlus, faLaptopCode, faPlayCircle } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"



function Projects(){
   return(
       <div className="project-wrapper">
           <div className="container">
               <h1 className="text-lowercase text-center py-5">projects</h1>
               <div className="image-box-wrapper row justify-content-center">
                    <div className="project-image-box">
                        <img className="project-image" src={discourse} alt="Discourse"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/> 
                    </div>
                    {/*  */}
                    <div className="project-image-box">
                        <img className="project-image" src={gigbag} alt="Gig Bag"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/>
                    </div>
                    {/*  */}
                    <div className="project-image-box">
                        <img className="project-image" src={grooveplayer} alt="Groove Player"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/>
                    </div>
               </div>
           </div>
       </div>
              
               
             
               
   )
};

export default Projects