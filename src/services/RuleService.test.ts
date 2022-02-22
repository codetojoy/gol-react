import Cell from "../models/Cell";
import CellState from "../models/CellState";
import RuleService from "./RuleService";

describe("RuleService", () => {
  const ruleService: RuleService = new RuleService();
  const alive1 = new Cell(10, CellState.alive);
  const alive2 = new Cell(20, CellState.alive);
  const alive3 = new Cell(23, CellState.alive);
  const alive4 = new Cell(24, CellState.alive);
  const dead1 = new Cell(30, CellState.dead);
  const dead2 = new Cell(40, CellState.dead);
  test("canary test", () => {
    // test
    const result = 2 + 2;

    expect(result).toEqual(4);
  });
  // -----------------------
  // TODO: data-driven?
  test("should apply rule for alive cell, no neighbours alive", () => {
    const cellState = CellState.alive;
    const neighbours: Cell[] = [dead1, dead2];

    // test
    const result = ruleService.determineState(cellState, neighbours);

    expect(result).toEqual(CellState.dead);
  });
  test("should apply rule for alive cell, 1 neighbour alive", () => {
    const cellState = CellState.alive;
    const neighbours: Cell[] = [dead1, alive1, dead2];

    // test
    const result = ruleService.determineState(cellState, neighbours);

    expect(result).toEqual(CellState.dead);
  });
  test("should apply rule for alive cell, 2 neighbour alive", () => {
    const cellState = CellState.alive;
    const neighbours: Cell[] = [dead1, alive1, dead2, alive2];

    // test
    const result = ruleService.determineState(cellState, neighbours);

    expect(result).toEqual(CellState.alive);
  });
  test("should apply rule for alive cell, 3 neighbour alive", () => {
    const cellState = CellState.alive;
    const neighbours: Cell[] = [dead1, alive1, dead2, alive2, alive3];

    // test
    const result = ruleService.determineState(cellState, neighbours);

    expect(result).toEqual(CellState.alive);
  });
  test("should apply rule for alive cell, 4 neighbour alive", () => {
    const cellState = CellState.alive;
    const neighbours: Cell[] = [dead1, alive1, dead2, alive2, alive3, alive4];

    // test
    const result = ruleService.determineState(cellState, neighbours);

    expect(result).toEqual(CellState.dead);
  });
  test("should apply rule for alive dead, 0 neighbour alive", () => {
    const cellState = CellState.dead;
    const neighbours: Cell[] = [dead1, dead2];

    // test
    const result = ruleService.determineState(cellState, neighbours);

    expect(result).toEqual(CellState.dead);
  });
  test("should apply rule for alive dead, 1 neighbour alive", () => {
    const cellState = CellState.dead;
    const neighbours: Cell[] = [dead1, alive1, dead2];

    // test
    const result = ruleService.determineState(cellState, neighbours);

    expect(result).toEqual(CellState.dead);
  });
  test("should apply rule for alive dead, 2 neighbour alive", () => {
    const cellState = CellState.dead;
    const neighbours: Cell[] = [dead1, alive1, dead2, alive2];

    // test
    const result = ruleService.determineState(cellState, neighbours);

    expect(result).toEqual(CellState.dead);
  });
  test("should apply rule for alive dead, 3 neighbour alive", () => {
    const cellState = CellState.dead;
    const neighbours: Cell[] = [dead1, alive1, dead2, alive2, alive3];

    // test
    const result = ruleService.determineState(cellState, neighbours);

    expect(result).toEqual(CellState.alive);
  });
  test("should apply rule for alive dead, 4 neighbour alive", () => {
    const cellState = CellState.dead;
    const neighbours: Cell[] = [dead1, alive1, dead2, alive2, alive3, alive4];

    // test
    const result = ruleService.determineState(cellState, neighbours);

    expect(result).toEqual(CellState.dead);
  });
});
