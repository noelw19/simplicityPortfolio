import { Routes, Route } from 'react-router-dom'
import { Home } from './views/Home/home.js';
import { About } from './views/About/about.js'
import { Projects } from './views/Projects/projects.js'
// import { LearnerBlog } from './views/LearningBlog/lBlog.js';
import {Nav} from './components/Nav/nav.js'

import './App.css';

function App() {

  window.addEventListener('DOMContentLoaded', () => {
    let setActive = (btnName) => {
      let navLink = document.querySelectorAll('.navLink');
      navLink.forEach(el => {
          el.classList.remove('activeBtn');
          el.textContent === btnName && el.classList.add('activeBtn');
      })
    }

    let url = window.location.href;
        
    let pagePath = url.slice(24);

    switch(pagePath) {
        case 'projects':
            setActive('Projects');
            break;
        case 'about': 
            setActive('About');
            break;
        default:
            setActive('Home');
            break;
    }
  })
  

  return (
    <div className='App'>
      <Nav />
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='about' element={<About />} />
       <Route path='projects' element={<Projects />} />
       {/* <Route path='blog' element={<LearnerBlog />} /> */}

     </Routes>
      <textarea className='emailText'>noelw19@outlook.com</textarea>
    </div>
  );
}

export default App;
