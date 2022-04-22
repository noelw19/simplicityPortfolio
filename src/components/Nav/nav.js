import { Link, useLocation } from "react-router-dom"
import './index.css';

import mailIcon from '../../images/mainIcon.png';
import linkedIn from '../../images/linkedInIcon.png';
import github from '../../images/githubIcon.png';
import instagram from '../../images/instaIcon.png'


export const Nav = () => {

    window.addEventListener('DOMContentLoaded', () => {
        let hamburgMenuEl = document.querySelector('.hamburgMenu');
        let hamburgLines = document.querySelectorAll('.menuLine');
        let navLink = document.querySelectorAll('.navLink');
        let navLinkBlock = document.querySelector('.navLinkContainer');
        let cover = document.querySelector('.cover');

        let url = window.location.href;

        console.log(url.slice(24))

        let pagePath = url.slice(24);

        switch(pagePath) {
            case 'projects':
                setActive('Projects');
                break;
            case 'About': 
                setActive('About');
                break;
            default:
                setActive('Home');
                break;
        }



        let closeMenu = () => {
            let socialCont = document.querySelector('.socialLinks');
            socialCont.style.display = 'none';
            navLinkBlock.style.right = '-20rem';
            navLinkBlock.style.display = 'none';
            cover.style.display=  'none';
            hamburgLines.forEach((el, index) => {
                el.style.borderColor = 'white';
                switch (index) {
                    case 0:
                        el.style.transform = 'rotate(0deg) translateX(0px)';
                        break;
                    case 1:
                        el.style.display = 'block';
                        break;
                    case 2:
                        el.style.transform = 'rotate(0deg) translateX(0px)';

                        break;
                    default:
                        break;
                }
            })
        }

        let openMenu = () => {
            let socialCont = document.querySelector('.socialLinks');
            socialCont.style.display = 'flex';
            navLinkBlock.style.right = '0px';
            navLinkBlock.style.display = 'block';
            navLinkBlock.style.background = 'rgb(56, 52, 52)';
            cover.style.display=  'block';
            hamburgLines.forEach((el, index) => {
                el.style.borderColor = 'white';
                switch (index) {
                    case 0:
                        el.style.transform = 'rotate(45deg) translateX(5px)';

                        break;
                    case 1:
                        el.style.display = 'none';
                        break;
                    case 2:
                        el.style.transform = 'rotate(-45deg) translateX(4px)';

                        break;
                    default:
                        break;
                }
            })
        }

        let menuOpen = false;

        hamburgMenuEl.addEventListener('click', (e) => {
            menuOpen = !menuOpen;
            console.log('clicked')
            if(menuOpen) {
                openMenu()
            } else {
                closeMenu()
            }
        })

        let width = window.innerWidth;

            if(width < 760) {
                navLink.forEach(el => {
                    el.addEventListener('mouseup', () => {
                        closeMenu()
                        menuOpen = false;
                        console.log('link clicked')
                    })
                })
    
            } else {
                navLinkBlock.style.display = 'block';
                
            }
        
        window.addEventListener('resize', () => {
            let width = window.innerWidth;

            if(width < 760) {
                navLinkBlock.style.background = '#082032';
                navLinkBlock.style.display = 'none';
                let socialCont = document.querySelector('.socialLinks');
                socialCont.style.display = 'none';
                closeMenu()

                navLink.forEach(el => {
                    el.addEventListener('mouseup', () => {
                        closeMenu();
                        menuOpen = false;
                        console.log('link clicked')
                    })
                })
            } else if(width > 760) {
                navLinkBlock.style.background = 'none';
                navLinkBlock.style.display = 'flex';
                let socialCont = document.querySelector('.socialLinks');
                socialCont.style.display = 'flex';
                // closeMenu()
                menuOpen = false;
    
            }
        })
    })

    const location = useLocation();
    let RedirectHome = () => {
        console.log(location.pathname)
        if(location.pathname !== '/') {window.location.href = '/';}
        else {
            console.log('already on home')

        }
    }

    let setActive = (btnName) => {
        let navLink = document.querySelectorAll('.navLink');

        navLink.forEach(el => {
            el.classList.remove('activeBtn');
            el.textContent === btnName && el.classList.add('activeBtn') 
            console.log(el.textContent)
        })

    }

    return (
        <div className="navBarParent fullWidth">
            <div className='navLogo' onClick={() => {RedirectHome();}}>
                <div className='logo'></div>  
                <p>Noel Williams</p>  
            </div>


            <div className='socialLinks'>
                <img src={mailIcon} alt='Mail Icon'></img>
                <img src={instagram} onClick={() => {window.open('https://www.instagram.com/melanesian.28/', '_blank')}} alt='Instagram Icon'></img>
                <img src={github} alt='Github Icon'></img>
                <img src={linkedIn} onClick={() => {window.open('https://www.linkedin.com/in/noel-williams-1660b1190/', '_blank')}} alt='LinkedIn Icon'></img>
            </div>


            <div className='navLinkContainer'>
                <ul>
                    <li>
                        <Link className='navLink' onClick={() => {setActive('Home')}} to="/">Home</Link>
                    </li>
                    {/* <li>
                        <Link className='navLink'to="blog">Learner Blog</Link>
                    </li> */}
                    <li>
                        <Link className='navLink' onClick={() => {setActive('About')}} to="about">About</Link>
                    </li>
                    <li>
                        <Link className='navLink' onClick={() => {setActive('Projects')}} to="projects">Projects</Link>
                    </li>
                </ul>
            </div>
            <div className='hamburgMenu'>
                <div className='menuLine hamburgTop'></div>
                <div className='menuLine hamburgMid'></div>
                <div className='menuLine hamburgBottom'></div>
            </div>
            <div className='cover'></div> 

        </div>
    )
}