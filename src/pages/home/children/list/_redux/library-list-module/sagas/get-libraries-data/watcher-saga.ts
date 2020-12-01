import {take, fork} from "redux-saga/effects";
import {GET_LIBRARIES_DATA_ACTION_SAGA} from "../../actions";
import {getLibrariesDataWorkerSaga} from "./worker-saga";

export const GET_LIBRARIES_DATA_WATCHER_SAGA_NAME =
  "GET_LIBRARIES_DATA_WATCHER_SAGA_NAME";

export function* getLibrariesDataWatcherSaga() {
  while (true) {
    yield take(GET_LIBRARIES_DATA_ACTION_SAGA);
    yield fork(getLibrariesDataWorkerSaga);
  }
}
