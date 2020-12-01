import {
  SET_LIBRARIES_DATA_ACTION,
  SET_LIBRARIES_LIST_ACTION,
  SET_SORT_BY_REGION_STATUS_ACTION,
  SET_SORT_BY_LIBRARIES_COUNT_STATUS_ACTION,
} from "./actions";
import {
  DestinationType,
  LibrariesListActionType,
  LibrariesListStorageType,
} from "./types";

export const initialState: LibrariesListStorageType = {
  libraries: [],
  librariesList: [],
  sortByRegion: {
    destination: DestinationType.ASC,
    isTerritory: true,
  },
  sortByLibrariesCount: {
    destination: DestinationType.ASC,
    isTerritory: false,
  },
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

    case SET_SORT_BY_REGION_STATUS_ACTION:
      return {...state, sortByRegion: payload};

    case SET_SORT_BY_LIBRARIES_COUNT_STATUS_ACTION:
      return {...state, sortByLibrariesCount: payload};

    default:
      return state;
  }
};
