import logo from './logo.svg';
import './App.css';
import ItemOne from './ItemOne';
import { colors } from './array-one';
// import your arrays here

function App() {
  return (
    <div className="App">
      <ItemOne colors={ colors } />
    </div>
  );
}

export default App;
