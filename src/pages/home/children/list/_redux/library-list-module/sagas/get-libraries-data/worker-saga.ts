import {batchActions} from "redux-batched-actions";
import {call, put} from "redux-saga/effects";
import {ENDPOINT_LIBRARIES_LIST} from "../../../../../../../../api/endpoints/get-libraries-list";
import {request, RequestResultType} from "../../../../../../../../api/request";
import {
  setLibrariesDataAction,
  setLibrariesListAction,
  startLoadingLibrariesDataAction,
  stopLoadingLibrariesDataAction,
} from "../../actions";
import {createLibrariesList} from "./_utils/create-libraries-list";
import {reformatLibrariesData} from "./_utils/reformat-libraries-data";

export function* getLibrariesDataWorkerSaga() {
  yield put(startLoadingLibrariesDataAction());
  try {
    const {data, hasError, errorText}: RequestResultType = yield call(request, {
      endpoint: ENDPOINT_LIBRARIES_LIST,
    });

    if (hasError) {
      throw new Error(errorText);
    }

    const formattedData = reformatLibrariesData({data});

    const list = createLibrariesList({data: formattedData});

    yield put(
      batchActions([
        setLibrariesDataAction(formattedData),
        setLibrariesListAction(list),
      ])
    );
  } catch (error) {
    console.error(error);
  } finally {
    yield put(stopLoadingLibrariesDataAction());
  }
}
