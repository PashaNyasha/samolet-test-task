import {
  SET_LIBRARIES_DATA_ACTION,
  START_LOADING_LIBRARIES_DATA_ACTION,
  STOP_LOADING_LIBRARIES_DATA_ACTION,
} from "./actions";
import {LibrariesTableActionType, LibrariesTableStorageType} from "./types";

export const initialState: LibrariesTableStorageType = {
  libraries: [],
  isLoading: false,
};

export const LIBRARIES_TABLE_REDUCER_NAME = 'LIBRARIES_TABLE_REDUCER_NAME';

export const librariesTableReducer = (
  state: LibrariesTableStorageType = initialState,
  {type, payload}: LibrariesTableActionType
) => {
  switch (type) {
    case SET_LIBRARIES_DATA_ACTION:
      return {...state, libraries: payload};

    case START_LOADING_LIBRARIES_DATA_ACTION:
      return {...state, isLoading: true};

    case STOP_LOADING_LIBRARIES_DATA_ACTION:
      return {...state, isLoading: false};

    default:
      return state;
  }
};
