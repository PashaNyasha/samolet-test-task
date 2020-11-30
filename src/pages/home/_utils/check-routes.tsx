import React from "react";
import {LibrariesTablePage} from "../children/table";
import {TABLE_PAGE_NODE} from "../_constants/page-nodes";

type ParamsType = {
  routeName: string;
};

export const checkRoutes = ({routeName}: ParamsType): JSX.Element => {
  switch (routeName) {
    case TABLE_PAGE_NODE:
      return <LibrariesTablePage />;

    default:
      return <div className="">Hello</div>;
  }
};
