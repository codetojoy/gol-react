import Cell from "./Cell";

class Grid {
  cells: Cell[] = [];

  addCell(cell: Cell): void {
    this.cells.push(cell);
  }

  getCell(id: number) {
    return this.cells[id];
  }

  getIds(): number[] {
    let ids: number[] = this.cells.map((c) => c.id);
    return ids;
  }
}

export default Grid;
