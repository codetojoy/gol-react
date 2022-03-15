import Cell from "./Cell";
import CellState from "./CellState";
import Grid from "./Grid";
import GridService from "../services/GridService";

describe("Grid", () => {
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
    const c1: Cell = new Cell(10, CellState.alive);
    const c2: Cell = new Cell(20, CellState.alive);
    const c3: Cell = new Cell(30, CellState.alive);
    const grid: Grid = new Grid();
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
  test("should provide row slice, case 0", () => {
    const numRows = 4;
    const numCols = 5;
    const numCells = numRows * numCols;
    const grid: Grid = new Grid();
    for (let i = 1; i < numCells; i++) {
      const c: Cell = new Cell(i, CellState.alive);
      grid.addCell(c);
    }

    // test
    const result = grid.getRow(0, numCols);

    expect(result.length).toEqual(numCols);
    expect(result[0].id).toEqual(1);
    expect(result[numCols - 1].id).toEqual(numCols);
  });
  test("should provide row slice, case N", () => {
    const numRows = 4;
    const numCols = 5;
    const numCells = numRows * numCols;
    const grid: Grid = new Grid();
    for (let i = 1; i <= numCells; i++) {
      const c: Cell = new Cell(i, CellState.alive);
      grid.addCell(c);
    }
    const rowIndex = 3;

    // test
    const result = grid.getRow(rowIndex, numCols);
    // result.forEach((c) => console.log(`TRACER result: ${c.id}`));

    expect(result.length).toEqual(numCols);
    expect(result[0].id).toEqual(rowIndex * numCols + 1);
    expect(result[numCols - 1].id).toEqual(numCells);
  });
});
