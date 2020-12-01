import {call, put} from "redux-saga/effects";
import {ENDPOINT_LIBRARIES_LIST} from "../../../../../../../../api/endpoints/get-libraries-list";
import {request, RequestResultType} from "../../../../../../../../api/request";
import {
  setLibrariesDataAction,
  startLoadingLibrariesDataAction,
  stopLoadingLibrariesDataAction,
} from "../../actions";
import {reformatLibrariesTable} from "./_utils/reformat-libraries-data";

export function* getLibrariesWorkerSaga() {
  yield put(startLoadingLibrariesDataAction());
  try {
    const {data, hasError, errorText}: RequestResultType = yield call(request, {
      endpoint: ENDPOINT_LIBRARIES_LIST,
    });

    if (hasError) {
      throw new Error(errorText);
    }

    const reformattedData = reformatLibrariesTable({data});

    yield put(setLibrariesDataAction(reformattedData));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(stopLoadingLibrariesDataAction());
  }
}
