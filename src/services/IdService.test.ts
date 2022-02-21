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
