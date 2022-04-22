// import styles from './index.module.css';
import React, {useEffect} from 'react';
import './index.css';

export const Home = () => {

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

        let bioTextElements = document.querySelectorAll('.bText');
        for(let i = 0; i < bioTextElements.length; i++) {
            setTimeout(() => {
                bioTextElements[i].style.visibility = 'visible';
                bioTextElements[i].classList.add('shuffleToLeft')
                console.log(bioTextElements[i]);
            }, 1000)
        }


        
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

    let HomeJSX = () => (
        <div className='contentContainer'>
                {/* <div className='topTitle'>
                    <h1 className='devTitle'>Web Developer</h1>
                </div> */}

                <div className='bioContainer'>
                    <div className='imageContainer'>
                        <div className='image'></div>
                    </div>
                    <div className='bioText'>
                        <p className='bText'>
                            A programmer in the land of the long white cloud (New Zealand).
                        </p>
                        <p className='bText'>Programmer with 3-4 years experience, developing web apps, desktop apps with javascript, data visualisers with python and javascript, sudoku solver web app, basic smart contract development with the truffle suite, arduino projects in nodeJS with web socket functionality for frontend to send and manipulate the state within the arduino, I am also currently building a MERN stack app with auth0 authentication on the side to hone my nodeJs and mongodb skills.</p>
                        <p className='bText'>I have a very deep curiousity about the world around me and I am grateful I have found programming because of the variety of things I have learnt because of it, the internet, everyday programs and how they work, electricity, energy, hardware coding with arduino, ethical hacking with capture the flag games to find ways to better protect my devices, programming has completely transformed my life and the way I think.</p>
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
    )

    return (
        <div className='routedPageContainer flexCenter' id='homeLoad'>
            <HomeJSX />
        </div>
    )
}