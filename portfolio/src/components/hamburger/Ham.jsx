// import React from 'react'
// import "./ham.scss"


// function Ham(isOpen) {
//     return (
//         <div className='ham'>
//             <div className="hamburger">
//                 <div className="burger burger1"></div>
//                 <div className="burger burger2"></div>
//                 <div className="burger burger3"></div>
//             </div>
//         </div>
//     )
// }

// export default Ham
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';
import "./ham.css"

export default function Ham() {
  const [showAnimated, setShowAnimated] = useState(false);
  const [showAnimated2, setShowAnimated2] = useState(false);
  const [showAnimated3, setShowAnimated3] = useState(false);

  return (
    <>
      {/* <section className='mb-3'>
        <MDBNavbar>
          <MDBContainer fluid>
            <MDBNavbarToggler
              type='button'
              className='first-button'
              data-target='#navbarToggleExternalContent'
              aria-controls='navbarToggleExternalContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowAnimated(!showAnimated)}
            >
              <div className={`animated-icon1 ${showAnimated && 'open'}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>

        <MDBCollapse show={showAnimated}>
          <div className='bg-light shadow-3 p-4'>
            <MDBBtn block className='border-bottom m-0' color='link'>
              Link 1
            </MDBBtn>
            <MDBBtn block className='border-bottom m-0' color='link'>
              Link 2
            </MDBBtn>
            <MDBBtn block className='border-bottom m-0' color='link'>
              Link 2
            </MDBBtn>
          </div>
        </MDBCollapse>
      </section> */}

      <section className='mb-4'>
        <MDBNavbar dark bgColor='dark'>
          <MDBContainer fluid>
            <MDBNavbarToggler
              type='button'
              className='second-button'
              data-target='#navbarToggleExternalContent'
              aria-controls='navbarToggleExternalContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowAnimated2(!showAnimated2)}
            >
              <div className={`animated-icon2 ${showAnimated2 && 'open'}`}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>

        <MDBCollapse show={showAnimated2}>
          <div className='bg-light shadow-3'>
            <MDBBtn block className='border-bottom m-0' color='link'>
              Home
            </MDBBtn>
            <br />
            
            <MDBBtn block className='border-bottom m-0' color='link'>
              Portfolio
            </MDBBtn>
            
            <MDBBtn block className='border-bottom m-0' color='link'>
              Works
            </MDBBtn>
            
            <MDBBtn block className='border-bottom m-0' color='link'>
              Testimonials
            </MDBBtn>
            
            <MDBBtn block className='border-bottom m-0' color='link'>
              Contact
            </MDBBtn>
          
          </div>
        </MDBCollapse>
      </section>

      {/* <section className='mb-3'>
        <MDBNavbar dark bgColor='info'>
          <MDBContainer fluid>
            <MDBNavbarToggler
              type='button'
              className='third-button'
              data-target='#navbarToggleExternalContent'
              aria-controls='navbarToggleExternalContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowAnimated3(!showAnimated3)}
            >
              <div className={`animated-icon3 ${showAnimated3 && 'open'}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>

        <MDBCollapse show={showAnimated3}>
          <div className='bg-light shadow-3 p-4'>
            <MDBBtn block className='border-bottom m-0' color='link'>
              Link 1
            </MDBBtn>
            <MDBBtn block className='border-bottom m-0' color='link'>
              Link 2
            </MDBBtn>
            <MDBBtn block className='border-bottom m-0' color='link'>
              Link 2
            </MDBBtn>
          </div>
        </MDBCollapse>
      </section> */}
    </>
  );
}