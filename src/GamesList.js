import React from 'react';
import GamesItem from './GamesItem';

export default function GamesList({ games }) {
  return (
    <div>
      {
        games.map((game, i) => <GamesItem {...game} key={game.name + i} />)
      }
    </div>
  );
}