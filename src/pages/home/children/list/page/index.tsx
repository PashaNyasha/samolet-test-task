import React, {useCallback} from "react";
import {connect} from "react-redux";
import {ReduxStorageType} from "../../../../../_types/redux-storage-type";
import {LibrariesListItemType} from "../_redux/library-list-module";
import {
  getLibrariesListSelector,
  isLibrariesListLoadingSelector,
} from "../_redux/library-list-module/selectors";
import {List} from "antd";
import {LibrariesListItem} from "./_components/libraries-list-item";
import {useRoute} from "react-router5";
import {LIBRARY_INFO_PAGE_NODE} from "../../../_constants/page-nodes";
import {getLibraryInfoActionSaga} from "./children/_redux/library-info-module";
import {AdvancedActionType} from "../../../../../_types/actions";

type PropsType = {
  libraries: Array<LibrariesListItemType>;
  isLoading: boolean;
  onGetLibraryInfo: AdvancedActionType<number>;
};

export const WrappedComponent = ({
  libraries,
  isLoading,
  onGetLibraryInfo,
}: PropsType) => {
  const {router} = useRoute();

  const handleChangeRoute = useCallback(
    (order: number) => {
      router.navigate(LIBRARY_INFO_PAGE_NODE, {order});
      onGetLibraryInfo(order);
    },
    [onGetLibraryInfo, router]
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
};

const mapStateToProps = (state: ReduxStorageType) => ({
  libraries: getLibrariesListSelector(state),
  isLoading: isLibrariesListLoadingSelector(state),
});

const mapDispatchToProps = {
  onGetLibraryInfo: getLibraryInfoActionSaga,
};

export const ConnectedLibrariesPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedComponent);
