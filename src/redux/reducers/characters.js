import sara from "../../assets/characters/sara.png";

const sarinha = {
  name: "Sara",
  maxHp: 10,
  maxMp: 10,
  speed: 4,
  currentHp: 10,
  currentMp: 10,
  move: 3,
  sprite: sara,
  portrait: sara,
  hasMoved: false,
  enemy: false,
};

const initialState = [sarinha];

const characters = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_CHARACTER":
      const character = action.payload;
      return [...state, character];
    default:
      return state;
  }
};

export default characters;
