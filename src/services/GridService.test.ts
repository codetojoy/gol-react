import Cell from "../models/Cell";
import CellState from "../models/CellState";
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
  test("should get correct neighbours for id 0", () => {
    const id = 0;
    const grid = gridService.buildGrid();

    // test
    const neighbours = gridService.getNeighbours(id, grid);

    let keys = Array.from(neighbours.keys());
    expect(keys.length).toEqual(3);
    expect(keys.includes(Neighbour.right)).toBeTruthy();
    expect(keys.includes(Neighbour.lower)).toBeTruthy();
    expect(keys.includes(Neighbour.lower_right)).toBeTruthy();
    let ids = Array.from(neighbours.values()).map((c) => c.id);
    expect(ids.includes(1)).toBeTruthy();
    expect(ids.includes(4)).toBeTruthy();
    expect(ids.includes(5)).toBeTruthy();
  });
  test("should get correct neighbours for id 5", () => {
    const id = 5;
    const grid = gridService.buildGrid();

    // test
    const neighbours = gridService.getNeighbours(id, grid);

    let keys = Array.from(neighbours.keys());
    expect(keys.length).toEqual(8);
    let ids = Array.from(neighbours.values()).map((c) => c.id);
    expect(ids.includes(0)).toBeTruthy();
    expect(ids.includes(1)).toBeTruthy();
    expect(ids.includes(2)).toBeTruthy();
    expect(ids.includes(4)).toBeTruthy();
    expect(ids.includes(6)).toBeTruthy();
    expect(ids.includes(8)).toBeTruthy();
    expect(ids.includes(9)).toBeTruthy();
    expect(ids.includes(10)).toBeTruthy();
  });
  test("should get correct neighbours for id 11", () => {
    const id = 11;
    const grid = gridService.buildGrid();

    // test
    const neighbours = gridService.getNeighbours(id, grid);

    let keys = Array.from(neighbours.keys());
    expect(keys.length).toEqual(3);
    expect(keys.includes(Neighbour.upper_left)).toBeTruthy();
    expect(keys.includes(Neighbour.upper)).toBeTruthy();
    expect(keys.includes(Neighbour.left)).toBeTruthy();
    let ids = Array.from(neighbours.values()).map((c) => c.id);
    expect(ids.includes(6)).toBeTruthy();
    expect(ids.includes(7)).toBeTruthy();
    expect(ids.includes(10)).toBeTruthy();
  });

  // --------------------------------
  // TODO: data-driven?
  test("should tick for an iteration, case 1", () => {
    const grid = gridService.buildGrid();
    grid.setAlive(0);
    grid.setAlive(3);
    grid.setAlive(8);
    grid.setAlive(11);

    // test
    const newGrid = gridService.tick(grid);

    const ids: number[] = newGrid.getIds();
    ids.forEach((id) => {
      const isAlive: boolean = newGrid.getCell(id).isAlive();
      expect(isAlive).toBeFalsy();
    });
  });
});
