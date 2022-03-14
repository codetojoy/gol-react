import { combineReducers, createStore } from "redux";
import { configReducer } from "./config/reducer";
import { IConfigState } from "./config/types";
// import { gameReducer } from "./game/reducer";
// import { IGameState } from "./game/types";

export interface IRootState {
  // game: IGameState;
  config: IConfigState;
}

export const store = createStore<IRootState, any, any, any>(
  combineReducers({
    config: configReducer,
    // game: gameReducer,
  })
);

// from https://redux.js.org/usage/usage-with-typescript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
