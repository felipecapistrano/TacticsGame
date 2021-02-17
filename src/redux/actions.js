// ACTIONS TILEMAP

// coordinates are in the following format: {x, y}

export const startCombat = (characters) => {
  return {
    type: "START_COMBAT",
    payload: characters,
  };
};

export const highlightTilesMove = (character) => {
  return {
    type: "HIGHLIGHT_TILES_MOVE",
    payload: character,
  };
};

export const removeHighlight = () => {
  return {
    type: "REMOVE_HIGHLIGHT",
  };
};

export const moveCharacter = (character, nextPosition) => {
  return {
    type: "MOVE_CHARACTER",
    payload: { character, nextPosition },
  };
};

// ACTIONS UI

export const openCharacterPanel = (character) => {
  return {
    type: "OPEN_PANEL",
    payload: character,
  };
};

export const closeCharacterPanel = () => {
  return {
    type: "CLOSE_PANEL",
  };
};

export const openActionMenu = () => {
  return {
    type: "OPEN_ACTION_MENU",
  };
};

export const closeActionMenu = (action) => {
  return {
    type: "CLOSE_ACTION_MENU",
    payload: action,
  };
};
