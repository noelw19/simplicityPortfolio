// import styles from './index.module.css';
import React, {useEffect} from 'react';
import './animation.css';

export const Home = () => {

    // let lastIcon = document.querySelector('#lastIcon');

    
    
    
    useEffect(() => {
        
        let iconTip = {
            js:'Javascript',
            react: 'ReactJs',
            api: 'API',
            css: 'CSS',
            html: 'HTML',
            py: 'Python',
            styledC: 'Styled Components',
            node: 'NodeJS'
        }

        let iconTipContainer = document.querySelector('.iconTipText');

        let iconObjKeys = Object.keys(iconTip)
        let iconContainer = document.querySelector('#techStack');
        let iconEl = document.querySelectorAll('.icon');
        
        console.log(iconObjKeys);
        // console.log(iconEl)
        iconContainer.addEventListener('mouseenter', () => {
            iconEl.forEach(val => {
                val.style.animationPlayState = 'paused';
            })
        })

        iconContainer.addEventListener('mouseleave', () => {
            iconEl.forEach(val => {
                val.style.animationPlayState = 'running';
            })
        })

        iconEl.forEach(val => {
            val.addEventListener('mouseenter', (e) => {
                iconObjKeys.forEach(key => {
                    if(val.classList.contains(key)) {
                        iconTipContainer.style.visibility = 'visible';
                        iconTipContainer.textContent = iconTip[key]
                    }
                })
            })
        })

        iconEl.forEach(val => {
            val.addEventListener('mouseleave', (e) => {
                iconTipContainer.textContent = '';
                iconTipContainer.style.visibility = 'hidden';

            })
        })
        
    }, [])


    return (
        <div className='routedPageContainer flexCenter'>
            <div className='contentContainer'>
                <div className='topTitle'>
                    <h1 className='orange'>Web Developer</h1>
                    <h2 className='lightGrey'>What you develop, develops you.</h2>    
                </div>

                <div className='bioContainer'>
                    <div className='imageContainer'>
                        <div className='image'></div>
                    </div>
                    <div className='bioText'>
                        <p>
                            DOB: 19/04/1995
                        </p>
                        <p>
                            A Web Developer in the land of the long white cloud (New Zealand).
                        </p>
                        <p>I have a deep passion for javascript and the things it has allowed me to learn. Javascript has broadened my knowledge in ways and areas I could never have imagined such as:</p> 
                        <ul>
                            <li>Developing dynamic websites and simple games with vanilla JS</li>
                            <br/>
                            <li>Using frontend technologies such as ReactJS, Redux, React-Router, TailwindsCss to name a few. </li>
                            <br/>
                            <li>Building REST api's using NodeJS, ExpressJS and cors, using node to create child processes that run python code for webscraping and piping the results to Node for processing.</li>
                            <br/>
                            <li>Toying with arduino using the johnny five JS library setting up a simple website that runs commands from a website through websockets to execute predefined functions and retrieve updated data for the UI.</li>
                            <br/>
                            <li>Using my Javascript knowledge to help me with the art of web application penetration testing and ethical hacking with hopes to progress my skills and secure my web application code through experience of exploits.</li>

                        </ul>
                    </div>
                    
                </div>

                

                <div className='iconTip'><p className='iconTipText'></p></div>
                <div className='technologies' id='techStack'>
                    <div className='animate icon js'/>
                    <div className='icon react'/>
                    <div className='icon node'/>

                    <div className='icon api'/>
                    <div className='icon styledC'/>
                    <div className='icon py'/>
                    <div className='icon html'/>
                    <div className='icon css' id='lastIcon'/>
                </div>
            </div>
        </div>
    )
}