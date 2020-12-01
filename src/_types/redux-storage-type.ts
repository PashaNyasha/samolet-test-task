import {LibrariesTableStorageType} from "../pages/home/children/table/_redux/library-table-module/types";
import {LIBRARIES_TABLE_REDUCER_NAME} from "../pages/home/children/table/_redux/library-table-module/reducer";

export type ReduxStorageType = {
  [LIBRARIES_TABLE_REDUCER_NAME]: LibrariesTableStorageType;
};
