import {take, fork} from "redux-saga/effects";
import {GET_LIBRARIES_ACTION_SAGA} from "../../actions";
import {getLibrariesWorkerSaga} from "./worker-saga";

export const GET_LIBRARIES_WATCHER_SAGA_NAME =
  "GET_LIBRARIES_WATCHER_SAGA_NAME";

export function* getLibrariesWatcherSaga() {
  while (true) {
    yield take(GET_LIBRARIES_ACTION_SAGA);
    yield fork(getLibrariesWorkerSaga);
  }
}
