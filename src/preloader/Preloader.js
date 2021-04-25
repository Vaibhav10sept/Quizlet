import React from 'react'
import { CubeGrid } from "styled-loaders-react";
// import img from "../../assets/logo-final.png";
import './preloader.css';
function Preloader() {
    return (
        <div className="preloader">
        <div>
          {" "}
          <br />
          <CubeGrid size="90px" color="#F5965C" />
        </div>
        {/* <img className="preloader-img" src={img} alt="" /> */}
      </div>
    )
}

export default Preloader
