import {take, fork} from "redux-saga/effects";
import {SORT_LIBRARIES_DATA_ACTION_SAGA} from "../../actions";
import { LibrarySortType } from "../../types";
import {sortLibrariesDataWorkerSaga} from "./worker-saga";

export const SORT_LIBRARIES_DATA_WATCHER_SAGA_NAME =
  "SORT_LIBRARIES_DATA_WATCHER_SAGA_NAME";

export function* sortLibrariesDataWatcherSaga() {
  while (true) {
    const {payload}: { payload: LibrarySortType } = yield take(SORT_LIBRARIES_DATA_ACTION_SAGA);
    yield fork(sortLibrariesDataWorkerSaga, payload);
  }
}
