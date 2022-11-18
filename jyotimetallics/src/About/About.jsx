import React from 'react'

import Header from '../Header/Header';
import Values from './Values';
import Footer from '../Footer/Footer'

import './About.css'
import GoToTop from '../GoToTop';
import Qualification from './Qualification';
import CounterUp from './CounterUp';


const vmv = [
  {
    id: 1,
    title: "Our Vision",
    desc: "With our products, We intend to provide support to the manufacturers of Rolling Mill Machines and to become the leading providers of flat-steel solutions. We aim to lead the industry by offering quality-services adn expert suggestions as well as through our cutting-edge tech solutions.",
    image: "./images/Vision.jpg",
  },

  {
    id: 2,
    title: "Our Mission",
    desc: "We aim to maximise customer satisfaction by providing dynamic products and services. The fulfilment of commitments to both internal and external clientele has ensured our status as a trustworthy organisation. Considering supplier development on our way to benefit society. ",
    image: "./images/Mission.jpg",
  },

  {
    id: 3,
    title: "Our Values",
    desc: "Diversity, Dignity, Innovation: An amalgamation of these qualities with teamwork, leadership and creativity is used to achieve customer satisfaction. Our values can also be summarised by 3C's: Creation of Value, Continuous Improvement and Corporate Ethics.",
    image: "./images/Values.jpg",
  },
];


function About() {

  function truncate(str, n) { 
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      <Header Banner={"./Banner/AboutBanner.jpeg"} text={"About Us"} lightText={true} />
      <div className='container'>

        <div className='about__intro'>
          <div className="about__imageBg">
            <div className='about__imageDiv'>
              <img
                src="./images/product9.png"
                alt="temp"
                className='about__image'
              />
            </div>
          </div>

          <div className="about__contents">
            <h1 className='about__title'>We deal in Customer Satisfaction</h1>
            <h1 className='about__description'>We provide you with personalized recommendations according to your needs with utmost sincerity and the best quality products that would withstand any workload. We do all of this, while also maintaining the most competitive rates.</h1>
            <Qualification />
          </div>
        </div>
        
        <div style={{marginTop: "10rem"}}>

          <div className='center'>
            <h1 style={{ fontSize: "36px", paddingBottom: "2rem", textAlign: "center" }}>Our Accomplishments</h1>
          </div>
          
          <div className='about__counter'>
            <CounterUp total={1000} text={"Satisfied Customers"} />
            <CounterUp total={60} text={"Projects Completed"} />
          </div>
        </div>
        

        <div className="about__valuesDiv" style={{marginTop: "10rem"}}>

          <div className='center'>
            <h1 style={{fontSize: "36px", paddingBottom: "2rem"}}>Our Ideals</h1>
          </div>

          <div className='about__values'>
            {
              vmv.map((prop) => {
              
                const { id, title, desc, image } = prop;
              
                return (
                  <Values
                    key={id}
                    title={title}
                    desc={truncate(desc, 300)}
                    image={image}
                  />
                );
              })
            }
          </div>
        </div>
      </div>

      <Footer style={{paddingTop: "10rem",}} page={false} />

      <GoToTop />
    </>
    
  );
}

export default About