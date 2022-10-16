import React, { useRef } from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

import Map from '../Map/Map'


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

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>saarthaktuli@gmail.com</h5>
                        <a href="mailto:saarthaktuli@gmail.com" target="_blank">Send a Message</a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+9818018421</h5>
                        <a href='https://wa.me/9818018421' target="_blank">Send a Message</a>
                        {/* https://wa.me/9818018421 */}
                        {/* https://api.whatsapp.com/send?phone=9818018421 */ }
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
            </section>
            
            <Map location={location} zoomLevel={17} />
        </>
        
    )
};

export default Contact;