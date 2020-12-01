import React from "react";
import {LibrariesListPage} from "../children/list";
import { ConnectedLibraryInfo } from "../children/list/page/children/page/_components/library-info";
import {
  LIBRARY_INFO_PAGE_NODE,
  LIST_PAGE_NODE,
} from "../_constants/page-nodes";

type ParamsType = {
  routeName: string;
};

export const checkRoutes = ({routeName}: ParamsType): JSX.Element => {
  switch (routeName) {
    case LIST_PAGE_NODE:
      return <LibrariesListPage />;

    case LIBRARY_INFO_PAGE_NODE:
      return <ConnectedLibraryInfo />;

    default:
      return <div className="">Hello</div>;
  }
};
