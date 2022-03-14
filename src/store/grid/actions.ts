import { action } from "typesafe-actions";
import { Constants } from "./types";

export function seedGrid(numRows: number, numCols: number) {
  return action(Constants.SEED_GRID, {
    numRows,
    numCols,
  });
}

export function resetGrid() {
  return action(Constants.RESET_GRID, {});
}

export function tick() {
  return action(Constants.TICK, {});
}
