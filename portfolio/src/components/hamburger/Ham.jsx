import React from 'react'
import "./ham.scss"


function Ham(isOpen) {
    return (
        <div className='ham'>
            <div className="hamburger">
                <div className="burger burger1"></div>
                <div className="burger burger2"></div>
                <div className="burger burger3"></div>
            </div>
        </div>
    )
}

export default Ham