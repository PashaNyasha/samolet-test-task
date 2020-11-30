import {TABLE_ROUTE} from "./pages/home/children/table/route";
import {MAIN_PAGE_NODE} from "./pages/home/_constants/page-nodes";

export const HOME_ROUTE = {
  name: MAIN_PAGE_NODE,
  path: "/library",
  children: [TABLE_ROUTE],
  onActivate: () => console.log('ACTIVE')
};
