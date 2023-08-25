import logo from './logo.svg';
import './App.css';
import Game from './Game';

/** Generic top level component for our app
 *
 * App -> Game
*/
function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
