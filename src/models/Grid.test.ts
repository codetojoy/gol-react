import Cell from "./Cell";
import CellState from "./CellState";
import Grid from "./Grid";
import GridService from "../services/GridService";

describe("Grid", () => {
  test("canary test", () => {
    // test
    const result: number = 2 + 2;

    expect(result).toEqual(4);
  });
  test("should set a cell to be alive", () => {
    const numRows: number = 3;
    const numCols: number = 4;
    const gridService: GridService = new GridService(numRows, numCols);
    const id = 7;
    const grid = gridService.buildGrid();

    // test
    grid.setAlive(id);

    const cell = grid.getCell(id);
    expect(cell.state).toEqual(CellState.alive);
  });
  test("should interrogate if cell is alive", () => {
    const numRows: number = 3;
    const numCols: number = 4;
    const gridService: GridService = new GridService(numRows, numCols);
    const id = 7;
    const grid = gridService.buildGrid();
    grid.setAlive(id);

    // test
    const result = grid.isAlive(id);

    expect(result).toBeTruthy();
  });
  test("should provide ordered list of ids", () => {
    let c1: Cell = new Cell(10, CellState.alive);
    let c2: Cell = new Cell(20, CellState.alive);
    let c3: Cell = new Cell(30, CellState.alive);
    let grid: Grid = new Grid();
    grid.addCell(c1);
    grid.addCell(c2);
    grid.addCell(c3);

    // test
    const ids = grid.getIds();

    expect(ids.length).toEqual(3);
    expect(ids[0]).toEqual(c1.id);
    expect(ids[1]).toEqual(c2.id);
    expect(ids[2]).toEqual(c3.id);
  });
});
