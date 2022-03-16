import { Dispatch } from "redux";
import * as actions from "./actions";
import { GridActions } from "./types";

let stopTickRequest: boolean = false;

function sleep(timeoutInMillis: number) {
  return new Promise((resolve) => setTimeout(() => resolve(1), timeoutInMillis));
}

export async function slowTickAsync(dispatch: Dispatch<GridActions>) {
  dispatch(actions.setLoading(true));

  await sleep(1000);

  dispatch(actions.tick());
  dispatch(actions.setLoading(false));
}

export async function stopTicksAsync(dispatch: Dispatch<GridActions>) {
  stopTickRequest = true;
}

export async function startTicksAsync(dispatch: Dispatch<GridActions>) {
  stopTickRequest = false;
  dispatch(actions.setLoading(true));

  const numTicks: number = 20;
  for (let i: number = 0; !stopTickRequest && i <= numTicks; i++) {
    await sleep(500);
    dispatch(actions.tick());
  }

  dispatch(actions.setLoading(false));
}
