import "./App.css";

import { Header } from "./components/Header";
import { Game } from "./containers/Game";
import { GameProvider } from "./contexts/GameProvider";

function App() {
  return (
    <div>
      <Header />
      <GameProvider>
        <Game />
      </GameProvider>
    </div>
  );
}

export default App;
