import React from 'react';

export default function GamesItem({
  title,
  genre,
  developer,
}) {
  return (
    <div className='game'>
      <p>Title: { title }</p>
      <p>Genre: { genre }</p>
      <p>Developer: { developer }</p>
    </div>
  );
} 