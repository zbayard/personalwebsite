import React from 'react';
// REACT FONTAWESOME IMPORTS
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

function NavBar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className='container'>
            <a className="navbar-brand" href="#">Navbar</a>
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
                        <a className="nav-link" href="#">technologies</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">contact</a>
                    </li>
        
                </ul>
        
            </div>
        </div>
        </nav>
   
    )
};

export default NavBar;
