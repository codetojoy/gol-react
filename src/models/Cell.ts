import CellState from "./CellState";
import { Neighbour } from "./Neighbour";

class Cell {
  id: number;
  state: CellState;
  neighbours: Map<Neighbour, Cell>;

  constructor(id: number, state: CellState) {
    this.id = id;
    this.state = state;
    this.neighbours = new Map<Neighbour, Cell>();
  }
}

export default Cell;
