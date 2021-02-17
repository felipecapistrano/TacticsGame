import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  openCharacterPanel,
  closeCharacterPanel,
  moveCharacter,
  openActionMenu,
} from "../../redux/actions";
import { useCurrentCharacter } from "../hooks";
import { TILE_ACTIONS } from "../constants";

export default function Tile({
  defaultTile,
  selectedTile,
  movableTile,
  movableSelectedTile,
  isHighlighted,
  coordinates,
  character,
}) {
  const dispatch = useDispatch();
  const action = useSelector((state) => state.ui.actionMenu.currentAction);
  const currentCharacter = useCurrentCharacter();
  const [hover, setHover] = useState(false);

  function checkTile() {
    if (isHighlighted) {
      if (hover) return movableSelectedTile;
      else return movableTile;
    } else {
      if (hover) return selectedTile;
      else return defaultTile;
    }
  }

  function checkAction() {
    if (action === TILE_ACTIONS.MOVE && !character && isHighlighted) {
      dispatch(moveCharacter(currentCharacter, coordinates));
      dispatch(openActionMenu());
    } else if (action === TILE_ACTIONS.ATTACK) return;
    return undefined;
  }

  useEffect(() => {
    if (hover && character) dispatch(openCharacterPanel(character));
    else dispatch(closeCharacterPanel());
  }, [hover, character, dispatch]);

  return (
    <>
      <div
        className="tile-parent"
        onClick={() => checkAction()}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <img className="sprite-image" alt="tile" src={checkTile()} />
        {character && (
          <img className="character" alt="character" src={character.sprite} />
        )}
      </div>
    </>
  );
}
