import defaultTile from "../../assets/tiles/2.png";
import selectedTile from "../../assets/tiles/4.png";

import movableTile from "../../assets/tiles/movable1.png";
import movableSelectedTile from "../../assets/tiles/movable1selected.png";

function createTileMap(size) {
  var x = new Array(size);

  for (var row = 0; row < size; row++) {
    x[row] = new Array(size);
    for (var tile = 0; tile < x[row].length; tile++) {
      x[row][tile] = {
        defaultTile,
        selectedTile,
        movableTile,
        movableSelectedTile,
        isHighlighted: false,
        character: null,
      };
    }
  }
  return x;
}

function getCharacterCoordinates(tileMap, character) {
  for (var y = 0; y < tileMap.length; y++) {
    for (var x = 0; x < tileMap.length; x++) {
      if (tileMap[y][x].character === character) return { x, y };
    }
  }
  return false;
}

function highlightTilesMove(tileMap, coordinates, range) {
  let newTileMap = tileMap;
  for (var y = 0; y < tileMap.length; y++) {
    for (var x = 0; x < tileMap.length; x++) {
      if (
        x <= coordinates.x + range &&
        x >= coordinates.x - range &&
        y <= coordinates.y + range &&
        y >= coordinates.y - range &&
        Math.abs(x - coordinates.x) + Math.abs(y - coordinates.y) <= range
      )
        newTileMap[y][x].isHighlighted = true;
    }
  }
  return newTileMap;
}

function removeHighlight(tileMap) {
  let newTileMap = tileMap;
  for (var y = 0; y < tileMap.length; y++) {
    for (var x = 0; x < tileMap.length; x++) {
      newTileMap[y][x].isHighlighted = false;
    }
  }
  return newTileMap;
}

const initialTileMap = createTileMap(10);

const initialState = {
  tileMap: initialTileMap,
  characters: [],
  turnCharacter: null,
};

const combat = (state = initialState, action) => {
  switch (action.type) {
    case "START_COMBAT": {
      const characters = action.payload;
      let first = 0;
      for (let i = 0; i < characters.length; i++) {
        if (characters[0].speed > first) first = characters[0];
      }
      state.tileMap[4][4].character = first;
      return { tileMap: [...state.tileMap], characters, turnCharacter: first };
    }
    case "HIGHLIGHT_TILES_MOVE": {
      const character = action.payload;
      const coordinates = getCharacterCoordinates(state.tileMap, character);
      const newTileMap = highlightTilesMove(
        state.tileMap,
        coordinates,
        character.move
      );
      return { ...state, tileMap: [...newTileMap] };
    }
    case "REMOVE_HIGHLIGHT": {
      const newTileMap = removeHighlight(state.tileMap);
      return { ...state, tileMap: [...newTileMap] };
    }
    case "MOVE_CHARACTER":
      const { character, nextPosition } = action.payload;
      const currentPosition = getCharacterCoordinates(state.tileMap, character);
      state.tileMap[currentPosition.y][currentPosition.x].character = null;
      state.tileMap[nextPosition.y][nextPosition.x].character = character;
      const newTileMap = removeHighlight(state.tileMap);
      return { ...state, tileMap: [...newTileMap] };
    default:
      return state;
  }
};

export default combat;
