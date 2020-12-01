import React, {useCallback} from "react";
import {connect} from "react-redux";
import {ReduxStorageType} from "../../../../../_types/redux-storage-type";
import {LibrariesListItemType} from "../_redux/library-list-module";
import {getLibrariesListSelector} from "../_redux/library-list-module/selectors";
import {List} from "antd";
import {LibrariesListItem} from "./_components/libraries-list-item";
import {useRoute} from "react-router5";
import {LIBRARY_INFO_PAGE_NODE} from "../../../_constants/page-nodes";
import {getLibraryInfoActionSaga} from "./children/_redux/library-info-module";
import {AdvancedActionType} from "../../../../../_types/actions";

type PropsType = {
  libraries: Array<LibrariesListItemType>;
  onGetLibraryInfo: AdvancedActionType<number>;
};

export const WrappedComponent = ({libraries, onGetLibraryInfo}: PropsType) => {
  const {router} = useRoute();

  const handleChangeRoute = useCallback(
    (order: number) => {
      router.navigate(LIBRARY_INFO_PAGE_NODE, {order});
      onGetLibraryInfo(order);
    },
    [onGetLibraryInfo, router]
  );

  return (
    <>
    <button>Назад</button>
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
});

const mapDispatchToProps = {
  onGetLibraryInfo: getLibraryInfoActionSaga,
};

export const ConnectedLibrariesPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedComponent);
