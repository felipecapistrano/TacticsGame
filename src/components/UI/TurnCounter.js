import { useSelector } from "react-redux";

export default function TurnCounter() {
  const characters = useSelector((state) => state.combat.characters);
  if (!characters) return null;

  return (
    <div className="turn-counter">
      {characters.map((character) => (
        <div>
          <img alt="portrait" src={character.portrait} />
        </div>
      ))}
    </div>
  );
}
