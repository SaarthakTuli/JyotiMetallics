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
    desc: "Becoming a supporter of manufacturers of rolling mill machines as well as one of leading providers of flat steel solutions. Our goal is to lead the industry in offering cutting-edge solutions with advanced materials by offering excellent management and service. Our goal is to maintain our business sustainability, personal development of our employees as a priority, by exceeding and meeting client expectations.",
    image: "./images/Vision.jpg",
  },

  {
    id: 2,
    title: "Our Mission",
    desc: "Through a spectrum of continually evolving products and services, we aim to satisfy customers. We are a trustworthy business that honors its commitments to both internal and external clientele. We expand in a profitable and long-lasting manner. Through ongoing teamwork, professional advancement, and supplier development, we aim to benefit society and our suppliers' advance. Engineers with dedication, expertise, and the ability to think forward are in charge of the team. Management spends the time to attend the final commissioning of every project to strengthen their capacity for adaptive thinking",
    image: "./images/Mission.jpg",
  },

  {
    id: 3,
    title: "Our Values",
    desc: "Leadership, Focus on achievement and customer satisfaction. Our aim for Continuous Improvement and our team is Creativity and Innovation and believes in Teamwork. Creation of Value and Profitability Diversity and Dignity in the Workplace Corporate Ethics.",
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
                    desc={truncate(desc, 200)}
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