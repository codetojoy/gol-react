import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import Grid from "../../models/Grid";

export type GridActions = ActionType<typeof actions>;

export interface IGridState {
  numRows: number;
  numCols: number;
  grid: Grid;
  loading: boolean;
  initialized: boolean;
  tickCount: number;
}

export enum Constants {
  CLEAR_GRID = "CLEAR_GRID",
  RESET_GRID = "RESET_GRID",
  SEED_GRID = "SEED_GRID",
  TICK = "TICK",
  TOGGLE_CELL = "TOGGLE_CELL",
  SET_LOADING = "SET_LOADING",
}
