import { Grid, TextField, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Board from "./Board";
import { ROW, COL } from "../utils";
import "./MainPage.css";

const MainPage = () => {
  const [map, setMap] = useState([[]]);

  const createMap = () => {
    // TODO : generate numbers correctly
    // Review border cases
    const map = [];
    for (let i = 0; i < ROW; i++) {
      map[i] = [];
      for (let j = 0; j < COL; j++) {
        map[i][j] = Math.floor(Math.random() * 8);
      }
    }
    setMap(map);
  };

  useEffect(() => {
    createMap();
  }, []);

  const handleBlockClick = (i, j) => {
    // TODO : Handle block click
  };

  return (
    <>
      <Typography variant="h3" align="center">
        Será que eu tô na lagoinha? Não, projeto de algoritmos
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item container xs={2} alignItems="center" justifyContent="center">
          {/* TODO - insert inputs here */}
        </Grid>
      </Grid>
      <div className="main-container">
        <div>
          <Board map={map} onClick={handleBlockClick} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
