import React from 'react'
import AboutImage from '../asserts/about.jpeg';
import '../styles/About.css';


function About() {
  return (
   <div className="about">
    <div className="aboutTop" style={{backgroundImage:`url(${AboutImage})`}}> </div>

   
    <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
             Online food ordering is the process of ordering food, for delivery or pickup, 
             from a website or other application. The product can be either ready-to-eat
             food (e.g., direct from a home-kitchen, restaurant, or a virtual restaurant) or 
            food that has not been specially prepared for direct consumption 
            (e.g., vegetables direct from a farm/garden, fruits, frozen meats. etc).

           Online food ordering/delivery through third-party companies have emerged as
            a global industry, leading to a "delivery revolution."From 2018 to 2021, global revenues 
            for the online food delivery sector rose from $90 billion to $294 billion.
        </p>
    </div>
   </div>
  )
}

export default About