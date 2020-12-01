import {
  AdvancedActionType,
  BaseActionType,
} from "../../../../../../_types/actions";
import {LibrariesDataType, LibrariesListItemType} from "./types";

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

export const START_LOADING_LIBRARIES_DATA_ACTION =
  "START_LOADING_LIBRARIES_DATA_ACTION";
export const startLoadingLibrariesDataAction: BaseActionType = () => ({
  type: START_LOADING_LIBRARIES_DATA_ACTION,
});

export const STOP_LOADING_LIBRARIES_DATA_ACTION =
  "STOP_LOADING_LIBRARIES_DATA_ACTION";
export const stopLoadingLibrariesDataAction: BaseActionType = () => ({
  type: STOP_LOADING_LIBRARIES_DATA_ACTION,
});

export const GET_LIBRARIES_DATA_ACTION_SAGA = "GET_LIBRARIES_DATA_ACTION_SAGA";
export const getLibrariesDataActionSaga: BaseActionType = () => ({
  type: GET_LIBRARIES_DATA_ACTION_SAGA,
});

export const GET_CHOSEN_LIBRARY_ACTION_SAGA = "GET_CHOSEN_LIBRARY_ACTION_SAGA";
export const getChosenLibraryActionSaga: AdvancedActionType<number> = payload => ({
  type: GET_CHOSEN_LIBRARY_ACTION_SAGA,
  payload,
});

