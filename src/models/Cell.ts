import CellState from "./CellState";

class Cell {
  id: number;
  state: CellState;

  constructor(id: number, state: CellState) {
    this.id = id;
    this.state = state;
  }

  isAlive(): boolean {
    return this.state === CellState.alive;
  }
}

export default Cell;
