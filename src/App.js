import './App.css';
import ColorsList from './ColorsList';
import { colors } from './colors.js';

import GamesList from './GamesList';
import { games } from './games-array';
// import your arrays here

function App() {
  return (
    <div className="App">
      <ColorsList colors={colors} />
      <GamesList games={ games } />
    </div>
  );
}

export default App;
