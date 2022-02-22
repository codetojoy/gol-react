import { Neighbour } from "../models/Neighbour";
import GridService from "./GridService";

describe("GridService", () => {
  const numRows: number = 3;
  const numCols: number = 4;
  const numCells: number = numRows * numCols;
  const gridService: GridService = new GridService(numRows, numCols);
  test("should build grid with N cells", () => {
    // test
    const grid = gridService.buildGrid();

    expect(grid.getIds().length).toEqual(numCells);
  });
  // TODO: data-driven?
  test("should build grid with correct neighbours for id 0", () => {
    const id = 0;

    // test
    const grid = gridService.buildGrid();

    const cell = grid.getCell(id);
    const neighbours = cell.neighbours;
    console.log(`TRACER gs.test :`);
    console.log(neighbours);
    /*
    let keys = Array.from(neighbours.keys());
    expect(keys.length).toEqual(3);
    expect(neighbours.get(Neighbour.right)!.id).toEqual(1);
    expect(neighbours.get(Neighbour.lower)!.id).toEqual(4);
    expect(neighbours.get(Neighbour.lower_left)!.id).toEqual(5);
    */
  });
});
