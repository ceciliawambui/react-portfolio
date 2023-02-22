// import React from 'react'
import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

function intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            strings:  ['Developer', 'Manager', 'Mentor'],
        });
    },[]);

    return (
        <div className='intro' id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/woman2.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Skylar Williams</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down4.png" alt="" />
                </a>
            </div>

        </div>
    )
}

export default intro