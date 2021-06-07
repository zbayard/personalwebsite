import React from 'react';

function Footer(){
    return(
        <div className="footer">
            <p className="pt-3 text-center">
            &copy;
            {new Date().getFullYear()}&nbsp;by Zach Bayard
            </p>
        </div>

    );
};

export default Footer;