import { Constants, ConfigActions, IConfigState } from "./types";

const init: IConfigState = {
  numRows: 3,
  numCols: 4,
};

export function configReducer(state: IConfigState = init, action: ConfigActions): IConfigState {
  switch (action.type) {
    case Constants.SET_NUM_ROWS:
      return { ...state, numRows: action.payload.value };
    case Constants.SET_NUM_COLS:
      return { ...state, numCols: action.payload.value };
    default:
      return state;
  }
}

