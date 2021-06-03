import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub, faMediumM, faInstagram } from "@fortawesome/free-brands-svg-icons"



function Links(){
    return (

        <div id="links" className="links">
            {/* <h1 className="py-5">Links</h1> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6"> 
                            <a href="https://www.linkedin.com/in/zach-bayard/" target="_blank" rel="noopener noreferrer"> 
                                <div className="box">
                                    <div className="links-div">
                                        <div className="circle">
                                            <FontAwesomeIcon className="icon" icon={faLinkedinIn} size="2x" />
                                        </div>
                                        <h3>LinkedIn</h3>
                                    </div> 
                                </div>
                            </a>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6"> 
                            <a href="https://github.com/zbayard" target="_blank" rel="noopener noreferrer">
                                <div className="box">
                                    <div className="links-div">
                                        <div className="circle">
                                            <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
                                        </div>
                                        <h3>Github</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <a href="https://zbayard.medium.com/" target="_blank" rel="noopener noreferrer"> 
                                <div className="box">
                                    <div className="links-div">
                                        <div className="circle">
                                            <FontAwesomeIcon className="icon" icon={faMediumM} size="2x" />
                                        </div>
                                        <h3>Medium</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6"> 
                            <div className="box">
                                <a href="https://www.instagram.com/zachbayard/" target="_blank" rel="noopener noreferrer">
                                    <div className="links-div">
                                        <div className="circle">
                                            <FontAwesomeIcon className="icon" icon={faInstagram} size="2x" />
                                        </div>
                                        <h3>Instagram</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>  
       
    )
}

export default Links;
