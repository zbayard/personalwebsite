import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { FaReact } from 'react-icons/fa';
import { SiJavascript, SiRails, SiCss3, SiRuby, SiHtml5, SiPostgresql, SiGit } from 'react-icons/si';

function SkillsCarousel(){
    return (
        <div className="carousel-div">
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={1500}
            >
                <div>
                    <div className="myCarousel">
                        <h3><FaReact /></h3>
                        <h3>React</h3>
                    </div>
                </div>
                <div>
                    <div className="myCarousel">
                        <h3><SiJavascript /></h3>
                        <h3>Javascript</h3>
                    </div>
                </div>
                <div>
                    <div className="myCarousel">
                        <h3><SiRuby /></h3>
                        <h3>Ruby</h3>
                    </div>
                </div>
                <div>
                    <div className="myCarousel">
                        <h3 className="rails"><SiRails /></h3>
                        <h3>Ruby on Rails</h3>
                    </div>
                </div>
                <div>
                    <div className="myCarousel">
                        <h3><SiCss3 /></h3>
                        <h3>CSS</h3>
                    </div>
                </div>
                <div>
                    <div className="myCarousel">
                        <h3><SiHtml5 /></h3>
                        <h3>HTML</h3>
                    </div>
                </div>
                <div>
                    <div className="myCarousel">
                        <h3><SiPostgresql /></h3>
                        <h3>PostgreSQL</h3>
                    </div>
                </div>
                <div>
                    <div className="myCarousel">
                        <h3><SiGit /></h3>
                        <h3>Git</h3>
                    </div>
                </div>
            </Carousel>
        </div>
    )
};

export default SkillsCarousel