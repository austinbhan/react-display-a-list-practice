import './App.css';
import ColorsList from './ColorsList';
import { colors } from './colors.js';
// import your arrays here

function App() {
  return (
    <div className="App">
      <ColorsList colors={colors} />
    </div>
  );
}

export default App;
