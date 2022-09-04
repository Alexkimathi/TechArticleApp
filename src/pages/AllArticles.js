import React from 'react'

import {useEffect ,useState} from "react";
import ArticlesList from '../Articles/ArticlesList';
import Navbar from '../components/Navbar';



function AllArticles() {

  const [articles , setArticle] = useState([])
    useEffect(() =>{
        fetch ("http://localhost:9292/articles")
        .then((response) => response.json())
        .then((data) => setArticle(data))
    },[]) 

    // React.useEffect(() => {
    //   axios.get(baseURL).then((response) => {
    //     setArticle(response.data);
    //   });
    // }, []);
  
   
    
  return (
    <div>
    <Navbar />
    <ArticlesList articles={articles} />
    </div>
  )
}

export default AllArticles