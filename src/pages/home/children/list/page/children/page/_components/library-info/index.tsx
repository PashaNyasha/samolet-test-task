import {Button, Typography} from "antd";
import React, { useCallback } from "react";
import {connect} from "react-redux";
import {ReduxStorageType} from "../../../../../../../../../_types/redux-storage-type";
import {LibraryInfoType} from "../../../_redux/library-info-module";
import {
  getLibraryInfoSelector,
  isLibraryInfoLoadingSelector,
} from "../../../_redux/library-info-module/selectors";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import { useRoute } from "react-router5";
import { TABLE_PAGE_NODE } from "../../../../../../../_constants/page-nodes";

const CLASS_NAME = "Library-info";
const cn = classnames.bind(styles);

type PropsType = {
  library: Array<LibraryInfoType>;
  isLoading: boolean;
};

export const WrappedComponent = ({library, isLoading}: PropsType) => {
  const {router: { navigate }} = useRoute()
  const handleGoBack = useCallback(() => navigate(TABLE_PAGE_NODE), [navigate]);
  
  return (
    <div className={cn(CLASS_NAME)}>
      <Button onClick={handleGoBack}>Назад</Button>
      {library.map(({name, value}) => (
        <div key={name} className={cn(`${CLASS_NAME}__item`)}>
          <Typography.Title level={4}>{name}:</Typography.Title>
          <div className={cn(`${CLASS_NAME}__item-value`)}>
            <Typography.Text>{value}</Typography.Text>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: ReduxStorageType) => ({
  library: getLibraryInfoSelector(state),
  isLoading: isLibraryInfoLoadingSelector(state),
});

export const ConnectedLibraryInfo = connect(mapStateToProps)(WrappedComponent);
