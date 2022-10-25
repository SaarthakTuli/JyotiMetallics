import React from 'react'

import Header from '../Header/Header';
import Values from './Values';

import './About.css'
import GoToTop from '../GoToTop';
import Qualification from './Qualification';


const vmv = [
  {
    id: 1,
    title: "Vision",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laborum pariatur eaque nihil doloribus aliquid enim soluta, id sit repellendus minima exercitationem aperiam esse fugit quam itaque quasi, suscipit similique!",
    image: "./images/Vision.jpg",
  },

  {
    id: 2,
    title: "Mission",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laborum pariatur eaque nihil doloribus aliquid enim soluta, id sit repellendus minima exercitationem aperiam esse fugit quam itaque quasi, suscipit similique!",
    image: "./images/Mission.jpg",
  },

  {
    id: 3,
    title: "Values",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laborum pariatur eaque nihil doloribus aliquid enim soluta, id sit repellendus minima exercitationem aperiam esse fugit quam itaque quasi, suscipit similique!",
    image: "./images/Values.jpg",
  },
];


function About() {
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

         <div className='about__values'>
          {
            vmv.map((prop) => {
              
              const { id, title, desc, image } = prop;
              
              return (
                <Values
                  key={id}
                  title={title}
                  desc={desc}
                  image={image}
                />
              )
          
            })
          }
        </div> 
      </div>

      <GoToTop />
      </>
    
  );
}

export default About