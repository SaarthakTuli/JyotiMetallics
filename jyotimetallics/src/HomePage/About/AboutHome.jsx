import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './AboutHome.css'

function AboutHome() {

    const navigate = useNavigate();

    return (
        <div className='container homeAbout'>
            <h1 className='homeAbout__title'>Dealing in Metallic Goods since 5yrs+</h1>
            <br />
            <h1 className='homeAbout__content'>Inspired by my father, who has been a steel tycoon for over 40 years, my childhood passion, a female entrepreneur sees the light of day at Jyoti Metallics, one of the fastest growing companies in the last decade. .. Over time, growth has been driven by a repeat business from delighted customers, providing high quality products, fast and long-term service support. This group is run by dedicated people with a positive mindset and attitude of offering only the best.</h1>

            
            <button className='about__btn' onClick={() => navigate('/about')} >
                {/* <Link to='/about'> */}
                    What's More
                {/* </Link> */}
            </button>
            
        </div>
    );
}

export default AboutHome;