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
    if (id >= this.numRows * this.numCols || id < 0) {
      throw new Error(`illegal id: ${id}`);
    }
  }
  getCoordinate(id: number): Coord {
    this.validateId(id);
    const colIndex: number = id % this.numCols;
    const rowIndex: number = Math.floor(id / this.numCols);
    return new Coord(id, rowIndex, colIndex);
  }
  getNeighbours(id: number): Neighbour[] {
    let removeResults: Neighbour[] = [];
    this.validateId(id);
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
