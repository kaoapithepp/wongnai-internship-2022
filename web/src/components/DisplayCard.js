import React from 'react';
import { Link } from 'react-router-dom';

import './DisplayCard.css';

const DisplayCard = ({ detail }) => {

    // display category all of it has
    const category_row = detail.tags.map(data => {
        return (
            <Link to={`/search/${data}`}
                style={{
                    color : "#828282"
                }}>
                <span className="cat-text">{data}</span>
            </Link>
        );
    });

    return (
        <div className="list-container">
            <img className="title-photo" src={detail.photos[0]}/>
            <div className="content-card">
                <a href={detail.url} className="header-link" target="_blank">
                    <h2>{detail.title}</h2>
                </a>
                <div className="description">
                    <p>{detail.description}</p>
                    <a className="a" href={detail.url} target="_blank">อ่านต่อ</a>
                    <p className="category">หมวด : { category_row }</p>
                </div>
                <div className="lower-photo">
                    <img className="row-photo" src={detail.photos[1]}/>
                    <img className="row-photo" src={detail.photos[2]}/>
                    <img className="row-photo" src={detail.photos[3]}/>
                </div>
            </div>
        </div>
    );
}

export default DisplayCard;