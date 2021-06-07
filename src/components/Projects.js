import React from 'react';
import discourse from '../discourse.png';
import gigbag from '../gigbag.png';
import grooveplayer from '../grooveplayer.png';


function Projects(){
   return(
       <div className="project-wrapper">
           <div className="container">
               <h1 className="text-lowercase text-center py-5">projects</h1>
               <div className="image-box-wrapper row justify-content-center">
                    <div className="project-image-box">
                        <img className="project-image" src={discourse} alt="Discourse"/>
                    </div>
                    {/*  */}
                    <div className="project-image-box">
                        <img className="project-image" src={gigbag} alt="Gig Bag"/>
                    </div>
                    {/*  */}
                    <div className="project-image-box">
                        <img className="project-image" src={grooveplayer} alt="Groove Player"/>
                    </div>
               </div>
           </div>
       </div>
              
               
             
               
   )
};

export default Projects