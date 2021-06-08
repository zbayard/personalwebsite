import Typed from 'react-typed'

function Header(){
    return(
        <div className='header-wrapper'>
            <div className='main-info'>
                <h1>welcome</h1>
                <Typed
                    className='typed-text'
                    strings={["I'm a Creative", "I'm a Software Developer", "I'm a Musician", "I'm a Producer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a className='btn-main-offer'href="https://drive.google.com/file/d/1yo6xlNNNYUchX7AE5hTFVOhSws47vChB/view?usp=sharing" target="_blank">Resume</a>

            </div>


        </div>
    );
};

export default Header