import { Dispatch } from "redux";
import * as actions from "./actions";
import { GridActions } from "./types";

function sleep(timeoutInMillis: number) {
  return new Promise((resolve) => setTimeout(() => resolve(1), timeoutInMillis));
}

export async function slowTickAsync(dispatch: Dispatch<GridActions>) {
  dispatch(actions.setLoading(true));

  await sleep(3000);

  dispatch(actions.tick());
  dispatch(actions.setLoading(false));
}

export async function startTicksAsync(dispatch: Dispatch<GridActions>) {
  dispatch(actions.setLoading(true));

  const numTicks: number = 20;
  for (let i: number = 0; i <= numTicks; i++) {
    await sleep(1000);
    dispatch(actions.tick());
  }

  dispatch(actions.setLoading(false));
}
