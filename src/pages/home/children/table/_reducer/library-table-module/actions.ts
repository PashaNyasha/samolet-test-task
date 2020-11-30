import {
  AdvancedActionType,
  BaseActionType,
} from "../../../../../../_types/actions";
import {LibrariesTableItemType} from "./types";

export const SET_LIBRARIES_DATA_ACTION = "SET_LIBRARIES_DATA_ACTION";
export const setLibrariesDataAction: AdvancedActionType<
  Array<LibrariesTableItemType>
> = (payload) => ({
  type: SET_LIBRARIES_DATA_ACTION,
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

export const GET_LIBRARIES_ACTION_SAGA = "GET_LIBRARIES_ACTION_SAGA";
export const getLibrariesActionSaga: BaseActionType = () => ({
  type: GET_LIBRARIES_ACTION_SAGA,
});
