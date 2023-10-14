import React from "react";
import "./NewsCard.css";

const NewsCard = ({ newsItem }) => {
  const fullDate = new Date(newsItem.publishedAt);
  let date = fullDate.toString().split("");
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour > 12 ? true : false;

  return (
    <div className="newsCard">
      <img
        alt={newsItem.title}
        src={
          newsItem.urlToImage
            ? newsItem.urlToImage
            : "https://source.unplash.com/random"
        }
        className="newsImage"
      />
      <div className="newsText">
        <div>
          <span className="title">{newsItem.title}</span>
          <br />
          <span className="author">
            <a href={newsItem.url} target="_blank">
              <b>Short</b>
            </a>{" "}
            <span className="muted">
              {""} by {newsItem.author ? newsItem.author : "unknown"}
            </span>
            {time > hour - 12
              ? `${date[4].substring(3, 5)} pm`
              : `${hour}${date[4].substring(3, 5)}am`}
            on {date[2]}
            {date[1]}
            {date[3]},{date[0]}
          </span>
        </div>
        <div className="lowerNewsText">
          <div className="description">{newsItem.decription}</div>
          <span className="readMore">
            read more at{" "}
            <a href={newsItem.url} target="_blank" className="source">
              <b>{newsItem.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
