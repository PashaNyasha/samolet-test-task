import {LibrariesDataType} from "../../../../../../../_redux/library-list-module";
import { LibraryInfoType } from "../../../types";

type ParamsType = {
  library: LibrariesDataType;
};

export const reformatLibraryInfo = ({library}: ParamsType): Array<LibraryInfoType> =>
  Object.entries(library).map(([name, value]) => ({
    name,
    value: String(value),
  }));
