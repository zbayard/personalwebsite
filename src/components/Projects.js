import React from 'react';
import discourse from '../discourse.png';
import gigbag from '../gigbag.png';
import grooveplayer from '../grooveplayer.png';
// FONT AWESOME IMPORTS
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSearchPlus, faLaptopCode, faPlayCircle } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";



function Projects(){

    // Discourse
    const openPopupBoxDiscourse = () => {
        const content = (
            <div>
                <img 
                    className="project-image-popupbox" 
                    src={discourse} 
                    alt="Discourse..."
                />
                <p>
                    Hackathon entry chatting app designed to connect and encourage discourse between users with different backgrounds yet similar interests.
                </p>
                <div className="popup-icons">
                    <div className="hyper-link" onClick={() => window.open("https://discourseapp.netlify.app/", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faLaptopCode} />
                            Website
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://github.com/zbayard/discourse/tree/main/discourse-react", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} />
                            Frontend
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://github.com/zbayard/discourse-rails" , "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} />
                            Backend
                        </div>
                    </div>
                </div>
            </div>
        )
        PopupboxManager.open({ 
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Discourse"
                },
                fadeIn: true,
                fadeInSpeed: 500
            } 
        })
    };

    // GigBag
    const openPopupBoxGigBag = () => {
        const content = (
            <div>
                <img 
                    className="project-image-popupbox" 
                    src={gigbag} 
                    alt="Gig Bag..."
                />
                <p>
                    React/Rails app that enables users to browse & book local artists for private events.
                </p>
                <div className="popup-icons">
                    <div className="hyper-link" onClick={() => window.open("https://gigbag.netlify.app/", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faLaptopCode} />
                            Website
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://github.com/zbayard/proj5front", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} />
                            Frontend
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://github.com/zbayard/proj5back" , "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} />
                            Backend
                        </div>
                    </div>
                </div>
            </div>
        )
        PopupboxManager.open({ 
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Gig Bag"
                },
                fadeIn: true,
                fadeInSpeed: 500
            } 
        })
    };



    // Groove Player


    const openPopupBoxGroovePlayer = () => {
        const content = (
            <div>
                <img 
                    className="project-image-popupbox" 
                    src={grooveplayer} 
                    alt="GroovePlayer..."
                />
                <p>
                    Animated record player app built using Vanilla Javascript & Rails.
                </p>
                <div className="popup-icons">
                    <div className="hyper-link" onClick={() => window.open("https://grooveplayer.netlify.app/", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faLaptopCode} />
                            Website
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://github.com/zbayard/project-3-frontend", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} />
                            Frontend
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://github.com/zbayard/project-3-backend" , "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} />
                            Backend
                        </div>
                    </div>
                </div>
            </div>
        )
        PopupboxManager.open({ 
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Groove Player"
                },
                fadeIn: true,
                fadeInSpeed: 500
            } 
        })
    };



   return(
       <div className="project-wrapper">
           <div className="container">
               <h1 className="text-lowercase text-center py-5">projects</h1>
               <div className="image-box-wrapper row justify-content-center">
                    <div className="project-image-box" onClick={openPopupBoxDiscourse}>
                        <img className="project-image" src={discourse} alt="Discourse"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/> 
                    </div>
                    {/*  */}
                    <div className="project-image-box" onClick={openPopupBoxGigBag}>
                        <img className="project-image" src={gigbag} alt="Gig Bag"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/>
                    </div>
                    {/*  */}
                    <div className="project-image-box" onClick={openPopupBoxGroovePlayer}>
                        <img className="project-image" src={grooveplayer} alt="Groove Player"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/>
                    </div>
               </div>
           </div>
           <PopupboxContainer/>
       </div>
              
               
             
               
   )
};

export default Projects