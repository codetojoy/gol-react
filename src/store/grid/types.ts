import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import Grid from "../../models/Grid";

export type GridActions = ActionType<typeof actions>;

export interface IGridState {
  numRows: number;
  numCols: number;
  grid: Grid;
}

export enum Constants {
  RESET_GRID = "RESET_GRID",
  SEED_GRID = "SEED_GRID",
  TICK = "TICK",
}
