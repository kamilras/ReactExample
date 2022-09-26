import React from 'react';
import '../styles/Article.css';

const Article = ({ title, author, text }) => {
    return (
        <article className='art'>
            <h3>{title}</h3>
            <span>{author}</span>
            <p>{text}</p>
        </article>
    );
}

export default Article;