import './App.css';
import ColorsItem from './ColorsList';
import { colors } from './colors.js';
// import your arrays here

function App() {
  return (
    <div className="App">
      <ColorsItem colors={ colors } />
    </div>
  );
}

export default App;
