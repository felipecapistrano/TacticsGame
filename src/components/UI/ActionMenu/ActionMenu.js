import { useSelector, useDispatch } from "react-redux";

import {
  closeActionMenu,
  highlightTilesMove,
  endTurn,
} from "../../../redux/actions";
import { useCurrentCharacter } from "../../hooks";
import { TILE_ACTIONS } from "../../constants";

export default function ActionMenu() {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.ui.actionMenu);
  const character = useCurrentCharacter();
  
  if (!info.open || !character || character.enemy) return null;

  function moveCycle() {
    dispatch(highlightTilesMove(character, 3));
    dispatch(closeActionMenu(TILE_ACTIONS.MOVE));
  }

  return (
    <div className="action-menu">
      <button disabled={character.hasMoved} onClick={() => moveCycle()}>
        Move
      </button>
      <button onClick={() => dispatch(endTurn())}>Wait</button>
    </div>
  );
}
