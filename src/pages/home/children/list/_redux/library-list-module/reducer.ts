import {
  SET_LIBRARIES_DATA_ACTION,
  SET_LIBRARIES_LIST_ACTION,
} from "./actions";
import {LibrariesListActionType, LibrariesListStorageType} from "./types";

export const initialState: LibrariesListStorageType = {
  libraries: [],
  librariesList: [],
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

    default:
      return state;
  }
};
