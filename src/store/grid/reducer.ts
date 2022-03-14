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

function buildGrid(numRows: number, numCols: number): Grid {
  const service = new GridService(seedNumRows, seedNumCols);
  const initGrid = service.buildGrid();
  // temp: randomized seed
  initGrid.theCells.forEach((cell) => {
    if (coinFlip()) {
      initGrid.setAlive(cell.id);
    }
  });
  console.log(`TRACER reducer initGrid:`);
  console.log(initGrid.theCells.filter((c) => c.isAlive).map((c) => c.id));
  return service.tick(initGrid);
}

function tick(gridState: IGridState): Grid {
  const service = new GridService(gridState.numRows, gridState.numCols);
  return service.tick(gridState.grid);
}

const init: IGridState = {
  numRows: seedNumRows,
  numCols: seedNumCols,
  grid: buildGrid(seedNumRows, seedNumCols),
};

export function gridReducer(state: IGridState = init, action: GridActions): IGridState {
  switch (action.type) {
    case Constants.SEED_GRID:
      const numRows = action.payload.numRows;
      const numCols = action.payload.numCols;
      return { numRows, numCols, grid: buildGrid(numRows, numCols) };
    case Constants.RESET_GRID:
      const grid = buildGrid(state.numRows, state.numCols);
      return { ...state, grid: grid };
    case Constants.TICK:
      return { ...state, grid: tick(state) };
    default:
      return state;
  }
}
