import React from "react";
import Block from "./Block";

const Row = ({ row, i, onClick, selected, path }) => (
  <div>
    {row.map((col, j) => (
      <Block
        key={"block" + i + j}
        orientation={col}
        isStart={selected.start.x === i && selected.start.y === j}
        isEnd={selected.end.x === i && selected.end.y === j}
        isPath={path.has(`x${i}y${j}`)}
        onClick={() => onClick(i, j)}
        path={path}
      />
    ))}
  </div>
);

const Board = ({ map, onClick, selected, path }) => {
  return (
    <>
      {map.map((row, i) => (
        <Row
          row={row}
          i={i}
          key={"row" + i}
          onClick={onClick}
          selected={selected}
          path={path}
        />
      ))}
    </>
  );
};

export default Board;
