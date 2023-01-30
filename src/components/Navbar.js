import React ,{useState}from 'react'
import logo2 from '../asserts/logoo.jpeg'
import { Link } from 'react-router-dom';
import   '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';


function Navbar() {

  const [showLinks,setShowLinks] = useState(false) ;

  function Click(){
    setShowLinks(!showLinks);
  }

  return (
   <div className="navbar">
    <div className="leftSide" id={showLinks ? "open" : "close"}>
    <img src={logo2}/>
   {/* <div className="hiddenLiks">
    <Link to="/">Home</Link>
      <Link to ="/menu">Menu</Link>
      <Link to ="/about">About</Link>
      <Link to ="/contact">Contact</Link>
    </div> */}

    </div>




    <div className="rightSide">
      <Link to='/'>Home</Link>
      <Link to ='/menu'>Menu</Link>
      <Link to ='/about'>About</Link>
      <Link to ='/contact'>Contact</Link>
      <button onClick={Click}>
      <ReorderIcon />
      </button>
     
    </div>
   </div>
  );
}

export default Navbar

