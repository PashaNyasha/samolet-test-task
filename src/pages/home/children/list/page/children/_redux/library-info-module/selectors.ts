import {createSelector} from "reselect";
import {ReduxStorageType} from "../../../../../../../../_types/redux-storage-type";
import {initialState, LIBRARY_INFO_REDUCER_NAME} from "./reducer";
import {LibraryInfoStorageType} from "./types";

export const getLibraryInfoStorageSelector = (store: ReduxStorageType) =>
  store[LIBRARY_INFO_REDUCER_NAME] || initialState;

export const getLibraryInfoSelector = createSelector(
  [getLibraryInfoStorageSelector],
  ({library}: LibraryInfoStorageType) => library
);
