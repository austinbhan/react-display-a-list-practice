import './App.css';
import ColorsList from './ColorsList';
import { colors } from './colors.js';

import GamesList from './GamesList';
import { games } from './games-array';

import ClassList from './ClassList';
import { classroom } from './classroom.js';
// import your arrays here

function App() {
  return (
    <div className="App">
      <ColorsList colors={colors} />
      <GamesList games={ games } />
      <ClassList classroom={classroom} />
    </div>
  );
}

export default App;
