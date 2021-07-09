import React, { useContext } from 'react'
import "./News.css"
import { TechContext } from './TechContext';
import NewsArticle from "./NewsArticle"

function Tech() {
    const { data } = useContext(TechContext);
    return (
        <div className="all__news">
        <h1 className="head__text"></h1>
        <div className="all__news">
          {data
            ? data.articles.map((news) => (
                <NewsArticle data={news} key={news.url} />
              ))
            : "Loading"}
        </div>
      </div>
      
    )
}

export default Tech
