import {batchActions} from "redux-batched-actions";
import {call, delay, put} from "redux-saga/effects";
import {ENDPOINT_LIBRARIES_LIST} from "../../../../../../../../api/endpoints/get-libraries-list";
import {request, RequestResultType} from "../../../../../../../../api/request";
import { setIsAppCrashedAction, startAppLoadingAction, stopAppLoadingAction } from "../../../../../../../../_reducer/app-module";
import {setLibrariesDataAction, setLibrariesListAction} from "../../actions";
import {createLibrariesList} from "./_utils/create-libraries-list";
import {reformatLibrariesData} from "./_utils/reformat-libraries-data";

export function* getLibrariesDataWorkerSaga() {
  yield put(startAppLoadingAction());
  try {
    const {data, hasError, errorText}: RequestResultType = yield call(request, {
      endpoint: ENDPOINT_LIBRARIES_LIST,
    });

    if (hasError) {
      throw new Error(errorText);
    }

    // Только ради прикольного спиннера)
    yield delay(1000)

    const formattedData = reformatLibrariesData({data});

    const list = createLibrariesList({data: formattedData});

    yield put(
      batchActions([
        setLibrariesDataAction(formattedData),
        setLibrariesListAction(list),
      ])
    );
  } catch (error) {
    yield put(setIsAppCrashedAction());
    
  } finally {
    yield put(stopAppLoadingAction());
  }
}
