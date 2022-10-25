import React, { useRef } from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

import Header from '../Header/Header';
import Map from '../Map/Map'
import GoToTop from '../GoToTop'


const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
}
  


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_comxjjp', 'template_9fu3bgu', form.current, 'FOj8OLbA1Ch1oFlDf')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };

    return (
        <>
            <section id='contact'>
                <Header Banner={"./Banner/Banner4.jpg"} text={"Contact Us"} lightText={true} />

                {/* <div className=" contact__infoDiv">
                    <div className="contact__info">
                        <div className="contact__contents">
                            <h1>
                                Email us at:
                            </h1>
                            <h1>jyotimetallics</h1>
                        </div>
                    </div>
                </div> */}

                <div className="container contact__container">
                    <div className="contact__options">
                        <article className="contact__option">
                            <MdOutlineEmail className='contact__option-icon' />
                            <h4>Email</h4>
                            <h5>jyotimetallics@gmail.com</h5>
                            <a className='anchor' href="mailto:jyotimetallics@gmail.com" target="_blank">Send a Message</a>
                        </article>

                        <article className="contact__option">
                            <BsWhatsapp className='contact__option-icon' />
                            <h4>Whatsapp</h4>
                            <h5>9811044165</h5>
                            <a href='https://wa.me/9811044165' target="_blank">Send a Message</a>
                        </article>
                    </div>

                    <form ref={form} onSubmit={sendEmail}>
                        <input type='text' name='name' placeholder='Your Full Name' required />
                        <input type='email' name='email' placeholder='Your Email' required />
                        <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                        <button type='submit' className='contact__button'>Send Message</button>
                    </form>
                </div>
            </section>
            
            <Map location={location} zoomLevel={17} />

            <GoToTop />
        </>
    )
};

export default Contact;