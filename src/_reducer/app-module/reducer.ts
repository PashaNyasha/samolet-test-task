import {
  SET_IS_APP_CRASHED_ACTION,
  START_LOADING_APP_ACTION,
  STOP_LOADING_APP_ACTION,
} from "./actions";
import {AppModuleActionType, AppModuleStorageType} from "./types";

export const initialState: AppModuleStorageType = {
  isLoading: false,
  isCrashed: false,
};

export const APP_REDUCER_NAME = 'APP_REDUCER_NAME';

export const appReducer = (
  state: AppModuleStorageType = initialState,
  {type}: AppModuleActionType
) => {
  switch (type) {
    case START_LOADING_APP_ACTION:
      return {...state, isLoading: true};

    case STOP_LOADING_APP_ACTION:
      return {...state, isLoading: false};

    case SET_IS_APP_CRASHED_ACTION:
      return {...state, isCrashed: true};

    default:
      return state;
  }
};
