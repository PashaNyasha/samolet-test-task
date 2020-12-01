import React, {memo} from "react";
import {useRoute} from "react-router5";
import {injectAsyncReducers} from "../../../../../../../_utils/inject-async-reducers";
import {injectAsyncSagas} from "../../../../../../../_utils/inject-async-sagas";
import {
  libraryInfoReducer,
  LIBRARY_INFO_REDUCER_NAME,
} from "../_redux/library-info-module";
import {
  getLibraryInfoWatcherSaga,
  GET_LIBRARY_INFO_WATECHER_SAGA,
} from "../_redux/library-info-module/sagas/get-library-info/watcher-saga";
import {ConnectedLibraryInfo} from "./_components/library-info";

export const LibraryInfoPage = memo(() => {
  const {
    router: {getDependencies},
  } = useRoute();

  const {store} = getDependencies();

  injectAsyncReducers({
    store,
    name: LIBRARY_INFO_REDUCER_NAME,
    reducer: libraryInfoReducer,
  });

  injectAsyncSagas({
    store,
    name: GET_LIBRARY_INFO_WATECHER_SAGA,
    saga: getLibraryInfoWatcherSaga,
  });

  return <ConnectedLibraryInfo />;
});
