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
