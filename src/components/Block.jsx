import React from "react";
import "./Block.css";
import { IconButton, makeStyles } from "@material-ui/core";
import { WiStrongWind } from "react-icons/wi";
// import clsx from "clsx";

const useStyles = makeStyles({
  button: {
    height: 40,
    width: 40,
    minWidth: "unset",
    borderRadius: 3,
    padding: 0,
    cursor: "pointer",
    backgroundColor: "#042940",

    "&&:hover": {
      backgroundColor: "#3E6E8C",
    },
  },
});

/*7 0 1
  6 * 2
  5 4 3 */
const ORIENTATION = {
  0: "rotate(270deg)",
  1: "rotate(315deg)",
  2: "rotate(0deg)",
  3: "rotate(45deg)",
  4: "rotate(90deg)",
  5: "rotate(135deg)",
  6: "rotate(180deg)",
  7: "rotate(225deg)",
};

const Block = ({ onClick, orientation }) => {
  const classes = useStyles();

  return (
    <IconButton classes={{ root: classes.button }} onClick={onClick}>
      <WiStrongWind
        color="#EBEFF2"
        style={{ transform: ORIENTATION[orientation] }}
      />
    </IconButton>
  );
};

export default Block;
