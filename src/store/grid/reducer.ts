import Grid from "../../models/Grid";
import GridService from "../../services/GridService";
import { Constants, GridActions, IGridState } from "./types";

/*
const seedNumRows = 4;
const seedNumCols = 4;
*/

function getRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function coinFlip(): boolean {
  return getRandom(1, 2) === 1;
}

function newGrid(numRows: number, numCols: number): Grid {
  const service = new GridService(numRows, numCols);
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
  const service = new GridService(numRows, numCols);
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
  numRows: 0,
  numCols: 0,
  grid: buildGrid(0, 0),
  loading: false,
  initialized: false,
};

export function gridReducer(state: IGridState = init, action: GridActions): IGridState {
  let numRows: number = 0;
  let numCols: number = 0;
  switch (action.type) {
    case Constants.TOGGLE_CELL:
      const cellId = action.payload.id;
      return { ...state, grid: toggleCell(state, cellId) };
    case Constants.SEED_GRID:
      numRows = action.payload.numRows;
      numCols = action.payload.numCols;
      return { numRows, numCols, grid: buildGrid(numRows, numCols), loading: false, initialized: true };
    case Constants.CLEAR_GRID:
      return { ...state, grid: newGrid(state.numRows, state.numCols) };
    case Constants.RESET_GRID:
      numRows = action.payload.numRows;
      numCols = action.payload.numCols;
      return { numRows, numCols, grid: buildGrid(numRows, numCols), loading: false, initialized: true };
    case Constants.TICK:
      return { ...state, grid: tick(state) };
    case Constants.SET_LOADING:
      return { ...state, loading: action.payload.loading };
    default:
      return state;
  }
}
