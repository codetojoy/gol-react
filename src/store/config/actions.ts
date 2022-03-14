import { action } from "typesafe-actions";
import { Constants } from "./types";

export function setNumRows(value: number) {
  return action(Constants.SET_NUM_ROWS, {
    value,
  });
}

export function setNumCols(value: number) {
  return action(Constants.SET_NUM_COLS, {
    value,
  });
}
