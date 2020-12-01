import {batchActions} from "redux-batched-actions";
import {put, select} from "redux-saga/effects";
import {
  setLibrariesListAction,
  setSortByLibrariesCountStatusAction,
  setSortByRegionStatusAction,
} from "../../actions";
import {getLibrariesListSelector} from "../../selectors";
import {
  DestinationType,
  LibrariesListItemType,
  LibrarySortType,
} from "../../types";

export function* sortLibrariesDataWorkerSaga({
  destination,
  isTerritory,
}: LibrarySortType) {
  const librariesData: Array<LibrariesListItemType> = yield select(
    getLibrariesListSelector
  );

  const key = isTerritory ? "territory" : "librariesCount";

  const clone = [...librariesData];

  const isAsc = destination === DestinationType.ASC;

  const newDestination = isAsc ? DestinationType.DESC : DestinationType.ASC;

  let sorted: Array<LibrariesListItemType>;

  if (isAsc) {
    sorted = clone.sort((a, b) => (a[key] > b[key] ? -1 : 1));
  } else {
    sorted = clone.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  }

  const sortParams: LibrarySortType = {
    destination: newDestination,
    isTerritory,
  };

  const action = isTerritory
    ? setSortByRegionStatusAction
    : setSortByLibrariesCountStatusAction;

  yield put(batchActions([setLibrariesListAction(sorted), action(sortParams)]));
}
