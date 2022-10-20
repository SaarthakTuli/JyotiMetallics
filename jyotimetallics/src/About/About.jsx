import React from 'react'

import Header from '../Header/Header';
import Values from './Values';

import './About.css'
import GoToTop from '../GoToTop';


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
          <div className='about__image'>
            <img
              src="./images/product9.png"
              alt="temp"
            />
          </div>

          <div className="about__contents">
            <h1>Very goood company</h1>

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