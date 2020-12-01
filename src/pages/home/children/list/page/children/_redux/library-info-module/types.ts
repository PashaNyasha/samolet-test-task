import {LibrariesDataType} from "../../../../_redux/library-list-module";

export type LibraryInfoType = {
  name: string;
  value: string;
};

export type LibraryInfoStorageType = {
  library: Array<LibraryInfoType>;
};

export type LibraryInfoActionType = {
  type: string;
  payload?: LibrariesDataType;
};
