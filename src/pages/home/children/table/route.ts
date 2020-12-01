import { LIBRARY_INFO_ROUTE } from "./page/children/library-info/route";

export const TABLE_ROUTE = {
  name: "table",
  path: "/table",
  children: [LIBRARY_INFO_ROUTE],
};
