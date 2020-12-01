import {LibrariesListStorageType} from "../pages/home/children/list/_redux/library-list-module/types";
import {LIBRARIES_LIST_REDUCER_NAME} from "../pages/home/children/list/_redux/library-list-module/reducer";
import { LibraryInfoStorageType } from "../pages/home/children/list/page/children/_redux/library-info-module/types";
import { LIBRARY_INFO_REDUCER_NAME } from "../pages/home/children/list/page/children/_redux/library-info-module/reducer";

export type ReduxStorageType = {
  [LIBRARIES_LIST_REDUCER_NAME]: LibrariesListStorageType;
  [LIBRARY_INFO_REDUCER_NAME]: LibraryInfoStorageType;
};
