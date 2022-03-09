import { Routes, Route } from 'react-router-dom'
import { Home } from './views/Home/home.js';
import { About } from './views/About/about.js'
import { Projects } from './views/Projects/projects.js'
import { LearnerBlog } from './views/LearningBlog/lBlog.js';
import {Nav} from './components/Nav/nav.js'

import './App.css';

function App() {
  return (
    <div className='App'>
      <Nav />
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='about' element={<About />} />
       <Route path='projects' element={<Projects />} />
       <Route path='blog' element={<LearnerBlog />} />

     </Routes>
    </div>
  );
}

export default App;
