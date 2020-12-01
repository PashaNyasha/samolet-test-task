import React from "react";
import {LibrariesListPage} from "../children/list";
import {LibraryInfoPage} from "../children/list/page/children/page";
import {
  LIBRARY_INFO_PAGE_NODE,
  TABLE_PAGE_NODE,
} from "../_constants/page-nodes";

type ParamsType = {
  routeName: string;
};

export const checkRoutes = ({routeName}: ParamsType): JSX.Element => {
  switch (routeName) {
    case TABLE_PAGE_NODE:
      return <LibrariesListPage />;

    case LIBRARY_INFO_PAGE_NODE:
      return <LibraryInfoPage />;

    default:
      return <div className="">Hello</div>;
  }
};
