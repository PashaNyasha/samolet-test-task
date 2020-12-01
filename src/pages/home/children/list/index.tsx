import React, {memo, useEffect} from "react";
import {useRoute} from "react-router5";
import {injectAsyncReducers} from "../../../../_utils/inject-async-reducers";
import {injectAsyncSagas} from "../../../../_utils/inject-async-sagas";
import {ConnectedLibrariesPage} from "./page";
import {
  libraryInfoReducer,
  LIBRARY_INFO_REDUCER_NAME,
} from "./page/children/_redux/library-info-module/reducer";
import {
  getLibraryInfoWatcherSaga,
  GET_LIBRARY_INFO_WATECHER_SAGA,
} from "./page/children/_redux/library-info-module/sagas/get-library-info/watcher-saga";
import {getLibrariesDataActionSaga, resetLibrariesDataAction} from "./_redux/library-list-module/actions";
import {
  librariesListReducer,
  LIBRARIES_LIST_REDUCER_NAME,
} from "./_redux/library-list-module/reducer";
import {
  getLibrariesDataWatcherSaga,
  GET_LIBRARIES_DATA_WATCHER_SAGA_NAME,
} from "./_redux/library-list-module/sagas/get-libraries-data/watcher-saga";
import {
  sortLibrariesDataWatcherSaga,
  SORT_LIBRARIES_DATA_WATCHER_SAGA_NAME,
} from "./_redux/library-list-module/sagas/sort-libraries-data/watcher-saga";

export const LibrariesListPage = memo(() => {
  const {
    router: {getDependencies},
  } = useRoute();

  const {store} = getDependencies();

  injectAsyncSagas({
    store,
    name: GET_LIBRARIES_DATA_WATCHER_SAGA_NAME,
    saga: getLibrariesDataWatcherSaga,
  });

  injectAsyncSagas({
    store,
    name: SORT_LIBRARIES_DATA_WATCHER_SAGA_NAME,
    saga: sortLibrariesDataWatcherSaga,
  });

  injectAsyncSagas({
    store,
    name: GET_LIBRARY_INFO_WATECHER_SAGA,
    saga: getLibraryInfoWatcherSaga,
  });

  injectAsyncReducers({
    store,
    name: LIBRARIES_LIST_REDUCER_NAME,
    reducer: librariesListReducer,
  });

  injectAsyncReducers({
    store,
    name: LIBRARY_INFO_REDUCER_NAME,
    reducer: libraryInfoReducer,
  });

  store.dispatch(getLibrariesDataActionSaga());

  useEffect(() => () =>  store.dispatch(resetLibrariesDataAction()));
  
  return <ConnectedLibrariesPage />;
});
