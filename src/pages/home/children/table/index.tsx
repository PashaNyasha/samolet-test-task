import React, {memo} from "react";
import {useRoute} from "react-router5";
import { injectAsyncReducers } from "../../../../_utils/inject-async-reducers";
import {injectAsyncSagas} from "../../../../_utils/inject-async-sagas";
import {getLibrariesActionSaga} from "./_reducer/library-table-module/actions";
import { librariesTableReducer, LIBRARIES_TABLE_REDUCER_NAME } from "./_reducer/library-table-module/reducer";
import {
  getLibrariesWatcherSaga,
  GET_LIBRARIES_WATCHER_SAGA_NAME,
} from "./_reducer/library-table-module/sagas/get-libraries-table/watcher-saga";

export const LibrariesTablePage = memo(() => {
  const {
    router: {getDependencies},
  } = useRoute();

  const {store} = getDependencies();

  injectAsyncSagas({
    store,
    name: GET_LIBRARIES_WATCHER_SAGA_NAME,
    saga: getLibrariesWatcherSaga,
  });

  injectAsyncReducers({
    store,
    name: LIBRARIES_TABLE_REDUCER_NAME,
    reducer: librariesTableReducer,
  });

  store.dispatch(getLibrariesActionSaga());
  
  return <div className="">TABLE</div>;
});
