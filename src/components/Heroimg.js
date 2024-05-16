import "./Heroimgstyles.css"
import React from 'react'
import Introimg from "../assets/coffee.jpg"
import {Link} from "react-router-dom"

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img"
            src={Introimg} alt="Introimg"/>
        </div>
        <div className="content">
            <p>InnovImagine Solutions</p>
            <p>Right platform </p>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg