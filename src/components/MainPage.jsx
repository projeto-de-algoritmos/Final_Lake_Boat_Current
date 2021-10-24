import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Board from "./Board";
import { ROW, COL, circularRandom, BFS01 } from "../utils";
import "./MainPage.css";

/*7 0 1
  6 * 2
  5 4 3 */

// Node: {x, y, d: "direction"}

const MainPage = () => {
  const [map, setMap] = useState([[]]);

  const [start, setStart] = useState({ x: -1, y: -1 });
  const [end, setEnd] = useState({ x: -1, y: -1 });
  const [clickCount, setClickCount] = useState(true);
  const [energyCount, setEnergyCount] = useState(-1);
  const [path, setPath] = useState(new Map());

  const createMap = () => {
    const map = [];
    map[0] = [];
    map[ROW - 1] = [];

    for (let i = 1; i < ROW - 1; i++) {
      map[i] = [];
      for (let j = 1; j < COL - 1; j++) {
        map[i][j] = circularRandom(0, 8, 8);
      }
    }

    // Primeira e última diagonal superior
    map[0][0] = circularRandom(2, 5, 8);
    map[0][COL - 1] = circularRandom(4, 7, 8);

    // Primeira e última coluna
    for (let i = 1; i < ROW - 1; i++) {
      map[i][0] = circularRandom(0, 5, 8);
      map[i][COL - 1] = circularRandom(4, 9, 8);
    }

    // Primeira e última linha
    for (let i = 1; i < COL - 1; i++) {
      map[0][i] = circularRandom(2, 7, 8);
      map[ROW - 1][i] = circularRandom(6, 11, 8);
    }

    // Primeira e última diagonal inferior
    map[ROW - 1][0] = circularRandom(0, 3, 8);
    map[ROW - 1][COL - 1] = circularRandom(6, 9, 8);

    setMap(map);
  };

  useEffect(() => {
    createMap();
  }, []);

  useEffect(() => {
    if (start.x !== -1 && end.x !== -1) {
      const res = BFS01(map, start, end);
      setEnergyCount(res.distance);
      const pathMap = new Map();
      for (let i = 0; i < res.path.length; i++) {
        const node = res.path[i];
        pathMap.set(`x${node.x}y${node.y}`, { ...res.path[i], i: i });
      }
      setPath(pathMap);
    }
  }, [start, end, map]);

  const handleBlockClick = (i, j) => {
    if (clickCount) {
      setStart({ x: i, y: j, d: map[i][j] });
      setClickCount(false);
    } else {
      setEnd({ x: i, y: j, d: map[i][j] });
      setClickCount(true);
    }
  };

  return (
    <>
      <Typography variant="h3" align="center">
        Será que eu tô na lagoinha? Não, projeto de algoritmos
      </Typography>

      <Typography variant="h5" align="center">
        {energyCount === -1
          ? "Clique em dois pontos para simular"
          : `O barquinho vai gastar ${energyCount} energias`}
      </Typography>

      <div className="main-container">
        <div>
          <Board
            map={map}
            onClick={handleBlockClick}
            selected={{ start, end }}
            path={path}
          />
        </div>
      </div>
    </>
  );
};

export default MainPage;
