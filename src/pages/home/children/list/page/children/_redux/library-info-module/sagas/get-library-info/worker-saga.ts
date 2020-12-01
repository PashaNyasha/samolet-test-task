import {put, select} from "redux-saga/effects";
import {LibrariesDataType, stopLoadingLibrariesDataAction} from "../../../../../../_redux/library-list-module";
import {getLibrariesDatSelector} from "../../../../../../_redux/library-list-module/selectors";
import {
  setLibraryInfoAction,
  startLoadingLibraryInfoAction,
} from "../../actions";
import { reformatLibraryInfo } from "./_utils/reformat-library-info";

export function* getLibraryInfoWorkerSaga(order: number) {
  yield put(startLoadingLibraryInfoAction());

  const libraries: Array<LibrariesDataType> = yield select(
    getLibrariesDatSelector
  );

  const library = libraries.find(({order: libOrder}) => libOrder === order);


  if (library) {
  const reformatted = reformatLibraryInfo({ library })

  yield put(setLibraryInfoAction(reformatted));
  }

  yield put(stopLoadingLibrariesDataAction());
}
