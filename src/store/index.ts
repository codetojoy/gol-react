import { combineReducers, createStore } from "redux";
import { configReducer } from "./config/reducer";
import { IConfigState } from "./config/types";
import { gridReducer } from "./grid/reducer";
import { IGridState } from "./grid/types";

export interface IRootState {
  grid: IGridState;
  config: IConfigState;
}

export const store = createStore<IRootState, any, any, any>(
  combineReducers({
    config: configReducer,
    grid: gridReducer,
  })
);

// from https://redux.js.org/usage/usage-with-typescript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
