import { LIBRARY_INFO_ROUTE } from "./page/children/page/_components/library-info/route";

export const TABLE_ROUTE = {
  name: "table",
  path: "/table",
  children: [LIBRARY_INFO_ROUTE],
};
