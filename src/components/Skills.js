import React from "react";
import SkillsCarousel from "./SkillsCarousel"

function Skills(){
    return(
        <div>
        <div id="skills" className="skills">
            <h1>Skills & Links</h1>
            <div className="container">
                <div className="skills-content">
                    <SkillsCarousel />
                </div>
            </div>
        </div>
        {/* <Links /> */}
        </div>
    )
};

export default Skills;