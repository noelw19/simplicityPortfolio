import { Link, useLocation } from "react-router-dom"
import './index.css';



export const Nav = () => {

    window.addEventListener('DOMContentLoaded', () => {
        let hamburgMenuEl = document.querySelector('.hamburgMenu');
        let hamburgLines = document.querySelectorAll('.menuLine');
        let navLink = document.querySelectorAll('.navLink');
        let navLinkBlock = document.querySelector('.navLinkContainer');
        let cover = document.querySelector('.cover');

        setActive('Home');

        let closeMenu = () => {
            navLinkBlock.style.right = '-20rem';
            navLinkBlock.style.display = 'none';
            cover.style.display=  'none';
            hamburgLines.forEach(el => {
                el.style.borderColor = 'black';
            })
        }

        let openMenu = () => {
            navLinkBlock.style.right = '0px';
            navLinkBlock.style.display = 'block';
            navLinkBlock.style.background = 'rgb(56, 52, 52)';
            cover.style.display=  'block';
            hamburgLines.forEach(el => {
                el.style.borderColor = 'white';
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

            if(width < 600) {
                navLink.forEach(el => {
                    el.addEventListener('mouseup', () => {
                        menuOpen = false;
                        closeMenu()
                        console.log('link clicked')
                    })
                })
    
            }
        
        window.addEventListener('resize', () => {
            let width = window.innerWidth;

            if(width < 600) {
                navLinkBlock.style.background = '#082032';
                navLinkBlock.style.display = 'none';

                navLink.forEach(el => {
                    el.addEventListener('mouseup', () => {
                        menuOpen = false;
                        closeMenu()
                        console.log('link clicked')
                    })
                })
            } else if(width > 600) {
                navLinkBlock.style.background = 'none';
                navLinkBlock.style.display = 'flex';
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
        })

    }

    return (
        <div className="navBarParent fullWidth">
            <div className='navLogo' onClick={() => {RedirectHome();}}>
                <div className='logo'></div>  
                <p>Noel Williams</p>  
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