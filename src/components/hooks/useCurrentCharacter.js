import { useSelector } from "react-redux";

export default function useCurrentCharacter() {
  const currentCharacter = useSelector((state) => state.combat.turnCharacter);
  return currentCharacter;
}
