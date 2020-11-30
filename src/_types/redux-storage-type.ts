import {LibrariesTableStorageType} from "../pages/home/children/table/_reducer/library-table-module/types";
import {LIBRARIES_TABLE_REDUCER_NAME} from "../pages/home/children/table/_reducer/library-table-module/reducer";

export type ReduxStorageType = {
  [LIBRARIES_TABLE_REDUCER_NAME]: LibrariesTableStorageType;
};
