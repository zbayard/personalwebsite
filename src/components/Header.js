import Typed from 'react-typed'

function Header(){
    return(
        <div className='header-wrapper'>
            <div className='main-info'>
                <h1>Zach Bayard</h1>
                <Typed
                    className='typed-text'
                    strings={["React", "Javascript", "Ruby on Rails", "PostgreSQL", "Redux"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href='#' className='btn-main-offer'>Contact Me</a>

            </div>


        </div>
    );
};

export default Header