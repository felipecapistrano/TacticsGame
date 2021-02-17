import sara from "../../assets/characters/sara.png";

const sarinha = {
  name: "Sara",
  maxHp: 10,
  maxMp: 10,
  speed: 3,
  currentHp: 8,
  currentMp: 5,
  move: 4,
  sprite: sara,
  portrait: sara,
};

const characters = (state = [sarinha], action) => {
  switch (action.type) {
    case "CREATE_CHARACTER":
      const character = action.payload;
      return [...state, character];
    default:
      return state;
  }
};

export default characters;
