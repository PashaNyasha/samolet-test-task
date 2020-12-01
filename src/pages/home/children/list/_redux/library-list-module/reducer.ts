import {
  SET_LIBRARIES_DATA_ACTION,
  SET_LIBRARIES_LIST_ACTION,
  START_LOADING_LIBRARIES_DATA_ACTION,
  STOP_LOADING_LIBRARIES_DATA_ACTION,
} from "./actions";
import {LibrariesListActionType, LibrariesListStorageType} from "./types";

export const initialState: LibrariesListStorageType = {
  libraries: [],
  librariesList: [],
  isLoading: false,
};

export const LIBRARIES_LIST_REDUCER_NAME = "LIBRARIES_LIST_REDUCER_NAME";

export const librariesListReducer = (
  state: LibrariesListStorageType = initialState,
  {type, payload}: LibrariesListActionType
) => {
  switch (type) {
    case SET_LIBRARIES_DATA_ACTION:
      return {...state, libraries: payload};

    case SET_LIBRARIES_LIST_ACTION:
      return {...state, librariesList: payload};

    case START_LOADING_LIBRARIES_DATA_ACTION:
      return {...state, isLoading: true};

    case STOP_LOADING_LIBRARIES_DATA_ACTION:
      return {...state, isLoading: false};

    default:
      return state;
  }
};
