import './index.css';

export const About = () => {
    return (
        <div className='routedPageContainer flexCenter'>
            <div className='aboutContainer'>
                <div className='aboutLeft'>
                   <div className='leftContainer'>
                       <div className='rowTextAbout'>
                            <p className='whoami1'>Likes: <blockquote>Javascript, Arduino, Sustainable Energy, Jordan Peterson, Blockchain & Crypto, reading, thought provoking questions</blockquote><br/> Dislikes: <blockquote>Covid 19</blockquote></p>
                            <p className='whoami1' style={{paddingLeft: '10px', borderLeft: '1px solid white'}}>Ethnicity: Papua New Guinea/NZ<br/><br/>Current Fav Quote: <br/><blockquote>Try not to become a man of success, rather a man of value - Albert Einstein</blockquote> <br/><br/>Favourite Movie Genre: Horror</p>
                       </div>
                    <p className='whoami1'>
                        Grew up in PNG, finished high school in NZ, I am a bartender with a love for programming and problem solving, moving down the river of life pursueing my curiousity, absorbing knowledge and sharing positivity.
                    </p>
                   </div>
                </div>  
                <div className='rightBox'>
                    <div className='aboutRight'>
                        <p>CONTACT:</p>
                        <p className='contactText'>Email: noelw19@outlook.com</p>
                        <p className='contactText contactLink' onClick={() => {window.open('https://www.instagram.com/melanesian.28/', '_blank')}}>Instagram: Melanesian_28</p>
                        <p className='contactText contactLink' onClick={() => {window.open('https://www.linkedin.com/in/noel-williams-1660b1190/', '_blank')}}>LinkedIn: noel-williams</p>

                    </div>  
                    <div className='rightImg'>
                        {/* <p>wakanda</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}