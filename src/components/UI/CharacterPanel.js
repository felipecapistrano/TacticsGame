import { useSelector } from "react-redux";

export default function CharacterPanel() {
  const info = useSelector((state) => state.ui.characterPanel);

  if (!info.open) return null;
  return (
    <div className="panel-container">
      <img
        className="panel-portrait"
        alt="portrait"
        src={info.character.portrait}
      />
      <div className="panel-info">
        <h2 className="panel-name">{info.character.name}</h2>
        <h3>
          HP: {info.character.currentHp} / {info.character.maxHp}
        </h3>
        <h3>
          MP: {info.character.currentMp} / {info.character.maxMp}
        </h3>
      </div>
    </div>
  );
}
