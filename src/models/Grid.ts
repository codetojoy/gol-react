import Cell from "./Cell";
import CellState from "./CellState";

class Grid {
  cells: Cell[] = [];

  // TODO: rename
  get theCells(): Cell[] {
    return this.cells.slice();
  }

  // TODO: should this go into service, or store?
  getRow(rowIndex: number, numCols: number): Cell[] {
    const begin = rowIndex * numCols;
    const end = begin + numCols;
    return this.cells.slice(begin, end);
  }

  clone(): Grid {
    const result = new Grid();
    result.cells = this.cells.map((c) => new Cell(c.id, c.state));
    return result;
  }

  addCell(cell: Cell): void {
    this.cells.push(cell);
  }

  getCell(id: number): Cell {
    return this.cells[id];
  }

  toggleState(id: number): void {
    this.cells[id].state = this.isAlive(id) ? CellState.dead : CellState.alive;
  }

  setAlive(id: number): void {
    this.cells[id].state = CellState.alive;
  }

  isAlive(id: number): boolean {
    return this.cells[id].state === CellState.alive;
  }

  getIds(): number[] {
    let ids: number[] = this.cells.map((c) => c.id);
    return ids;
  }
}

export default Grid;
