import React from "react";
import profile from "../profilePhoto.jpg"

function AboutMe(){
    return(
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={profile} alt="Zach Bayard"></img>    
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>
                        A design-minded developer & musician/producer based in Brooklyn, NY. Most passionate working on front-end development, especially with React.js but also experienced in using Ruby on Rails.
                    </p>
                    <>
                    <p>
                        "And if the music is good, you DANCE."
                    </p>
                    </>
                </div>  
            </div>
        </div>
    )
};
export default AboutMe;