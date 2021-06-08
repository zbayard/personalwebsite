import React from 'react';
// REACT FONTAWESOME IMPORTS
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

function NavBar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className='container'>
            <h2>zach bayard</h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: '#fff'}}/>
                </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">about me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">toolbox & links</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">contact</a>
                    </li>
        
                </ul>
        
            </div>
            {/* <a className="navbar-button" href="https://drive.google.com/file/d/1yo6xlNNNYUchX7AE5hTFVOhSws47vChB/view?usp=sharing" target="_blank">Resume</a> */}
        </div>
        </nav>
   
    )
};

export default NavBar;
