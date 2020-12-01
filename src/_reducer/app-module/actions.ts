import {BaseActionType} from "../../_types/actions";

export const START_LOADING_APP_ACTION = "START_LOADING_APP_ACTION";
export const startAppLoadingAction: BaseActionType = () => ({
  type: START_LOADING_APP_ACTION,
});

export const STOP_LOADING_APP_ACTION = "STOP_LOADING_APP_ACTION";
export const stopAppLoadingAction: BaseActionType = () => ({
  type: STOP_LOADING_APP_ACTION,
});

export const SET_IS_APP_CRASHED_ACTION = "SET_IS_APP_CRASHED_ACTION";
export const setIsAppCrashedAction: BaseActionType = () => ({
  type: SET_IS_APP_CRASHED_ACTION,
});
