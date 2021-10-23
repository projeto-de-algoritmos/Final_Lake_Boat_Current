import { COL, ROW, INF, DIRECTIONS } from "./constants";

function isBorder(x, y) {
  return x < 0 || x >= ROW || y < 0 || y >= COL;
}

function recoverPath(parent, start, end) {
  let path = [{ x: end.x, y: end.y }];
  let { x, y } = end;

  while (!(x === start.x && y === start.y)) {
    let { x: nX, y: nY } = parent[x][y];
    path.unshift({ x: nX, y: nY });
    x = nX;
    y = nY;
  }

  return path;
}

export function BFS01(map, start, end) {
  let queue = [start];
  let distance = [];
  let parent = [];
  let x, y, d;

  for (let i = 0; i < ROW; ++i) {
    distance[i] = [];
    parent[i] = [];
    for (let j = 0; j < COL; ++j) {
      distance[i][j] = INF;
      parent[i][j] = { x: -1, y: -1 };
    }
  }

  distance[start.x][start.y] = 0;

  while (queue.length) {
    const node = queue.shift();
    x = node.x;
    y = node.y;
    d = node.d;

    for (let i = 0; i < 8; ++i) {
      let nextX = x + DIRECTIONS[i][0];
      let nextY = y + DIRECTIONS[i][1];
      if (!isBorder(nextX, nextY)) {
        let cost = d === i ? 0 : 1;
        if (distance[x][y] + cost < distance[nextX][nextY]) {
          distance[nextX][nextY] = distance[x][y] + cost;
          parent[nextX][nextY] = { x, y };
          if (cost === 0) {
            queue.unshift({ x: nextX, y: nextY, d: map[nextX][nextY] });
          } else {
            queue.push({ x: nextX, y: nextY, d: map[nextX][nextY] });
          }
        }
      }
    }
  }

  let path = recoverPath(parent, start, end);

  return { path, distance: distance[end.x][end.y] };
}
