import React from 'react'
import '../../src/App.css';
import { useNavigate } from "react-router-dom";

function Home() {
  
  let navigate = useNavigate();
 
  return (
    <div className="home">
    
        <div className="header__text-box">
        <h1 className="heading-primary">
            <span className="heading-primary--main">Tech-Articles</span>
            <span className="heading-primary--sub">Motivation can take you far</span>
        </h1>

       
        <button onClick={()=>{navigate('/allarticles')}} className="btn-start">Get Started On your Read</button>
        
    </div>
    </div>
  )
}

export default Home