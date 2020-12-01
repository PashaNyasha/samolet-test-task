import {
  SET_LIBRARY_INFO_ACTION,
  START_LOADING_LIBRARY_INFO_ACTION,
  STOP_LOADING_LIBRARY_INFO_ACTION,
} from "./actions";
import {LibraryInfoActionType, LibraryInfoStorageType} from "./types";

export const initialState: LibraryInfoStorageType = {
  library: [],
  isLoading: false,
};

export const LIBRARY_INFO_REDUCER_NAME = "LIBRARY_INFO_REDUCER_NAME";

export const libraryInfoReducer = (
  state: LibraryInfoStorageType = initialState,
  {type, payload}: LibraryInfoActionType
) => {
  switch (type) {
    case SET_LIBRARY_INFO_ACTION:
      return {...state, library: payload};

    case START_LOADING_LIBRARY_INFO_ACTION:
      return {...state, isLoading: true};

    case STOP_LOADING_LIBRARY_INFO_ACTION:
      return {...state, isLoading: false};

    default:
      return state;
  }
};
