import React from 'react';
import {Link} from 'react-scroll';
// REACT FONTAWESOME IMPORTS
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

function NavBar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className='container'>
            <h2>zb</h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: '#fff'}}/>
                </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="about"  className="nav-link" href="#">about me</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="projects" className="nav-link" href="#">projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="skills" className="nav-link" href="#">toolbox & links</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="contact" className="nav-link" href="#">contact</Link>
                    </li>
        
                </ul>
        
            </div>
        </div>
        </nav>
   
    )
};

export default NavBar;
