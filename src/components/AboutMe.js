import React from "react";
import profile from "../profilePhoto.jpg"

function AboutMe(){
    return(
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={profile} alt="Zach Bayard"></img>    
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>
                    A design-minded software developer and music producer with experience in React & Rails. Thrives in creative, challenging, & collaborative culture.  Loves to dance.
                    </p>
                </div>  
            </div>
        </div>
    )
};
export default AboutMe;