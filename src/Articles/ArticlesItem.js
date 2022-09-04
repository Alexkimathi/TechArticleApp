import React from 'react'

import '../../src/App.css';

function ArticlesItem(id,image_url,title,description,author,created_at) {
    
  return (
    <li className="card">
      <section>
        <div className="images">
          <img src={image_url} alt="" />
        </div>
        <hr className="h1"/>
        <div className="content">
          <h1>{title}</h1>
          <hr className="h"/>
          <p>{description}</p>
          <h3>{created_at}</h3>
          <h2>
            <strong>- By {author}</strong>
          </h2>
        </div>
        
      </section>
    </li>
);
}


export default ArticlesItem