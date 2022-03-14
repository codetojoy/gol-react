import Grid from "../../models/Grid";
import GridService from "../../services/GridService";
import { Constants, GridActions, IGridState } from "./types";

const seedNumRows = 4;
const seedNumCols = 4;

function getRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function coinFlip(): boolean {
  return getRandom(1, 2) === 1;
}

function newGrid(numRows: number, numCols: number): Grid {
  const service = new GridService(seedNumRows, seedNumCols);
  const grid = service.buildGrid();
  return grid;
}

function buildGrid(numRows: number, numCols: number): Grid {
  const grid = newGrid(numRows, numCols);
  // temp: randomized seed
  grid.theCells.forEach((cell) => {
    if (coinFlip()) {
      grid.setAlive(cell.id);
    }
  });
  const service = new GridService(seedNumRows, seedNumCols);
  return service.tick(grid);
}

function tick(gridState: IGridState): Grid {
  const service = new GridService(gridState.numRows, gridState.numCols);
  return service.tick(gridState.grid);
}

function toggleCell(gridState: IGridState, cellId: number): Grid {
  const service = new GridService(gridState.numRows, gridState.numCols);
  return service.toggleCell(gridState.grid, cellId);
}

const init: IGridState = {
  numRows: seedNumRows,
  numCols: seedNumCols,
  grid: buildGrid(seedNumRows, seedNumCols),
};

export function gridReducer(state: IGridState = init, action: GridActions): IGridState {
  switch (action.type) {
    case Constants.TOGGLE_CELL:
      const cellId = action.payload.id;
      return { ...state, grid: toggleCell(state, cellId) };
    case Constants.SEED_GRID:
      const numRows = action.payload.numRows;
      const numCols = action.payload.numCols;
      return { numRows, numCols, grid: buildGrid(numRows, numCols) };
    case Constants.CLEAR_GRID:
      return { ...state, grid: newGrid(state.numRows, state.numCols) };
    case Constants.RESET_GRID:
      return { ...state, grid: buildGrid(state.numRows, state.numCols) };
    case Constants.TICK:
      return { ...state, grid: tick(state) };
    default:
      return state;
  }
}
