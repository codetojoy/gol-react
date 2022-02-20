import Cell from "../models/Cell";
import CellState from "../models/CellState";
import Grid from "../models/Grid";

class GridService {
  buildGrid(numRows: number, numCols: number): Grid {
    let grid: Grid = new Grid();
    const numCells = numRows * numCols;
    for (let i = 0; i < numCells; i++) {
      const cell = this.buildCell(i);
      grid.addCell(cell);
    }
    return grid;
  }

  buildCell(id: number): Cell {
    return new Cell(id, CellState.dead);
  }
}

export default GridService;
