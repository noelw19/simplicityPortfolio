import './index.css';

export const About = () => {
    return (
        <div className='routedPageContainer flexCenter'>
            <h1>My About Page</h1>
            <div className='aboutContainer'>
                <div className='aboutLeft'>
                   <p>Who Am I?</p>
                   <p className='whoami1'>
                       A Papua New Guinea born New Zealand citizen,
                       moved here in 2010, I attended Rotorua Boys High School and Huntly college.
                       <br/>
                       <br/>
                       I enjoy puzzles and learning about a range of things including but not limited to crypto, blockchain, 
                       sustainable energy generation and ways to store that energy, Javascript and its many uses, IoT, 
                       Electronics and technology. I want to find ways that I can apply my learning in a 
                       meaningful way, that could benefit more than just myself.
                   </p>

                   <p className='whoami1'>
                       I like to beleive that the future is ours for the taking and the knowledge you choose to consume over the long term will show silhouettes of what your future could be, as for mine, I would like to build and create things, solve problems, create services and help people.
                   </p>
                </div>  
                <div className='aboutRight'>
                    <p>CONTACT:</p>
                    <p className='contactText'>Email: noelw19@outlook.com</p>
                    <p className='contactText contactLink' onClick={() => {window.open('https://www.instagram.com/melanesian.28/', '_blank')}}>Instagram: Melanesian_28</p>
                    <p className='contactText contactLink' onClick={() => {window.open('https://www.linkedin.com/in/noel-williams-1660b1190/', '_blank')}}>LinkedIn: noel-williams</p>

                </div>  
            </div>
        </div>
    )
}