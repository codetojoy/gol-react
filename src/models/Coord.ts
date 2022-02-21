class Coord {
  id: number;
  rowIndex: number;
  colIndex: number;

  constructor(id: number, rowIndex: number, colIndex: number) {
    this.id = id;
    this.rowIndex = rowIndex;
    this.colIndex = colIndex;
  }
}

export default Coord;
