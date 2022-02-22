import Cell from "../models/Cell";
import Coord from "../models/Coord";
import { Neighbour } from "../models/Neighbour";
import IdService from "./IdService";

describe("IdService", () => {
  const numRows = 5;
  const numCols = 6;
  const idService = new IdService(numRows, numCols);

  test("canary test", () => {
    // test
    const result: number = 2 + 2;

    expect(result).toEqual(4);
  });
  test("should throw an error if id < 0", () => {
    const id = -1;
    expect(() => {
      // test
      idService.getCoordinate(id);
    }).toThrow(`illegal id: ${id}`);
  });
  test("should throw an error if id > (N-1)", () => {
    const id = numRows * numCols;
    expect(() => {
      // test
      idService.getCoordinate(id);
    }).toThrow(`illegal id: ${id}`);
  });

  // ---------------------------
  // TODO: data-driven tests
  test("getNeighbouringCells for id 0", () => {
    const id = 0;

    // test
    const result: Map<Neighbour, number> = idService.getNeighbouringCells(id);

    let keys = Array.from(result.keys());
    expect(keys.length).toEqual(3);
    expect(keys.includes(Neighbour.right)).toBeTruthy();
    expect(keys.includes(Neighbour.lower)).toBeTruthy();
    expect(keys.includes(Neighbour.lower_right)).toBeTruthy();
    let ids = Array.from(result.values());
    expect(ids.includes(1)).toBeTruthy();
    expect(ids.includes(6)).toBeTruthy();
    expect(ids.includes(7)).toBeTruthy();
  });
  test("getNeighbouringCells for id 5", () => {
    const id = 5;

    // test
    const result: Map<Neighbour, number> = idService.getNeighbouringCells(id);

    let keys = Array.from(result.keys());
    expect(keys.length).toEqual(3);
    expect(keys.includes(Neighbour.left)).toBeTruthy();
    expect(keys.includes(Neighbour.lower_left)).toBeTruthy();
    expect(keys.includes(Neighbour.lower)).toBeTruthy();
    let ids = Array.from(result.values());
    expect(ids.includes(4)).toBeTruthy();
    expect(ids.includes(10)).toBeTruthy();
    expect(ids.includes(11)).toBeTruthy();
  });
  test("getNeighbouringCells for id 15", () => {
    const id = 15;

    // test
    const result: Map<Neighbour, number> = idService.getNeighbouringCells(id);

    let keys = Array.from(result.keys());
    expect(keys.length).toEqual(8);
    expect(keys.includes(Neighbour.upper_left)).toBeTruthy();
    expect(keys.includes(Neighbour.upper)).toBeTruthy();
    expect(keys.includes(Neighbour.upper_right)).toBeTruthy();
    expect(keys.includes(Neighbour.left)).toBeTruthy();
    expect(keys.includes(Neighbour.lower_left)).toBeTruthy();
    expect(keys.includes(Neighbour.lower)).toBeTruthy();
    expect(keys.includes(Neighbour.lower_right)).toBeTruthy();
    let ids = Array.from(result.values());
    expect(ids.includes(8)).toBeTruthy();
    expect(ids.includes(9)).toBeTruthy();
    expect(ids.includes(10)).toBeTruthy();
    expect(ids.includes(14)).toBeTruthy();
    expect(ids.includes(16)).toBeTruthy();
    expect(ids.includes(20)).toBeTruthy();
    expect(ids.includes(21)).toBeTruthy();
    expect(ids.includes(22)).toBeTruthy();
  });
  test("getNeighbouringCells for id 24", () => {
    const id = 24;

    // test
    const result: Map<Neighbour, number> = idService.getNeighbouringCells(id);

    let keys = Array.from(result.keys());
    expect(keys.length).toEqual(3);
    expect(keys.includes(Neighbour.upper)).toBeTruthy();
    expect(keys.includes(Neighbour.upper_right)).toBeTruthy();
    expect(keys.includes(Neighbour.right)).toBeTruthy();
    let ids = Array.from(result.values());
    expect(ids.includes(18)).toBeTruthy();
    expect(ids.includes(19)).toBeTruthy();
    expect(ids.includes(25)).toBeTruthy();
  });
  test("getNeighbouringCells for id 28", () => {
    const id = 28;

    // test
    const result: Map<Neighbour, number> = idService.getNeighbouringCells(id);

    let keys = Array.from(result.keys());
    expect(keys.length).toEqual(5);
    expect(keys.includes(Neighbour.upper_left)).toBeTruthy();
    expect(keys.includes(Neighbour.upper)).toBeTruthy();
    expect(keys.includes(Neighbour.upper_right)).toBeTruthy();
    expect(keys.includes(Neighbour.left)).toBeTruthy();
    expect(keys.includes(Neighbour.right)).toBeTruthy();
    let ids = Array.from(result.values());
    expect(ids.includes(21)).toBeTruthy();
    expect(ids.includes(22)).toBeTruthy();
    expect(ids.includes(23)).toBeTruthy();
    expect(ids.includes(27)).toBeTruthy();
    expect(ids.includes(29)).toBeTruthy();
  });

  // ---------------------------
  // TODO: data-driven tests
  test("get id for 0", () => {
    const id = 0;
    const coord: Coord = idService.getCoordinate(id);

    // test
    const result: number = idService.getId(coord.rowIndex, coord.colIndex);

    expect(result).toEqual(id);
  });
  test("get id for 5", () => {
    const id = 5;
    const coord: Coord = idService.getCoordinate(id);

    // test
    const result: number = idService.getId(coord.rowIndex, coord.colIndex);

    expect(result).toEqual(id);
  });
  test("get id for 15", () => {
    const id = 15;
    const coord: Coord = idService.getCoordinate(id);

    // test
    const result: number = idService.getId(coord.rowIndex, coord.colIndex);

    expect(result).toEqual(id);
  });
  test("get id for 25", () => {
    const id = 25;
    const coord: Coord = idService.getCoordinate(id);

    // test
    const result: number = idService.getId(coord.rowIndex, coord.colIndex);

    expect(result).toEqual(id);
  });
  test("get id for 29", () => {
    const id = 29;
    const coord: Coord = idService.getCoordinate(id);

    // test
    const result: number = idService.getId(coord.rowIndex, coord.colIndex);

    expect(result).toEqual(id);
  });

  // ---------------------------
  // TODO: data-driven tests
  test("get neighbours id: 0", () => {
    const id = 0;

    // test
    const result: Neighbour[] = idService.getNeighbours(id);

    expect(result.length).toEqual(3);
    expect(result.includes(Neighbour.right)).toBeTruthy();
    expect(result.includes(Neighbour.lower)).toBeTruthy();
    expect(result.includes(Neighbour.lower_right)).toBeTruthy();
  });
  test("get neighbours id: 3", () => {
    const id = 3;

    // test
    const result: Neighbour[] = idService.getNeighbours(id);

    expect(result.length).toEqual(5);
    expect(result.includes(Neighbour.left)).toBeTruthy();
    expect(result.includes(Neighbour.right)).toBeTruthy();
    expect(result.includes(Neighbour.lower_left)).toBeTruthy();
    expect(result.includes(Neighbour.lower)).toBeTruthy();
    expect(result.includes(Neighbour.lower_right)).toBeTruthy();
  });
  test("get neighbours id: 5", () => {
    const id = 5;

    // test
    const result: Neighbour[] = idService.getNeighbours(id);

    expect(result.length).toEqual(3);
    expect(result.includes(Neighbour.left)).toBeTruthy();
    expect(result.includes(Neighbour.lower_left)).toBeTruthy();
    expect(result.includes(Neighbour.lower)).toBeTruthy();
  });
  test("get neighbours id: 24", () => {
    const id = 24;

    // test
    const result: Neighbour[] = idService.getNeighbours(id);

    expect(result.length).toEqual(3);
    expect(result.includes(Neighbour.upper)).toBeTruthy();
    expect(result.includes(Neighbour.upper_right)).toBeTruthy();
    expect(result.includes(Neighbour.right)).toBeTruthy();
  });
  test("get neighbours id: 29", () => {
    const id = 29;

    // test
    const result: Neighbour[] = idService.getNeighbours(id);

    expect(result.length).toEqual(3);
    expect(result.includes(Neighbour.upper_left)).toBeTruthy();
    expect(result.includes(Neighbour.upper)).toBeTruthy();
    expect(result.includes(Neighbour.left)).toBeTruthy();
  });
  test("get neighbours id: 15", () => {
    const id = 15;

    // test
    const result: Neighbour[] = idService.getNeighbours(id);

    expect(result.length).toEqual(8);
  });

  // ---------------------------
  // TODO: data-driven tests
  test("get coordinate id: 0", () => {
    const id = 0;

    // test
    const result: Coord = idService.getCoordinate(id);

    expect(result.rowIndex).toEqual(0);
    expect(result.colIndex).toEqual(0);
  });
  test("get coordinate id: 1", () => {
    const id = 1;

    // test
    const result: Coord = idService.getCoordinate(id);

    expect(result.rowIndex).toEqual(0);
    expect(result.colIndex).toEqual(1);
  });
  test("get coordinate id: 5", () => {
    const id = 5;

    // test
    const result: Coord = idService.getCoordinate(id);

    expect(result.rowIndex).toEqual(0);
    expect(result.colIndex).toEqual(5);
  });
  test("get coordinate id: 6", () => {
    const id = 6;

    // test
    const result: Coord = idService.getCoordinate(id);

    expect(result.rowIndex).toEqual(1);
    expect(result.colIndex).toEqual(0);
  });
  test("get coordinate id: 29", () => {
    const id = 29;

    // test
    const result: Coord = idService.getCoordinate(id);

    expect(result.rowIndex).toEqual(4);
    expect(result.colIndex).toEqual(5);
  });
});
