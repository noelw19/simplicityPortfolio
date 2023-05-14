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
                // console.log(bioTextElements[i]);
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
                setTimeout(() => {
                    iconTipContainer.textContent = '';
                    iconTipContainer.style.visibility = 'hidden';
                }, 3000)

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
                        <p className='bText'>let Noel = new Object();</p>
                        <p className='bText'>Noel.bio = "I am a software developer who loves to build practical projects using Javascript and Python. Whether it's building websites, servers, or programming sensors, I enjoy creating solutions that solve problems in my daily life.<br/><br/>
When I'm not coding, you can find me practicing Muay Thai. I believe in the power of hard work and persistence, which is why I'm committed to delivering innovative solutions that make a difference. I'm excited to continue developing my skills and exploring new areas of interest in the world of programming.";</p>

                        <p className='bText'>Noel.interests = ['Electronics', 'Arduino', 'Javascript', 'NodeJs', 'Reading', 'Security', 'Linux', 'Still populating.....'];</p>

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