import React from 'react'


import '../../src/App.css';


function Home() {
  return (
    <div className="home">
    
        <div className="header__text-box">
        <h1 className="heading-primary">
            <span className="heading-primary--main">Tech-Articles</span>
            <span className="heading-primary--sub">Motivation can take you far</span>
        </h1>

        <button className="btn-start">Get Started On your Read</button>
    </div>
    </div>
  )
}

export default Home