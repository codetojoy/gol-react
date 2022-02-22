import Cell from "./Cell";
import CellState from "./CellState";

class Grid {
  cells: Cell[] = [];

  clone(): Grid {
    const result = new Grid();
    result.cells = this.cells.slice();
    return result;
  }

  addCell(cell: Cell): void {
    this.cells.push(cell);
  }

  getCell(id: number): Cell {
    return this.cells[id];
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
