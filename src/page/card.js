import React from 'react';
import './Newcard.css';
import { useNavigate } from 'react-router-dom';

const NewsCard = ({ image, title, date, excerpt }) => {
  const nav=useNavigate()
  return (
    <div className="news-card" onClick={()=>nav("/products")}>
      <a href="#" className="news-card__card-link"></a>
      <img src={image} alt="news" className="news-card__image" />
      <div className="news-card__text-wrapper">
        <h2 className="news-card__title">{title}</h2>
        <div className="news-card__post-date">{date}</div>
        {/* <div className="news-card__details-wrapper">
          <p className="news-card__excerpt">{excerpt}</p>
          <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
        </div> */}
      </div>
    </div>
  );
};

export default NewsCard;