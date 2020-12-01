import {createSelector} from "reselect";
import {ReduxStorageType} from "../../../../../../_types/redux-storage-type";
import {initialState, LIBRARIES_LIST_REDUCER_NAME} from "./reducer";
import {LibrariesDataType, LibrariesListItemType, LibrariesListStorageType} from "./types";

export const getLibrariesListStorageSelector = (store: ReduxStorageType) =>
  store[LIBRARIES_LIST_REDUCER_NAME] || initialState;

export const getLibrariesDatSelector = createSelector(
  [getLibrariesListStorageSelector],
  ({libraries}: LibrariesListStorageType): Array<LibrariesDataType> =>
    libraries
);

export const getLibrariesListSelector = createSelector(
  [getLibrariesListStorageSelector],
  ({librariesList}: LibrariesListStorageType): Array<LibrariesListItemType> =>
    librariesList
);

export const isLibrariesListLoadingSelector = createSelector(
  [getLibrariesListStorageSelector],
  ({isLoading}: LibrariesListStorageType): boolean => isLoading
);
