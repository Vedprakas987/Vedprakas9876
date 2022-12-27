import React from 'react';
import {Routes,Route} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import Skills from "./Skills";
import Project from "./Project"
const Allroutes = () => {
    return (
        <div>
            <Routes>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Resume' element={<Resume/>}/>
          <Route path='/Skills' element={<Skills/>}/>
          <Route path='/Project' element={<Project/>}/>

          </Routes>
        </div>
    );
}

export default Allroutes;
