import { useSelector } from "react-redux";

import Tile from "./Tile";

export default function MapRender() {
  const tileMap = useSelector((state) => state.combat.tileMap);
  const tiles = tileMap.map((row, index) => {
    const y = index;
    return (
      <div className="row-container">
        {row.map((tile, index) => {
          const x = index;
          return (
            <Tile
              coordinates={{ x, y }}
              defaultTile={tile.defaultTile}
              selectedTile={tile.selectedTile}
              movableTile={tile.movableTile}
              movableSelectedTile={tile.movableSelectedTile}
              isHighlighted={tile.isHighlighted}
              character={tile.character}
            />
          );
        })}
      </div>
    );
  });
  return <div className="map">{tiles}</div>;
}
