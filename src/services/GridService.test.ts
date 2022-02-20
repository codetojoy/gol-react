import GridService from "./GridService";

describe("GridService", () => {
  test("canary test", () => {
    // test
    const result: number = 2 + 2;

    expect(result).toEqual(4);
  });
  test("should build grid with N cells", () => {
    const numRows: number = 5;
    const numCols: number = 6;
    const numCells: number = numRows * numCols;
    const gridService: GridService = new GridService();

    // test
    const grid = gridService.buildGrid(numRows, numCols);

    expect(grid.getIds().length).toEqual(numCells);
  });
});
