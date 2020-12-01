import {createSelector} from "reselect";
import {ReduxStorageType} from "../../../../../../_types/redux-storage-type";
import {initialState, LIBRARIES_LIST_REDUCER_NAME} from "./reducer";
import {
  LibrariesDataType,
  LibrariesListItemType,
  LibrariesListStorageType,
  LibrarySortType,
} from "./types";

export const getLibrariesListStorageSelector = (store: ReduxStorageType) =>
  store[LIBRARIES_LIST_REDUCER_NAME] || initialState;

export const getLibrariesDatSelector = createSelector(
  [getLibrariesListStorageSelector],
  ({libraries}: LibrariesListStorageType): Array<LibrariesDataType> => libraries
);

export const getLibrariesListSelector = createSelector(
  [getLibrariesListStorageSelector],
  ({librariesList}: LibrariesListStorageType): Array<LibrariesListItemType> =>
    librariesList
);

export const getSortByRegionStatusSelector = createSelector(
  [getLibrariesListStorageSelector],
  ({sortByRegion}: LibrariesListStorageType): LibrarySortType => sortByRegion
);

export const getSortByLibrariesCountSelector = createSelector(
  [getLibrariesListStorageSelector],
  ({sortByLibrariesCount}: LibrariesListStorageType): LibrarySortType =>
    sortByLibrariesCount
);
