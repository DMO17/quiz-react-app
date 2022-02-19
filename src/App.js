import "./App.css";
import { GameForm } from "./components/GameForm";
import { Header } from "./components/Header";
import { GameProvider } from "./contexts/GameProvider";

function App() {
  return (
    <div>
      <Header />
      <GameProvider>
        <GameForm />
      </GameProvider>
    </div>
  );
}

export default App;
