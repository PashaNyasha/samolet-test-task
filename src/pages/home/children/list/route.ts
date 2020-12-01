import { LIBRARY_INFO_ROUTE } from "./page/children/page/_components/library-info/route";

export const TABLE_ROUTE = {
  name: "list",
  path: "/list",
  children: [LIBRARY_INFO_ROUTE],
};
