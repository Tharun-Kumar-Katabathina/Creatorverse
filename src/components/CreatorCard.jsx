import React from 'react';
import { Link } from 'react-router-dom';

function CreatorCard({ creator }) {
  return (
    <div className="card">
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">
        Visit {creator.name}'s page
      </a>
      {creator.imageURL && <img src={creator.imageURL} alt={`${creator.name}`} />}
      <Link to={`/edit/${creator.id}`}>Edit</Link>
      <Link to={`/view/${creator.id}`}>View</Link>
    </div>
  );
}

export default CreatorCard;
