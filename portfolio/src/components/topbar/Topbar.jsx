// import React from 'react'
import "./topbar.scss"
// import { Person, Mail } from "@material-ui/icons";
// import PersonIcon from '@mui/icons-material/Person';
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Ham from "../hamburger/Ham";

function Topbar() {
  return (
    <div className='topbar' id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#works" className="logo">genius.</a>
          <div className="itemContainer">
            {/* <PersonIcon /> */}
            <FontAwesomeIcon icon={faUser} className="icon" />

            {/* <Person /> */}
            <span>
              +254712345678
            </span>

          </div>
          <div className="itemContainer">
            {/* <Mail /> */}
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <span>
              web@gmail.com
            </span>

          </div>
          {/* <h1>Hello</h1> */}
        </div>
        <div className="right">
          <Ham/>
          {/* <div className="hamburger">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line"></span>
          </div> */}

        </div>

      </div>

    </div>
  )
}

export default Topbar