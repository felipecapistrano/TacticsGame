import { useDispatch, useSelector } from "react-redux";

import { MapRender } from "./components/TileMap";
import { CharacterPanel, ActionMenu, TurnCounter } from "./components/UI";
import { startCombat } from "./redux/actions";

import "./global.css";

function App() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);

  dispatch(startCombat(characters));

  return (
    <>
      <div className="game">
        <MapRender />
        <ActionMenu />
        <CharacterPanel />
        <TurnCounter />
      </div>
    </>
  );
}

export default App;
