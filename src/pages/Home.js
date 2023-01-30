import React from 'react';
import banner2 from '../asserts/banner2.png';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home"  style={{backgroundImage:`url(${banner2})`}}>
    <div className="headerContainer">
       <h1 >Food Corner</h1>
       <p>INDIAN FOOD AT A CLICK.</p>
       <Link to ="/menu">
       <button>Order Now</button>
       </Link>
      
    </div>
    </div>
  )
}

export default Home
