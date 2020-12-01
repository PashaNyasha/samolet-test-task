import React, {memo} from "react";
import {useRoute} from "react-router5";
import { injectAsyncReducers } from "../../../../_utils/inject-async-reducers";
import {injectAsyncSagas} from "../../../../_utils/inject-async-sagas";
import { ConnectedLibrariesPage } from "./page";
import {getLibrariesDataActionSaga} from "./_redux/library-list-module/actions";
import { librariesListReducer, LIBRARIES_LIST_REDUCER_NAME } from "./_redux/library-list-module/reducer";
import { getLibrariesDataWatcherSaga, GET_LIBRARIES_DATA_WATCHER_SAGA_NAME } from "./_redux/library-list-module/sagas/get-libraries-data/watcher-saga";


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

  injectAsyncReducers({
    store,
    name: LIBRARIES_LIST_REDUCER_NAME,
    reducer: librariesListReducer,
  });

  store.dispatch(getLibrariesDataActionSaga());
  
  return <ConnectedLibrariesPage />;
});
