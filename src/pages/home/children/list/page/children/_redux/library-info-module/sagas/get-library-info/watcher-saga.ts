import {fork, take} from "redux-saga/effects";
import {GET_LIBRARY_INFO_ACTION_SAGA} from "../../actions";
import {getLibraryInfoWorkerSaga} from "./worker-saga";

export const GET_LIBRARY_INFO_WATECHER_SAGA = 'GET_LIBRARY_INFO_WATECHER_SAGA';

export function* getLibraryInfoWatcherSaga() {
  while (true) {
    const {payload}: {payload: number} = yield take(GET_LIBRARY_INFO_ACTION_SAGA);
    yield fork(getLibraryInfoWorkerSaga, payload);
  }
}
