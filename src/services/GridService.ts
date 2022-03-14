import Cell from "../models/Cell";
import CellState from "../models/CellState";
import Grid from "../models/Grid";
import { Neighbour } from "../models/Neighbour";
import IdService from "./IdService";
import RuleService from "./RuleService";

class GridService {
  numRows: number = -1;
  numCols: number = -1;
  numCells: number = -1;
  idService: IdService;

  constructor(numRows: number, numCols: number) {
    this.numRows = numRows;
    this.numCols = numCols;
    this.numCells = numRows * numCols;
    this.idService = new IdService(numRows, numCols);
  }

  buildGrid(): Grid {
    let grid: Grid = new Grid();
    for (let i = 0; i < this.numCells; i++) {
      const cell = this.buildCell(i);
      grid.addCell(cell);
    }
    return grid;
  }

  toggleCell(grid: Grid, id: number): Grid {
    const newGrid = grid.clone();
    newGrid.toggleState(id);
    return newGrid;
  }

  tick(grid: Grid): Grid {
    const ruleService = new RuleService();
    const newGrid = grid.clone();
    const ids: number[] = grid.getIds();
    ids.forEach((id) => {
      // apply rules
      const cell: Cell = grid.getCell(id);
      const neighbours: Cell[] = Array.from(this.getNeighbours(id, grid).values());
      const newState = ruleService.determineState(cell.state, neighbours);
      const newCell: Cell = newGrid.getCell(id);
      newCell.state = newState;
    });
    return newGrid;
  }

  getNeighbours(id: number, grid: Grid): Map<Neighbour, Cell> {
    const neighbours: Map<Neighbour, Cell> = new Map<Neighbour, Cell>();
    const idService: IdService = new IdService(this.numRows, this.numCols);
    const idMap: Map<Neighbour, number> = idService.getNeighbouringCells(id);
    Array.from(idMap.entries()).forEach((entry) => {
      const neighbour = entry[0];
      const neighbourId = entry[1];
      const neighbourCell: Cell = grid.getCell(neighbourId);
      neighbours.set(neighbour, neighbourCell);
    });
    return neighbours;
  }

  buildCell(id: number): Cell {
    return new Cell(id, CellState.dead);
  }
}

export default GridService;
