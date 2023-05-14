import './index.css';
import copyEmail from '../../utils/copyEmailToClipboard';

import mailIcon from '../../images/mainIcon.png';
import linkedIn from '../../images/linkedInIcon.png';
import github from '../../images/githubIcon.png';
import instagram from '../../images/instaIcon.png'

export const About = () => {
    return (
        <div className='routedPageContainer flexCenter'>
            <div className='aboutContainer'>
                <div className='aboutLeft'>
                   <div className='leftContainer'>
                       <div className='rowTextAbout'>
                            <p className='whoami1' style={{paddingLeft: '10px'}}>Noel.born = 'Port Moresby, Papua New Guinea.';</p>
                            <p className='whoami1' style={{paddingLeft: '10px'}}>Noel.location = 'Wellington, NZ';</p>
                            <p className='whoami1' style={{paddingLeft: '10px'}}>
                                Noel.favouriteQuote = 'The only person you are destined to become is the person you decide to be." - Ralph Waldo Emerson';
                            </p>
                            <p className='whoami1' style={{paddingLeft: '10px'}}>
                                Noel.currentFavouriteMovie = 'The boy who harnessed the wind.';
                            </p>

                       </div>
                   </div>
                </div>  
                <div className='rightBox'>
                    <div className='aboutRight'>
                        <h4>Contact Me Now!</h4>
                        <img src={mailIcon} onClick={() => copyEmail()} alt='Mail Icon'></img>
                        <img src={instagram} onClick={() => {window.open('https://www.instagram.com/melanesian.28/', '_blank')}} alt='Instagram Icon'></img>
                        <img src={github} onClick={() => {window.open('https://github.com/noelw19', '_blank')}} alt='Github Icon'></img>
                        <img src={linkedIn} onClick={() => {window.open('https://www.linkedin.com/in/noel-williams-1660b1190/', '_blank')}} alt='LinkedIn Icon'></img>
                    </div>  
                    <div className='rightImg'>
                        {/* <p>wakanda</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}