import React, { useState, useEffect } from 'react';
import { fetchPosts } from './api';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const posts = await fetchPosts();
      setArticles(posts);
    };

    getArticles();
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      {articles.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <h2>{article.title.rendered}</h2>
              <div dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Articles;
