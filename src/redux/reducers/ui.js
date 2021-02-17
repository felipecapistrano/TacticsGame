const initialUi = {
  characterPanel: { open: false, character: null },
  actionMenu: { open: true, currentAction: null },
};

const ui = (state = initialUi, action) => {
  switch (action.type) {
    case "OPEN_PANEL": {
      const character = action.payload;
      return {
        ...state,
        characterPanel: { ...state.characterPanel, open: true, character },
      };
    }
    case "CLOSE_PANEL":
      return {
        ...state,
        characterPanel: {
          ...state.characterPanel,
          open: false,
          character: null,
        },
      };
    case "OPEN_ACTION_MENU":
      return {
        ...state,
        actionMenu: { ...state.actionMenu, currentAction: null, open: true },
      };
    case "CLOSE_ACTION_MENU":
      const newAction = action.payload;
      return {
        ...state,
        actionMenu: {
          ...state.actionMenu,
          currentAction: newAction,
          open: false,
        },
      };

    default:
      return state;
  }
};

export default ui;
