import { action } from "typesafe-actions";
import { Constants } from "./types";

export function seedGrid(numRows: number, numCols: number) {
  return action(Constants.SEED_GRID, {
    numRows,
    numCols,
  });
}

export function toggleCell(id: number) {
  return action(Constants.TOGGLE_CELL, { id });
}

export function clearGrid() {
  return action(Constants.CLEAR_GRID, {});
}

export function resetGrid(numRows: number, numCols: number) {
  return action(Constants.RESET_GRID, { numRows, numCols });
}

export function tick() {
  return action(Constants.TICK, {});
}

export function setLoading(loading: boolean) {
  return action(Constants.SET_LOADING, { loading });
}
