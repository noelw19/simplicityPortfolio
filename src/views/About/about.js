import './index.css';

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
                            <p className='whoami1' style={{paddingLeft: '10px'}}>Born: 1995, Port Moresby<br/><br/>Current Fav Quote: <br/><blockquote>Try not to become a man of success, rather a man of value - Albert Einstein</blockquote></p>
                            <p className='whoami1' style={{borderTop: '1px solid white'}}>2022 progress goals: <ul><li><strong>Hack the box</strong> - 45 problems complete</li><li><strong>Blockchain</strong> - Be able to deploy smart contracts that save data through ipfs with frontend</li><li><strong>Arduino</strong> - charging batteries with sustainable energy captured, with backend for monitoring.</li></ul></p>
                       </div>
                    <p className='whoami1' style={{borderTop: '1px solid white', paddingTop: '1rem'}}>
                        I want to learn and build things that solve a problem or provide a service. Programming makes time fly and gives me a sense of usefulness, progressing my knowledge to increase my ability to develop better and more useful applications. <br /><br/> Please send me an email to chat or cooperate on a project idea.
                    </p>
                   </div>
                </div>  
                <div className='rightBox'>
                    <div className='aboutRight'>
                        <h4>Contact Me Now!</h4>
                        <img src={mailIcon} onClick={() => alert('noelw19@outlook.com copied to clipboard')} alt='Mail Icon'></img>
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