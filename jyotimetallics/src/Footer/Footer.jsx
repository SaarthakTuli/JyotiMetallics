import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

import { FaMapPin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'

import Logo from '../assets/logo.png'

function Footer({ page }) {
  return (
    <div className={`footer ${page && 'home__margin'}`}>
      
      <div className="footer__div">
        <div className='footer__companyDiv'>
          <div className='footer__company'>
            <img
              src={Logo}
              alt="logo"
              className='footer__logo'
            />
            <h1 className='footer__companyName'>Jyotimetallics India Pvt. Ltd.</h1>
          </div>
        </div>

        <div className='footer__linksDiv'>
          <div className='contact__div'>
            <h1 className='footer__title' style={{ marginBottom: "1.3rem" }}>Important Links</h1>

            <Link to='/about'>
              <h1 className='footer__links' style={{ marginBottom: "1.3rem" }}>About Us</h1>
            </Link>

            <Link to='/products3'>
              <h1 className='footer__links' style={{ marginBottom: "1.3rem" }}>Pickling Line</h1>
            </Link>

            <Link to='/products11'>
              <h1 className='footer__links' style={{ marginBottom: "1.3rem" }}>Coil Peeler</h1>
            </Link>

            <Link to='/products10'>
              <h1 className='footer__links' style={{ marginBottom: "1.3rem" }}>Exit Coil Car</h1>
            </Link>
          
          </div>
        </div>


        <div className='footer__linksDiv'>
          <div>
            <h1 className='footer__title'>Contact Info</h1>

            <div className='footer__contactDiv'>
              <FaMapPin className='footer__icon' />
              <h1 className='footer__links'>Khasra Number 5, Kelley Khandawali <br className='break'/>Road, Ballabhgarh-121004</h1>
            </div>

            <div className='footer__contactDiv'>
              <MdEmail className='footer__icon' />
              <h1 className='footer__links'>jyotimetallics@gmail.com</h1>
            </div>

            <div className='footer__contactDiv'>
              <BsFillTelephoneFill className='footer__icon' />
              <h1 className='footer__links'>+91 9811044165</h1>
            </div>
          </div>
          
        </div>
      </div>


    </div>
  );
}

export default Footer