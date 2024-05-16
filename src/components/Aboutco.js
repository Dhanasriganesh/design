import { Link } from "react-router-dom"
import "./Aboutcost.css"
import React from 'react'

const Aboutco = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who We Are?</h1>
            <p>Developers</p>
            <Link to="/Contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right"></div>
    </div>
  )
}

export default Aboutco