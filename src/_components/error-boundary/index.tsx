import React, {Component, ReactNode} from "react";
import {connect} from "react-redux";
import {setIsAppCrashedAction} from "../../_reducer/app-module";
import {isAppCrashedSelector} from "../../_reducer/app-module/selectors";
import {ReduxStorageType} from "../../_types/redux-storage-type";
import { CrashedApp } from "../crashed-app";

type PropsType = {
  isCrashed: boolean;
  onSetIsAppCrashed: () => void;
  children?: ReactNode;
};

export class WrappedComponent extends Component<PropsType> {
  componentDidCatch() {
    this.props.onSetIsAppCrashed();
  }

  render() {
    const {isCrashed, children} = this.props;
    return <>{isCrashed ? <CrashedApp /> : children}</>;
  }
}

const mapStateToProps = (state: ReduxStorageType) => ({
  isCrashed: isAppCrashedSelector(state),
});

const mapDispatchToProps = {
  onSetIsAppCrashed: setIsAppCrashedAction,
};

export const ConnectedErrorBoundary = connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedComponent);
