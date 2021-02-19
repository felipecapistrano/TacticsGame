import { useSelector } from "react-redux";

export default function useCurrentCharacter() {
  const tileMap = useSelector((state) => state.combat.tileMap);
  return tileMap;
}
