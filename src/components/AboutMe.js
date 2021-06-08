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
                        I'm a Brooklyn based creative & full-stack software engineer who is most excited when working on front-end development.  I'm experienced in React & Javascript based programming, but also able to get down with the backend using Ruby on Rails as an API. 
                    </p>
                    <p>Outside of software development, I feel most at home behind a piano.  I'm very involved in the music world, having been a multi instrumentalist for over a decade & music producer who has been creating sub-par tunes for almost 5 years.</p>
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