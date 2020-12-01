import {createSelector} from "reselect";
import {ReduxStorageType} from "../../../../../../_types/redux-storage-type";
import {initialState, LIBRARIES_TABLE_REDUCER_NAME} from "./reducer";
import {LibrariesTableStorageType} from "./types";

export const getLibrariesTableStorageSelector = (store: ReduxStorageType) =>
  store[LIBRARIES_TABLE_REDUCER_NAME] || initialState;

export const getLibrariesTableSelector = createSelector(
  [getLibrariesTableStorageSelector],
  ({libraries}: LibrariesTableStorageType) => libraries
);

export const isLibrariesTableLoadingSelector = createSelector(
  [getLibrariesTableStorageSelector],
  ({isLoading}: LibrariesTableStorageType) => isLoading
);
