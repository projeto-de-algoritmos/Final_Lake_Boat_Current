import React, { memo } from "react";
import "./Block.css";
import { Badge, IconButton, makeStyles } from "@material-ui/core";
import { WiStrongWind } from "react-icons/wi";
import clsx from "clsx";

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
  path: {
    backgroundColor: "#09EE9A",
  },
  start: {
    background: "#41D9D9",
  },
  end: {
    backgroundColor: "#F21DA8",
  },
  startEnd: {
    background:
      "linear-gradient(90deg, rgba(65,217,217,1) 0%, rgba(242,29,168,1) 100%)",
  },
  badge: {
    color: "#F2B705",
    backgroundColor: "#0A1626",
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

const Block = ({ onClick, orientation, isStart, isEnd, isPath, pathIndex }) => {
  const classes = useStyles();

  return (
    <Badge
      badgeContent={pathIndex >= 0 ? pathIndex + 1 : undefined}
      showZero
      classes={{ colorPrimary: classes.badge }}
      overlap="circular"
      color="primary"
      invisible={pathIndex !== 0 && !pathIndex}
    >
      <IconButton
        className={clsx(classes.button, {
          [classes.path]: isPath,
          [classes.start]: isStart,
          [classes.end]: isEnd,
          [classes.startEnd]: isStart && isEnd,
        })}
        onClick={onClick}
      >
        <WiStrongWind
          color={isPath ? "#002736" : "#EBEFF2"}
          style={{ transform: ORIENTATION[orientation] }}
        />
      </IconButton>
    </Badge>
  );
};

export default Block;
