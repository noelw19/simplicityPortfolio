import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom"
import './index.css';
import './darkModeToggle.css';

import copyEmail from '../../utils/copyEmailToClipboard';

import mailIcon from '../../images/mainIcon.png';
import linkedIn from '../../images/linkedInIcon.png';
import github from '../../images/githubIcon.png';
import instagram from '../../images/instaIcon.png'


export const Nav = () => {


    // ------------------ Dark Mode Toggle ------------------- //
    

    let darkModeToggle = () => {

        // local storage checker for when site is opened is found in the html file changing styles according to the current
        // light mode setting and another crossover is found in the initial index.css file with the body css selector.

        var app = document.getElementsByTagName("BODY")[0];
        if (localStorage.lightMode === "dark") {
            localStorage.lightMode = "light";
            app.setAttribute("light-mode", "light");
        } else {
            localStorage.lightMode = "dark";
            app.setAttribute("light-mode", "dark");
        }

        let root = document.querySelector(':root')
        let gcs = getComputedStyle(root);
        let BG = gcs.getPropertyValue('--currentBG');
        let text = gcs.getPropertyValue('--currentText');

        root.style.setProperty('--currentText', BG);
        root.style.setProperty('--currentBG', text);
    }

    //  ----------------------- END Dark Mode Toggle -------------------------
    
    window.addEventListener('DOMContentLoaded', () => {
        
        // let url = window.location.href;
        
        // console.log(url.slice(24))
        
        // let pagePath = url.slice(24);

        // switch(pagePath) {
        //     case 'projects':
        //         setActive('Projects');
        //         break;
        //     case 'About': 
        //         setActive('About');
        //         break;
        //     default:
        //         setActive('Home');
        //         break;
        // }

        
        
        
        window.addEventListener('resize', () => {
            let width = window.innerWidth;
            let navLinkBlock = document.querySelector('.navLinkContainer');


            if(width < 760) {
                navLinkBlock.style.background = '#082032';
                navLinkBlock.style.display = 'none';
                let socialCont = document.querySelector('.socialLinks');
                socialCont.style.display = 'none';
                navLinkBlock.style.color = 'white';

                // closeMenu()
            } else if(width > 760) {
                navLinkBlock.style.background = 'none';
                navLinkBlock.style.display = 'flex';
                let socialCont = document.querySelector('.socialLinks');
                socialCont.style.display = 'flex';
                // closeMenu()
                // menuOpen = false;
    
            }
        })
    })



    let openMenu = () => {
        let cover = document.querySelector('.cover');
        let navLinkBlock = document.querySelector('.navLinkContainer');
        let socialCont = document.querySelector('.socialLinks');
        let hamburgLines = document.querySelectorAll('.menuLine');
        let pageLinks = document.querySelectorAll('.linkTag');
        let width = window.innerWidth;


        if(width < 760) {
            pageLinks.forEach((link) => {
                if(!link.classList.contains('activeBtn')) {
                    link.style.color = '#FFFFFF';
                } else if(link.classList.contains('activeBtn')){
                    link.style.color = 'var(--currentBG)';
                }
            })
        }

        socialCont.style.display = 'flex';
        // navLinkBlock.style.color = 'white';
        navLinkBlock.style.right = '0px';
        navLinkBlock.style.display = 'block';
        navLinkBlock.style.background = 'rgb(56, 52, 52)';
        cover.style.display=  'block';
        hamburgLines.forEach((el, index) => {
            // el.style.borderColor = 'white';
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

    let closeMenu = () => {
        let hamburgLines = document.querySelectorAll('.menuLine');
        let cover = document.querySelector('.cover');
        let navLinkBlock = document.querySelector('.navLinkContainer');
        let socialCont = document.querySelector('.socialLinks');
        socialCont.style.display = 'none';
        // navLinkBlock.style.color = 'var(--currentText)';
        navLinkBlock.style.right = '-20rem';
        cover.style.display=  'none';
        hamburgLines.forEach((el, index) => {
            // el.style.borderColor = 'white';
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

    let menuOpen = false;

    let hamburgClickHandler = () => {
        menuOpen = !menuOpen;
        // console.log('clicked')
        if(menuOpen) {
            openMenu()
        } else {
            closeMenu()
        }
    }

    const location = useLocation();
    let RedirectHome = () => {
        console.log(location.pathname)
        if(location.pathname !== '/') {window.location.href = '/';}
        else {
            // console.log('already on home')

        }
    }

    // let setActive = (btnName) => {
    //     let navLink = document.querySelectorAll('.navLink');
    //     navLink.forEach(el => {
    //         el.classList.remove('activeBtn');
    //         el.textContent === btnName && el.classList.add('activeBtn');
    //     })

    // }

    

    return (
        <div className="navBarParent fullWidth">
            <div className='navLogo' onClick={() => {RedirectHome();}}>
                <div className='logo'></div>  
                <p id='websiteTitle'>Noel Williams</p>  
            </div>


            <div className='socialLinks'>
                        <img src={mailIcon} onClick={() => {
                            copyEmail();
                            }} alt='Mail Icon'></img>
                        <img src={instagram} onClick={() => {window.open('https://www.instagram.com/melanesian.28/', '_blank')}} alt='Instagram Icon'></img>
                        <img src={github} onClick={() => {window.open('https://github.com/noelw19', '_blank')}} alt='Github Icon'></img>
                        <img src={linkedIn} onClick={() => {window.open('https://www.linkedin.com/in/noel-williams-1660b1190/', '_blank')}} alt='LinkedIn Icon'></img>
            </div>


            <div className='navLinkContainer'>
                <ul>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? "navLink linkTag activeBtn" : "navLink linkTag")} onClick={() => { if(window.innerWidth < 760) {menuOpen = false; closeMenu();}}} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? "navLink linkTag activeBtn" : "navLink linkTag")} onClick={() => { if(window.innerWidth < 760) {menuOpen = false; closeMenu();}}} to="about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? "navLink linkTag activeBtn" : "navLink linkTag")} onClick={() => {if(window.innerWidth < 760) {menuOpen = false; closeMenu();}}} to="projects">Projects</NavLink>
                    </li>
                    <li>
                        <button className="light-mode-button navLink linkTag"  onClick={() => {darkModeToggle()}}>
	                        <span></span>
	                        <span></span>
	                    </button> 
                    </li>
                </ul>
            </div>
            <div className='hamburgMenu' onClick={() => hamburgClickHandler()}>
                <div className='menuLine hamburgTop'></div>
                <div className='menuLine hamburgMid'></div>
                <div className='menuLine hamburgBottom'></div>
            </div>
            <div className='cover'></div> 

        </div>
    )
}