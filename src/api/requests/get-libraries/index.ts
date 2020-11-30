import {ENDPOINT_LIBRARIES_LIST} from "../../endpoints/get-libraries-list";
import {request} from "../../request";

export const getLibrariesRequest = (): Promise<any> =>
  request({endpoint: ENDPOINT_LIBRARIES_LIST});
