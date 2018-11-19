import React from 'react';

const NewSingle = ({item}) => (
      <div className="card col-3 mb-5">
        <img className="card-img-top" src={item.urlToImage} alt="{item.title}" />
        <div className="card-body">
          <h5 className="card-title">{item.source.name}</h5>
          <p className="card-text">{item.content}</p>
        
        </div>
          <div className="card-footer">
          <p className="card-text">  <a href={item.url} target="_blank" rel="noopener noreferrer">Full Article</a></p>
          </div>
      </div>
);

export default NewSingle;