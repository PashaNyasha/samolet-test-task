import React, {useCallback} from "react";
import {connect} from "react-redux";
import {ReduxStorageType} from "../../../../../_types/redux-storage-type";
import {
  LibrariesListItemType,
  LibrarySortType,
  sortLibrariesDataActionSaga,
} from "../_redux/library-list-module";
import {
  getLibrariesListSelector,
  getSortByLibrariesCountSelector,
  getSortByRegionStatusSelector,
} from "../_redux/library-list-module/selectors";
import {List} from "antd";
import {LibrariesListItem} from "./_components/libraries-list-item";
import {useRoute} from "react-router5";
import {LIBRARY_INFO_PAGE_NODE} from "../../../_constants/page-nodes";
import {getLibraryInfoActionSaga} from "./children/_redux/library-info-module";
import {AdvancedActionType} from "../../../../../_types/actions";

type PropsType = {
  libraries: Array<LibrariesListItemType>;
  sortByRegion: LibrarySortType;
  sortByLibrariesCount: LibrarySortType;
  onGetLibraryInfo: AdvancedActionType<number>;
  onSort: AdvancedActionType<LibrarySortType>;
};

export const WrappedComponent = ({
  libraries,
  sortByRegion,
  sortByLibrariesCount,
  onGetLibraryInfo,
  onSort,
}: PropsType) => {
  const {router} = useRoute();

  const handleChangeRoute = useCallback(
    (order: number) => {
      router.navigate(LIBRARY_INFO_PAGE_NODE, {order});
      onGetLibraryInfo(order);
    },
    [onGetLibraryInfo, router]
  );

  const handleSortByRegion = useCallback(() => {
    onSort(sortByRegion);
  }, [onSort, sortByRegion]);

  const handleSortByLibrariesCount = useCallback(() => {
    onSort(sortByLibrariesCount);
  }, [onSort, sortByLibrariesCount]);

  return (
    <>
      <button onClick={handleSortByRegion}>Сортировать по региону</button>
      <button onClick={handleSortByLibrariesCount}>
        Сортировать по кол-ву библиотек
      </button>

      <List
        dataSource={libraries}
        loading={true}
        renderItem={({librariesCount, territory, order}) => (
          <LibrariesListItem
            librariesCount={librariesCount}
            territory={territory}
            order={order}
            onChangeRoute={handleChangeRoute}
          />
        )}
      />
    </>
  );
};

const mapStateToProps = (state: ReduxStorageType) => ({
  libraries: getLibrariesListSelector(state),
  sortByRegion: getSortByRegionStatusSelector(state),
  sortByLibrariesCount: getSortByLibrariesCountSelector(state),
});

const mapDispatchToProps = {
  onGetLibraryInfo: getLibraryInfoActionSaga,
  onSort: sortLibrariesDataActionSaga,
};

export const ConnectedLibrariesPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedComponent);
