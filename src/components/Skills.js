import React from "react";
import SkillsCarousel from "./SkillsCarousel"
import Links from './Links.js'

function Skills(){
    return(
        <div>
        <div id="skills" className="skills">
            <h1>Toolbox & Links</h1>
            <div className="container">
                <div className="skills-content">
                    <SkillsCarousel />
                </div>
            </div>
        </div>
        <Links />
        </div>
    )
};

export default Skills;