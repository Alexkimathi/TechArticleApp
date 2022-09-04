import React from 'react'
import ArticlesItem from './ArticlesItem'


function ArticlesList(props) {
   
    return (
        <ul className="many">
        {props.articles.map((article) => (
          <ArticlesItem
            key={article.id}
            id={article.id}
            image_url={article.image_url}
            title={article.title}
            description={article.description}
            author={article.author}
            created_at={article.created_at}
  
          />
        ))}
      </ul>
    )
        }
      

export default ArticlesList