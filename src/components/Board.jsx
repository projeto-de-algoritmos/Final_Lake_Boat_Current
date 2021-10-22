import React from "react";
import Block from "./Block";

const Row = ({ row, i, onClick }) => (
  <div>
    {row.map((col, j) => (
      <Block
        key={"block" + i + j}
        orientation={col}
        onClick={() => onClick(i, j)}
      />
    ))}
  </div>
);

const Board = ({ map, onClick }) => {
  return (
    <>
      {map.map((row, i) => (
        <Row row={row} i={i} key={"row" + i} onClick={onClick} />
      ))}
    </>
  );
};

export default Board;
