import { useSelector, useDispatch } from "react-redux";

import { closeActionMenu, highlightTilesMove } from "../../../redux/actions";
import { useCurrentCharacter } from "../../hooks";
import { TILE_ACTIONS } from "../../constants";

export default function ActionMenu() {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.ui.actionMenu);
  const character = useCurrentCharacter();
  console.log(character);
  if (!info.open || !character) return null;

  function moveCycle() {
    dispatch(highlightTilesMove(character, 3));
    dispatch(closeActionMenu(TILE_ACTIONS.MOVE));
  }

  return (
    <div className="action-menu">
      <button onClick={() => moveCycle()}>Move</button>
    </div>
  );
}
