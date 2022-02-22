import Cell from "../models/Cell";
import Grid from "../models/Grid";
import { Neighbour, allNeighbours } from "../models/Neighbour";
import Coord from "../models/Coord";

class IdService {
  numRows: number = -1;
  numCols: number = -1;
  numCells: number = -1;
  constructor(numRows: number, numCols: number) {
    this.numRows = numRows;
    this.numCols = numCols;
    this.numCells = numRows * numCols;
  }
  validateId(id: number): void {
    // confirm id is in [0, N-1]
    if (id >= this.numCells || id < 0) {
      throw new Error(`illegal id: ${id}`);
    }
  }
  getCoordinate(id: number): Coord {
    this.validateId(id);
    const colIndex: number = id % this.numCols;
    const rowIndex: number = Math.floor(id / this.numCols);
    return new Coord(id, rowIndex, colIndex);
  }
  getId(rowIndex: number, colIndex: number): number {
    return rowIndex * this.numCols + colIndex;
  }
  getNeighbouringCells(id: number): Map<Neighbour, number> {
    const map = new Map<Neighbour, number>();
    const neighbours = this.getNeighbours(id);
    neighbours.forEach((n) => {
      const neighbourId = this.getNeighbouringCellId(id, n);
      map.set(n, neighbourId);
    });
    return map;
  }
  getNeighbouringCellId(id: number, neighbour: Neighbour): number {
    this.validateId(id);
    let newRowIndex = 0;
    let newColIndex = 0;
    const coord = this.getCoordinate(id);
    switch (neighbour) {
      case Neighbour.upper_left:
        newRowIndex = coord.rowIndex - 1;
        newColIndex = coord.colIndex - 1;
        break;
      case Neighbour.upper:
        newRowIndex = coord.rowIndex - 1;
        newColIndex = coord.colIndex;
        break;
      case Neighbour.upper_right:
        newRowIndex = coord.rowIndex - 1;
        newColIndex = coord.colIndex + 1;
        break;
      case Neighbour.left:
        newRowIndex = coord.rowIndex;
        newColIndex = coord.colIndex - 1;
        break;
      case Neighbour.right:
        newRowIndex = coord.rowIndex;
        newColIndex = coord.colIndex + 1;
        break;
      case Neighbour.lower_left:
        newRowIndex = coord.rowIndex + 1;
        newColIndex = coord.colIndex - 1;
        break;
      case Neighbour.lower:
        newRowIndex = coord.rowIndex + 1;
        newColIndex = coord.colIndex;
        break;
      case Neighbour.lower_right:
        newRowIndex = coord.rowIndex + 1;
        newColIndex = coord.colIndex + 1;
        break;
    }
    const newId = this.getId(newRowIndex, newColIndex);
    this.validateId(newId);
    return newId;
  }
  getNeighbours(id: number): Neighbour[] {
    this.validateId(id);
    let removeResults: Neighbour[] = [];
    const coord = this.getCoordinate(id);
    const rowIndex = coord.rowIndex;
    const colIndex = coord.colIndex;
    if (colIndex === 0) {
      removeResults.push(Neighbour.upper_left);
      removeResults.push(Neighbour.left);
      removeResults.push(Neighbour.lower_left);
    }
    if (colIndex === this.numCols - 1) {
      removeResults.push(Neighbour.upper_right);
      removeResults.push(Neighbour.right);
      removeResults.push(Neighbour.lower_right);
    }
    if (rowIndex === 0) {
      removeResults.push(Neighbour.upper_left);
      removeResults.push(Neighbour.upper);
      removeResults.push(Neighbour.upper_right);
    }
    if (rowIndex === this.numRows - 1) {
      removeResults.push(Neighbour.lower_left);
      removeResults.push(Neighbour.lower);
      removeResults.push(Neighbour.lower_right);
    }
    let results: Neighbour[] = allNeighbours.filter((n) => !removeResults.includes(n));
    return results;
  }
}

export default IdService;
