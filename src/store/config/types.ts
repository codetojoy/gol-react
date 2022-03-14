import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type ConfigActions = ActionType<typeof actions>;

export interface IConfigState {
  numRows: number;
  numCols: number;
}

export enum Constants {
  SET_NUM_ROWS = "SET_NUM_ROWS",
  SET_NUM_COLS = "SET_NUM_COLS",
}

