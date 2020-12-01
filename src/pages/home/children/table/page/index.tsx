import React, {memo, useCallback} from "react";
import {connect} from "react-redux";
import {ReduxStorageType} from "../../../../../_types/redux-storage-type";
import {LibrariesTableItemType} from "../_redux/library-table-module";
import {
  getLibrariesTableSelector,
  isLibrariesTableLoadingSelector,
} from "../_redux/library-table-module/selectors";
import {List} from "antd";
import {LibrariesListItem} from "./_components/libraries-list-item";
import {useRoute} from "react-router5";
import {LIBRARY_INFO_PAGE_NODE} from "../../../_constants/page-nodes";

type PropsType = {
  libraries: Array<LibrariesTableItemType>;
  isLoading: boolean;
};

export const WrappedComponent = memo(({libraries, isLoading}: PropsType) => {
  const {router} = useRoute();

  const handleChangeRoute = useCallback(
    (order: number) => {
      router.navigate(LIBRARY_INFO_PAGE_NODE, {order});
    },
    [router]
  );

  return (
    <List
      dataSource={libraries}
      loading={isLoading}
      renderItem={({librariesCount, territory, order}) => (
        <LibrariesListItem
          librariesCount={librariesCount}
          territory={territory}
          order={order}
          onChangeRoute={handleChangeRoute}
        />
      )}
    />
  );
});

const mapStateToProps = (state: ReduxStorageType) => ({
  libraries: getLibrariesTableSelector(state),
  isLoading: isLibrariesTableLoadingSelector(state),
});

export const ConnectedLibrariesPage = connect(mapStateToProps)(
  WrappedComponent
);
