import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './Footer.css'

import { FaMapPin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'

import Logo from '../assets/logo.png'

function Footer({ page }) {

  const navigate = useNavigate();

  const [id, setId] = useState(1);

  // useEffect(() => {
  //   setId(3);
  // }, [id])

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

        {/* <div className='footer__linksDiv'>
          <div className='contact__div'>
            <h1 className='footer__title' style={{ marginBottom: "1.3rem" }}>Important Links</h1>

            <Link to='/about'>
              <h1 className='footer__links' style={{ marginBottom: "1.3rem" }} onClick={() => navigate('/about')}>About Us</h1>
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
        </div> */}


        <div className='footer__linksDiv'>
          <div>
            <h1 className='footer__title'>Contact Info</h1>

            <div className='footer__contactDiv'>
              <FaMapPin className='footer__icon' />
              <a className='footer__links' href='https://www.google.com/maps/dir//Khandawli,+Sector+150,+Faridabad,+Haryana+121004/@28.2995277,77.2926338,19z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390cda2f2e82c307:0xcc86296650ea85f9!2m2!1d77.2926206!2d28.2998254!3e2' target='_blank'>Khasra Number 5, Kelley Khandawali <br className='break'/>Road, Ballabhgarh-121004</a>
            </div>

            <div className='footer__contactDiv'>
              <MdEmail className='footer__icon' />
              <a className='footer__links' href="mailto:jyotimetallics@gmail.com" target="_blank">jyotimetallics@gmail.com</a>
            </div>

            <div className='footer__contactDiv'>
              <BsFillTelephoneFill className='footer__icon' />
              <a className='footer__links' href='https://wa.me/+919811044165' target="_blank">+91 9811044165</a>
            </div>
          </div>
          
        </div>
      </div>


    </div>
  );
}

export default Footer