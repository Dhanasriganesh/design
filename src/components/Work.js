
import "./Workstyles.css"

import React from 'react'
import D from "../assets/backend.jpg"
import I from "../assets/app.jpg"
import U from "../assets/uiux.jpg"
import project from "../assets/front.jpg"
import { NavLink } from "react-router-dom"


const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>

      <div className="side">
        
      <div className="project-card">
          <img src={I} alt="image" />
          <h2 className="project-title">App</h2>
          <div className="pro-details">
            <p> Development</p><br />
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">View
              </NavLink>
              <NavLink to="url.com" className="btn">Source
              </NavLink>
            </div>
          </div>
        </div>



        <div className="project-card">
          <img className="frontimg" src={project} alt="image" />
          <h2 className="project-title">Frontend</h2>
          <div className="pro-details">
            <p> Development</p><br />
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">View
              </NavLink>
              <NavLink to="url.com" className="btn">Source
              </NavLink>
            </div>
          </div>
        </div>


        <div className="project-card">
          <img src={D} alt="image" />
          <h2 className="project-title">Backend</h2>
          <div className="pro-details">
            <p> Development</p><br />
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">View
              </NavLink>
              <NavLink to="url.com" className="btn">Source
              </NavLink>
            </div>
          </div>
        </div>



        


        <div className="project-card">
          <img src={U} alt="image" />
          <h2 className="project-title">UI/UX</h2>
          <div className="pro-details">
            <p> Development</p><br />
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">View
              </NavLink>
              <NavLink to="url.com" className="btn">Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>

    </div>
  )

}

export default Work