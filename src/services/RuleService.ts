import Cell from "../models/Cell";
import CellState from "../models/CellState";

class RuleService {
  determineState(cellState: CellState, neighbours: Cell[]): CellState {
    let result = CellState.dead;
    let numAliveNeighbours = neighbours.filter((c: Cell) => c.isAlive()).length;
    if (cellState === CellState.alive && (numAliveNeighbours === 2 || numAliveNeighbours === 3)) {
      result = CellState.alive;
    } else if (cellState === CellState.dead && numAliveNeighbours === 3) {
      result = CellState.alive;
    }
    return result;
  }
}

export default RuleService;
