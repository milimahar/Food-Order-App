import React from 'react'
import '../styles/Contact.css';
import ContactImage from '../asserts/contact1.jpeg';






function Contact() {
  return (
    <div className="contact">
    <div className="leftSide" style={{backgroundImage:`url(${ContactImage})`}}>  </div>
    
  
    <div className="rightSide">
        <h1>Contact Us</h1>
        <form id='contact-form' method='POST'>
            <label htmlFor='name'>Full Name</label>
            <input type="text" name='name' placeholder='Enter Your Name'/>
            <label htmlFor='email'>Email</label>
            <input type="email" name='name' placeholder='Enter Email Address'/>
            <label htmlFor='message'>Message</label>
            <textarea
            name="message" 
            placeholder="Enter Your Message" 
            rows='7'>

            </textarea>
            <button type='submit'>Send Message</button>



        </form>
    </div>
    
</div>
  )
}

export default Contact