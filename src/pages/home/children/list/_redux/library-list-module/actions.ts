import {
  AdvancedActionType,
  BaseActionType,
} from "../../../../../../_types/actions";
import {
  LibrariesDataType,
  LibrariesListItemType,
  LibrarySortType,
} from "./types";

export const SET_LIBRARIES_DATA_ACTION = "SET_LIBRARIES_DATA_ACTION";
export const setLibrariesDataAction: AdvancedActionType<
  Array<LibrariesDataType>
> = (payload) => ({
  type: SET_LIBRARIES_DATA_ACTION,
  payload,
});

export const SET_LIBRARIES_LIST_ACTION = "SET_LIBRARIES_LIST_ACTION";
export const setLibrariesListAction: AdvancedActionType<
  Array<LibrariesListItemType>
> = (payload) => ({
  type: SET_LIBRARIES_LIST_ACTION,
  payload,
});

export const GET_LIBRARIES_DATA_ACTION_SAGA = "GET_LIBRARIES_DATA_ACTION_SAGA";
export const getLibrariesDataActionSaga: BaseActionType = () => ({
  type: GET_LIBRARIES_DATA_ACTION_SAGA,
});

export const GET_CHOSEN_LIBRARY_ACTION_SAGA = "GET_CHOSEN_LIBRARY_ACTION_SAGA";
export const getChosenLibraryActionSaga: AdvancedActionType<number> = (
  payload
) => ({
  type: GET_CHOSEN_LIBRARY_ACTION_SAGA,
  payload,
});

export const SORT_LIBRARIES_DATA_ACTION_SAGA =
  "SORT_LIBRARIES_DATA_ACTION_SAGA";
export const sortLibrariesDataActionSaga: AdvancedActionType<LibrarySortType> = (
  payload
) => ({
  type: SORT_LIBRARIES_DATA_ACTION_SAGA,
  payload,
});

export const SET_SORT_BY_REGION_STATUS_ACTION =
  "SET_SORT_BY_REGION_STATUS_ACTION";
export const setSortByRegionStatusAction: AdvancedActionType<LibrarySortType> = (
  payload
) => ({
  type: SET_SORT_BY_REGION_STATUS_ACTION,
  payload,
});

export const SET_SORT_BY_LIBRARIES_COUNT_STATUS_ACTION =
  "SET_SORT_BY_LIBRARIES_COUNT_STATUS_ACTION";
export const setSortByLibrariesCountStatusAction: AdvancedActionType<LibrarySortType> = (
  payload
) => ({
  type: SET_SORT_BY_LIBRARIES_COUNT_STATUS_ACTION,
  payload,
});

export const RESET_LIBRARIES_DATA_ACTION = "RESET_LIBRARIES_DATA_ACTION";
export const resetLibrariesDataAction: BaseActionType = () => ({
  type: RESET_LIBRARIES_DATA_ACTION,
});