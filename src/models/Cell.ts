import CellState from "./CellState";
// import { Neighbour } from "./Neighbour";

class Cell {
  id: number;
  state: CellState;
  // neighbours: Map<Neighbour, Cell>;

  constructor(id: number, state: CellState) {
    this.id = id;
    this.state = state;
    // this.neighbours = new Map<Neighbour, Cell>();
  }

  // TODO: use private properties with get/set
  /*
  setNeighbours(neighbours: Map<Neighbour, Cell>): void {
    this.neighbours = neighbours;
  }
  */
}

export default Cell;
