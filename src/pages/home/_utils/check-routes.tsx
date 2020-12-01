import React from "react";
import {LibrariesTablePage} from "../children/table";
import { LibraryInfoPage } from "../children/table/page/children/library-info";
import {LIBRARY_INFO_PAGE_NODE, TABLE_PAGE_NODE} from "../_constants/page-nodes";

type ParamsType = {
  routeName: string;
};

export const checkRoutes = ({routeName}: ParamsType): JSX.Element => {
  switch (routeName) {
    case TABLE_PAGE_NODE:
      return <LibrariesTablePage />;

    case LIBRARY_INFO_PAGE_NODE:
      return <LibraryInfoPage />

    default:
      return <div className="">Hello</div>;
  }
};
