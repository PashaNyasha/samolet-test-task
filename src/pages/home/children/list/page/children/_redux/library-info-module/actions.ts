import {
  AdvancedActionType,
  BaseActionType,
} from "../../../../../../../../_types/actions";
import { LibraryInfoType } from "./types";

export const SET_LIBRARY_INFO_ACTION = "SET_LIBRARY_INFO_ACTION";
export const setLibraryInfoAction: AdvancedActionType<Array<LibraryInfoType>> = (
  payload
) => ({
  type: SET_LIBRARY_INFO_ACTION,
  payload,
});

export const START_LOADING_LIBRARY_INFO_ACTION =
  "START_LOADING_LIBRARY_INFO_ACTION";
export const startLoadingLibraryInfoAction: BaseActionType = () => ({
  type: START_LOADING_LIBRARY_INFO_ACTION,
});

export const STOP_LOADING_LIBRARY_INFO_ACTION =
  "STOP_LOADING_LIBRARY_INFO_ACTION";
export const stopLoadingLibraryInfoAction: BaseActionType = () => ({
  type: STOP_LOADING_LIBRARY_INFO_ACTION,
});

export const GET_LIBRARY_INFO_ACTION_SAGA = "GET_LIBRARY_INFO_ACTION_SAGA";
export const getLibraryInfoActionSaga: AdvancedActionType<number> = (
  payload
) => ({
  type: GET_LIBRARY_INFO_ACTION_SAGA,
  payload,
});
