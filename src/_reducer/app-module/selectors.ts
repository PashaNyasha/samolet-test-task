import {createSelector} from "reselect";
import {ReduxStorageType} from "../../_types/redux-storage-type";
import {APP_REDUCER_NAME, initialState} from "./reducer";
import {AppModuleStorageType} from "./types";

export const getAppStorageSelector = (store: ReduxStorageType) =>
  store[APP_REDUCER_NAME] || initialState;

export const isAppLoadingSelector = createSelector(
  [getAppStorageSelector],
  ({isLoading}: AppModuleStorageType) => isLoading
);

export const isAppCrashedSelector = createSelector(
  [getAppStorageSelector],
  ({isCrashed}: AppModuleStorageType) => isCrashed
);
