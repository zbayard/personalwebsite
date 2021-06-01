import React from "react";
import profile from "../profilePhoto.jpg"

function AboutMe(){
    return(
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <img src={profile} alt="Zach Bayard"></img>    
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1>about me</h1>
                    <p>
                        add a description here 
                    </p>
                </div>  
            </div>
        </div>
    )
};
export default AboutMe;